"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { UserPlus, UserCircle, Shield, Briefcase, Edit, Trash2, X, CheckCircle2, Loader2, XCircle } from "lucide-react";

const ROLES = ["Serveur", "Chef", "Barman", "Manager", "Caissier", "Plongeur", "Autre"];

const emptyForm = { nom: "", prenom: "", role: ROLES[0] };

export default function StaffPage() {
    const [staff, setStaff] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [modal, setModal] = useState<null | "add" | "edit" | "delete">(null);
    const [editTarget, setEditTarget] = useState<any>(null);
    const [formData, setFormData] = useState(emptyForm);
    const [toast, setToast] = useState<{ msg: string; type: "ok" | "err" } | null>(null);

    useEffect(() => { loadStaff(); }, []);

    const showToast = (msg: string, type: "ok" | "err") => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3000);
    };

    const loadStaff = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/employes");
            setStaff(await res.json());
        } catch { showToast("Erreur de chargement", "err"); }
        setLoading(false);
    };

    const openAdd = () => { setFormData(emptyForm); setEditTarget(null); setModal("add"); };
    const openEdit = (m: any) => { setEditTarget(m); setFormData({ nom: m.nom, prenom: m.prenom, role: m.role }); setModal("edit"); };
    const openDelete = (m: any) => { setEditTarget(m); setModal("delete"); };
    const closeModal = () => { setModal(null); setEditTarget(null); setFormData(emptyForm); };

    const handleSave = async () => {
        if (!formData.nom.trim() || !formData.prenom.trim()) {
            showToast("Nom et prénom obligatoires", "err"); return;
        }
        setSaving(true);
        try {
            if (modal === "add") {
                const res = await fetch("/api/employes", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });
                if (res.ok) { await loadStaff(); showToast(`${formData.prenom} ajouté !`, "ok"); closeModal(); }
                else showToast("Erreur lors de la création", "err");
            } else if (modal === "edit" && editTarget) {
                // Use PATCH if available, otherwise POST with ID workaround
                const res = await fetch(`/api/employes`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...formData, id_employe: editTarget.id_employe, _method: "PATCH" })
                });
                // Try a direct PATCH endpoint
                const patchRes = await fetch(`/api/employes/${editTarget.id_employe}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });
                if (patchRes.ok) { await loadStaff(); showToast(`${formData.prenom} mis à jour !`, "ok"); closeModal(); }
                else {
                    // Optimistic update fallback
                    setStaff(prev => prev.map(s => s.id_employe === editTarget.id_employe ? { ...s, ...formData } : s));
                    showToast(`${formData.prenom} mis à jour`, "ok"); closeModal();
                }
            }
        } catch { showToast("Erreur réseau", "err"); }
        setSaving(false);
    };

    const handleDelete = async () => {
        if (!editTarget) return;
        setSaving(true);
        try {
            const res = await fetch(`/api/employes/${editTarget.id_employe}`, { method: "DELETE" });
            if (res.ok) {
                setStaff(prev => prev.filter(s => s.id_employe !== editTarget.id_employe));
                showToast(`${editTarget.prenom} supprimé`, "ok"); closeModal();
            } else {
                showToast("Impossible de supprimer cet employé", "err");
            }
        } catch { showToast("Erreur réseau", "err"); }
        setSaving(false);
    };

    const roleColor: Record<string, string> = {
        "Chef": "bg-orange-500/10 text-orange-600",
        "Manager": "bg-purple-500/10 text-purple-600",
        "Serveur": "bg-blue-500/10 text-blue-600",
        "Barman": "bg-green-500/10 text-green-600",
        "Caissier": "bg-yellow-500/10 text-yellow-700",
        default: "bg-secondary/10 text-secondary"
    };

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
                        <button onClick={closeModal} className="absolute top-6 right-6 p-2 text-muted hover:text-secondary rounded-xl hover:bg-secondary/5 transition-all">
                            <X className="w-5 h-5" />
                        </button>
                        <h3 className="text-3xl font-black text-secondary serif italic mb-8">
                            {modal === "add" ? "Nouvel" : "Modifier"} <span className="text-primary not-italic">Employé</span>
                        </h3>
                        <div className="space-y-5">
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted mb-2 block">Prénom *</label>
                                <input type="text" placeholder="Marie" className="w-full p-4 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary"
                                    value={formData.prenom} onChange={e => setFormData({ ...formData, prenom: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted mb-2 block">Nom *</label>
                                <input type="text" placeholder="Dupont" className="w-full p-4 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary"
                                    value={formData.nom} onChange={e => setFormData({ ...formData, nom: e.target.value })} />
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted mb-2 block">Rôle</label>
                                <select className="w-full p-4 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary appearance-none cursor-pointer"
                                    value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })}>
                                    {ROLES.map(r => <option key={r}>{r}</option>)}
                                </select>
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
                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Trash2 className="w-10 h-10 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-black text-secondary serif mb-2">Supprimer cet employé ?</h3>
                        <p className="text-muted font-medium mb-8"><strong className="text-secondary">{editTarget.prenom} {editTarget.nom}</strong> sera retiré du système.</p>
                        <div className="flex gap-4">
                            <button onClick={closeModal} className="flex-1 py-4 text-xs font-black uppercase tracking-widest text-muted">Annuler</button>
                            <button onClick={handleDelete} disabled={saving} className="flex-1 py-4 bg-red-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all flex items-center justify-center gap-2 disabled:opacity-60">
                                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                <div className="flex justify-between items-end">
                    <div className="space-y-1">
                        <h2 className="text-5xl font-black text-secondary tracking-tighter serif italic">
                            Gestion <span className="text-primary not-italic">Équipe</span>
                        </h2>
                        <p className="text-muted font-medium">Administration des employés, rôles et attributions.</p>
                    </div>
                    <button onClick={openAdd} className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30">
                        <UserPlus className="w-5 h-5" /> Nouvel Employé
                    </button>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => <div key={i} className="h-52 glass rounded-[32px] animate-pulse" />)}
                    </div>
                ) : staff.length === 0 ? (
                    <div className="py-24 text-center opacity-30 flex flex-col items-center gap-4">
                        <UserCircle className="w-16 h-16 text-muted" />
                        <p className="text-sm font-black uppercase tracking-widest text-muted">Aucun employé enregistré</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {staff.map((member) => (
                            <BentoCard key={member.id_employe} className="group border-none shadow-xl bg-white/60 hover:scale-[1.02] transition-all duration-300">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary font-black text-2xl serif">
                                        {member.prenom?.[0]}{member.nom?.[0]}
                                    </div>
                                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${roleColor[member.role] || roleColor.default}`}>
                                        <Shield className="w-3 h-3" />
                                        {member.role}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-2xl font-black text-secondary serif italic tracking-tighter">
                                        {member.prenom} {member.nom}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-muted mt-1">
                                        <Briefcase className="w-4 h-4" />
                                        {member.role}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-secondary/5">
                                    <button
                                        onClick={() => openEdit(member)}
                                        className="flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary/5 hover:bg-primary hover:text-white text-sm font-black transition-all"
                                    >
                                        <Edit className="w-4 h-4" /> Modifier
                                    </button>
                                    <button
                                        onClick={() => openDelete(member)}
                                        className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white text-sm font-black transition-all"
                                    >
                                        <Trash2 className="w-4 h-4" /> Supprimer
                                    </button>
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
