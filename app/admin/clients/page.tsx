"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { UserPlus, Search, Mail, Phone, History, Edit, Trash2 } from "lucide-react";

export default function ClientsPage() {
    const [clients, setClients] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("/api/clients")
            .then((res) => res.json())
            .then((data) => setClients(data));
    }, []);

    const filteredClients = clients.filter(
        (c) =>
            c.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                <div className="flex justify-between items-end">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground">
                            Gestion Clients
                        </h2>
                        <p className="text-muted text-lg">
                            Base de données clients et historique de fidélité.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity">
                        <UserPlus className="w-4 h-4" />
                        Nouveau Client
                    </button>
                </div>

                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Rechercher un client..."
                        className="w-full pl-12 pr-4 py-3 rounded-2xl glass focus:outline-none focus:ring-2 focus:ring-accent/20 border-white/10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredClients.map((client) => (
                        <BentoCard key={client.id_client} className="group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                                    {client.nom[0]}
                                </div>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 rounded-lg hover:bg-white/10 text-muted hover:text-foreground">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-400">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-1">{client.nom}</h3>

                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-sm text-muted">
                                    <Mail className="w-4 h-4" />
                                    {client.email || "Non renseigné"}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted">
                                    <Phone className="w-4 h-4" />
                                    {client.telephone || "Non renseigné"}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-xs text-muted uppercase tracking-wider font-bold mb-1">Commandes</div>
                                    <div className="text-lg font-bold text-foreground">{client._count.commandes}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xs text-muted uppercase tracking-wider font-bold mb-1">Réservations</div>
                                    <div className="text-lg font-bold text-foreground">{client._count.reservations}</div>
                                </div>
                            </div>

                            <button className="w-full mt-6 flex items-center justify-center gap-2 py-2 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">
                                <History className="w-4 h-4" />
                                Voir l'historique
                            </button>
                        </BentoCard>
                    ))}
                </div>
            </div>
        </main>
    );
}
