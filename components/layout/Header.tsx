"use client";

import React, { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import { Coffee, ChevronDown, User, Shield, LogOut } from "lucide-react";

export default function Header() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({ name: "Admin", role: "Propriétaire" });

    const staffAccounts = [
        { name: "Marie L.", role: "Serveur" },
        { name: "Jean P.", role: "Serveur" },
        { name: "Admin", role: "Propriétaire" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-20 glass flex items-center justify-between px-8 border-b border-light-beige shadow-sm">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <Coffee className="text-white w-6 h-6" />
                </div>
                <h1 className="text-2xl font-black text-secondary tracking-tighter serif">
                    EAT <span className="text-primary italic">Chap.</span>
                </h1>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
                {[
                    { label: "Dashboard", href: "/" },
                    { label: "Tables", href: "/admin/tables" },
                    { label: "Réservations", href: "/admin/reservations" },
                    { label: "Menu", href: "/menu" },
                    { label: "Clients", href: "/clients" },
                    { label: "POS", href: "/caisse" }
                ].map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-[10px] font-black uppercase tracking-widest text-secondary/60 hover:text-primary transition-colors hover:scale-105"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-4 relative">
                <ThemeToggle />
                <div className="h-10 w-[1px] bg-secondary/10 mx-2" />

                <div className="relative">
                    <button
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="flex items-center gap-3 px-4 py-2 rounded-xl bg-secondary text-white hover:bg-secondary/90 transition-all shadow-md group border-2 border-transparent focus:border-primary/50"
                    >
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                            <User className="w-4 h-4" />
                        </div>
                        <div className="text-left hidden sm:block">
                            <p className="text-[10px] font-black uppercase tracking-tighter leading-none">{currentUser.name}</p>
                            <p className="text-[8px] font-bold text-white/50 uppercase tracking-widest leading-none mt-1">{currentUser.role}</p>
                        </div>
                        <ChevronDown className={`w-4 h-4 opacity-50 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isUserMenuOpen && (
                        <div className="absolute top-full right-0 mt-3 w-64 glass p-2 rounded-2xl shadow-2xl border border-secondary/10 animate-in fade-in slide-in-from-top-2 duration-300">
                            <p className="text-[9px] font-black text-muted uppercase tracking-widest p-3 border-b border-secondary/5 mb-2">Changer de Compte</p>
                            {staffAccounts.map((account) => (
                                <button
                                    key={account.name}
                                    onClick={() => {
                                        setCurrentUser(account);
                                        setIsUserMenuOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${currentUser.name === account.name ? 'bg-primary/10 text-primary' : 'hover:bg-secondary/5 text-secondary'}`}
                                >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${currentUser.name === account.name ? 'bg-primary text-white' : 'bg-secondary/10'}`}>
                                        <Shield className="w-4 h-4" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs font-black">{account.name}</p>
                                        <p className="text-[9px] font-bold opacity-60 uppercase">{account.role}</p>
                                    </div>
                                </button>
                            ))}
                            <div className="mt-2 pt-2 border-t border-secondary/5">
                                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 text-red-500 transition-all">
                                    <LogOut className="w-4 h-4" />
                                    <span className="text-xs font-black uppercase tracking-widest">Se déconnecter</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
