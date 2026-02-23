"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { Users, MapPin, Plus, Calendar, Clock, ChevronRight, UserCircle, X, CheckCircle2, Loader2, XCircle } from "lucide-react";

export default function TablesPage() {
    const [tables, setTables] = useState<any[]>([]);
    const [reservations, setReservations] = useState<any[]>([]);
    const [employes, setEmployes] = useState<any[]>([]);
    const [activeService, setActiveService] = useState('Soir');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTable, setNewTable] = useState({ numero: '', capacite: 2, zone: 'Salle Centrale' });
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState<{ msg: string; type: "ok" | "err" } | null>(null);

    useEffect(() => { loadAll(); }, []);

    const showToast = (msg: string, type: "ok" | "err") => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 3000);
    };

    const loadAll = async () => {
        try {
            const [tRes, rRes, eRes] = await Promise.all([
                fetch("/api/tables"),
                fetch("/api/reservations"),
                fetch("/api/employes")
            ]);
            const tData = await tRes.json();
            const rData = await rRes.json();
            const eData = await eRes.json();
            if (Array.isArray(tData)) setTables(tData);
            if (Array.isArray(rData)) {
                // Sort by closest time and show upcoming only
                const upcoming = rData
                    .filter((r: any) => new Date(r.date_heure) >= new Date())
                    .sort((a: any, b: any) => new Date(a.date_heure).getTime() - new Date(b.date_heure).getTime())
                    .slice(0, 8);
                setReservations(upcoming);
            }
            if (Array.isArray(eData)) setEmployes(eData);
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddTable = async () => {
        if (!newTable.numero) { showToast("Numéro de table obligatoire", "err"); return; }
        setSaving(true);
        try {
            const res = await fetch("/api/tables", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    numero: Number(newTable.numero),
                    capacite: Number(newTable.capacite),
                    zone: newTable.zone
                })
            });
            const data = await res.json();
            if (res.ok) {
                setTables([...tables, data]);
                setIsModalOpen(false);
                setNewTable({ numero: '', capacite: 2, zone: 'Salle Centrale' });
                showToast(`Table n°${newTable.numero} ajoutée !`, "ok");
            } else {
                showToast(data.error || "Erreur lors de la création", "err");
            }
        } catch {
            showToast("Erreur réseau", "err");
        }
        setSaving(false);
    };

    const formatReservTime = (dateStr: string) => {
        const d = new Date(dateStr);
        return d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
    };

    const formatReservDate = (dateStr: string) => {
        const d = new Date(dateStr);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        if (d.toDateString() === today.toDateString()) return "Aujourd'hui";
        if (d.toDateString() === tomorrow.toDateString()) return "Demain";
        return d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
    };

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background font-sans">
            <div className="ambient-glow" />
            <Header />

            {toast && (
                <div className={`fixed top-28 right-8 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl font-black text-sm animate-in slide-in-from-right ${toast.type === "ok" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                    {toast.type === "ok" ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    {toast.msg}
                </div>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-secondary/40 backdrop-blur-sm p-4">
                    <div className="max-w-md w-full p-8 bg-white rounded-[32px] shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 text-muted hover:text-secondary rounded-xl hover:bg-secondary/5 transition-all">
                            <X className="w-6 h-6" />
                        </button>
                        <h3 className="text-3xl font-black text-secondary serif italic mb-8">Ajouter une <span className="text-primary not-italic">Table</span></h3>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Numéro de table *</label>
                                <input type="number" placeholder="Ex: 15" className="w-full p-5 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary text-lg"
                                    value={newTable.numero} onChange={e => setNewTable({ ...newTable, numero: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Capacité (personnes)</label>
                                <input type="number" className="w-full p-5 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary text-lg"
                                    value={newTable.capacite} onChange={e => setNewTable({ ...newTable, capacite: Number(e.target.value) })} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Zone du restaurant</label>
                                <select className="w-full p-5 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary text-lg appearance-none cursor-pointer"
                                    value={newTable.zone} onChange={e => setNewTable({ ...newTable, zone: e.target.value })}>
                                    <option>Salle Centrale</option>
                                    <option>Terrasse</option>
                                    <option>Fenêtre</option>
                                    <option>Coin Intime</option>
                                    <option>Bar</option>
                                </select>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button onClick={() => setIsModalOpen(false)} className="flex-1 py-5 text-xs font-black uppercase tracking-widest text-muted hover:text-secondary transition-colors">Annuler</button>
                                <button onClick={handleAddTable} disabled={saving} className="flex-1 py-5 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-60">
                                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-1">
                        <h2 className="text-5xl font-black text-secondary tracking-tighter serif">
                            Plan de <span className="text-primary italic">Salle</span>
                        </h2>
                        <p className="text-muted font-medium">Visualisation interactive et occupation en temps réel.</p>
                    </div>

                    <div className="flex gap-4">
                        <div className="glass p-1 rounded-[12px] flex gap-1 border-secondary/10">
                            {['Matin', 'Midi', 'Soir'].map(s => (
                                <button key={s} onClick={() => setActiveService(s)}
                                    className={`px-4 py-2 rounded-[8px] text-[10px] font-black uppercase tracking-widest transition-all ${s === activeService ? 'bg-secondary text-white' : 'text-muted hover:bg-secondary/5'}`}>
                                    {s}
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-[8px] font-bold text-xs uppercase tracking-widest hover:opacity-90 shadow-lg shadow-primary/20">
                            <Plus className="w-4 h-4" /> Table
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Floor Plan */}
                    <BentoCard className="lg:col-span-2 min-h-[600px] border-none shadow-xl bg-white/40 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-4 flex gap-4 text-[10px] font-black uppercase tracking-widest text-muted">
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500" /> Libre</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /> Occupée</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500" /> Réservée</div>
                        </div>

                        <div className="h-full w-full grid grid-cols-4 md:grid-cols-6 gap-6 p-8 content-start relative z-10">
                            {tables.map((table) => {
                                let status = 'free';
                                if (table.commandes && table.commandes.length > 0) status = 'occupied';
                                else if (table.reservations && table.reservations.length > 0) status = 'reserved';

                                const statusColor = status === 'free' ? 'bg-green-500' : (status === 'occupied' ? 'bg-red-500' : 'bg-blue-500');

                                return (
                                    <div key={table.id_table} className="group relative">
                                        <button className={`w-full aspect-square rounded-[32px] glass border-2 transition-all flex flex-col items-center justify-center gap-1 hover:scale-110 hover:-rotate-2 ${status === 'free' ? 'border-green-500/20' : (status === 'occupied' ? 'border-red-500/30 shadow-lg shadow-red-500/10' : 'border-blue-500/30 shadow-lg shadow-blue-500/10')}`}>
                                            <div className={`w-4 h-4 rounded-full ${statusColor} shadow-lg absolute -top-1 -right-1 z-10`} />
                                            <span className="text-[9px] font-black text-muted uppercase tracking-tighter opacity-60">Table</span>
                                            <span className="text-4xl font-black text-secondary serif leading-none">{table.numero}</span>
                                            <span className="text-[8px] font-black text-primary/60 uppercase tracking-widest">{table.capacite} Pers</span>
                                        </button>
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-all z-30 pointer-events-none scale-95 group-hover:scale-100">
                                            <div className="glass p-4 rounded-2xl text-[10px] whitespace-nowrap shadow-2xl border-secondary/10 min-w-[140px]">
                                                <p className="font-black text-secondary uppercase tracking-widest mb-2 border-b border-secondary/5 pb-1">{table.zone || "Non définie"}</p>
                                                <div className="space-y-1 text-muted font-bold">
                                                    <div className="flex justify-between items-center gap-4">
                                                        <span>Service</span>
                                                        <span className="text-primary">{activeService}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center gap-4">
                                                        <span>Status</span>
                                                        <span className={status === 'free' ? 'text-green-500' : (status === 'occupied' ? 'text-red-500' : 'text-blue-500')}>
                                                            {status === 'free' ? 'Libre' : (status === 'occupied' ? 'Occupée' : 'Réservée')}
                                                        </span>
                                                    </div>
                                                </div>
                                                {status === 'occupied' && (
                                                    <div className="mt-3 pt-2 border-t border-secondary/5 flex justify-between items-center text-red-500 font-black animate-pulse">
                                                        <span>TICKET ACTIF</span>
                                                        <Clock className="w-3 h-3" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </BentoCard>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <BentoCard title="Prochaines Arrivées" className="border-none shadow-xl bg-white/60">
                            <div className="space-y-3 mt-4">
                                {reservations.length === 0 ? (
                                    <div className="text-center py-8 opacity-30">
                                        <Calendar className="w-10 h-10 mx-auto mb-2 text-muted" />
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted">Aucune réservation à venir</p>
                                    </div>
                                ) : reservations.map((res, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-secondary/5 border border-secondary/5 hover:border-primary/20 transition-all">
                                        <div className="flex items-center gap-3">
                                            <div className="text-center font-black text-primary min-w-[45px]">
                                                <p className="text-[9px] text-muted uppercase font-bold">{formatReservDate(res.date_heure)}</p>
                                                <p className="text-sm">{formatReservTime(res.date_heure)}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-secondary">{res.client?.nom || "Client"}</p>
                                                <p className="text-[10px] text-muted uppercase font-black">{res.nb_personnes} pers</p>
                                            </div>
                                        </div>
                                        <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${res.statut === "Confirmée" ? "bg-green-500/10 text-green-600" : "bg-yellow-500/10 text-yellow-600"}`}>
                                            {res.statut}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </BentoCard>

                        <BentoCard title="Équipe en Service" className="border-none shadow-xl bg-white/60">
                            <div className="space-y-3 mt-4">
                                {employes.slice(0, 4).map((emp, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl glass border-secondary/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center font-black text-primary text-sm serif">
                                                {emp.prenom?.[0]}{emp.nom?.[0]}
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-secondary">{emp.prenom} {emp.nom}</p>
                                                <p className="text-[10px] text-muted font-black uppercase">{emp.role}</p>
                                            </div>
                                        </div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-lg shadow-green-500/30" />
                                    </div>
                                ))}
                                {employes.length === 0 && (
                                    <div className="text-center py-6 opacity-30">
                                        <UserCircle className="w-10 h-10 mx-auto mb-2 text-muted" />
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted">Aucun employé</p>
                                    </div>
                                )}
                            </div>
                        </BentoCard>
                    </div>
                </div>
            </div>
        </main>
    );
}
