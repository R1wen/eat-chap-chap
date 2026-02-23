"use client";

import React from "react";
import {
    User,
    Calendar,
    Hash,
    ShoppingCart,
    CreditCard,
    ChefHat,
    Layers,
    ArrowRight
} from "lucide-react";

export default function SchemaVisualizer() {
    const nodes = [
        { id: "Client", icon: User, label: "Client", color: "bg-blue-500" },
        { id: "Res", icon: Calendar, label: "Réserve", color: "bg-purple-500" },
        { id: "Table", icon: Hash, label: "Table", color: "bg-orange-500" },
        { id: "Cmd", icon: ShoppingCart, label: "Commande", color: "bg-primary" },
        { id: "Pay", icon: CreditCard, label: "Paiement", color: "bg-green-500" },
        { id: "Staff", icon: ChefHat, label: "Staff", color: "bg-secondary" },
    ];

    const relations = [
        { from: "Client", to: "Res", label: "Effectue" },
        { from: "Res", to: "Table", label: "Concerne" },
        { from: "Client", to: "Cmd", label: "Passe" },
        { from: "Res", to: "Cmd", label: "Issue de" },
        { from: "Table", to: "Cmd", label: "Occupe" },
        { from: "Cmd", to: "Staff", label: "Géré par" },
        { from: "Cmd", to: "Pay", label: "Règle" },
    ];

    return (
        <div className="p-8 glass rounded-[32px] border-secondary/5 overflow-hidden">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-secondary mb-12 flex items-center gap-3">
                <Layers className="w-5 h-5 text-primary" />
                Integrity Visualizer
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 relative">
                {/* Simple Nodes Grid with mock connections */}
                {nodes.map(node => (
                    <div key={node.id} className="relative flex flex-col items-center group">
                        <div className={`w-16 h-16 ${node.color} rounded-[20px] shadow-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                            <node.icon className="w-8 h-8" />
                        </div>
                        <p className="mt-3 text-[10px] font-black uppercase tracking-widest text-secondary">{node.label}</p>
                    </div>
                ))}

                {/* Visual Overlay of Relations specifically for the 3x2 grid we created */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    {/* SVG lines for Merise structure */}
                    <svg className="w-full h-full" xmlns="http://www.w3.org/1999/xlink">
                        <line x1="16.6%" y1="15%" x2="50%" y2="15%" stroke="currentColor" strokeWidth="2" />
                        <line x1="50%" y1="15%" x2="83.3%" y2="15%" stroke="currentColor" strokeWidth="2" />
                        <line x1="50%" y1="15%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" />
                        <line x1="16.6%" y1="15%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" />
                        <line x1="83.3%" y1="15%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="16.6%" y2="85%" stroke="currentColor" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="83.3%" y2="85%" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </div>
            </div>

            <div className="mt-12 bg-secondary/5 rounded-2xl p-6">
                <p className="text-[10px] font-bold text-muted leading-relaxed italic">
                    Toutes les tables PostgreSQL sont synchronisées via Prisma. <br />
                    L'intégrité référentielle garantit que chaque Commande est liée à son Staff, sa Table et optionnellement au Client/Réservation.
                </p>
            </div>
        </div>
    );
}
