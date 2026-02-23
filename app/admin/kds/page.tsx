"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { Clock, CheckCircle2, PlayCircle, AlertCircle, ChefHat } from "lucide-react";

export default function KDSPage() {
    const [orders, setOrders] = useState<any[]>([]);

    const fetchOrders = () => {
        fetch("/api/stats") // Using stats or a specific KDS endpoint
            .then((res) => res.json())
            .then(() => {
                // Mocking KDS orders for UI implementation
                setOrders([
                    {
                        id: 1,
                        table: "T04",
                        time: "12:45",
                        items: [
                            { name: "Filet de Boeuf", qty: 2, note: "Saignant" },
                            { name: "Frites Maison", qty: 2 },
                        ],
                        status: "en préparation"
                    },
                    {
                        id: 2,
                        table: "T02",
                        time: "12:50",
                        items: [
                            { name: "Saumon Frais", qty: 1, note: "Sans sel" },
                            { name: "Légumes Vapeur", qty: 1 },
                        ],
                        status: "en attente"
                    },
                    {
                        id: 3,
                        table: "T08",
                        time: "12:30",
                        items: [
                            { name: "Burger Gourmet", qty: 3 },
                        ],
                        status: "prêt"
                    },
                ]);
            });
    };

    useEffect(() => {
        fetchOrders();
        const interval = setInterval(fetchOrders, 30000);
        return () => clearInterval(interval);
    }, []);

    const updateStatus = (id: number, newStatus: string) => {
        setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
        // In real app, call fetch(`/api/commandes/${id}`, { method: 'PUT', body: { statut_cuisine: newStatus } })
    };

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground flex items-center gap-3">
                            <ChefHat className="w-10 h-10 text-accent" />
                            Kitchen Display (KDS)
                        </h2>
                        <p className="text-muted text-lg">
                            Suivi des préparations en temps réel.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="glass px-4 py-2 rounded-xl flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-orange-500" />
                            <span className="text-sm font-medium">Attente</span>
                        </div>
                        <div className="glass px-4 py-2 rounded-xl flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-blue-500" />
                            <span className="text-sm font-medium">Préparation</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order) => (
                        <BentoCard
                            key={order.id}
                            className={`flex flex-col border-t-4 ${order.status === 'prêt' ? 'border-t-green-500' :
                                    order.status === 'en préparation' ? 'border-t-blue-500' : 'border-t-orange-500'
                                }`}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-black text-foreground">{order.table}</span>
                                    <span className="text-xs text-muted font-mono">{order.time}</span>
                                </div>
                                {order.status === 'en attente' && (
                                    <button
                                        onClick={() => updateStatus(order.id, 'en préparation')}
                                        className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        <PlayCircle className="w-4 h-4" /> Start
                                    </button>
                                )}
                                {order.status === 'en préparation' && (
                                    <button
                                        onClick={() => updateStatus(order.id, 'prêt')}
                                        className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-green-400 hover:text-green-300 transition-colors"
                                    >
                                        <CheckCircle2 className="w-4 h-4" /> Done
                                    </button>
                                )}
                            </div>

                            <div className="flex-1 space-y-4">
                                {order.items.map((item: any, i: number) => (
                                    <div key={i} className="flex justify-between items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="space-y-1">
                                            <p className="text-base font-bold text-foreground line-clamp-1">{item.name}</p>
                                            {item.note && <p className="text-xs text-orange-400 italic">"{item.note}"</p>}
                                        </div>
                                        <span className="text-lg font-black text-accent">x{item.qty}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-muted">
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>Depuis 12min</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <AlertCircle className="w-3.5 h-3.5" />
                                    <span>#ORD-{order.id}</span>
                                </div>
                            </div>
                        </BentoCard>
                    ))}
                </div>
            </div>
        </main>
    );
}
