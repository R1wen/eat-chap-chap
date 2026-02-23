"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
    Calendar,
    Clock,
    Users,
    Plus,
    Search,
    Filter,
    ChevronRight,
    CheckCircle2,
    XCircle,
    AlertCircle,
    UtensilsCrossed
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ReservationsPage() {
    const router = useRouter();
    const [reservations, setReservations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/reservations");
            const data = await res.json();
            setReservations(data);
        } catch (error) {
            console.error("Failed to fetch reservations", error);
        }
        setLoading(false);
    };

    const updateStatus = async (id: number, status: string) => {
        try {
            await fetch(`/api/reservations/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ statut: status })
            });
            fetchReservations();
        } catch (error) {
            console.error("Failed to update status", error);
        }
    };

    const convertToOrder = async (resId: number) => {
        try {
            const resp = await fetch(`/api/reservations/${resId}/convert`, {
                method: "POST"
            });
            if (resp.ok) {
                const order = await resp.json();
                router.push(`/commandes/${order.id_commande}`);
            }
        } catch (error) {
            console.error("Conversion failed", error);
        }
    };

    const filteredReservations = reservations.filter(res => {
        const matchesSearch = res.client?.nom?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            res.id_reservation.toString().includes(searchQuery);
        const matchesStatus = filterStatus === "All" || res.statut === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Confirmée": return "bg-green-500/10 text-green-600 border-green-500/20";
            case "Annulée": return "bg-red-500/10 text-red-600 border-red-500/20";
            case "Honorée": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
            default: return "bg-primary/10 text-primary border-primary/20";
        }
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
                            Carnet de <span className="text-primary italic">Réservations</span>
                        </h2>
                        <p className="text-muted font-medium text-lg">Gérez l'accueil et le flux de vos convives.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="glass p-1 rounded-[12px] flex gap-1 border-secondary/10 mr-4">
                            <button className="px-4 py-2 rounded-[8px] text-[10px] font-black uppercase tracking-widest bg-secondary text-white">Liste</button>
                            <Link href="/reservations/calendar">
                                <button className="px-4 py-2 rounded-[8px] text-[10px] font-black uppercase tracking-widest text-muted hover:bg-secondary/5 transition-all">Calendrier</button>
                            </Link>
                        </div>
                        <Link href="/reservations/new">
                            <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30">
                                <Plus className="w-5 h-5" /> Nouvelle Table
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-2 relative drop-shadow-sm">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                        <input
                            type="text"
                            placeholder="Rechercher un client ou un numéro..."
                            className="w-full pl-14 pr-6 py-5 bg-white border border-secondary/5 rounded-3xl outline-none focus:border-primary transition-all font-bold text-secondary"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="relative drop-shadow-sm">
                        <Filter className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                        <select
                            className="w-full pl-14 pr-10 py-5 bg-white border border-secondary/5 rounded-3xl outline-none focus:border-primary transition-all font-black uppercase text-[10px] tracking-widest text-secondary appearance-none cursor-pointer"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="All">Tous les Statuts</option>
                            <option value="En attente">En attente</option>
                            <option value="Confirmée">Confirmée</option>
                            <option value="Annulée">Annulée</option>
                            <option value="Honorée">Honorée</option>
                        </select>
                        <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted rotate-90" />
                    </div>

                    <div className="relative drop-shadow-sm">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                        <input
                            type="date"
                            className="w-full pl-14 pr-6 py-5 bg-white border border-secondary/5 rounded-3xl outline-none focus:border-primary transition-all font-black uppercase text-[10px] tracking-widest text-secondary"
                        />
                    </div>
                </div>

                {/* Grid of Reservations */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {loading ? (
                        [1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="h-64 glass rounded-[40px] animate-pulse" />
                        ))
                    ) : filteredReservations.length > 0 ? (
                        filteredReservations.map((res) => (
                            <BentoCard key={res.id_reservation} className="group hover:scale-[1.02] transition-all duration-500 border-none shadow-xl bg-white/60 backdrop-blur-xl relative overflow-hidden">
                                {/* Status Badge */}
                                <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border ${getStatusColor(res.statut)}`}>
                                    {res.statut}
                                </div>

                                <div className="space-y-6 pt-2">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Convive #{res.id_reservation}</p>
                                        <h4 className="text-3xl font-black text-secondary serif italic tracking-tighter">{res.client?.nom}</h4>
                                        <p className="text-[11px] font-bold text-muted flex items-center gap-2">
                                            {res.client?.telephone || "Sans téléphone"}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-3xl bg-secondary/5 space-y-1">
                                            <p className="text-[9px] font-black text-muted uppercase tracking-widest">Date & Heure</p>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-primary" />
                                                <span className="text-sm font-black text-secondary">
                                                    {new Date(res.date_heure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                            <p className="text-[10px] font-bold text-muted">
                                                {new Date(res.date_heure).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                                            </p>
                                        </div>
                                        <div className="p-4 rounded-3xl bg-primary/[0.03] space-y-1">
                                            <p className="text-[9px] font-black text-muted uppercase tracking-widest">Répartition</p>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-primary" />
                                                <span className="text-sm font-black text-secondary">{res.nb_personnes} Pers.</span>
                                            </div>
                                            <p className="text-[10px] font-bold text-muted capitalize">
                                                {res.tables?.length > 0 ? `Zone: ${res.tables[0].zone}` : "Table non assignée"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-3 pt-2">
                                        {res.statut === "En attente" && (
                                            <button
                                                onClick={() => updateStatus(res.id_reservation, "Confirmée")}
                                                className="flex-1 py-4 bg-green-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
                                            >
                                                Confirmer
                                            </button>
                                        )}
                                        {res.statut === "Confirmée" && (
                                            <button
                                                onClick={() => convertToOrder(res.id_reservation)}
                                                className="flex-1 py-4 bg-blue-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                                            >
                                                <UtensilsCrossed className="w-3 h-3" /> Commande
                                            </button>
                                        )}
                                        <button
                                            onClick={() => updateStatus(res.id_reservation, "Annulée")}
                                            className="px-6 py-4 bg-secondary/10 text-secondary rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
                                        >
                                            <XCircle className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </BentoCard>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center space-y-4">
                            <AlertCircle className="w-16 h-16 text-muted mx-auto opacity-20" />
                            <p className="text-xl font-black text-secondary serif italic">Aucune réservation pour ce créneau.</p>
                            <button onClick={() => setFilterStatus("All")} className="text-primary font-black uppercase text-xs tracking-widest underline underline-offset-8">Voir tout</button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
