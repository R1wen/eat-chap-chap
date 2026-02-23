"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { TrendingUp, Users, Calendar, DollarSign, Award, Utensils, ShoppingBag } from "lucide-react";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell
} from "recharts";

export default function AnalyticsPage() {
    const [analytics, setAnalytics] = useState<any>(null);
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch("/api/analytics").then(r => r.json()).catch(() => ({})),
            fetch("/api/stats").then(r => r.json()).catch(() => ({}))
        ]).then(([a, s]) => {
            setAnalytics(a);
            setStats(s);
            setLoading(false);
        });
    }, []);

    const trendData = stats?.trend?.map((t: any) => ({ name: t.day, value: t.total, orders: 0 })) || [];
    const topPlats = analytics?.topPlats || [];
    const totalRevenue = analytics?.totalRevenue || 0;
    const avgTicket = stats?.revenue && stats?.activeOrders ? (stats.revenue / Math.max(stats.activeOrders, 1)) : 0;

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-1">
                        <h2 className="text-5xl font-black text-secondary tracking-tighter serif leading-none">
                            Volume & <span className="text-primary italic">Croissance</span>
                        </h2>
                        <p className="text-muted font-medium">Reporting consolidé et perspectives financières.</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => window.print()}
                            className="px-6 py-3 bg-white border border-secondary/10 text-secondary rounded-[12px] font-bold text-xs uppercase tracking-widest hover:bg-secondary/5 transition-all shadow-sm"
                        >
                            Rapport PDF
                        </button>
                    </div>
                </div>

                {/* Global Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { label: "Rev. Total", val: loading ? "—" : `${totalRevenue.toFixed(0)} €`, icon: DollarSign, color: "text-primary" },
                        { label: "Ticket Moy.", val: loading ? "—" : `${avgTicket.toFixed(2)} €`, icon: TrendingUp, color: "text-green-600" },
                        { label: "Commandes Actives", val: loading ? "—" : `${stats?.activeOrders ?? 0}`, icon: ShoppingBag, color: "text-blue-500" },
                        { label: "Occupation", val: loading ? "—" : `${stats?.occupancy ?? 0}%`, icon: Users, color: "text-secondary" },
                    ].map((s, i) => (
                        <BentoCard key={i} className="pt-8 border-none shadow-xl bg-white/60">
                            <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-muted uppercase tracking-widest">{s.label}</p>
                                    <h4 className="text-3xl font-black text-secondary serif">{s.val}</h4>
                                </div>
                                <div className={`p-2 rounded-xl bg-secondary/5 ${s.color}`}>
                                    <s.icon className="w-5 h-5" />
                                </div>
                            </div>
                        </BentoCard>
                    ))}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <BentoCard className="lg:col-span-2 min-h-[450px]" title="Chiffre d'Affaires Hebdomadaire" description="Cycle de revenus sur les 7 derniers jours.">
                        <div className="h-[300px] w-full mt-10">
                            {trendData.length > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={trendData}>
                                        <defs>
                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#B85C38" stopOpacity={0.2} />
                                                <stop offset="95%" stopColor="#B85C38" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={10} stroke="#7f8c8d" />
                                        <YAxis axisLine={false} tickLine={false} fontSize={10} stroke="#7f8c8d" />
                                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} formatter={(v) => [`${Number(v).toFixed(2)} €`, "Revenu"]} />
                                        <Area type="monotone" dataKey="value" stroke="#B85C38" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="flex items-center justify-center h-full opacity-20">
                                    <p className="font-black text-muted text-xs uppercase tracking-widest">Données insuffisantes</p>
                                </div>
                            )}
                        </div>
                    </BentoCard>

                    <BentoCard title="Performance par Service" description="Répartition des revenus.">
                        <div className="h-[250px] w-full mt-8">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={[
                                    { s: "Matin", v: trendData.slice(0, 3).reduce((a: number, d: any) => a + (d.value || 0), 0) / 3 || 0 },
                                    { s: "Soir", v: trendData.slice(4).reduce((a: number, d: any) => a + (d.value || 0), 0) / 3 || 0 }
                                ]}>
                                    <XAxis dataKey="s" axisLine={false} tickLine={false} stroke="#7f8c8d" />
                                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} formatter={(v) => [`${Number(v).toFixed(2)} €`, "Revenu moyen"]} />
                                    <Bar dataKey="v" radius={[8, 8, 0, 0]}>
                                        <Cell fill="rgba(44, 62, 80, 0.1)" />
                                        <Cell fill="#B85C38" />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="mt-8 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-muted uppercase">Tables occupées</span>
                                <span className="text-sm font-black text-secondary">{stats?.occupiedTables || 0} / {stats?.totalTables || 0}</span>
                            </div>
                            <div className="flex justify-between items-center border-t border-light-beige pt-4">
                                <span className="text-xs font-bold text-muted uppercase">Taux d'occupation</span>
                                <span className="text-sm font-black text-primary">{stats?.occupancy || 0}%</span>
                            </div>
                        </div>
                    </BentoCard>
                </div>

                {/* Detailed Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <BentoCard title="Plats Vedettes" description="Top ventes.">
                        <div className="mt-4 space-y-4">
                            {topPlats.length === 0 ? (
                                <div className="text-center py-8 opacity-20">
                                    <Utensils className="w-10 h-10 mx-auto mb-2 text-muted" />
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted">Aucune donnée</p>
                                </div>
                            ) : topPlats.map((p: any, i: number) => (
                                <div key={i} className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-secondary/5 flex items-center justify-center text-xs font-black">{i + 1}</span>
                                        <div>
                                            <p className="text-sm font-bold text-secondary">{p.libelle}</p>
                                            <p className="text-[10px] text-muted font-black uppercase">{p.count} commande{p.count !== 1 ? 's' : ''}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-black text-primary">#{i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    <BentoCard title="Sources de Revenus">
                        <div className="mt-4 space-y-4">
                            {[
                                { label: "Sur Place", val: 85, color: "bg-primary" },
                                { label: "Take Away", val: 15, color: "bg-secondary" },
                            ].map((s, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold text-secondary">
                                        <span>{s.label}</span>
                                        <span>{s.val}%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-secondary/5 rounded-full overflow-hidden">
                                        <div className={`h-full ${s.color}`} style={{ width: `${s.val}%` }} />
                                    </div>
                                </div>
                            ))}
                            <div className="mt-6 pt-4 border-t border-light-beige">
                                <div className="flex justify-between">
                                    <span className="text-xs font-bold text-muted uppercase">Réservations</span>
                                    <span className="text-sm font-black text-secondary">{stats?.recentReservations?.length || 0} récentes</span>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    <BentoCard className="bg-secondary text-white border-none shadow-2xl relative overflow-hidden group">
                        <Award className="absolute -bottom-4 -left-4 w-32 h-32 opacity-10 group-hover:scale-125 transition-transform" />
                        <div className="relative z-10 space-y-4">
                            <h4 className="text-2xl font-black italic serif">
                                {totalRevenue > 0 ? "Bonne Performance" : "Tableau de Bord"}
                            </h4>
                            <p className="text-white/60 text-sm font-medium leading-relaxed">
                                {totalRevenue > 0
                                    ? `${totalRevenue.toFixed(0)} € de chiffre d'affaires cumulé. Continuez ainsi !`
                                    : "Commencez à enregistrer des ventes pour voir vos statistiques ici."
                                }
                            </p>
                            <button className="px-6 py-2 rounded-[8px] bg-primary text-white font-black text-[10px] uppercase tracking-widest mt-4">
                                Voir les détails
                            </button>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </main>
    );
}
