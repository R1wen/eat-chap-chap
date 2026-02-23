"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
    Calendar,
    Clock,
    Users,
    Trash2,
    CheckCircle2,
    XCircle,
    ChevronLeft,
    Edit,
    MapPin,
    UtensilsCrossed,
    Phone,
    Mail
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ReservationDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    const router = useRouter();
    const [reservation, setReservation] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReservation();
    }, [id]);

    const fetchReservation = async () => {
        try {
            const res = await fetch(`/api/reservations/${id}`);
            const data = await res.json();
            setReservation(data);
        } catch (error) {
            console.error("Failed to fetch reservation", error);
        }
        setLoading(false);
    };

    const updateStatus = async (status: string) => {
        try {
            await fetch(`/api/reservations/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ statut: status })
            });
            fetchReservation();
        } catch (error) {
            console.error("Failed to update status", error);
        }
    };

    if (loading) return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
            <Header />
            <div className="max-w-4xl mx-auto py-12 space-y-8">
                <div className="h-64 glass rounded-[40px] animate-pulse" />
            </div>
        </main>
    );

    if (!reservation) return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
            <Header />
            <div className="max-w-4xl mx-auto py-12 text-center">
                <h2 className="text-3xl font-black text-secondary serif italic">Réservation introuvable.</h2>
                <Link href="/reservations" className="text-primary font-black uppercase text-xs tracking-widest underline mt-4 inline-block">Retour au carnet</Link>
            </div>
        </main>
    );

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background font-sans">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-5xl mx-auto space-y-8 mt-8">
                {/* Navigation & Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-4">
                        <Link href="/reservations" className="group flex items-center gap-2 text-muted hover:text-secondary transition-colors">
                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-black uppercase text-[10px] tracking-widest">Retour au carnet</span>
                        </Link>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Commande #{reservation.id_reservation}</p>
                            <h2 className="text-6xl font-black text-secondary tracking-tighter serif italic leading-none">
                                {reservation.client?.nom}
                            </h2>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-secondary/5 text-secondary rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">
                            <Edit className="w-4 h-4" /> Modifier
                        </button>
                        <button
                            onClick={() => updateStatus("Annulée")}
                            className="flex items-center gap-2 px-6 py-3 bg-red-500/10 text-red-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
                        >
                            <XCircle className="w-4 h-4" /> Annuler
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Details (Col 2) */}
                    <div className="lg:col-span-2 space-y-8">
                        <BentoCard className="!p-10 border-none shadow-2xl bg-white/60 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                                <UtensilsCrossed className="w-48 h-48 text-secondary" />
                            </div>

                            <div className="space-y-10 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted">Statut Actuel</label>
                                        <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl border-2 font-black text-xs uppercase tracking-widest 
                                            ${reservation.statut === 'Confirmée' ? 'border-green-500/20 bg-green-500/10 text-green-600' : 'border-primary/20 bg-primary/10 text-primary'}`}>
                                            <span className="w-3 h-3 rounded-full bg-current animate-pulse" />
                                            {reservation.statut}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted">Assignation Table</label>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-lg font-black text-secondary">Table {reservation.tables?.[0]?.numero || "Non assignée"}</p>
                                                <p className="text-[10px] font-black text-muted uppercase tracking-widest">{reservation.tables?.[0]?.zone || "Entrée"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-secondary/5">
                                    <div className="space-y-2 text-center md:text-left">
                                        <p className="text-[10px] font-black text-muted uppercase tracking-widest">Jour</p>
                                        <div className="flex items-center justify-center md:justify-start gap-2">
                                            <Calendar className="w-4 h-4 text-primary" />
                                            <span className="font-sans font-black text-secondary">{new Date(reservation.date_heure).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-center md:text-left">
                                        <p className="text-[10px] font-black text-muted uppercase tracking-widest">Heure</p>
                                        <div className="flex items-center justify-center md:justify-start gap-2">
                                            <Clock className="w-4 h-4 text-primary" />
                                            <span className="font-sans font-black text-secondary">{new Date(reservation.date_heure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-center md:text-left">
                                        <p className="text-[10px] font-black text-muted uppercase tracking-widest">Couverts</p>
                                        <div className="flex items-center justify-center md:justify-start gap-2">
                                            <Users className="w-4 h-4 text-primary" />
                                            <span className="font-sans font-black text-secondary">{reservation.nb_personnes} Personnes</span>
                                        </div>
                                    </div>
                                </div>

                                {reservation.statut !== "Honorée" && (
                                    <div className="pt-6">
                                        <button
                                            onClick={() => updateStatus("Honorée")}
                                            className="w-full py-6 bg-primary text-white rounded-[32px] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                                        >
                                            <CheckCircle2 className="w-6 h-6" /> Marquer comme Honorée
                                        </button>
                                    </div>
                                )}
                            </div>
                        </BentoCard>

                        {/* Recent History or Notes (Mock) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <BentoCard title="Notes de service" className="bg-secondary text-white space-y-4 border-none shadow-xl">
                                <p className="text-sm italic opacity-80 serif">"Client apprécie particulièrement la table près de la fenêtre. Anniversaire de mariage à souligner si possible."</p>
                                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[9px] font-black uppercase tracking-widest opacity-60">
                                    <span>Par Marie (Serveur)</span>
                                    <span>Il y a 2h</span>
                                </div>
                            </BentoCard>
                            <BentoCard title="Historique Client" className="bg-white/60 space-y-4 border-none shadow-xl">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-[10px]">
                                        <span className="font-black text-secondary uppercase tracking-widest">Dernier passage</span>
                                        <span className="text-muted">12 Janvier 2026</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px]">
                                        <span className="font-black text-secondary uppercase tracking-widest">Total visites</span>
                                        <span className="text-primary font-bold">14 passages</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px]">
                                        <span className="font-black text-secondary uppercase tracking-widest">Panier Moyen</span>
                                        <span className="text-secondary font-bold">42,50 FCFA</span>
                                    </div>
                                </div>
                            </BentoCard>
                        </div>
                    </div>

                    {/* Sidebar Contact (Col 1) */}
                    <div className="space-y-8">
                        <BentoCard className="!p-8 border-none shadow-2xl bg-secondary text-white overflow-hidden relative">
                            <div className="space-y-6 relative z-10">
                                <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-primary text-4xl font-serif italic font-black mx-auto">
                                    {reservation.client?.nom?.charAt(0)}
                                </div>
                                <div className="text-center space-y-1">
                                    <h5 className="text-2xl font-black serif tracking-tight">{reservation.client?.nom}</h5>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Client Fidèle</p>
                                </div>

                                <div className="space-y-4 pt-6 border-t border-white/5">
                                    <a href={`tel:${reservation.client?.telephone}`} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-bold font-sans">{reservation.client?.telephone || "Non renseigné"}</span>
                                    </a>
                                    <a href={`mailto:${reservation.client?.email}`} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-bold font-sans opacity-80 truncate">{reservation.client?.email || "Pas d'email"}</span>
                                    </a>
                                </div>

                                <button className="w-full py-4 bg-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">
                                    Voir Fiche Client Complete
                                </button>
                            </div>
                        </BentoCard>

                        <BentoCard title="Alerte Allergies" className="bg-red-500 text-white border-none shadow-xl shadow-red-500/20">
                            <div className="flex items-start gap-4">
                                <AlertCircle className="w-6 h-6 flex-shrink-0" />
                                <p className="text-xs font-black uppercase tracking-widest leading-relaxed">
                                    Attention : Intolérance au lactose signalée sur ce profil.
                                </p>
                            </div>
                        </BentoCard>
                    </div>
                </div>
            </div>
        </main>
    );
}

function AlertCircle(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    )
}
