"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
    TrendingUp,
    DollarSign,
    Users,
    ShoppingBag,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    PieChart,
    Activity,
    Target
} from "lucide-react";

export default function AnalyticsPage() {
    const [stats, setStats] = useState<any>(null);
    const [analytics, setAnalytics] = useState<any>(null);
    const [employes, setEmployes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch("/api/stats").then(r => r.json()).catch(() => null),
            fetch("/api/analytics").then(r => r.json()).catch(() => null),
            fetch("/api/employes").then(r => r.json()).catch(() => [])
        ]).then(([s, a, e]) => {
            setStats(s);
            setAnalytics(a);
            setEmployes(Array.isArray(e) ? e : []);
            setLoading(false);
        });
    }, []);

    if (loading) return (
        <main className="min-h-screen pt-24 bg-background">
            <Header />
            <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map(i => <div key={i} className="h-40 glass animate-pulse rounded-3xl" />)}
                <div className="md:col-span-3 h-96 glass animate-pulse rounded-[40px]" />
                <div className="h-96 glass animate-pulse rounded-[40px]" />
            </div>
        </main>
    );

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background font-sans">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                {/* Hero Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Chiffre d'Affaires"
                        value={`${stats.revenue.toFixed(2)} €`}
                        icon={<DollarSign className="w-6 h-6" />}
                        trend={stats.revenue > 0 ? `${((stats.trend?.slice(-1)[0]?.total || 0) / Math.max(stats.revenue / 7, 1) * 100 - 100).toFixed(1)}%` : "—"}
                        positive={true}
                    />
                    <StatCard
                        title="Commandes Actives"
                        value={stats.activeOrders}
                        icon={<ShoppingBag className="w-6 h-6" />}
                        trend={stats.activeOrders > 0 ? `${stats.activeOrders} en cours` : "0"}
                        positive={stats.activeOrders > 0}
                    />
                    <StatCard
                        title="Occupation"
                        value={`${stats.occupancy}%`}
                        icon={<Target className="w-6 h-6" />}
                        trend={`${stats.occupiedTables}/${stats.totalTables} tables`}
                        positive={stats.occupancy > 50}
                    />
                    <StatCard
                        title="Réservations"
                        value={stats.recentReservations?.length ?? 0}
                        icon={<Calendar className="w-6 h-6" />}
                        trend={`${stats.recentReservations?.length ?? 0} récentes`}
                        positive={true}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Revenue Chart (Visual Mockup) */}
                    <BentoCard className="lg:col-span-2 !p-10 border-none shadow-2xl bg-white/60 relative overflow-hidden h-[500px]">
                        <div className="flex justify-between items-center mb-12">
                            <div>
                                <h3 className="text-3xl font-black text-secondary serif italic tracking-tighter">Évolution du Revenu</h3>
                                <p className="text-[10px] font-black text-muted uppercase tracking-widest">Performance des 7 derniers jours</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="px-4 py-2 bg-secondary text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Hebdomadaire</div>
                                <div className="px-4 py-2 glass rounded-xl text-[10px] font-black uppercase tracking-widest text-muted cursor-pointer hover:bg-secondary/5">Mensuel</div>
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="relative h-64 flex items-end justify-between gap-4">
                            {stats.trend.map((d: any, i: number) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                                    <div
                                        className="w-full bg-primary/20 rounded-t-2xl relative group-hover:bg-primary transition-all duration-500"
                                        style={{ height: `${Math.max(20, (d.total / Math.max(...stats.trend.map((t: any) => t.total || 1))) * 100)}%` }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary text-white text-[9px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                            {d.total}€
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-black text-muted uppercase tracking-tighter">{d.day}</span>
                                </div>
                            ))}
                            {/* Baseline */}
                            <div className="absolute bottom-[44px] left-0 right-0 h-px bg-secondary/5" />
                        </div>
                    </BentoCard>

                    {/* Operational Health */}
                    <div className="space-y-6">
                        <BentoCard className="!p-8 border-none shadow-2xl bg-secondary text-white overflow-hidden relative">
                            <Activity className="absolute top-0 right-0 p-8 opacity-[0.05] w-48 h-48 pointer-events-none" />
                            <div className="space-y-6 relative z-10">
                                <h3 className="text-2xl font-black serif italic tracking-tighter">Santé Opérationnelle</h3>

                                <div className="space-y-6 pt-4">
                                    <MetricProgress label="Temps de Prep Moyen" value="14 min" progress={70} color="bg-primary" />
                                    <MetricProgress label="Taux de Rotation" value="2.4x" progress={85} color="bg-green-500" />
                                    <MetricProgress label="Satisfaction Client" value="4.8/5" progress={92} color="bg-blue-500" />
                                </div>
                            </div>
                        </BentoCard>

                        <BentoCard className="!p-8 border-none shadow-xl bg-primary text-white">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Insight IA</p>
                                    <p className="text-sm font-black leading-tight">Le service du midi est 20% plus rentable cette semaine. Pensez à augmenter le staff le mardi.</p>
                                </div>
                            </div>
                        </BentoCard>
                    </div>
                </div>

                {/* Top Sellers — live data */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <BentoCard title="Meilleurs Plats" className="bg-white/60">
                        <div className="space-y-4 mt-2">
                            {analytics?.topPlats?.length > 0 ? analytics.topPlats.map((item: any, i: number) => (
                                <div key={i} className="flex justify-between items-center py-2 border-b border-secondary/5 last:border-0">
                                    <div className="flex gap-3 items-center">
                                        <span className="w-6 h-6 rounded-lg bg-secondary/5 flex items-center justify-center text-[10px] font-black text-secondary">{i + 1}</span>
                                        <div>
                                            <p className="font-black text-secondary text-sm">{item.libelle}</p>
                                            <p className="text-[9px] font-bold text-muted uppercase">{item.count} vente{item.count !== 1 ? 's' : ''}</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-black text-primary">#{i + 1}</span>
                                </div>
                            )) : (
                                <p className="text-[10px] text-muted font-black uppercase tracking-widest py-6 text-center opacity-40">Aucune donnée</p>
                            )}
                        </div>
                    </BentoCard>
                    <BentoCard title="Équipe en Poste" className="bg-white/60">
                        <div className="space-y-4 mt-2">
                            {employes.slice(0, 4).map((emp: any, i: number) => (
                                <div key={i} className="flex justify-between items-center py-2 border-b border-secondary/5 last:border-0">
                                    <div className="flex gap-3 items-center">
                                        <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm serif">
                                            {emp.prenom?.[0]}{emp.nom?.[0]}
                                        </div>
                                        <div>
                                            <p className="font-black text-secondary text-sm">{emp.prenom} {emp.nom}</p>
                                            <p className="text-[9px] font-bold text-muted uppercase">{emp.role}</p>
                                        </div>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </div>
                            ))}
                            {employes.length === 0 && (
                                <p className="text-[10px] text-muted font-black uppercase tracking-widest py-6 text-center opacity-40">Aucun employé</p>
                            )}
                        </div>
                    </BentoCard>
                    <BentoCard title="Revenus par Type" className="bg-secondary text-white">
                        <div className="space-y-6 py-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-black uppercase tracking-widest">Sur place</span>
                                <span className="text-xl font-black text-primary">{stats?.totalTables > 0 ? `${stats.occupancy}%` : '—'}</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${stats?.occupancy || 0}%` }} />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-black uppercase tracking-widest">Tables libres</span>
                                <span className="text-xl font-black text-primary">{stats ? `${stats.totalTables - stats.occupiedTables}/${stats.totalTables}` : '—'}</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-400 transition-all duration-1000" style={{ width: `${stats?.totalTables > 0 ? ((stats.totalTables - stats.occupiedTables) / stats.totalTables * 100) : 0}%` }} />
                            </div>
                            <div className="pt-2 border-t border-white/10">
                                <p className="text-[10px] opacity-60 font-bold uppercase tracking-widest">CA Total</p>
                                <p className="text-2xl font-black">{analytics?.totalRevenue?.toFixed(2) || '0.00'} €</p>
                            </div>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </main>
    );
}

function StatCard({ title, value, icon, trend, positive }: any) {
    return (
        <BentoCard className="!p-8 border-none shadow-xl bg-white/60 relative group hover:scale-[1.02] transition-all duration-500">
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-secondary/5 rounded-2xl text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {icon}
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-black ${positive ? 'text-green-600' : 'text-red-500'}`}>
                    {positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    {trend}
                </div>
            </div>
            <div className="space-y-1">
                <p className="text-[10px] font-black text-muted uppercase tracking-widest">{title}</p>
                <h4 className="text-4xl font-black text-secondary tracking-tighter serif italic leading-none">{value}</h4>
            </div>
        </BentoCard>
    );
}

function MetricProgress({ label, value, progress, color }: any) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-end">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{label}</span>
                <span className="text-sm font-black text-primary">{value}</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${color} transition-all duration-1000`} style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
}
