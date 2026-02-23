"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { Plus, Heart, Award, Star, Search, Filter } from "lucide-react";

export default function MenuPage() {
    const [plats, setPlats] = useState<any[]>([]);
    const [activeCat, setActiveCat] = useState("Tous");

    useEffect(() => {
        fetch("/api/plats")
            .then((res) => res.json())
            .then((data) => setPlats(data));
    }, []);

    const populars = plats.slice(2, 4);

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto space-y-12 mt-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-1">
                        <h2 className="text-6xl font-black text-secondary tracking-tighter serif leading-none">
                            La <span className="text-primary italic">Carte</span> Digital
                        </h2>
                        <p className="text-muted font-medium">Authenticité, Terroir et Passion culinaire.</p>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-4 h-4" />
                            <input placeholder="Rechercher..." className="w-full glass pl-12 pr-4 py-3 rounded-[12px] border-secondary/10 outline-none focus:border-primary text-secondary text-sm" />
                        </div>
                        <button className="p-3 rounded-[12px] glass hover:bg-secondary hover:text-white border-secondary/10 transition-all text-secondary">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Populars */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-primary" />
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-secondary">★ Best Sellers</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {populars.map((p, i) => (
                            <BentoCard key={i} className="bg-secondary text-white border-none !p-10 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-[2s]">
                                    <Star className="w-32 h-32 text-primary fill-primary" />
                                </div>
                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="space-y-4 max-w-md">
                                        <h4 className="text-4xl font-black italic serif tracking-tighter leading-none">{p.libelle}</h4>
                                        <p className="text-white/60 text-sm font-medium">L'équilibre parfait entre textures et saveurs, préparé quotidiennement par notre chef.</p>
                                        <div className="flex items-center gap-6 pt-4">
                                            <span className="text-3xl font-black text-primary serif">{p.prix_actuel} FCFA</span>
                                            <button className="px-6 py-2 rounded-[8px] bg-primary text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 hover:opacity-90 transition-all">Ajouter</button>
                                        </div>
                                    </div>
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="space-y-8">
                    <div className="flex gap-2 border-b border-light-beige pb-4 overflow-x-auto scrollbar-none">
                        {["Tous", "Entrées", "Plats", "Desserts", "Vins"].map(c => (
                            <button
                                key={c}
                                onClick={() => setActiveCat(c)}
                                className={`px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCat === c ? 'bg-primary text-white shadow-lg' : 'text-muted hover:text-secondary'}`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {plats.filter(p => activeCat === "Tous" || p.categorie?.libelle === activeCat).map((p, i) => (
                            <BentoCard key={i} className="hover:border-primary transition-all p-8 flex flex-col justify-between group">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <span className="text-primary"><Heart className="w-4 h-4" /></span>
                                        <span className="text-[9px] font-black text-muted uppercase tracking-widest">#{p.id_plat}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-secondary">{p.libelle}</h4>
                                        <p className="text-[10px] text-muted font-black uppercase tracking-widest mt-1 opacity-60">Tradition française</p>
                                    </div>
                                </div>
                                <div className="flex items-end justify-between mt-8">
                                    <span className="text-xl font-black text-secondary serif">{p.prix_actuel} FCFA</span>
                                    <button className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all group-hover:scale-110">
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
