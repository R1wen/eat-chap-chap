"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
    Clock,
    User,
    Table as TableIcon,
    Plus,
    ChevronLeft,
    ChefHat,
    Receipt,
    DollarSign,
    CheckCircle2,
    UtensilsCrossed,
    Trash2,
    AlertCircle
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function OrderDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [order, setOrder] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrder();
    }, [params.id]);

    const fetchOrder = async () => {
        try {
            const res = await fetch(`/api/commandes/${params.id}`);
            const data = await res.json();
            setOrder(data);
        } catch (error) {
            console.error("Failed to fetch order", error);
        }
        setLoading(false);
    };

    const updateKitchenStatus = async (status: string) => {
        try {
            await fetch(`/api/commandes/${params.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ statut_cuisine: status })
            });
            fetchOrder();
        } catch (error) {
            console.error("Update failed", error);
        }
    };

    const calculateTotal = () => {
        if (!order) return 0;
        return order.lignes.reduce((acc: number, line: any) => acc + (Number(line.prix_moment) * line.quantite), 0);
    };

    if (loading) return <div className="min-h-screen bg-background pt-24"><Header /><div className="max-w-4xl mx-auto p-12 glass animate-pulse rounded-[40px] h-96 mt-12" /></div>;

    if (!order) return <div className="min-h-screen bg-background pt-24"><Header /><div className="max-w-4xl mx-auto p-12 text-center mt-12"><h2 className="text-4xl font-black serif text-secondary">Ticket introuvable</h2></div></div>;

    const isPaid = order.paiements.length > 0;

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background font-sans">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-5xl mx-auto space-y-8 mt-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-4">
                        <Link href="/commandes" className="group flex items-center gap-2 text-muted hover:text-secondary transition-colors font-black uppercase text-[10px] tracking-widest">
                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Retour aux commandes
                        </Link>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Ticket #{order.id_commande}</p>
                            <h2 className="text-6xl font-black text-secondary tracking-tighter serif italic leading-none">
                                Table <span className="text-primary not-italic">{order.tables?.[0]?.numero || "Takeaway"}</span>
                            </h2>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {!isPaid && (
                            <Link href="/caisse">
                                <button className="flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary/30">
                                    <DollarSign className="w-5 h-5" /> Facturation
                                </button>
                            </Link>
                        )}
                        {isPaid && (
                            <div className="px-8 py-4 bg-green-500/10 text-green-600 border border-green-500/20 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" /> Payé
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Items List (Column 8) */}
                    <div className="lg:col-span-8 space-y-6">
                        <BentoCard className="!p-8 border-none shadow-2xl bg-white/60 min-h-[500px]">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-2xl font-black text-secondary serif italic">Détails de l'ordre</h3>
                                <div className="flex items-center gap-3 px-4 py-2 bg-secondary/5 rounded-xl border border-secondary/5 font-black text-[10px] uppercase tracking-widest text-muted">
                                    <Clock className="w-4 h-4" />
                                    Posté à {new Date(order.date_creation).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {order.lignes.map((line: any, idx: number) => (
                                    <div key={idx} className="group p-6 bg-white rounded-3xl border border-secondary/5 hover:border-primary/20 transition-all flex justify-between items-center">
                                        <div className="flex gap-6 items-center">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-black text-xl">
                                                {line.quantite}x
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-lg font-black text-secondary serif italic leading-tight">{line.plat?.libelle}</p>
                                                <p className="text-[10px] font-black text-muted uppercase tracking-widest">{line.plat?.categorie?.libelle}</p>
                                                {line.note_cuisson && (
                                                    <p className="text-[10px] font-bold text-primary italic bg-primary/5 px-2 py-0.5 rounded w-fit">"{line.note_cuisson}"</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-right space-y-1">
                                            <p className="text-lg font-black text-secondary">{(Number(line.prix_moment) * line.quantite).toFixed(2)} €</p>
                                            <p className="text-[10px] font-black text-muted uppercase opacity-40">{Number(line.prix_moment).toFixed(2)} / unité</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {!isPaid && (
                                <div className="pt-10">
                                    <button className="w-full py-6 border-2 border-dashed border-secondary/10 rounded-[32px] flex items-center justify-center gap-3 text-muted hover:border-primary/40 hover:text-primary transition-all group">
                                        <Plus className="w-6 h-6 group-hover:scale-125 transition-transform" />
                                        <span className="font-black text-xs uppercase tracking-[0.2em]">Ajouter des articles</span>
                                    </button>
                                </div>
                            )}
                        </BentoCard>
                    </div>

                    {/* Summary & Control (Column 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <BentoCard className="!p-8 border-none shadow-2xl bg-secondary text-white relative overflow-hidden">
                            <Receipt className="absolute top-0 right-0 p-8 opacity-[0.03] w-48 h-48 pointer-events-none" />

                            <div className="space-y-8 relative z-10">
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">État de service</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary">
                                            <ChefHat className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xl font-black text-white italic serif">{order.statut_cuisine}</p>
                                            <p className="text-[9px] font-black text-white/40 uppercase">Flux Cuisine</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-8 border-t border-white/5">
                                    <div className="flex justify-between items-end">
                                        <p className="text-[10px] font-black uppercase text-white/40">Serveur</p>
                                        <p className="text-sm font-black italic serif text-primary">{order.employe?.prenom} {order.employe?.nom}</p>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <p className="text-[10px] font-black uppercase text-white/40">Client</p>
                                        <p className="text-sm font-black italic serif">{order.client?.nom || "Clientanonyme"}</p>
                                    </div>
                                </div>

                                <div className="pt-8 space-y-6">
                                    <div className="flex justify-between items-end">
                                        <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">Total Net</p>
                                        <p className="text-5xl font-black text-primary tracking-tighter">{calculateTotal().toFixed(2)} €</p>
                                    </div>

                                    {!isPaid && (
                                        <div className="flex flex-col gap-3">
                                            <button
                                                onClick={() => updateKitchenStatus("Prête")}
                                                className="w-full py-5 bg-white/10 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                                            >
                                                <AlertCircle className="w-4 h-4" /> Relance Cuisine
                                            </button>
                                            <button className="w-full py-5 bg-red-500/10 text-red-500 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2">
                                                <Trash2 className="w-4 h-4" /> Supprimer Ticket
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </BentoCard>

                        <BentoCard className="!p-8 bg-green-500 text-white border-none shadow-xl shadow-green-500/20">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <UtensilsCrossed className="w-6 h-6" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Suggestions</p>
                                    <p className="text-sm font-black leading-tight">Proposer des desserts ou du vin ?</p>
                                </div>
                            </div>
                        </BentoCard>
                    </div>
                </div>
            </div>
        </main>
    );
}
