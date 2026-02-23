"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
    Utensils,
    Clock,
    User,
    Search,
    Plus,
    ChevronRight,
    ChefHat,
    CheckCircle2,
    Timer,
    Table as TableIcon
} from "lucide-react";
import Link from "next/link";

export default function CommandesPage() {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("Toutes");

    useEffect(() => {
        fetchOrders();
        // Refresh every 30 seconds for "real-time" feel
        const interval = setInterval(fetchOrders, 30000);
        return () => clearInterval(interval);
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await fetch("/api/commandes");
            const data = await res.json();
            // Filter out fully paid orders if needed for "active" view
            const activeOnly = data.filter((o: any) => o.paiements.length === 0);
            setOrders(activeOnly);
        } catch (error) {
            console.error("Failed to fetch orders", error);
        }
        setLoading(false);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Prête": return "bg-green-500 text-white shadow-green-500/20";
            case "En préparation": return "bg-blue-500 text-white shadow-blue-500/20";
            case "Servie": return "bg-secondary/40 text-white";
            default: return "bg-primary text-white shadow-primary/20";
        }
    };

    const getElapsedTime = (date: string) => {
        const start = new Date(date).getTime();
        const now = new Date().getTime();
        const diff = Math.floor((now - start) / 60000); // minutes
        return diff;
    };

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-1">
                        <h2 className="text-6xl font-black text-secondary tracking-tighter serif">
                            Commandes <span className="text-primary italic">Actives</span>
                        </h2>
                        <p className="text-muted font-medium text-lg">Suivi des tickets en cours et flux cuisine.</p>
                    </div>

                    <Link href="/commandes/new">
                        <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30">
                            <Plus className="w-5 h-5" /> Prise d'Ordre
                        </button>
                    </Link>
                </div>

                {/* Tabs & Stats */}
                <div className="flex flex-wrap items-center gap-4">
                    {["Toutes", "En attente", "En préparation", "Prête"].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-secondary text-white' : 'glass text-muted hover:bg-secondary/5'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Orders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {loading ? (
                        [1, 2, 3].map(i => <div key={i} className="h-64 glass rounded-[40px] animate-pulse" />)
                    ) : orders.filter(o => activeTab === "Toutes" || o.statut_cuisine === activeTab).length > 0 ? (
                        orders.filter(o => activeTab === "Toutes" || o.statut_cuisine === activeTab).map((order) => (
                            <Link key={order.id_commande} href={`/commandes/${order.id_commande}`}>
                                <BentoCard className="group hover:scale-[1.02] transition-all duration-500 border-none shadow-xl bg-white/60 relative overflow-hidden">
                                    {/* Table Indicator */}
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                                        <TableIcon className="w-32 h-32 text-secondary" />
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Ticket #{order.id_commande}</p>
                                                    {getElapsedTime(order.date_creation) > 20 && (
                                                        <span className="flex items-center gap-1 text-[8px] font-black text-red-500 uppercase bg-red-500/10 px-2 py-0.5 rounded-full animate-pulse">
                                                            <Timer className="w-2 h-2" /> Urgent
                                                        </span>
                                                    )}
                                                </div>
                                                <h4 className="text-3xl font-black text-secondary serif italic tracking-tighter">
                                                    Table {order.tables?.[0]?.numero || "Takeaway"}
                                                </h4>
                                            </div>
                                            <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${getStatusColor(order.statut_cuisine)}`}>
                                                {order.statut_cuisine}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            {order.lignes.slice(0, 3).map((line: any, idx: number) => (
                                                <div key={idx} className="flex justify-between items-center text-[11px] font-bold text-secondary">
                                                    <span className="flex items-center gap-2">
                                                        <span className="text-primary font-black w-4">{line.quantite}x</span>
                                                        <span className="truncate max-w-[150px]">{line.plat?.libelle}</span>
                                                    </span>
                                                    {line.note_cuisson && <span className="text-[8px] font-black text-muted uppercase italic">"{line.note_cuisson}"</span>}
                                                </div>
                                            ))}
                                            {order.lignes.length > 3 && (
                                                <p className="text-[9px] font-black text-muted uppercase tracking-widest">+ {order.lignes.length - 3} autres articles</p>
                                            )}
                                        </div>

                                        <div className="pt-6 mt-2 border-t border-secondary/5 flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-3 h-3 text-muted" />
                                                <span className="text-[10px] font-black text-muted uppercase">Depuis {getElapsedTime(order.date_creation)} min</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <User className="w-3 h-3 text-primary" />
                                                <span className="text-[10px] font-black text-secondary uppercase">{order.employe?.prenom || "Staff"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </BentoCard>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center space-y-4">
                            <ChefHat className="w-16 h-16 text-muted mx-auto opacity-20" />
                            <p className="text-xl font-black text-secondary serif italic">Aucun ticket actif pour le moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
