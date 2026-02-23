"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { Plus, Minus, ShoppingCart, CreditCard, ChevronRight, Hash, Trash2, Edit3, Heart, Coffee, ArrowRight } from "lucide-react";

export default function POSPage() {
    const [categories, setCategories] = useState<any[]>([]);
    const [activeCat, setActiveCat] = useState<number | null>(null);
    const [plats, setPlats] = useState<any[]>([]);
    const [clients, setClients] = useState<any[]>([]);
    const [reservations, setReservations] = useState<any[]>([]);
    const [selectedClient, setSelectedClient] = useState<number | null>(null);
    const [selectedRes, setSelectedRes] = useState<number | null>(null);
    const [cart, setCart] = useState<any[]>([]);
    const [selectedPlat, setSelectedPlat] = useState<any | null>(null);

    useEffect(() => {
        fetch("/api/categories").then(res => res.json()).then(setCategories);
        fetch("/api/plats").then(res => res.json()).then(setPlats);
        fetch("/api/clients").then(res => res.json()).then(setClients);
        fetch("/api/reservations").then(res => res.json()).then(setReservations);
    }, []);

    const addToCart = (plat: any, note: string = "") => {
        setCart(prev => {
            const existing = prev.find(item => item.id_plat === plat.id_plat && item.note === note);
            if (existing) {
                return prev.map(item => item.id_plat === plat.id_plat && item.note === note ? { ...item, qty: item.qty + 1 } : item);
            }
            return [...prev, { ...plat, qty: 1, note }];
        });
        setSelectedPlat(null);
    };

    const removeFromCart = (id: number, note: string) => {
        setCart(prev => prev.filter(item => !(item.id_plat === id && item.note === note)));
    };

    const handleCheckout = async () => {
        if (cart.length === 0) return;
        try {
            const res = await fetch("/api/commandes", {
                method: "POST",
                body: JSON.stringify({
                    id_client: selectedClient,
                    id_reservation: selectedRes,
                    id_employe: 1, // Marie
                    is_paid: true,
                    payment_method: "CARTE",
                    items: cart.map(i => ({
                        id_plat: i.id_plat,
                        quantity: i.qty,
                        note: i.note,
                        price: i.prix_actuel
                    }))
                })
            });
            if (res.ok) {
                alert("Commande validée !");
                setCart([]);
                setSelectedClient(null);
                setSelectedRes(null);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const currentTotal = cart.reduce((acc, item) => acc + Number(item.prix_actuel) * item.qty, 0);

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto mt-8 flex flex-col xl:flex-row gap-8 h-[calc(100vh-12rem)]">
                {/* Left: Terminal */}
                <div className="flex-1 flex flex-col space-y-6">
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shadow-lg">
                                <Hash className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-secondary serif leading-none">Table 04</h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <p className="text-[10px] font-black text-muted uppercase tracking-widest">Serveur: Marie</p>
                                    <span className="text-secondary/20">�?�</span>
                                    <select
                                        className="text-[10px] font-black text-primary uppercase bg-transparent outline-none cursor-pointer"
                                        onChange={(e) => setSelectedClient(Number(e.target.value))}
                                    >
                                        <option value="">Passagers</option>
                                        {clients.map(c => <option key={c.id_client} value={c.id_client}>{c.nom}</option>)}
                                    </select>
                                    <span className="text-secondary/20">�?�</span>
                                    <select
                                        className="text-[10px] font-black text-accent uppercase bg-transparent outline-none cursor-pointer"
                                        onChange={(e) => setSelectedRes(Number(e.target.value))}
                                    >
                                        <option value="">Sans Rés.</option>
                                        {reservations.filter(r => r.statut === 'En attente').map(r => <option key={r.id_reservation} value={r.id_reservation}>Res #{r.id_reservation}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat.id_categorie}
                                    onClick={() => setActiveCat(cat.id_categorie)}
                                    className={`px-6 py-2 rounded-[8px] text-[10px] font-black uppercase tracking-widest transition-all ${activeCat === cat.id_categorie ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'glass text-muted hover:bg-white'}`}
                                >
                                    {cat.libelle}
                                </button>
                            ))}
                        </div>
                    </div>

                    <BentoCard className="flex-1 overflow-y-auto min-h-0 bg-white/40 border-dashed">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                            {plats.filter(p => !activeCat || p.id_categorie === activeCat).map(plat => (
                                <button
                                    key={plat.id_plat}
                                    onClick={() => plat.libelle.includes('Entrecôte') ? setSelectedPlat(plat) : addToCart(plat)}
                                    className="text-left p-6 rounded-[12px] glass hover:bg-white hover:border-primary transition-all group relative border-secondary/5 shadow-sm"
                                >
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Plus className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-tighter mb-1">{plat.categorie?.libelle}</p>
                                    <h4 className="text-lg font-bold text-secondary">{plat.libelle}</h4>
                                    <p className="text-xl font-black text-secondary serif mt-4">{plat.prix_actuel} FCFA</p>
                                    {plat.libelle.includes('Popular') && (
                                        <Heart className="w-4 h-4 text-accent absolute top-4 left-4 fill-accent" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </BentoCard>
                </div>

                {/* Right: Detailed Receipt */}
                <div className="w-full xl:w-[450px] h-full flex flex-col">
                    <BentoCard className="flex-1 flex flex-col h-full bg-white shadow-2xl relative border-primary/10">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-light-beige">
                            <h3 className="text-2xl font-black text-secondary italic serif">Récapitulatif</h3>
                            <ShoppingCart className="text-muted w-5 h-5" />
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-6 pr-2 scrollbar-thin">
                            {cart.map((item, i) => (
                                <div key={i} className="flex justify-between items-start group animate-fade-in">
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold text-secondary uppercase">{item.libelle}</p>
                                        {item.note && <p className="text-[10px] font-bold text-primary italic">�?� {item.note}</p>}
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-[10px] font-black text-muted">{item.qty} x {item.prix_actuel} FCFA</span>
                                            <button className="p-1 rounded bg-secondary/5 hover:bg-secondary/10 text-muted"><Edit3 className="w-3 h-3" /></button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-black text-secondary">{(item.qty * Number(item.prix_actuel)).toFixed(2)} FCFA</span>
                                        <button onClick={() => removeFromCart(item.id_plat, item.note)} className="p-2 rounded-lg bg-red-500/5 text-red-500 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {cart.length === 0 && (
                                <div className="h-full flex flex-col items-center justify-center opacity-20 filter grayscale">
                                    <Coffee className="w-20 h-20 mb-4" />
                                    <p className="text-xs font-black uppercase tracking-widest text-center">En attente de commande</p>
                                </div>
                            )}
                        </div>

                        <div className="mt-auto space-y-6 pt-6 border-t border-light-beige">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-xs font-bold text-muted uppercase">
                                    <span>Total Partiel</span>
                                    <span>{currentTotal.toFixed(2)} FCFA</span>
                                </div>
                                <div className="flex justify-between items-center text-4xl font-black text-secondary serif border-t border-light-beige pt-4 tracking-tighter">
                                    <span>TOTAL</span>
                                    <span className="text-primary italic">{currentTotal.toFixed(2)} FCFA</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                <button className="flex flex-col items-center justify-center py-4 rounded-xl glass border-secondary/10 hover:bg-secondary hover:text-white transition-all group">
                                    <CreditCard className="w-6 h-6 mb-2" />
                                    <span className="text-[8px] font-black uppercase tracking-widest">Carte</span>
                                </button>
                                <button className="flex flex-col items-center justify-center py-4 rounded-xl glass border-secondary/10 hover:bg-secondary hover:text-white transition-all">
                                    <span className="text-xl mb-1">�Y'�</span>
                                    <span className="text-[8px] font-black uppercase tracking-widest">Espèces</span>
                                </button>
                                <button className="flex flex-col items-center justify-center py-4 rounded-xl glass border-secondary/10 hover:bg-secondary hover:text-white transition-all">
                                    <span className="text-xl mb-1">�Y"�</span>
                                    <span className="text-[8px] font-black uppercase tracking-widest">Titre</span>
                                </button>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full py-5 bg-secondary text-white rounded-[8px] font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:opacity-90 transition-all flex items-center justify-center gap-3"
                            >
                                Valider la Commande
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </BentoCard>
                </div>
            </div>

            {/* Modifier Modal (Simplified) */}
            {selectedPlat && (
                <div className="fixed inset-0 z-[100] bg-secondary/60 backdrop-blur-md flex items-center justify-center px-4">
                    <BentoCard className="w-full max-w-md p-10 bg-white" title={`Préférence: ${selectedPlat.libelle}`}>
                        <p className="text-xs font-black text-muted uppercase tracking-widest mb-6">Sélectionnez la cuisson :</p>
                        <div className="grid grid-cols-1 gap-3">
                            {['Bleu', 'Saignant', 'A point', 'Bien cuit'].map(note => (
                                <button
                                    key={note}
                                    onClick={() => addToCart(selectedPlat, note)}
                                    className="w-full p-4 rounded-xl border border-secondary/10 text-left font-bold text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all flex justify-between items-center group"
                                >
                                    {note}
                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setSelectedPlat(null)} className="w-full mt-8 text-xs font-black text-muted uppercase tracking-widest hover:text-primary transition-colors">Annuler</button>
                    </BentoCard>
                </div>
            )}
        </main>
    );
}
