"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { UserPlus, UserCircle, Shield, Briefcase, Mail, Phone, Edit, Trash2 } from "lucide-react";

export default function StaffPage() {
    const [staff, setStaff] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/employes")
            .then((res) => res.json())
            .then((data) => setStaff(data));
    }, []);

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto space-y-8 mt-8">
                <div className="flex justify-between items-end">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground">
                            Gestion de l'Équipe
                        </h2>
                        <p className="text-muted text-lg">
                            Administration des employés, rôles et attributions.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity">
                        <UserPlus className="w-4 h-4" />
                        Nouvel Employé
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {staff.map((member) => (
                        <BentoCard key={member.id_employe} className="group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center border border-white/10 group-hover:border-accent/20 transition-colors">
                                    <UserCircle className="w-10 h-10 text-accent" />
                                </div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent">
                                    <Shield className="w-3.5 h-3.5" />
                                    {member.role}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-foreground mb-1">
                                    {member.prenom} {member.nom}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-muted">
                                    <Briefcase className="w-4 h-4" />
                                    Poste : {member.role}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors">
                                    <Edit className="w-4 h-4" />
                                    Modifier
                                </button>
                                <button className="flex items-center justify-center gap-2 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-sm font-medium transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                    Archive
                                </button>
                            </div>
                        </BentoCard>
                    ))}
                </div>
            </div>
        </main>
    );
}
