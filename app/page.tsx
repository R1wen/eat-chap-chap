"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
  Banknote,
  Users,
  ShoppingBag,
  TrendingUp,
  Clock,
  Calendar,
  ChevronRight,
  Plus,
  UtensilsCrossed,
  Loader2,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Link from "next/link";

const FCFA = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n) + " FCFA";

interface StatsData {
  revenue: number;
  activeOrders: number;
  occupancy: number;
  occupiedTables: number;
  totalTables: number;
  trend: { day: string; total: number }[];
  recentReservations: {
    id_reservation: number;
    date_heure: string;
    nb_personnes: number;
    statut: string;
    client: { nom: string };
  }[];
  topPlats: { libelle: string; count: number }[];
  tonightReservations: number;
}

const statusColor: Record<string, string> = {
  "Confirmé": "text-green-600",
  "En attente": "text-accent",
  "Honorée": "text-muted",
  "Annulée": "text-red-500",
};

export default function Dashboard() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const today = new Date();

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((d) => { setStats(d); setLoading(false); });
  }, []);

  const greetingHour = today.getHours();
  const greeting =
    greetingHour < 12 ? "Bonjour" : greetingHour < 18 ? "Bon après-midi" : "Bonsoir";

  const todayStr = today.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (loading) {
    return (
      <main className="min-h-screen pt-24 pb-12 px-8 bg-background flex items-center justify-center">
        <Header />
        <div className="flex flex-col items-center gap-4 text-muted">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
          <p className="text-sm font-bold uppercase tracking-widest">Chargement du tableau de bord�?�</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
      <div className="ambient-glow" />
      <Header />

      <div className="max-w-7xl mx-auto space-y-8 mt-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-1">
            <p className="text-primary font-black uppercase tracking-[0.2em] text-xs capitalize">{todayStr}</p>
            <h2 className="text-5xl font-black text-secondary tracking-tighter serif">
              {greeting}, <span className="text-primary italic">To Eat Chap Chap</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <Link href="/commandes" className="flex items-center gap-2 px-6 py-3 bg-white border border-secondary/10 text-secondary rounded-[8px] font-bold text-xs uppercase tracking-widest hover:bg-secondary/5 transition-all shadow-sm btn-montserrat">
              <Clock className="w-4 h-4" />
              Commandes
            </Link>
            <Link href="/reservations/new" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-[8px] font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-primary/20 btn-montserrat">
              <Plus className="w-4 h-4" />
              Nouvelle Réservation
            </Link>
          </div>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <BentoCard className="flex flex-col justify-between py-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Banknote className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-black text-muted uppercase tracking-widest">Revenue Total</p>
            </div>
            <div className="mt-4">
              <h4 className="text-3xl font-black text-secondary serif">{FCFA(stats!.revenue)}</h4>
              <p className="text-[10px] text-muted font-bold mt-1 uppercase tracking-tighter">Paiements enregistrés</p>
            </div>
          </BentoCard>

          <BentoCard className="flex flex-col justify-between py-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-black text-muted uppercase tracking-widest">Commandes Actives</p>
            </div>
            <div className="mt-4">
              <h4 className="text-4xl font-black text-secondary serif">{stats!.activeOrders}</h4>
              <p className="text-[10px] text-muted font-bold mt-1 uppercase tracking-tighter">En cours de service</p>
            </div>
          </BentoCard>

          <BentoCard className="flex flex-col justify-between py-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-black text-muted uppercase tracking-widest">Occupation</p>
            </div>
            <div className="mt-4">
              <h4 className="text-4xl font-black text-secondary serif">{stats!.occupancy}%</h4>
              <p className="text-[10px] text-muted font-bold mt-1 uppercase tracking-tighter">{stats!.occupiedTables} / {stats!.totalTables} Tables</p>
            </div>
          </BentoCard>

          <BentoCard className="flex flex-col justify-between py-8 border-none bg-primary text-white shadow-xl shadow-primary/20">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/10">
                <Calendar className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Rés. ce soir</p>
            </div>
            <div className="mt-4">
              <h4 className="text-4xl font-black serif">{stats!.tonightReservations}</h4>
              <p className="text-[10px] opacity-80 font-bold mt-1 uppercase tracking-tighter">Prévues après 18h</p>
            </div>
          </BentoCard>
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Reservations */}
            <BentoCard title="Prochaines Réservations" description="Les réservations les plus récentes.">
              <div className="space-y-3 mt-4">
                {stats!.recentReservations.length === 0 ? (
                  <p className="text-sm text-muted text-center py-4">Aucune réservation</p>
                ) : (
                  stats!.recentReservations.map((r) => (
                    <Link
                      key={r.id_reservation}
                      href={`/reservations/${r.id_reservation}`}
                      className="flex items-center justify-between p-4 rounded-xl bg-secondary/5 border border-secondary/5 hover:border-primary/20 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-black text-secondary shadow-sm text-sm">
                          {r.nb_personnes}p
                        </div>
                        <div>
                          <p className="text-sm font-bold text-secondary">{r.client.nom}</p>
                          <p className={`text-[10px] font-black uppercase tracking-tighter ${statusColor[r.statut] ?? "text-muted"}`}>
                            {r.statut} · {new Date(r.date_heure).toLocaleDateString("fr-FR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted" />
                    </Link>
                  ))
                )}
              </div>
              <Link href="/reservations" className="flex items-center justify-center gap-2 mt-4 py-2 rounded-[8px] border border-secondary/10 text-[10px] font-black uppercase tracking-widest text-secondary hover:bg-secondary hover:text-white transition-all">
                Toutes les réservations
              </Link>
            </BentoCard>

            {/* Top Plats */}
            <BentoCard title="Meilleures Ventes" description="Plats les plus commandés.">
              <div className="mt-4 space-y-4">
                {stats!.topPlats.length === 0 ? (
                  <p className="text-sm text-muted text-center py-4">Pas encore de données</p>
                ) : (
                  stats!.topPlats.map((plat, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-bold text-secondary flex items-center gap-2">
                          <span className="text-primary">{i + 1}.</span>
                          {plat.libelle}
                        </p>
                        <p className="text-[10px] text-muted font-black uppercase tracking-widest">{plat.count} commandes</p>
                      </div>
                      <UtensilsCrossed className="w-4 h-4 text-muted" />
                    </div>
                  ))
                )}
              </div>
            </BentoCard>
          </div>

          {/* Right column �?" Chart */}
          <div className="lg:col-span-2 space-y-6">
            <BentoCard title="Performance Hebdomadaire" description="Recettes des 7 derniers jours (en FCFA).">
              <div className="h-[300px] w-full mt-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats!.trend}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      fontSize={10}
                      dy={10}
                      stroke="#7f8c8d"
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      fontSize={10}
                      stroke="#7f8c8d"
                      tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                    />
                    <Tooltip
                      contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                      formatter={(v: number) => [FCFA(v), "Recette"]}
                    />
                    <Bar dataKey="total" fill="#B85C38" radius={[6, 6, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </BentoCard>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-6">
              <BentoCard title="Accès Rapides" description="Modules de service.">
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { label: "Point de Vente", href: "/pos" },
                    { label: "Cuisine (KDS)", href: "/admin/kds" },
                    { label: "Caisse", href: "/caisse" },
                    { label: "Menu", href: "/menu" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-center py-3 rounded-xl bg-secondary/5 border border-secondary/5 hover:border-primary/20 hover:bg-primary/5 text-[10px] font-black uppercase tracking-widest text-secondary transition-all text-center"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </BentoCard>

              <BentoCard title="Statistiques Live" description="Données en temps réel.">
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-secondary/5">
                    <p className="text-xs font-bold text-secondary">Tables occupées</p>
                    <p className="text-sm font-black text-primary">{stats!.occupiedTables} / {stats!.totalTables}</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-secondary/5">
                    <p className="text-xs font-bold text-secondary">Commandes actives</p>
                    <p className="text-sm font-black text-primary">{stats!.activeOrders}</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-secondary/5">
                    <p className="text-xs font-bold text-secondary">Rés. ce soir</p>
                    <p className="text-sm font-black text-primary">{stats!.tonightReservations}</p>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <p className="text-xs font-bold text-secondary">Meilleur plat</p>
                    <p className="text-sm font-black text-primary truncate max-w-[120px]">
                      {stats!.topPlats[0]?.libelle ?? ""}
                    </p>
                  </div>
                </div>
              </BentoCard>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
