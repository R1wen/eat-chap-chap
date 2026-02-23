"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
    Calendar as CalendarIcon,
    ChevronLeft,
    ChevronRight,
    Clock,
    Users,
    MapPin
} from "lucide-react";
import Link from "next/link";

export default function ReservationsCalendarPage() {
    const [reservations, setReservations] = useState<any[]>([]);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        fetch("/api/reservations")
            .then(res => res.json())
            .then(data => setReservations(data));
    }, []);

    const getWeekDays = (date: Date) => {
        const start = new Date(date);
        start.setDate(start.getDate() - start.getDay() + 1); // Start with Monday
        return Array.from({ length: 7 }, (_, i) => {
            const day = new Date(start);
            day.setDate(start.getDate() + i);
            return day;
        });
    };

    const weekDays = getWeekDays(currentDate);

    const getReservationsForDay = (day: Date) => {
        return reservations.filter(res => {
            const resDate = new Date(res.date_heure);
            return resDate.getDate() === day.getDate() &&
                resDate.getMonth() === day.getMonth() &&
                resDate.getFullYear() === day.getFullYear();
        }).sort((a, b) => new Date(a.date_heure).getTime() - new Date(b.date_heure).getTime());
    };

    const nextWeek = () => {
        const d = new Date(currentDate);
        d.setDate(d.getDate() + 7);
        setCurrentDate(d);
    };

    const prevWeek = () => {
        const d = new Date(currentDate);
        d.setDate(d.getDate() - 7);
        setCurrentDate(d);
    };

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background font-sans">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-1">
                        <Link href="/reservations" className="group flex items-center gap-2 text-muted hover:text-secondary transition-colors mb-4">
                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-black uppercase text-[10px] tracking-widest">Retour au carnet</span>
                        </Link>
                        <h2 className="text-6xl font-black text-secondary tracking-tighter serif italic leading-none">
                            Vue <span className="text-primary not-italic">Calendrier</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-secondary/5 shadow-xl">
                        <button onClick={prevWeek} className="p-3 hover:bg-secondary/5 rounded-xl transition-colors"><ChevronLeft /></button>
                        <div className="px-4 text-center min-w-[200px]">
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted">Semaine du</p>
                            <p className="font-black text-secondary italic serif">{weekDays[0].toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })} au {weekDays[6].toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}</p>
                        </div>
                        <button onClick={nextWeek} className="p-3 hover:bg-secondary/5 rounded-xl transition-colors"><ChevronRight /></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                    {weekDays.map((day, i) => {
                        const dayReservations = getReservationsForDay(day);
                        const isToday = new Date().toDateString() === day.toDateString();

                        return (
                            <div key={i} className="space-y-4">
                                <div className={`p-4 rounded-2xl text-center border-b-4 transition-all ${isToday ? 'bg-primary text-white border-primary shadow-lg' : 'bg-white text-secondary border-secondary/5 shadow-sm'}`}>
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{day.toLocaleDateString('fr-FR', { weekday: 'short' })}</p>
                                    <p className="text-2xl font-black serif">{day.getDate()}</p>
                                </div>

                                <div className="space-y-3 min-h-[400px]">
                                    {dayReservations.length > 0 ? (
                                        dayReservations.map((res: any) => (
                                            <Link key={res.id_reservation} href={`/reservations/${res.id_reservation}`}>
                                                <div className="p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-secondary/5 shadow-sm hover:border-primary/40 hover:scale-[1.02] transition-all group overflow-hidden relative">
                                                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${res.statut === 'Confirmée' ? 'bg-green-500' : 'bg-primary'}`} />
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between items-start">
                                                            <span className="text-[10px] font-black text-secondary">{new Date(res.date_heure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                            <div className="flex items-center gap-1 opacity-40">
                                                                <Users className="w-2.5 h-2.5" />
                                                                <span className="text-[8px] font-black">{res.nb_personnes}</span>
                                                            </div>
                                                        </div>
                                                        <p className="text-xs font-black text-secondary serif italic truncate leading-tight group-hover:text-primary transition-colors">{res.client?.nom}</p>
                                                        <div className="flex items-center gap-1 opacity-60">
                                                            <MapPin className="w-2.5 h-2.5 text-primary" />
                                                            <span className="text-[8px] font-black uppercase tracking-tighter">Table {res.tables?.[0]?.numero || '?'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    ) : (
                                        <div className="h-full border-2 border-dashed border-secondary/5 rounded-2xl flex items-center justify-center">
                                            <p className="text-[8px] font-black uppercase tracking-widest text-muted/30 -rotate-90">Libre</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
