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
    Filter,
    Utensils,
    DollarSign,
    MoreHorizontal,
    Image as ImageIcon,
    ChevronRight,
    Tag
} from "lucide-react";

export default function MenuManagementPage() {
    const [plates, setPlates] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        loadData();
    }, []);

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
            }
        } catch (error) {
            console.error(error);
        }
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
                        <button className="flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary/30">
                            <Tag className="w-5 h-5" /> Catégories
                        </button>
                        <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30">
                            <Plus className="w-5 h-5" /> Ajouter un Plat
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar Filters (Column 3) */}
                    <div className="lg:col-span-3 space-y-6">
                        <BentoCard className="!p-8 border-none shadow-xl bg-white/60">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-muted mb-6">Catégories</h3>
                            <div className="space-y-2">
                                <button
                                    onClick={() => setSelectedCategory("All")}
                                    className={`w-full text-left px-5 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${selectedCategory === "All" ? 'bg-secondary text-white' : 'hover:bg-secondary/5 text-muted'}`}
                                >Tout le Menu</button>
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

                    {/* Menu Grid (Column 9) */}
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

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {loading ? (
                                [1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-64 glass rounded-[40px] animate-pulse" />)
                            ) : filteredPlates.map(plat => (
                                <BentoCard key={plat.id_plat} className={`group !p-0 border-none shadow-xl transition-all duration-500 overflow-hidden relative ${!plat.disponible ? 'opacity-50 grayscale' : 'bg-white/60 hover:scale-[1.02]'}`}>
                                    {/* Image Placeholder */}
                                    <div className="aspect-video bg-secondary/5 flex items-center justify-center relative overflow-hidden">
                                        <ImageIcon className="w-12 h-12 text-muted/20" />
                                        <div className="absolute top-4 right-4">
                                            <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border ${plat.disponible ? 'bg-green-500/10 text-green-600 border-green-500/20' : 'bg-red-500/10 text-red-600 border-red-500/20'}`}>
                                                {plat.disponible ? 'Disponible' : 'Épuisé'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-6">
                                        <div className="space-y-1">
                                            <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">{plat.categorie?.libelle}</p>
                                            <h4 className="text-2xl font-black text-secondary serif italic tracking-tighter leading-tight">{plat.libelle}</h4>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <p className="text-2xl font-black text-secondary tracking-tighter">{Number(plat.prix_actuel).toFixed(2)} €</p>
                                            <div className="flex gap-2">
                                                <button className="p-3 bg-secondary/5 rounded-xl hover:bg-secondary hover:text-white transition-all text-muted"><Edit className="w-4 h-4" /></button>
                                                <button
                                                    onClick={() => toggleAvailability(plat)}
                                                    className={`p-3 rounded-xl transition-all ${plat.disponible ? 'bg-red-500/10 text-red-600' : 'bg-green-500/10 text-green-600 hover:bg-green-500 hover:text-white'}`}
                                                >
                                                    {plat.disponible ? <XCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </BentoCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function Activity(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    )
}
