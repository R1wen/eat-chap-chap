"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
    Users,
    Plus,
    Search,
    Mail,
    Phone,
    Calendar,
    Utensils,
    History,
    CheckCircle2,
    X,
    UserPlus
} from "lucide-react";

export default function ClientsPage() {
    const [clients, setClients] = useState<any[]>([]);
    const [monthReservations, setMonthReservations] = useState(0);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        nom: "",
        telephone: "",
        email: ""
    });

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            const [cRes, rRes] = await Promise.all([
                fetch("/api/clients"),
                fetch("/api/reservations")
            ]);
            const cData = await cRes.json();
            const rData = await rRes.json();
            if (Array.isArray(cData)) setClients(cData);
            if (Array.isArray(rData)) {
                const now = new Date();
                const monthCount = rData.filter((r: any) => {
                    const d = new Date(r.date_heure);
                    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
                }).length;
                setMonthReservations(monthCount);
            }
        } catch (error) {
            console.error("Failed to fetch clients", error);
        }
        setLoading(false);
    };

    const handleCreateClient = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/clients", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok) {
                setClients([data, ...clients]);
                setShowAddModal(false);
                setFormData({ nom: "", telephone: "", email: "" });
            } else {
                alert(`Erreur: ${data.error} - ${data.details || ''}`);
            }
        } catch (error: any) {
            console.error("Creation failed", error);
            alert("Une erreur critique est survenue lors de la création.");
        }
    };

    const filteredClients = clients.filter(c =>
        c.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.telephone?.includes(searchQuery) ||
        c.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background font-sans">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-1">
                        <h2 className="text-6xl font-black text-secondary tracking-tighter serif italic leading-none">
                            Base <span className="text-primary not-italic">Clients</span>
                        </h2>
                        <p className="text-muted font-medium text-lg">Gérez votre fichier client et suivez leurs habitudes de consommation.</p>
                    </div>

                    <button
                        onClick={() => setShowAddModal(true)}
                        className="relative z-10 flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30 cursor-pointer"
                    >
                        <UserPlus className="w-5 h-5" /> Nouveau Client
                    </button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <BentoCard className="!p-6 bg-white/60">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/5 rounded-xl text-primary"><Users className="w-6 h-6" /></div>
                            <div>
                                <p className="text-[10px] font-black text-muted uppercase tracking-widest">Total Clients</p>
                                <p className="text-2xl font-black text-secondary tracking-tighter">{clients.length}</p>
                            </div>
                        </div>
                    </BentoCard>
                    <BentoCard className="!p-6 bg-white/60">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-secondary/5 rounded-xl text-secondary"><Calendar className="w-6 h-6" /></div>
                            <div>
                                <p className="text-[10px] font-black text-muted uppercase tracking-widest">Réservations ce mois</p>
                                <p className="text-2xl font-black text-secondary tracking-tighter">{monthReservations}</p>
                            </div>
                        </div>
                    </BentoCard>
                    <BentoCard className="!p-6 bg-primary text-white">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-xl"><History className="w-6 h-6" /></div>
                            <div>
                                <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Taux de fidélité</p>
                                <p className="text-2xl font-black tracking-tighter">
                                    {clients.length > 0 ? Math.round((clients.filter(c => (c._count?.reservations || 0) > 1).length / clients.length) * 100) : 0}%
                                </p>
                            </div>
                        </div>
                    </BentoCard>
                </div>

                {/* Search & List */}
                <div className="space-y-6">
                    <div className="relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                        <input
                            type="text"
                            placeholder="Rechercher par nom, téléphone ou email..."
                            className="w-full pl-16 pr-6 py-5 bg-white border border-secondary/5 rounded-3xl outline-none focus:border-primary transition-all font-bold text-secondary text-lg shadow-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading ? (
                            [1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-64 glass animate-pulse rounded-[40px]" />)
                        ) : filteredClients.map(client => (
                            <BentoCard key={client.id_client} className="group !p-8 border-none shadow-xl bg-white/60 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                    <Users className="w-32 h-32" />
                                </div>
                                <div className="space-y-6 relative z-10">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Client #{client.id_client}</p>
                                        <h4 className="text-2xl font-black text-secondary serif italic tracking-tighter">{client.nom}</h4>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-muted">
                                            <Phone className="w-4 h-4" />
                                            <span className="text-sm font-bold">{client.telephone || "Non renseigné"}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-muted">
                                            <Mail className="w-4 h-4" />
                                            <span className="text-sm font-bold truncate max-w-[200px]">{client.email || "Non renseigné"}</span>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-secondary/5 grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <span className="text-[9px] font-black text-muted uppercase">Commandes</span>
                                            <p className="text-lg font-black text-secondary">{client._count?.commandes || 0}</p>
                                        </div>
                                        <div className="space-y-1 text-right">
                                            <span className="text-[9px] font-black text-muted uppercase">Résas</span>
                                            <p className="text-lg font-black text-secondary">{client._count?.reservations || 0}</p>
                                        </div>
                                    </div>
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 sm:p-0">
                    <div
                        className="absolute inset-0 bg-secondary/80 backdrop-blur-md cursor-pointer z-0"
                        onClick={() => setShowAddModal(false)}
                    />
                    <div className="relative w-full max-w-lg z-50" onClick={e => e.stopPropagation()}>
                        <BentoCard className="!p-10 border-none shadow-2xl bg-white animate-in zoom-in-95 duration-300">
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="absolute top-6 right-6 text-muted hover:text-secondary p-2 z-20"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-black text-secondary serif italic tracking-tighter">Nouveau Client</h3>
                                    <p className="text-xs font-medium text-muted uppercase tracking-widest">Enregistrement dans la base</p>
                                </div>

                                <form onSubmit={handleCreateClient} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted">Nom Complet</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full p-4 bg-secondary/5 border-none rounded-xl font-bold text-secondary outline-none focus:ring-2 ring-primary"
                                            value={formData.nom}
                                            onChange={e => setFormData({ ...formData, nom: e.target.value })}
                                            placeholder="Ex: Jean Dupont"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-muted">Téléphone</label>
                                            <input
                                                type="tel"
                                                className="w-full p-4 bg-secondary/5 border-none rounded-xl font-bold text-secondary outline-none focus:ring-2 ring-primary"
                                                value={formData.telephone}
                                                onChange={e => setFormData({ ...formData, telephone: e.target.value })}
                                                placeholder="06..."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-muted">Email</label>
                                            <input
                                                type="email"
                                                className="w-full p-4 bg-secondary/5 border-none rounded-xl font-bold text-secondary outline-none focus:ring-2 ring-primary"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="jean@mail.com"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-6 bg-primary text-white rounded-[24px] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
                                    >
                                        <CheckCircle2 className="w-5 h-5" /> Créer la Fiche
                                    </button>
                                </form>
                            </div>
                        </BentoCard>
                    </div>
                </div>
            )}
        </main>
    );
}
