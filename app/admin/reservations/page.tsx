"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { Calendar, Clock, Users, Plus, Trash2, CheckCircle, XCircle, Search } from "lucide-react";

export default function ReservationsPage() {
    const [reservations, setReservations] = useState<any[]>([]);
    const [clients, setClients] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Form state
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        id_client: "",
        date_heure: "",
        nb_personnes: 2,
    });

    useEffect(() => {
        refreshData();
    }, []);

    const refreshData = async () => {
        setLoading(true);
        const [resRes, resCli] = await Promise.all([
            fetch("/api/reservations"),
            fetch("/api/clients")
        ]);
        setReservations(await resRes.json());
        setClients(await resCli.json());
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/reservations", {
                method: "POST",
                body: JSON.stringify({
                    ...formData,
                    id_client: Number(formData.id_client),
                    date_heure: new Date(formData.date_heure).toISOString()
                })
            });
            if (res.ok) {
                setShowForm(false);
                refreshData();
            }
        } catch (err) { console.error(err); }
    };

    const updateStatus = async (id: number, status: string) => {
        try {
            await fetch(`/api/reservations/${id}`, {
                method: "PATCH",
                body: JSON.stringify({ statut: status })
            });
            refreshData();
        } catch (err) { console.error(err); }
    };

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                <div className="flex justify-between items-end">
                    <div className="space-y-1">
                        <h2 className="text-5xl font-black text-secondary tracking-tighter serif">
                            Gestions des <span className="text-primary italic">Réservations</span>
                        </h2>
                        <p className="text-muted font-medium">Planification et accueil des convives.</p>
                    </div>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-[12px] font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-primary/20"
                    >
                        <Plus className="w-4 h-4" /> Nouvelle Réservation
                    </button>
                </div>

                {showForm && (
                    <BentoCard className="!p-8 bg-secondary text-white border-none shadow-2xl">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Client</label>
                                <select
                                    className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-primary"
                                    value={formData.id_client}
                                    required
                                    onChange={(e) => setFormData({ ...formData, id_client: e.target.value })}
                                >
                                    <option value="" className="text-secondary">Choisir un client...</option>
                                    {clients.map(c => <option key={c.id_client} value={c.id_client} className="text-secondary">{c.nom}</option>)}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Date & Heure</label>
                                <input
                                    type="datetime-local"
                                    className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-primary"
                                    required
                                    onChange={(e) => setFormData({ ...formData, date_heure: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Personnes</label>
                                <input
                                    type="number"
                                    className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-primary"
                                    value={formData.nb_personnes}
                                    min="1"
                                    onChange={(e) => setFormData({ ...formData, nb_personnes: Number(e.target.value) })}
                                />
                            </div>
                            <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em]">Confirmer</button>
                        </form>
                    </BentoCard>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading ? (
                        [1, 2, 3].map(i => <div key={i} className="h-48 glass rounded-[32px] animate-pulse" />)
                    ) : (
                        reservations.map((res) => (
                            <BentoCard key={res.id_reservation} className="relative group overflow-hidden">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${res.statut === 'Confirmé' ? 'bg-green-500/10 text-green-600' : 'bg-primary/10 text-primary'}`}>
                                            {res.statut}
                                        </div>
                                        <span className="text-[10px] font-black text-muted">#{res.id_reservation}</span>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-secondary italic serif leading-tight">{res.client?.nom}</h4>
                                        <p className="text-[10px] text-muted font-black uppercase tracking-tighter mt-1">{res.client?.telephone}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-secondary/5">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3 h-3 text-primary" />
                                            <span className="text-[10px] font-black text-secondary">{new Date(res.date_heure).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3 h-3 text-primary" />
                                            <span className="text-[10px] font-black text-secondary">{new Date(res.date_heure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-3 h-3 text-primary" />
                                            <span className="text-[10px] font-black text-secondary">{res.nb_personnes} Convives</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {res.statut === 'En attente' && (
                                            <button onClick={() => updateStatus(res.id_reservation, 'Confirmé')} className="flex-1 py-2 bg-green-500/10 text-green-600 rounded-lg text-[8px] font-black uppercase hover:bg-green-500 hover:text-white transition-all">Confirmer</button>
                                        )}
                                        <button onClick={() => updateStatus(res.id_reservation, 'Annulé')} className="flex-1 py-2 bg-red-500/10 text-red-600 rounded-lg text-[8px] font-black uppercase hover:bg-red-500 hover:text-white transition-all">Annuler</button>
                                    </div>
                                </div>
                            </BentoCard>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
}
