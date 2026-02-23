"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { TrendingUp, Users, Calendar, Clock, DollarSign, ArrowUpRight, ArrowDownRight, Award } from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from "recharts";

const data = [
    { name: "Lun", value: 1200, orders: 15 },
    { name: "Mar", value: 1800, orders: 22 },
    { name: "Mer", value: 1400, orders: 18 },
    { name: "Jeu", value: 2200, orders: 25 },
    { name: "Ven", value: 3500, orders: 40 },
    { name: "Sam", value: 4200, orders: 52 },
    { name: "Dim", value: 3800, orders: 45 },
];

export default function AnalyticsPage() {
    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        fetch("/api/analytics")
            .then((res) => res.json())
            .then((data) => setStats(data));
    }, []);

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
                        <button className="px-6 py-3 bg-white border border-secondary/10 text-secondary rounded-[12px] font-bold text-xs uppercase tracking-widest hover:bg-secondary/5 transition-all shadow-sm">
                            Rapport PDF
                        </button>
                    </div>
                </div>

                {/* Global Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { label: "Rev. Moyen", val: "1,250 €", icon: DollarSign, trend: "+5%", color: "text-primary" },
                        { label: "Tickets Moy.", val: "54.20 €", icon: TrendingUp, trend: "+12%", color: "text-green-600" },
                        { label: "No Show", val: "4.2%", icon: Calendar, trend: "-2%", color: "text-red-500" },
                        { label: "Tables Tournées", val: "2.8x", icon: Users, trend: "+0.3", color: "text-secondary" },
                    ].map((s, i) => (
                        <BentoCard key={i} className="pt-8">
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
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#B85C38" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#B85C38" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={10} stroke="#7f8c8d" />
                                    <YAxis axisLine={false} tickLine={false} fontSize={10} stroke="#7f8c8d" />
                                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                                    <Area type="monotone" dataKey="value" stroke="#B85C38" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </BentoCard>

                    <BentoCard title="Performance par Service" description="Matin vs Soir.">
                        <div className="h-[250px] w-full mt-8">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={[
                                    { s: "Matin", v: 1200 },
                                    { s: "Soir", v: 2800 },
                                ]}>
                                    <XAxis dataKey="s" axisLine={false} tickLine={false} stroke="#7f8c8d" />
                                    <Bar dataKey="v" radius={[8, 8, 0, 0]}>
                                        <Cell fill="rgba(44, 62, 80, 0.1)" />
                                        <Cell fill="#B85C38" />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="mt-8 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-muted uppercase">Pic d'affluence</span>
                                <span className="text-sm font-black text-secondary">20h - 22h</span>
                            </div>
                            <div className="flex justify-between items-center border-t border-light-beige pt-4">
                                <span className="text-xs font-bold text-muted uppercase">Efficacité Cuisine</span>
                                <span className="text-sm font-black text-primary">High (A+)</span>
                            </div>
                        </div>
                    </BentoCard>
                </div>

                {/* Detailed Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <BentoCard title="Plats Vedettes" description="Top productivité.">
                        <div className="mt-4 space-y-4">
                            {[
                                { name: "Entrecôte 300g", count: 185, margin: "65%" },
                                { name: "Risotto Cèpes", count: 142, margin: "78%" },
                                { name: "Burger Gourmet", count: 98, margin: "72%" },
                            ].map((p, i) => (
                                <div key={i} className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-secondary/5 flex items-center justify-center text-xs font-black">{i + 1}</span>
                                        <div>
                                            <p className="text-sm font-bold text-secondary">{p.name}</p>
                                            <p className="text-[10px] text-muted font-black uppercase">{p.count} plats</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-black text-primary">{p.margin}</span>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    <BentoCard title="Sources de Revenus">
                        <div className="mt-4 space-y-4">
                            {[
                                { label: "Sur Place", val: 85, color: "bg-primary" },
                                { label: "A Emporter", val: 15, color: "bg-secondary" },
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
                        </div>
                    </BentoCard>

                    <BentoCard className="bg-secondary text-white border-none shadow-2xl relative overflow-hidden group">
                        <Award className="absolute -bottom-4 -left-4 w-32 h-32 opacity-10 group-hover:scale-125 transition-transform" />
                        <div className="relative z-10 space-y-4">
                            <h4 className="text-2xl font-black italic serif">Objectif Atteint</h4>
                            <p className="text-white/60 text-sm font-medium leading-relaxed">Vous avez dépassé votre objectif de CA de 12% ce mois-ci. Continuez ainsi !</p>
                            <button className="px-6 py-2 rounded-[8px] bg-primary text-white font-black text-[10px] uppercase tracking-widest mt-4">Voir les bonus Staff</button>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </main>
    );
}
