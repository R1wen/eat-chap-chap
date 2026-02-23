"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import { Calendar, Users, CheckCircle2, Loader2, XCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewReservationPage() {
    const router = useRouter();
    const [clients, setClients] = useState<any[]>([]);
    const [tables, setTables] = useState<any[]>([]);
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
    const [form, setForm] = useState({
        id_client: "",
        date_heure: "",
        nb_personnes: 2,
        id_table: ""
    });

    useEffect(() => {
        Promise.all([
            fetch("/api/clients").then(r => r.json()).catch(() => []),
            fetch("/api/tables").then(r => r.json()).catch(() => [])
        ]).then(([c, t]) => {
            setClients(Array.isArray(c) ? c : []);
            setTables(Array.isArray(t) ? t : []);
        });
    }, []);

    const showToast = (msg: string, ok: boolean) => {
        setToast({ msg, ok });
        setTimeout(() => setToast(null), 4000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.id_client || !form.date_heure) {
            showToast("Client et date/heure obligatoires", false);
            return;
        }
        setSaving(true);
        try {
            const res = await fetch("/api/reservations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id_client: parseInt(form.id_client),
                    date_heure: form.date_heure,
                    nb_personnes: Number(form.nb_personnes)
                })
            });
            if (res.ok) {
                showToast("Réservation créée avec succès !", true);
                setTimeout(() => router.push("/reservations"), 1200);
            } else {
                const err = await res.json().catch(() => ({}));
                showToast(err.error || "Erreur lors de la création", false);
            }
        } catch {
            showToast("Erreur réseau", false);
        }
        setSaving(false);
    };

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background font-sans">
            <div className="ambient-glow" />
            <Header />

            {toast && (
                <div className={`fixed top-28 right-8 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl font-black text-sm animate-in slide-in-from-right ${toast.ok ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                    {toast.ok ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    {toast.msg}
                </div>
            )}

            <div className="max-w-2xl mx-auto mt-8 space-y-8">
                <div className="flex items-center gap-4">
                    <Link href="/reservations">
                        <button className="p-3 rounded-xl glass border-secondary/10 hover:bg-secondary/5 transition-all">
                            <ArrowLeft className="w-5 h-5 text-secondary" />
                        </button>
                    </Link>
                    <div>
                        <h2 className="text-4xl font-black text-secondary tracking-tighter serif">
                            Nouvelle <span className="text-primary italic">Réservation</span>
                        </h2>
                        <p className="text-muted font-medium">Enregistrez une réservation pour un client.</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/80 rounded-[32px] shadow-2xl p-10 space-y-8 border border-secondary/5">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Client *</label>
                        <select
                            required
                            className="w-full p-5 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary appearance-none cursor-pointer"
                            value={form.id_client}
                            onChange={e => setForm({ ...form, id_client: e.target.value })}
                        >
                            <option value="">�?" Sélectionner un client �?"</option>
                            {clients.map(c => (
                                <option key={c.id_client} value={c.id_client}>{c.nom} {c.telephone ? `�?� ${c.telephone}` : ""}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Date & Heure *</label>
                        <div className="relative">
                            <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                            <input
                                type="datetime-local"
                                required
                                className="w-full pl-14 pr-6 py-5 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary"
                                value={form.date_heure}
                                onChange={e => setForm({ ...form, date_heure: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Nombre de Personnes</label>
                        <div className="relative">
                            <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                            <input
                                type="number"
                                min={1}
                                max={20}
                                className="w-full pl-14 pr-6 py-5 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary text-lg"
                                value={form.nb_personnes}
                                onChange={e => setForm({ ...form, nb_personnes: parseInt(e.target.value) || 1 })}
                            />
                        </div>
                    </div>

                    {tables.length > 0 && (
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-1">Table (optionnel)</label>
                            <select
                                className="w-full p-5 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary appearance-none cursor-pointer"
                                value={form.id_table}
                                onChange={e => setForm({ ...form, id_table: e.target.value })}
                            >
                                <option value="">�?" Sans table assignée �?"</option>
                                {tables.map(t => (
                                    <option key={t.id_table} value={t.id_table}>Table {t.numero} �?� {t.capacite} pers. {t.zone ? `�?� ${t.zone}` : ""}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div className="flex gap-4 pt-4">
                        <Link href="/reservations" className="flex-1">
                            <button type="button" className="w-full py-5 text-xs font-black uppercase tracking-widest text-muted hover:text-secondary transition-colors">
                                Annuler
                            </button>
                        </Link>
                        <button
                            type="submit"
                            disabled={saving}
                            className="flex-1 py-5 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                        >
                            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                            Enregistrer
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
