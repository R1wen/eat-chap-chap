"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
    Users,
    Calendar,
    Clock,
    ChevronRight,
    UserPlus,
    CheckCircle2,
    MapPin,
    ChevronLeft,
    Sparkles
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewReservationPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [clients, setClients] = useState<any[]>([]);
    const [tables, setTables] = useState<any[]>([]);
    const [suggestedTable, setSuggestedTable] = useState<any>(null);

    const [formData, setFormData] = useState({
        id_client: "",
        date: "",
        time: "",
        nb_personnes: 2,
        id_table: ""
    });

    useEffect(() => {
        const loadInitialData = async () => {
            const [cRes, tRes] = await Promise.all([
                fetch("/api/clients"),
                fetch("/api/tables")
            ]);
            setClients(await cRes.json());
            setTables(await tRes.json());
        };
        loadInitialData();
    }, []);

    const findSuggestedTable = () => {
        if (!formData.nb_personnes) return;
        // Simple suggestion logic: first free table that fits perfectly or has slightly more capacity
        const suitable = tables
            .filter(t => t.capacite >= formData.nb_personnes)
            .sort((a, b) => a.capacite - b.capacite)[0];

        setSuggestedTable(suitable);
        if (suitable) setFormData(prev => ({ ...prev, id_table: suitable.id_table.toString() }));
    };

    const handleNext = () => {
        if (step === 1) findSuggestedTable();
        setStep(step + 1);
    };

    const handleSubmit = async () => {
        const dateHeure = new Date(`${formData.date}T${formData.time}`).toISOString();
        try {
            const res = await fetch("/api/reservations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id_client: Number(formData.id_client),
                    date_heure: dateHeure,
                    nb_personnes: formData.nb_personnes,
                    id_table: Number(formData.id_table)
                })
            });
            if (res.ok) router.push("/reservations");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background font-sans">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-4xl mx-auto space-y-8 mt-8">
                {/* Stepper Header */}
                <div className="flex items-center justify-between px-2">
                    <Link href="/reservations" className="group flex items-center gap-2 text-muted hover:text-secondary transition-colors">
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-black uppercase text-[10px] tracking-widest">Retour au carnet</span>
                    </Link>
                    <div className="flex gap-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= i ? 'bg-primary' : 'bg-secondary/10'}`} />
                        ))}
                    </div>
                </div>

                {/* Main Form Area */}
                <div className="relative overflow-hidden">
                    {/* Step 1: Client & Guests */}
                    {step === 1 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="space-y-2">
                                <h3 className="text-5xl font-black text-secondary tracking-tighter serif italic">Qui <span className="text-primary not-italic">recevons-nous ?</span></h3>
                                <p className="text-muted font-medium">Sélectionnez un client et le nombre de convives.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <BentoCard className="md:col-span-2 space-y-4 !p-8 border-none shadow-xl bg-white/60">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Client régulier</label>
                                        <div className="relative">
                                            <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                                            <select
                                                className="w-full pl-14 pr-6 py-5 bg-secondary/5 border border-secondary/5 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary appearance-none cursor-pointer"
                                                value={formData.id_client}
                                                onChange={(e) => setFormData({ ...formData, id_client: e.target.value })}
                                            >
                                                <option value="">Sélectionner un client...</option>
                                                {clients.map(c => <option key={c.id_client} value={c.id_client}>{c.nom} ({c.telephone})</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 py-4">
                                        <div className="h-px flex-1 bg-secondary/5" />
                                        <span className="text-[9px] font-black text-muted uppercase tracking-widest">ou créez un nouveau profil</span>
                                        <div className="h-px flex-1 bg-secondary/5" />
                                    </div>

                                    <button className="w-full py-4 border-2 border-dashed border-secondary/10 rounded-2xl flex items-center justify-center gap-2 text-muted hover:border-primary/40 hover:text-primary transition-all">
                                        <UserPlus className="w-5 h-5" />
                                        <span className="font-black text-[10px] uppercase tracking-widest">Nouveau Client</span>
                                    </button>
                                </BentoCard>

                                <BentoCard className="space-y-6 !p-8 border-none shadow-xl bg-primary/5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Groupe</label>
                                        <div className="text-center space-y-4">
                                            <span className="text-7xl font-sans font-black text-primary leading-none">{formData.nb_personnes}</span>
                                            <div className="flex justify-center gap-4 pt-2">
                                                <button
                                                    onClick={() => setFormData({ ...formData, nb_personnes: Math.max(1, formData.nb_personnes - 1) })}
                                                    className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl font-black text-secondary hover:bg-secondary hover:text-white transition-all"
                                                >-</button>
                                                <button
                                                    onClick={() => setFormData({ ...formData, nb_personnes: formData.nb_personnes + 1 })}
                                                    className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl font-black text-secondary hover:bg-secondary hover:text-white transition-all"
                                                >+</button>
                                            </div>
                                            <p className="text-[10px] font-black text-primary/60 uppercase tracking-widest">Dîners / Convives</p>
                                        </div>
                                    </div>
                                </BentoCard>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    disabled={!formData.id_client}
                                    onClick={handleNext}
                                    className="flex items-center gap-3 px-12 py-5 bg-secondary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 disabled:opacity-20 transition-all shadow-xl shadow-secondary/20 group"
                                >
                                    Suivant <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Time & Date */}
                    {step === 2 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="space-y-2">
                                <h3 className="text-5xl font-black text-secondary tracking-tighter serif italic">À quel <span className="text-primary not-italic">moment ?</span></h3>
                                <p className="text-muted font-medium">Choisissez le créneau de cet accueil.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Calendrier</label>
                                    <div className="p-6 bg-white rounded-[32px] shadow-xl border border-secondary/5">
                                        <input
                                            type="date"
                                            className="w-full p-4 bg-secondary/5 border-none rounded-xl font-bold text-secondary focus:ring-2 ring-primary outline-none"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Heure de service</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {["12:00", "12:30", "13:00", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"].map(t => (
                                            <button
                                                key={t}
                                                onClick={() => setFormData({ ...formData, time: t })}
                                                className={`p-4 rounded-2xl font-black text-xs transition-all ${formData.time === t ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' : 'bg-white text-secondary border border-secondary/5 hover:border-primary/40'}`}
                                            >{t}</button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-8 border-t border-secondary/5">
                                <button onClick={() => setStep(1)} className="text-xs font-black uppercase tracking-widest text-muted hover:text-secondary">Précédent</button>
                                <button
                                    disabled={!formData.date || !formData.time}
                                    onClick={handleNext}
                                    className="flex items-center gap-3 px-12 py-5 bg-secondary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 disabled:opacity-20 transition-all shadow-xl shadow-secondary/20 group"
                                >
                                    Vérifier la disponibilité <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Deployment & Table Selection */}
                    {step === 3 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 font-sans">
                            <div className="space-y-2">
                                <h3 className="text-5xl font-black text-secondary tracking-tighter serif italic">Assigner <span className="text-primary not-italic">la Table</span></h3>
                                <p className="text-muted font-medium">Nous avons trouvé l'emplacement idéal.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                                <BentoCard className="md:col-span-3 !p-0 border-none shadow-2xl bg-white overflow-hidden relative">
                                    <div className="p-8 space-y-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-[10px] font-black text-primary uppercase tracking-widest">Suggestion intelligente</p>
                                                <h4 className="text-4xl font-black text-secondary serif leading-tight">Table {suggestedTable?.numero || "??"}</h4>
                                            </div>
                                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                                <Sparkles className="w-6 h-6 animate-pulse" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black text-muted uppercase tracking-widest">Capacité</p>
                                                <div className="flex items-center gap-2">
                                                    <Users className="w-4 h-4 text-primary" />
                                                    <span className="font-black text-secondary">{suggestedTable?.capacite || "-"} Personnes</span>
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black text-muted uppercase tracking-widest">Emplacement</p>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-primary" />
                                                    <span className="font-black text-secondary">{suggestedTable?.zone || "-"}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="py-6 px-8 bg-primary text-white rounded-[32px] space-y-1">
                                            <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Récapitulatif</p>
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <h5 className="text-2xl font-black serif italic tracking-tighter">{clients.find(c => c.id_client === Number(formData.id_client))?.nom}</h5>
                                                    <p className="text-xs font-bold opacity-80">{new Date(`${formData.date}T${formData.time}`).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {formData.time}</p>
                                                </div>
                                                <CheckCircle2 className="w-10 h-10 opacity-40" />
                                            </div>
                                        </div>
                                    </div>
                                </BentoCard>

                                <div className="md:col-span-2 space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Modifier l'assignation</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {tables.filter(t => t.capacite >= formData.nb_personnes).slice(0, 4).map(t => (
                                                <button
                                                    key={t.id_table}
                                                    onClick={() => setFormData({ ...formData, id_table: t.id_table.toString() })}
                                                    className={`p-4 rounded-2xl border-2 transition-all text-left ${Number(formData.id_table) === t.id_table ? 'border-primary bg-primary/5' : 'border-secondary/5 hover:border-primary/20'}`}
                                                >
                                                    <p className="text-xs font-black text-secondary">Table {t.numero}</p>
                                                    <p className="text-[9px] font-bold text-muted uppercase">{t.zone}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full py-6 bg-secondary text-white rounded-[32px] font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-secondary/40 hover:scale-[1.02] active:scale-95 transition-all"
                                        >Finaliser la Réservation</button>
                                        <button onClick={() => setStep(2)} className="w-full py-4 text-[10px] font-black text-muted uppercase tracking-widest hover:text-secondary mt-2">Détails temporels</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
