"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
    Plus,
    Search,
    Edit,
    Trash2,
    CheckCircle2,
    XCircle,
    Utensils,
    DollarSign,
    Tag,
    X,
    Loader2
} from "lucide-react";

function Activity(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    );
}

interface PlatFormState {
    libelle: string;
    prix_actuel: string;
    disponible: boolean;
    id_categorie: string;
}

const emptyForm: PlatFormState = { libelle: "", prix_actuel: "", disponible: true, id_categorie: "" };

export default function MenuManagementPage() {
    const [plates, setPlates] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [saving, setSaving] = useState(false);

    // Modal state
    const [modal, setModal] = useState<null | "add" | "edit" | "delete">(null);
    const [editTarget, setEditTarget] = useState<any>(null);
    const [formData, setFormData] = useState<PlatFormState>(emptyForm);
    const [toast, setToast] = useState<{ msg: string; type: "ok" | "err" } | null>(null);

    useEffect(() => {
        loadData();
    }, []);

    const showToast = (msg: string, type: "ok" | "err") => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3000);
    };

    const loadData = async () => {
        try {
            const [pRes, cRes] = await Promise.all([
                fetch("/api/plats"),
                fetch("/api/categories")
            ]);
            setPlates(await pRes.json());
            setCategories(await cRes.json());
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const toggleAvailability = async (plat: any) => {
        try {
            const res = await fetch(`/api/plats/${plat.id_plat}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ disponible: !plat.disponible })
            });
            if (res.ok) {
                setPlates(prev => prev.map(p => p.id_plat === plat.id_plat ? { ...p, disponible: !p.disponible } : p));
                showToast(`${plat.libelle} ${!plat.disponible ? "disponible" : "désactivé"}`, "ok");
            }
        } catch (error) {
            showToast("Erreur lors de la mise à jour", "err");
        }
    };

    const openAdd = () => {
        setFormData(emptyForm);
        setEditTarget(null);
        setModal("add");
    };

    const openEdit = (plat: any) => {
        setEditTarget(plat);
        setFormData({
            libelle: plat.libelle,
            prix_actuel: String(plat.prix_actuel),
            disponible: plat.disponible,
            id_categorie: String(plat.id_categorie || "")
        });
        setModal("edit");
    };

    const openDelete = (plat: any) => {
        setEditTarget(plat);
        setModal("delete");
    };

    const closeModal = () => {
        setModal(null);
        setEditTarget(null);
        setFormData(emptyForm);
    };

    const handleSave = async () => {
        if (!formData.libelle.trim() || !formData.prix_actuel) {
            showToast("Libellé et prix sont obligatoires", "err");
            return;
        }
        setSaving(true);
        try {
            const payload = {
                libelle: formData.libelle.trim(),
                prix_actuel: parseFloat(formData.prix_actuel),
                disponible: formData.disponible,
                id_categorie: formData.id_categorie ? parseInt(formData.id_categorie) : undefined
            };

            if (modal === "add") {
                const res = await fetch("/api/plats", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });
                if (res.ok) {
                    await loadData();
                    showToast(`${formData.libelle} ajouté !`, "ok");
                    closeModal();
                } else {
                    showToast("Erreur lors de la création", "err");
                }
            } else if (modal === "edit" && editTarget) {
                const res = await fetch(`/api/plats/${editTarget.id_plat}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });
                if (res.ok) {
                    await loadData();
                    showToast(`${formData.libelle} mis à jour !`, "ok");
                    closeModal();
                } else {
                    showToast("Erreur lors de la mise à jour", "err");
                }
            }
        } catch {
            showToast("Erreur réseau", "err");
        }
        setSaving(false);
    };

    const handleDelete = async () => {
        if (!editTarget) return;
        setSaving(true);
        try {
            const res = await fetch(`/api/plats/${editTarget.id_plat}`, { method: "DELETE" });
            if (res.ok) {
                setPlates(prev => prev.filter(p => p.id_plat !== editTarget.id_plat));
                showToast(`${editTarget.libelle} supprimé`, "ok");
                closeModal();
            } else {
                showToast("Erreur lors de la suppression", "err");
            }
        } catch {
            showToast("Erreur réseau", "err");
        }
        setSaving(false);
    };

    const filteredPlates = plates.filter(p => {
        const matchesSearch = p.libelle.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || p.categorie?.libelle === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background font-sans">
            <div className="ambient-glow" />
            <Header />

            {/* Toast */}
            {toast && (
                <div className={`fixed top-28 right-8 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl font-black text-sm animate-in slide-in-from-right transition-all ${toast.type === "ok" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                    {toast.type === "ok" ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    {toast.msg}
                </div>
            )}

            {/* Add/Edit Modal */}
            {(modal === "add" || modal === "edit") && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-secondary/40 backdrop-blur-sm p-4">
                    <div className="max-w-lg w-full p-8 bg-white rounded-[32px] shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        <button onClick={closeModal} className="absolute top-6 right-6 p-2 text-muted hover:text-secondary transition-colors rounded-xl hover:bg-secondary/5">
                            <X className="w-6 h-6" />
                        </button>
                        <h3 className="text-3xl font-black text-secondary serif italic mb-2">
                            {modal === "add" ? "Nouveau" : "Modifier"} <span className="text-primary not-italic">Plat</span>
                        </h3>
                        <p className="text-muted text-xs font-bold uppercase tracking-widest mb-8">
                            {modal === "add" ? "Ajouter un plat à la carte" : `Modification de ${editTarget?.libelle}`}
                        </p>
                        <div className="space-y-5">
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1 mb-2 block">Nom du plat *</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Entrecôte grillée"
                                    className="w-full p-4 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary"
                                    value={formData.libelle}
                                    onChange={e => setFormData({ ...formData, libelle: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1 mb-2 block">Prix (€) *</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                                    <input
                                        type="number"
                                        step="0.01"
                                        placeholder="0.00"
                                        className="w-full pl-10 pr-4 p-4 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary"
                                        value={formData.prix_actuel}
                                        onChange={e => setFormData({ ...formData, prix_actuel: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1 mb-2 block">Catégorie</label>
                                <select
                                    className="w-full p-4 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary appearance-none cursor-pointer"
                                    value={formData.id_categorie}
                                    onChange={e => setFormData({ ...formData, id_categorie: e.target.value })}
                                >
                                    <option value="">-- Sans catégorie --</option>
                                    {categories.map(cat => (
                                        <option key={cat.id_categorie} value={cat.id_categorie}>{cat.libelle}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-2xl border border-secondary/10">
                                <span className="font-black text-secondary text-sm">Disponible immédiatement</span>
                                <button
                                    onClick={() => setFormData({ ...formData, disponible: !formData.disponible })}
                                    className={`relative w-12 h-6 rounded-full transition-all ${formData.disponible ? "bg-green-500" : "bg-secondary/20"}`}
                                >
                                    <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${formData.disponible ? "left-6.5 translate-x-0.5" : "left-0.5"}`} />
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <button onClick={closeModal} className="flex-1 py-4 text-xs font-black uppercase tracking-widest text-muted hover:text-secondary transition-colors">
                                Annuler
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={saving}
                                className="flex-1 py-4 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                            >
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
                        <h3 className="text-2xl font-black text-secondary serif mb-2">Supprimer ce plat ?</h3>
                        <p className="text-muted font-medium mb-8">
                            <strong className="text-secondary">{editTarget.libelle}</strong> sera définitivement retiré de la carte. Cette action est irréversible.
                        </p>
                        <div className="flex gap-4">
                            <button onClick={closeModal} className="flex-1 py-4 text-xs font-black uppercase tracking-widest text-muted hover:text-secondary transition-colors">
                                Annuler
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={saving}
                                className="flex-1 py-4 bg-red-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                            >
                                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-1">
                        <h2 className="text-6xl font-black text-secondary tracking-tighter serif italic leading-none">
                            Carte & <span className="text-primary not-italic">Menu</span>
                        </h2>
                        <p className="text-muted font-medium text-lg">Gérez vos plats, tarifs et disponibilités en temps réel.</p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={openAdd}
                            className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30"
                        >
                            <Plus className="w-5 h-5" /> Ajouter un Plat
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar Filters */}
                    <div className="lg:col-span-3 space-y-6">
                        <BentoCard className="!p-8 border-none shadow-xl bg-white/60">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-muted mb-6">Catégories</h3>
                            <div className="space-y-2">
                                <button
                                    onClick={() => setSelectedCategory("All")}
                                    className={`w-full text-left px-5 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${selectedCategory === "All" ? 'bg-secondary text-white' : 'hover:bg-secondary/5 text-muted'}`}
                                >Tout le Menu
                                    <span className="float-right text-[9px] opacity-50">{plates.length}</span>
                                </button>
                                {categories.map(cat => (
                                    <button
                                        key={cat.id_categorie}
                                        onClick={() => setSelectedCategory(cat.libelle)}
                                        className={`w-full text-left px-5 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${selectedCategory === cat.libelle ? 'bg-secondary text-white' : 'hover:bg-secondary/5 text-muted'}`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span>{cat.libelle}</span>
                                            <span className="text-[9px] opacity-40">{cat._count?.plats}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </BentoCard>

                        <BentoCard className="!p-8 border-none shadow-xl bg-primary text-white">
                            <Activity className="w-8 h-8 mb-4 opacity-40" />
                            <h4 className="text-xl font-black serif italic tracking-tighter mb-2">Disponibilité</h4>
                            <p className="text-[10px] font-bold opacity-80 leading-relaxed uppercase">Une rupture de stock ? Désactivez un plat instantanément pour informer la salle et la cuisine.</p>
                        </BentoCard>
                    </div>

                    {/* Menu Grid */}
                    <div className="lg:col-span-9 space-y-6">
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                            <input
                                type="text"
                                placeholder="Rechercher un plat..."
                                className="w-full pl-16 pr-6 py-5 bg-white border border-secondary/5 rounded-3xl outline-none focus:border-primary transition-all font-bold text-secondary text-lg shadow-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-64 glass rounded-[40px] animate-pulse" />)}
                            </div>
                        ) : filteredPlates.length === 0 ? (
                            <div className="py-24 text-center opacity-30 flex flex-col items-center gap-4">
                                <Utensils className="w-16 h-16 text-muted" />
                                <p className="text-sm font-black uppercase tracking-widest text-muted">Aucun plat trouvé</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredPlates.map(plat => (
                                    <BentoCard key={plat.id_plat} className={`group !p-0 border-none shadow-xl transition-all duration-500 overflow-hidden relative ${!plat.disponible ? 'opacity-50 grayscale' : 'bg-white/60 hover:scale-[1.02]'}`}>
                                        <div className="aspect-video bg-secondary/5 flex items-center justify-center relative overflow-hidden">
                                            <Utensils className="w-12 h-12 text-muted/20" />
                                            <div className="absolute top-4 right-4">
                                                <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border ${plat.disponible ? 'bg-green-500/10 text-green-600 border-green-500/20' : 'bg-red-500/10 text-red-600 border-red-500/20'}`}>
                                                    {plat.disponible ? 'Disponible' : 'Épuisé'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 space-y-4">
                                            <div className="space-y-1">
                                                <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">{plat.categorie?.libelle || "Sans catégorie"}</p>
                                                <h4 className="text-xl font-black text-secondary serif italic tracking-tighter leading-tight">{plat.libelle}</h4>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <p className="text-2xl font-black text-secondary tracking-tighter">{Number(plat.prix_actuel).toFixed(2)} €</p>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => openEdit(plat)}
                                                        className="p-2.5 bg-secondary/5 rounded-xl hover:bg-primary hover:text-white transition-all text-muted"
                                                        title="Modifier"
                                                    >
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => toggleAvailability(plat)}
                                                        className={`p-2.5 rounded-xl transition-all ${plat.disponible ? 'bg-red-500/10 text-red-600 hover:bg-red-500 hover:text-white' : 'bg-green-500/10 text-green-600 hover:bg-green-500 hover:text-white'}`}
                                                        title={plat.disponible ? "Désactiver" : "Activer"}
                                                    >
                                                        {plat.disponible ? <XCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                                                    </button>
                                                    <button
                                                        onClick={() => openDelete(plat)}
                                                        className="p-2.5 bg-red-500/5 rounded-xl hover:bg-red-500 hover:text-white transition-all text-red-400"
                                                        title="Supprimer"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </BentoCard>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
