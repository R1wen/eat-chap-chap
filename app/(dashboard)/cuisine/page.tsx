"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
    ChefHat,
    Clock,
    Timer,
    CheckCircle2,
    ChevronRight,
    Utensils,
    AlertCircle,
    Bell
} from "lucide-react";

const COLUMNS = ["En attente", "En préparation", "Prête", "Servie"];

export default function CuisinePage() {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
        const interval = setInterval(fetchOrders, 10000); // 10s refresh for kitchen
        return () => clearInterval(interval);
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await fetch("/api/commandes");
            const data = await res.json();
            // In kitchen, we only care about orders that aren't yet served or just served
            // But let's show all for now for the Kanban flow
            setOrders(data);
        } catch (error) {
            console.error("Failed to fetch orders", error);
        }
        setLoading(false);
    };

    const updateStatus = async (id: number, newStatus: string) => {
        try {
            const res = await fetch(`/api/commandes/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ statut_cuisine: newStatus })
            });
            if (res.ok) {
                // Optimistic update
                setOrders(prev => prev.map(o => o.id_commande === id ? { ...o, statut_cuisine: newStatus } : o));
            }
        } catch (error) {
            console.error("Failed to update status", error);
        }
    };

    const getElapsedTime = (date: string) => {
        const diff = Math.floor((new Date().getTime() - new Date(date).getTime()) / 60000);
        return diff;
    };

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-secondary">
            <div className="ambient-glow opacity-20" />
            <Header />

            <div className="max-w-[1800px] mx-auto space-y-8 mt-8">
                <div className="flex justify-between items-end">
                    <div className="space-y-1">
                        <div className="flex items-center gap-3 text-primary animate-pulse">
                            <ChefHat className="w-8 h-8" />
                            <span className="font-black uppercase tracking-[0.4em] text-xs">Line in Production</span>
                        </div>
                        <h2 className="text-6xl font-black text-white tracking-tighter serif italic">
                            Écran <span className="text-primary not-italic">Cuisine</span>
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <div className="glass p-4 rounded-2xl flex items-center gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-primary" />
                                <span className="text-[10px] font-black uppercase">{orders.filter(o => o.statut_cuisine === "En attente").length} Attente</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                <span className="text-[10px] font-black uppercase">{orders.filter(o => o.statut_cuisine === "En préparation").length} Prep</span>
                            </div>
                            <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                                <Bell className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[calc(100vh-350px)] min-h-[600px]">
                    {COLUMNS.map(col => (
                        <div key={col} className="flex flex-col gap-4 bg-white/5 rounded-[40px] p-6 border border-white/5 overflow-hidden">
                            <div className="flex justify-between items-center px-2 mb-2">
                                <h3 className="font-black text-white uppercase tracking-[0.2em] text-[11px] flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${col === "En attente" ? 'bg-primary' : col === "En préparation" ? 'bg-blue-500' : 'bg-green-500'}`} />
                                    {col}
                                </h3>
                                <span className="text-white/40 font-black text-xs">{orders.filter(o => o.statut_cuisine === col).length}</span>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
                                {orders.filter(o => o.statut_cuisine === col).map((order) => (
                                    <div key={order.id_commande} className="animate-in fade-in zoom-in duration-300">
                                        <BentoCard className={`!p-6 border-none shadow-2xl transition-all hover:scale-[1.02] ${getElapsedTime(order.date_creation) > 15 && col !== "Servie" ? 'ring-2 ring-red-500/50' : ''} ${col === "Prête" ? 'bg-green-500/10' : 'bg-white/90'}`}>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="text-[10px] font-black text-primary uppercase tracking-widest">#{order.id_commande}</p>
                                                        <h4 className="text-2xl font-black text-secondary serif italic tracking-tighter">Table {order.tables?.[0]?.numero || "TK"}</h4>
                                                    </div>
                                                    <div className="flex flex-col items-end gap-1">
                                                        <span className={`flex items-center gap-1 text-[10px] font-black ${getElapsedTime(order.date_creation) > 15 ? 'text-red-500 animate-pulse' : 'text-muted'}`}>
                                                            <Timer className="w-3 h-3" /> {getElapsedTime(order.date_creation)} min
                                                        </span>
                                                        <span className="text-[8px] font-black text-muted uppercase">{order.employe?.prenom}</span>
                                                    </div>
                                                </div>

                                                <div className="space-y-2 py-3 border-y border-secondary/5">
                                                    {order.lignes.map((line: any, idx: number) => (
                                                        <div key={idx} className="space-y-1">
                                                            <div className="flex justify-between items-start">
                                                                <span className="text-sm font-black text-secondary flex gap-2">
                                                                    <span className="text-primary">{line.quantite}x</span>
                                                                    {line.plat?.libelle}
                                                                </span>
                                                            </div>
                                                            {line.note_cuisson && (
                                                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 rounded-lg border border-primary/10">
                                                                    <AlertCircle className="w-3 h-3 text-primary" />
                                                                    <span className="text-[9px] font-black text-primary uppercase italic">{line.note_cuisson}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex gap-2">
                                                    {col === "En attente" && (
                                                        <button
                                                            onClick={() => updateStatus(order.id_commande, "En préparation")}
                                                            className="w-full py-4 bg-blue-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                                                        >Lancer Prep</button>
                                                    )}
                                                    {col === "En préparation" && (
                                                        <button
                                                            onClick={() => updateStatus(order.id_commande, "Prête")}
                                                            className="w-full py-4 bg-green-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
                                                        >Prête !</button>
                                                    )}
                                                    {col === "Prête" && (
                                                        <button
                                                            onClick={() => updateStatus(order.id_commande, "Servie")}
                                                            className="w-full py-4 bg-secondary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] shadow-xl shadow-secondary/30 transition-all flex items-center justify-center gap-2"
                                                        >
                                                            <CheckCircle2 className="w-4 h-4" /> Servie
                                                        </button>
                                                    )}
                                                    {col === "Servie" && (
                                                        <div className="w-full py-3 text-center text-[10px] font-black uppercase text-green-600 bg-green-500/10 rounded-xl">Accomplie</div>
                                                    )}
                                                </div>
                                            </div>
                                        </BentoCard>
                                    </div>
                                ))}
                                {orders.filter(o => o.statut_cuisine === col).length === 0 && (
                                    <div className="flex-1 flex items-center justify-center opacity-10">
                                        <Utensils className="w-12 h-12 text-white" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
