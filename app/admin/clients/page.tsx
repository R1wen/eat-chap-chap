"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { UserPlus, Search, Mail, Phone, History, Edit, Trash2, X, CheckCircle2, Loader2, XCircle, ShoppingBag, Calendar } from "lucide-react";

export default function ClientsPage() {
    const [clients, setClients] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [modal, setModal] = useState<null | "add" | "edit" | "delete" | "history">(null);
    const [editTarget, setEditTarget] = useState<any>(null);
    const [formData, setFormData] = useState({ nom: "", telephone: "", email: "" });
    const [toast, setToast] = useState<{ msg: string; type: "ok" | "err" } | null>(null);
    const [history, setHistory] = useState<any[]>([]);

    useEffect(() => { loadClients(); }, []);

    const showToast = (msg: string, type: "ok" | "err") => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3000);
    };

    const loadClients = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/clients");
            setClients(await res.json());
        } catch { showToast("Erreur de chargement", "err"); }
        setLoading(false);
    };

    const openAdd = () => { setFormData({ nom: "", telephone: "", email: "" }); setEditTarget(null); setModal("add"); };
    const openEdit = (c: any) => { setEditTarget(c); setFormData({ nom: c.nom, telephone: c.telephone || "", email: c.email || "" }); setModal("edit"); };
    const openDelete = (c: any) => { setEditTarget(c); setModal("delete"); };

    const openHistory = async (c: any) => {
        setEditTarget(c);
        setModal("history");
        try {
            const [cmdRes, resRes] = await Promise.all([
                fetch(`/api/commandes?clientId=${c.id_client}`),
                fetch(`/api/reservations?clientId=${c.id_client}`)
            ]);
            const cmds = await cmdRes.json().catch(() => []);
            const reservs = await resRes.json().catch(() => []);
            const combined = [
                ...(Array.isArray(cmds) ? cmds.map((o: any) => ({ type: "Commande", date: o.date_creation, desc: `${o.lignes?.length || 0} plat(s) • Table ${o.tables?.[0]?.numero || "TK"}`, id: o.id_commande })) : []),
                ...(Array.isArray(reservs) ? reservs.map((r: any) => ({ type: "Réservation", date: r.date_heure, desc: `${r.nb_personnes} pers. • ${r.statut}`, id: r.id_reservation })) : [])
            ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            setHistory(combined);
        } catch {
            setHistory([]);
        }
    };

    const closeModal = () => { setModal(null); setEditTarget(null); setFormData({ nom: "", telephone: "", email: "" }); setHistory([]); };

    const handleSave = async () => {
        if (!formData.nom.trim()) { showToast("Le nom est obligatoire", "err"); return; }
        setSaving(true);
        try {
            if (modal === "add") {
                const res = await fetch("/api/clients", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });
                if (res.ok) { await loadClients(); showToast(`${formData.nom} ajouté !`, "ok"); closeModal(); }
                else showToast("Erreur lors de la création", "err");
            } else if (modal === "edit" && editTarget) {
                const res = await fetch(`/api/clients/${editTarget.id_client}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });
                if (res.ok) { await loadClients(); showToast(`${formData.nom} mis à jour !`, "ok"); closeModal(); }
                else showToast("Erreur lors de la mise à jour", "err");
            }
        } catch { showToast("Erreur réseau", "err"); }
        setSaving(false);
    };

    const handleDelete = async () => {
        if (!editTarget) return;
        setSaving(true);
        try {
            const res = await fetch(`/api/clients/${editTarget.id_client}`, { method: "DELETE" });
            if (res.ok) { setClients(prev => prev.filter(c => c.id_client !== editTarget.id_client)); showToast(`${editTarget.nom} supprimé`, "ok"); closeModal(); }
            else showToast("Impossible de supprimer ce client", "err");
        } catch { showToast("Erreur réseau", "err"); }
        setSaving(false);
    };

    const filtered = clients.filter(c =>
        c.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.telephone?.includes(searchTerm)
    );

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background font-sans">
            <div className="ambient-glow" />
            <Header />

            {toast && (
                <div className={`fixed top-28 right-8 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl font-black text-sm animate-in slide-in-from-right ${toast.type === "ok" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                    {toast.type === "ok" ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    {toast.msg}
                </div>
            )}

            {/* Add/Edit Modal */}
            {(modal === "add" || modal === "edit") && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-secondary/40 backdrop-blur-sm p-4">
                    <div className="max-w-md w-full p-8 bg-white rounded-[32px] shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        <button onClick={closeModal} className="absolute top-6 right-6 p-2 text-muted hover:text-secondary rounded-xl hover:bg-secondary/5 transition-all"><X className="w-5 h-5" /></button>
                        <h3 className="text-3xl font-black text-secondary serif italic mb-8">
                            {modal === "add" ? "Nouveau" : "Modifier"} <span className="text-primary not-italic">Client</span>
                        </h3>
                        <div className="space-y-5">
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted mb-2 block">Nom complet *</label>
                                <input type="text" placeholder="Jean Dupont" className="w-full p-4 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary"
                                    value={formData.nom} onChange={e => setFormData({ ...formData, nom: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted mb-2 block">Téléphone</label>
                                <div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                                    <input type="tel" placeholder="+33 6 00 00 00 00" className="w-full pl-10 p-4 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary"
                                        value={formData.telephone} onChange={e => setFormData({ ...formData, telephone: e.target.value })} />
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted mb-2 block">Email</label>
                                <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                                    <input type="email" placeholder="client@email.com" className="w-full pl-10 p-4 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary"
                                        value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <button onClick={closeModal} className="flex-1 py-4 text-xs font-black uppercase tracking-widest text-muted hover:text-secondary transition-colors">Annuler</button>
                            <button onClick={handleSave} disabled={saving} className="flex-1 py-4 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-60">
                                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                                {modal === "add" ? "Ajouter" : "Enregistrer"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {modal === "delete" && editTarget && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-secondary/40 backdrop-blur-sm p-4">
                    <div className="max-w-md w-full p-8 bg-white rounded-[32px] shadow-2xl text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6"><Trash2 className="w-10 h-10 text-red-500" /></div>
                        <h3 className="text-2xl font-black text-secondary serif mb-2">Supprimer ce client ?</h3>
                        <p className="text-muted font-medium mb-8"><strong className="text-secondary">{editTarget.nom}</strong> et toutes ses données seront supprimés.</p>
                        <div className="flex gap-4">
                            <button onClick={closeModal} className="flex-1 py-4 text-xs font-black uppercase tracking-widest text-muted">Annuler</button>
                            <button onClick={handleDelete} disabled={saving} className="flex-1 py-4 bg-red-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all flex items-center justify-center gap-2 disabled:opacity-60">
                                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />} Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* History Modal */}
            {modal === "history" && editTarget && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-secondary/40 backdrop-blur-sm p-4">
                    <div className="max-w-lg w-full max-h-[80vh] bg-white rounded-[32px] shadow-2xl relative animate-in fade-in zoom-in duration-300 flex flex-col">
                        <div className="p-8 pb-0">
                            <button onClick={closeModal} className="absolute top-6 right-6 p-2 text-muted hover:text-secondary rounded-xl hover:bg-secondary/5 transition-all"><X className="w-5 h-5" /></button>
                            <h3 className="text-3xl font-black text-secondary serif italic mb-1">Historique</h3>
                            <p className="text-primary font-black text-sm uppercase tracking-widest mb-6">{editTarget.nom}</p>
                        </div>
                        <div className="flex-1 overflow-y-auto px-8 pb-8 space-y-3">
                            {history.length === 0 ? (
                                <div className="text-center py-12 opacity-30">
                                    <History className="w-12 h-12 mx-auto mb-3 text-muted" />
                                    <p className="font-black text-xs uppercase tracking-widest text-muted">Aucun historique</p>
                                </div>
                            ) : history.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-secondary/5 rounded-2xl">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.type === "Commande" ? "bg-primary/10" : "bg-blue-500/10"}`}>
                                        {item.type === "Commande" ? <ShoppingBag className="w-5 h-5 text-primary" /> : <Calendar className="w-5 h-5 text-blue-500" />}
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-black text-secondary text-sm">{item.type} #{item.id}</p>
                                        <p className="text-[10px] text-muted font-bold uppercase">{item.desc}</p>
                                    </div>
                                    <p className="text-[10px] font-black text-muted">{new Date(item.date).toLocaleDateString("fr-FR")}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-1">
                        <h2 className="text-5xl font-black text-secondary tracking-tighter serif italic">
                            Gestion <span className="text-primary not-italic">Clients</span>
                        </h2>
                        <p className="text-muted font-medium">Base de données clients et historique de fidélité.</p>
                    </div>
                    <button onClick={openAdd} className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30">
                        <UserPlus className="w-5 h-5" /> Nouveau Client
                    </button>
                </div>

                <div className="relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                    <input type="text" placeholder="Rechercher par nom, email ou téléphone..."
                        className="w-full pl-16 pr-6 py-5 bg-white border border-secondary/5 rounded-3xl outline-none focus:border-primary transition-all font-bold text-secondary text-base shadow-sm"
                        value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </div>

                <p className="text-xs font-black text-muted uppercase tracking-widest">{filtered.length} client{filtered.length !== 1 ? "s" : ""}</p>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => <div key={i} className="h-56 glass rounded-[32px] animate-pulse" />)}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((client) => (
                            <BentoCard key={client.id_client} className="group border-none shadow-xl bg-white/60 hover:scale-[1.02] transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-2xl serif italic">
                                        {client.nom[0]}
                                    </div>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => openEdit(client)} className="p-2 rounded-lg hover:bg-secondary/5 text-muted hover:text-secondary transition-all" title="Modifier"><Edit className="w-4 h-4" /></button>
                                        <button onClick={() => openDelete(client)} className="p-2 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-all" title="Supprimer"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                </div>

                                <h3 className="text-xl font-black text-secondary serif italic mb-2">{client.nom}</h3>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-muted">
                                        <Mail className="w-4 h-4 shrink-0" />
                                        <span className="truncate">{client.email || "Non renseigné"}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted">
                                        <Phone className="w-4 h-4 shrink-0" />
                                        {client.telephone || "Non renseigné"}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-secondary/5 mb-4">
                                    <div className="text-center">
                                        <div className="text-[9px] text-muted uppercase tracking-wider font-black mb-1">Commandes</div>
                                        <div className="text-2xl font-black text-secondary serif">{client._count?.commandes ?? "—"}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-[9px] text-muted uppercase tracking-wider font-black mb-1">Réservations</div>
                                        <div className="text-2xl font-black text-secondary serif">{client._count?.reservations ?? "—"}</div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => openHistory(client)}
                                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-secondary/5 hover:bg-secondary hover:text-white transition-all text-sm font-black text-muted uppercase tracking-widest"
                                >
                                    <History className="w-4 h-4" /> Voir l'historique
                                </button>
                            </BentoCard>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
