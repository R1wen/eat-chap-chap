"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import SchemaVisualizer from "@/components/ui/SchemaVisualizer";
import {
  DollarSign,
  Users,
  ShoppingBag,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronRight,
  Plus,
  Coffee,
  CheckCircle2,
  AlertCircle
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

const data = [
  { name: "Lun", value: 1200 },
  { name: "Mar", value: 1800 },
  { name: "Mer", value: 1400 },
  { name: "Jeu", value: 2200 },
  { name: "Ven", value: 3100 },
  { name: "Sam", value: 3800 },
  { name: "Dim", value: 3200 },
];

export default function Dashboard() {
  const [stats, setStats] = useState<any>({
    revenue: 0,
    activeOrders: 0,
    occupancy: 0,
    occupiedTables: 0,
    totalTables: 0,
    recentReservations: []
  });

  useEffect(() => {
    fetch("/api/stats")
      .then(res => res.json())
      .then(setStats);
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
      <div className="ambient-glow" />
      <Header />

      <div className="max-w-7xl mx-auto space-y-8 mt-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-1">
            <p className="text-primary font-black uppercase tracking-[0.2em] text-xs">Aujourd'hui, 23 Février 2026</p>
            <h2 className="text-5xl font-black text-secondary tracking-tighter serif">
              Bonjour, <span className="text-primary italic">Marie</span> 👋
            </h2>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-secondary/10 text-secondary rounded-[8px] font-bold text-xs uppercase tracking-widest hover:bg-secondary/5 transition-all shadow-sm btn-montserrat">
              <Clock className="w-4 h-4" />
              Historique
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-[8px] font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-primary/20 btn-montserrat">
              <Plus className="w-4 h-4" />
              Nouvelle Réservation
            </button>
          </div>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <BentoCard className="flex flex-col justify-between py-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <DollarSign className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-black text-muted uppercase tracking-widest">Revenue (Total)</p>
            </div>
            <div className="mt-4">
              <h4 className="text-4xl font-black text-secondary serif">{stats.revenue.toLocaleString()} €</h4>
              <p className="text-[10px] text-green-600 font-bold flex items-center gap-1 mt-1 outline-none">
                <TrendingUp className="w-3 h-3" /> +12% vs hier
              </p>
            </div>
          </BentoCard>

          <BentoCard className="flex flex-col justify-between py-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-black text-muted uppercase tracking-widest">Commandes Actives</p>
            </div>
            <div className="mt-4">
              <h4 className="text-4xl font-black text-secondary serif">{stats.activeOrders}</h4>
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
              <h4 className="text-4xl font-black text-secondary serif">{stats.occupancy}%</h4>
              <p className="text-[10px] text-muted font-bold mt-1 uppercase tracking-tighter">{stats.occupiedTables} / {stats.totalTables} Tables</p>
            </div>
          </BentoCard>

          <BentoCard
            className="flex flex-col justify-between py-8 border-none bg-primary text-white shadow-xl shadow-primary/20"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/10">
                <Calendar className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Prochaines Rés.</p>
            </div>
            <div className="mt-4">
              <h4 className="text-4xl font-black serif">3</h4>
              <p className="text-[10px] opacity-80 font-bold mt-1 uppercase tracking-tighter">Prévues ce soir</p>
            </div>
          </BentoCard>
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Marie's Tables & Tasks */}
          <div className="lg:col-span-1 space-y-6">
            <BentoCard title="Mes Tables" description="État de votre zone de service.">
              <div className="space-y-3 mt-4">
                {[
                  { num: 2, guests: 4, status: "Prise", color: "text-primary" },
                  { num: 4, guests: 2, status: "En attente", color: "text-accent" },
                  { num: 8, guests: 6, status: "Réservation 20h", color: "text-secondary" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-secondary/5 border border-secondary/5 hover:border-primary/20 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-black text-secondary shadow-sm">
                        {t.num}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-secondary">{t.guests} pers.</p>
                        <p className={`text-[10px] font-black uppercase tracking-tighter ${t.color}`}>{t.status}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted" />
                  </div>
                ))}
              </div>
            </BentoCard>

            <BentoCard title="Tâches" description="Priorités immédiates.">
              <div className="space-y-4 mt-4">
                {[
                  { task: "Apporter pain table 2", done: false },
                  { task: "Préparer anniversaire table 8", done: false },
                  { task: "Valider départ table 4", done: true },
                ].map((task, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {task.done ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <div className="w-5 h-5 rounded-md border-2 border-secondary/20 hover:border-primary transition-colors cursor-pointer" />
                    )}
                    <span className={`text-sm font-medium ${task.done ? 'text-muted line-through' : 'text-secondary'}`}>
                      {task.task}
                    </span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>

          {/* Analytics Hub */}
          <div className="lg:col-span-2 space-y-6">
            <BentoCard title="Performance Hebdomadaire" description="Comparaison des recettes journalières.">
              <div className="h-[250px] w-full mt-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                    <XAxis
                      dataKey="name"
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
                    />
                    <Tooltip
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    />
                    <Bar dataKey="value" fill="#B85C38" radius={[6, 6, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </BentoCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BentoCard title="Meilleures Ventes" description="Plats les plus populaires.">
                <div className="mt-4 space-y-4">
                  {[
                    { name: "Entrecôte 300g", qty: 28, rev: "784 €" },
                    { name: "Risotto aux Cèpes", qty: 22, rev: "396 €" },
                    { name: "Tarte Tatin", qty: 18, rev: "162 €" },
                  ].map((plat, i) => (
                    <div key={i} className="flex justify-between items-center group cursor-pointer">
                      <div>
                        <p className="text-sm font-bold text-secondary flex items-center gap-2">
                          <span className="text-primary">{i + 1}.</span>
                          {plat.name}
                        </p>
                        <p className="text-[10px] text-muted font-black uppercase tracking-widest">{plat.qty} unités</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-black text-secondary">{plat.rev}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </BentoCard>

              <BentoCard title="Alertes Stock" className="border-l-4 border-l-accent">
                <div className="mt-4 space-y-4">
                  {[
                    { item: "Filet de Boeuf", qty: "2.5kg restant", urgent: true },
                    { item: "Saumon Frais", qty: "3kg restant", urgent: false },
                  ].map((a, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <AlertCircle className={`w-5 h-5 ${a.urgent ? 'text-primary' : 'text-accent'}`} />
                      <div>
                        <p className="text-sm font-bold text-secondary">{a.item}</p>
                        <p className="text-[10px] text-muted uppercase font-black">{a.qty}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 rounded-[8px] border border-secondary/10 text-[10px] font-black uppercase tracking-widest text-secondary hover:bg-secondary hover:text-white transition-all">
                  Commander du stock
                </button>
              </BentoCard>
            </div>
            <SchemaVisualizer />
          </div>
        </div>
      </div>
    </main>
  );
}
