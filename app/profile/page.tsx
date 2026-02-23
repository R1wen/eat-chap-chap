"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { User, Users, Star, Utensils, Calendar, MapPin, Receipt, ArrowRight, Heart, Award, ShieldCheck } from "lucide-react";

export default function ProfilePage() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                {/* Profile Card */}
                <BentoCard className="border-none shadow-2xl bg-secondary text-white !p-12 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                        <Utensils className="w-64 h-64 text-white" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="relative">
                            <div className="w-40 h-40 rounded-[32px] border-4 border-white/20 overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg border-2 border-secondary">
                                <Star className="w-5 h-5 fill-white" />
                            </div>
                        </div>

                        <div className="text-center md:text-left space-y-4">
                            <div className="space-y-1">
                                <h2 className="text-5xl font-black italic serif tracking-tighter">Jean Dupont</h2>
                                <div className="flex justify-center md:justify-start gap-4">
                                    <p className="text-primary font-black uppercase tracking-[0.2em] text-xs">Membre Élite ★★★★☆</p>
                                    <span className="text-white/40 text-xs">•</span>
                                    <p className="text-white/60 font-medium text-xs">A rejoint en Septembre 2024</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <span className="px-4 py-1.5 rounded-full bg-white/10 text-[10px] font-black uppercase tracking-widest border border-white/10 flex items-center gap-2">
                                    <Users className="w-3 h-3 text-primary" /> Loyalty: 1250 pts
                                </span>
                                <span className="px-4 py-1.5 rounded-full bg-white/10 text-[10px] font-black uppercase tracking-widest border border-white/10 flex items-center gap-2">
                                    <MapPin className="w-3 h-3 text-primary" /> Table préférée: 8
                                </span>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Stats */}
                    <div className="space-y-6">
                        <BentoCard title="Activité" description="Aperçu de votre engagement.">
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="p-6 rounded-[24px] bg-secondary/5 border border-secondary/5 flex flex-col items-center">
                                    <span className="text-2xl font-black text-secondary">15</span>
                                    <span className="text-[10px] font-black text-muted uppercase tracking-widest">Visites</span>
                                </div>
                                <div className="p-6 rounded-[24px] bg-secondary/5 border border-secondary/5 flex flex-col items-center">
                                    <span className="text-2xl font-black text-secondary">250€</span>
                                    <span className="text-[10px] font-black text-muted uppercase tracking-widest">Dépensés</span>
                                </div>
                            </div>
                            <div className="mt-6 space-y-4">
                                <p className="text-[10px] font-black text-muted uppercase tracking-widest border-b border-secondary/5 pb-2">Préférences</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm font-bold text-secondary">
                                        <ShieldCheck className="w-4 h-4 text-primary" /> Allergies: Aucune
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-bold text-secondary">
                                        <Heart className="w-4 h-4 text-primary" /> Plat favori: Entrecôte
                                    </li>
                                </ul>
                            </div>
                        </BentoCard>

                        <BentoCard title="Fidélité" className="bg-primary text-white border-none shadow-xl shadow-primary/20">
                            <div className="space-y-4 relative z-10">
                                <Award className="w-12 h-12 mb-4 opacity-40" />
                                <h4 className="text-2xl font-black italic serif leading-none">Prochain Palier: Plat Offert</h4>
                                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mt-4">
                                    <div className="h-full bg-white w-3/4" />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Encore 250 pts restants</p>
                            </div>
                        </BentoCard>
                    </div>

                    {/* Reservations & History */}
                    <div className="lg:col-span-2 space-y-6">
                        <BentoCard title="Prochaines Réservations" description="Vos moments à venir chez nous.">
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { date: "24/02", time: "20:00", guests: 4, table: "Table 8", status: "Confirmé" },
                                    { date: "14/03", time: "19:30", guests: 2, table: "Table 2", status: "En attente" },
                                ].map((res, i) => (
                                    <div key={i} className="flex justify-between items-center p-6 rounded-[24px] glass border-secondary/10 hover:border-primary/40 transition-all group cursor-pointer">
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-bold text-secondary italic serif">{res.date} • {res.time}</h4>
                                            <p className="text-[10px] font-black text-muted uppercase tracking-widest">{res.guests} pers • {res.table}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className={`text-[8px] font-black uppercase px-2 py-1 rounded-full ${res.status === 'Confirmé' ? 'bg-green-500/10 text-green-600' : 'bg-primary/10 text-primary'}`}>{res.status}</span>
                                            <div className="mt-4 flex gap-2">
                                                <button className="text-[10px] font-black text-muted hover:text-primary transition-colors">Modifier</button>
                                                <button className="text-[10px] font-black text-muted hover:text-red-500 transition-colors">Annuler</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </BentoCard>

                        <BentoCard title="Historique Gastronomique">
                            <div className="mt-4 space-y-2">
                                {[
                                    { id: "INV-9921", date: "12 Fév", plat: "Entrecôte 300g", price: "58.00 €", method: "CARTE" },
                                    { id: "INV-9854", date: "08 Fév", plat: "Risotto aux Cèpes", price: "42.50 €", method: "CARTE" },
                                    { id: "INV-9712", date: "24 Jan", plat: "Salade César", price: "31.00 €", method: "ESPÈCES" },
                                ].map((inv, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary/5 transition-all group cursor-pointer">
                                        <div className="flex items-center gap-6">
                                            <Receipt className="w-5 h-5 text-primary opacity-40" />
                                            <div>
                                                <p className="text-sm font-bold text-secondary">{inv.plat}</p>
                                                <p className="text-[10px] font-black text-muted uppercase tracking-tighter">{inv.date} • {inv.id}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-black text-secondary">{inv.price}</p>
                                            <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all inline ml-2" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </BentoCard>
                    </div>
                </div>
            </div>
        </main>
    );
}
