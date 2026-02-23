"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import { useParams } from "next/navigation";
import {
    Utensils,
    Plus,
    Minus,
    Check,
    ChefHat,
    Clock,
    Info,
    ChevronRight,
    Send,
    Heart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientOrderPage({ params }: { params: Promise<{ tableId: string }> }) {
    const { tableId: rawTableId } = React.use(params);
    const tableId = rawTableId || "4"; // Default for mockup if no ID

    const [menu, setMenu] = useState<any[]>([]);
    const [activeCat, setActiveCat] = useState<string>("Tous");
    const [cart, setCart] = useState<any[]>([]);
    const [orderSent, setOrderSent] = useState(false);

    useEffect(() => {
        fetch("/api/plats").then(res => res.json()).then(setMenu);
    }, []);

    const categories = ["Tous", ...Array.from(new Set(menu.map(p => p.categorie?.libelle)))];

    const toggleToCart = (plat: any) => {
        setCart(prev => {
            const exists = prev.find(item => item.id_plat === plat.id_plat);
            if (exists) return prev.filter(item => item.id_plat !== plat.id_plat);
            return [...prev, { ...plat, quantity: 1, note: "" }];
        });
    };

    const updateQty = (id: number, delta: number) => {
        setCart(prev => prev.map(item =>
            item.id_plat === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const updateNote = (id: number, note: string) => {
        setCart(prev => prev.map(item =>
            item.id_plat === id ? { ...item, note } : item
        ));
    };

    const total = cart.reduce((acc, item) => acc + (Number(item.prix_actuel) * item.quantity), 0);

    const submitOrder = async () => {
        try {
            const response = await fetch("/api/commandes", {
                method: "POST",
                body: JSON.stringify({
                    id_client: 1, // Mock current client
                    id_employe: 1, // Mock server
                    type_cmd: "Sur place",
                    items: cart.map(item => ({
                        id_plat: item.id_plat,
                        quantity: item.quantity,
                        note: item.note,
                        price: item.prix_actuel
                    }))
                })
            });
            if (response.ok) {
                setOrderSent(true);
                setCart([]);
            }
        } catch (err) {
            console.error("Order failed", err);
        }
    };

    if (orderSent) {
        return (
            <main className="min-h-screen pt-24 pb-12 px-6 bg-background flex flex-col items-center justify-center text-center">
                <div className="ambient-glow" />
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-green-500/20"
                >
                    <Check className="text-white w-12 h-12" strokeWidth={3} />
                </motion.div>
                <h2 className="text-4xl font-black text-secondary serif mb-2">Bonne appétit !</h2>
                <p className="text-muted font-medium mb-12">Votre commande a été envoyée en cuisine.</p>
                <button onClick={() => setOrderSent(false)} className="px-8 py-3 bg-secondary text-white rounded-xl font-bold uppercase tracking-widest text-xs">Commander à nouveau</button>
            </main>
        )
    }

    return (
        <main className="min-h-screen pt-24 pb-32 px-6 bg-background">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-4xl mx-auto space-y-8">
                {/* Table Badge */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex flex-col items-center justify-center shadow-xl shadow-primary/20 text-white">
                        <span className="text-[8px] font-black uppercase tracking-tighter">Table</span>
                        <span className="text-2xl font-black serif leading-none">{tableId}</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-secondary tracking-tighter serif">Bienvenue chez <span className="text-primary italic">Chap.</span></h2>
                        <p className="text-xs text-muted font-bold uppercase tracking-widest">Scannez, Commandez, Savourez.</p>
                    </div>
                </div>

                {/* Categories Bar */}
                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none sticky top-24 z-40 bg-background/80 backdrop-blur-md -mx-6 px-6">
                    {categories.map((c: any) => (
                        <button
                            key={c}
                            onClick={() => setActiveCat(c)}
                            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${activeCat === c ? 'bg-primary text-white' : 'glass text-muted'}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {menu.filter(p => activeCat === "Tous" || p.categorie?.libelle === activeCat).map((plat) => {
                        const inCart = cart.find(item => item.id_plat === plat.id_plat);
                        return (
                            <motion.div
                                layout
                                key={plat.id_plat}
                                onClick={() => !inCart && toggleToCart(plat)}
                                className={`p-5 rounded-3xl border transition-all cursor-pointer flex gap-4 ${inCart ? 'bg-secondary text-white border-secondary shadow-xl translate-y-[-2px]' : 'glass border-secondary/5'}`}
                            >
                                <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <Utensils className={`w-8 h-8 ${inCart ? 'text-white/20' : 'text-primary/20'}`} />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="space-y-1">
                                        <div className="flex justify-between">
                                            <h4 className="font-bold leading-tight">{plat.libelle}</h4>
                                            {plat.libelle.includes('Gourmet') && <Heart className="w-4 h-4 text-primary fill-primary" />}
                                        </div>
                                        <p className={`text-[10px] uppercase font-black tracking-widest opacity-60`}>{plat.categorie?.libelle}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className={`text-lg font-black serif ${inCart ? 'text-primary' : 'text-secondary'}`}>{plat.prix_actuel} FCFA</span>
                                        {inCart ? (
                                            <button onClick={(e) => { e.stopPropagation(); toggleToCart(plat); }} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"><Check className="w-4 h-4" /></button>
                                        ) : (
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><Plus className="w-4 h-4" /></div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Floating Cart Panel */}
            <AnimatePresence>
                {cart.length > 0 && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-0 left-0 right-0 z-50 p-6 md:p-8 flex justify-center"
                    >
                        <div className="w-full max-w-4xl bg-secondary rounded-[32px] shadow-2xl overflow-hidden border border-white/10">
                            {/* Cart Items Summary */}
                            <div className="max-h-64 overflow-y-auto p-6 space-y-4 border-b border-white/5 scrollbar-thin scrollbar-thumb-white/10">
                                {cart.map(item => (
                                    <div key={item.id_plat} className="flex gap-4 items-start">
                                        <div className="flex items-center gap-3 bg-white/5 rounded-xl p-1 pr-3">
                                            <button onClick={() => updateQty(item.id_plat, -1)} className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white"><Minus className="w-3 h-3" /></button>
                                            <span className="text-sm font-black text-white">{item.quantity}</span>
                                            <button onClick={() => updateQty(item.id_plat, 1)} className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white"><Plus className="w-3 h-3" /></button>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white text-xs font-bold uppercase">{item.libelle}</p>
                                            <input
                                                placeholder="Note (ex: Cuisson saignante)"
                                                className="w-full bg-transparent border-b border-white/10 text-[10px] text-white/40 focus:text-white focus:border-primary outline-none py-1 mt-1"
                                                value={item.note}
                                                onChange={(e) => updateNote(item.id_plat, e.target.value)}
                                            />
                                        </div>
                                        <span className="text-sm font-black text-primary serif">{(item.quantity * Number(item.prix_actuel)).toFixed(2)} FCFA</span>
                                    </div>
                                ))}
                            </div>

                            {/* Footer Action */}
                            <div className="p-6 md:px-8 flex items-center justify-between gap-8">
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Total Commande</p>
                                    <p className="text-3xl font-black text-white serif leading-none">{total.toFixed(2)} FCFA</p>
                                </div>
                                <button
                                    onClick={submitOrder}
                                    className="flex-1 md:flex-none flex items-center justify-center gap-3 px-12 py-5 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                                >
                                    Envoyer en Cuisine
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
