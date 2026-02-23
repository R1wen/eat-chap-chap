"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
    Utensils,
    Table as TableIcon,
    User,
    Plus,
    Minus,
    Trash2,
    ChevronLeft,
    ShoppingBag,
    Search,
    CheckCircle2,
    DollarSign
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewOrderPage() {
    const router = useRouter();
    const [plates, setPlates] = useState<any[]>([]);
    const [tables, setTables] = useState<any[]>([]);
    const [clients, setClients] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const [cart, setCart] = useState<any[]>([]);
    const [selectedTable, setSelectedTable] = useState("");
    const [selectedClient, setSelectedClient] = useState("");
    const [typeCmd, setTypeCmd] = useState("Sur place");
    const [searchDish, setSearchDish] = useState("");

    useEffect(() => {
        const load = async () => {
            const [p, t, c] = await Promise.all([
                fetch("/api/plats").then(r => r.json()),
                fetch("/api/tables").then(r => r.json()),
                fetch("/api/clients").then(r => r.json())
            ]);
            setPlates(p);
            setTables(t);
            setClients(c);
            setLoading(false);
        };
        load();
    }, []);

    const addToCart = (plate: any) => {
        setCart(prev => {
            const existing = prev.find(item => item.id_plat === plate.id_plat);
            if (existing) {
                return prev.map(item => item.id_plat === plate.id_plat ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...plate, quantity: 1, note: "" }];
        });
    };

    const removeFromCart = (plateId: number) => {
        setCart(prev => prev.filter(item => item.id_plat !== plateId));
    };

    const updateQuantity = (plateId: number, q: number) => {
        if (q < 1) return;
        setCart(prev => prev.map(item => item.id_plat === plateId ? { ...item, quantity: q } : item));
    };

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + (Number(item.prix_actuel) * item.quantity), 0);
    };

    const handleSubmit = async () => {
        if (cart.length === 0) return alert("Le panier est vide");
        if (typeCmd === "Sur place" && !selectedTable) return alert("Sélectionnez une table");

        try {
            const res = await fetch("/api/commandes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id_client: selectedClient ? Number(selectedClient) : null,
                    id_employe: 1, // Mock
                    type_cmd: typeCmd,
                    id_table: selectedTable ? Number(selectedTable) : null,
                    items: cart.map(item => ({
                        id_plat: item.id_plat,
                        quantity: item.quantity,
                        note: item.note,
                        price: item.prix_actuel
                    }))
                })
            });
            if (res.ok) {
                const data = await res.json();
                router.push(`/commandes/${data.id_commande}`);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const filteredPlates = plates.filter(p => p.libelle.toLowerCase().includes(searchDish.toLowerCase()));

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background font-sans">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                {/* Left Side: Setup & Menu (Column 8) */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Setup Card */}
                    <BentoCard className="!p-8 border-none shadow-xl bg-white/60">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted">Type de service</label>
                                <div className="flex gap-2">
                                    <button onClick={() => setTypeCmd("Sur place")} className={`flex-1 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${typeCmd === "Sur place" ? 'bg-secondary text-white shadow-lg' : 'bg-secondary/5 text-muted hover:bg-secondary/10'}`}>Table</button>
                                    <button onClick={() => setTypeCmd("À emporter")} className={`flex-1 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${typeCmd === "À emporter" ? 'bg-secondary text-white shadow-lg' : 'bg-secondary/5 text-muted hover:bg-secondary/10'}`}>Takeaway</button>
                                </div>
                            </div>
                            {typeCmd === "Sur place" && (
                                <div className="flex-1 space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted">Assignation Table</label>
                                    <select
                                        className="w-full p-4 bg-secondary/5 border-none rounded-xl font-bold text-secondary outline-none focus:ring-2 ring-primary"
                                        value={selectedTable}
                                        onChange={(e) => setSelectedTable(e.target.value)}
                                    >
                                        <option value="">Choisir une table...</option>
                                        {tables.map(t => <option key={t.id_table} value={t.id_table}>Table {t.numero} ({t.zone})</option>)}
                                    </select>
                                </div>
                            )}
                            <div className="flex-1 space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted">Client (Optionnel)</label>
                                <select
                                    className="w-full p-4 bg-secondary/5 border-none rounded-xl font-bold text-secondary outline-none focus:ring-2 ring-primary"
                                    value={selectedClient}
                                    onChange={(e) => setSelectedClient(e.target.value)}
                                >
                                    <option value="">Client de passage</option>
                                    {clients.map(c => <option key={c.id_client} value={c.id_client}>{c.nom}</option>)}
                                </select>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Menu Search & Results */}
                    <div className="space-y-6">
                        <div className="relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                            <input
                                type="text"
                                placeholder="Rechercher un plat, une boisson..."
                                className="w-full pl-14 pr-6 py-5 bg-white border border-secondary/5 rounded-3xl outline-none focus:border-primary transition-all font-bold text-secondary text-lg shadow-sm"
                                value={searchDish}
                                onChange={(e) => setSearchDish(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {loading ? (
                                [1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-40 glass rounded-3xl animate-pulse" />)
                            ) : filteredPlates.map(plate => (
                                <button
                                    key={plate.id_plat}
                                    onClick={() => addToCart(plate)}
                                    className="p-6 bg-white/60 backdrop-blur-md rounded-[32px] border border-secondary/5 shadow-sm hover:border-primary/40 hover:scale-[1.02] transition-all group text-left relative overflow-hidden"
                                >
                                    <div className="space-y-2">
                                        <p className="text-[9px] font-black text-primary uppercase tracking-widest">{plate.categorie?.libelle}</p>
                                        <h5 className="text-lg font-black text-secondary serif italic leading-tight">{plate.libelle}</h5>
                                        <p className="text-xl font-black text-secondary">{Number(plate.prix_actuel).toFixed(2)} €</p>
                                    </div>
                                    <div className="absolute bottom-4 right-4 p-2 bg-primary text-white rounded-xl scale-0 group-hover:scale-100 transition-transform">
                                        <Plus className="w-4 h-4" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Cart Summary (Column 4) */}
                <div className="lg:col-span-4">
                    <div className="sticky top-32 space-y-6">
                        <BentoCard className="!p-8 border-none shadow-2xl bg-secondary text-white min-h-[600px] flex flex-col">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-black serif italic">Panier</h3>
                                <ShoppingBag className="w-6 h-6 text-primary" />
                            </div>

                            <div className="flex-1 space-y-4 overflow-y-auto max-h-[400px] pr-2 scrollbar-hide">
                                {cart.length > 0 ? (
                                    cart.map(item => (
                                        <div key={item.id_plat} className="p-4 bg-white/5 rounded-2xl space-y-3">
                                            <div className="flex justify-between items-start">
                                                <div className="space-y-1">
                                                    <p className="text-sm font-bold text-white">{item.libelle}</p>
                                                    <p className="text-[10px] font-black text-primary uppercase">{(Number(item.prix_actuel) * item.quantity).toFixed(2)} €</p>
                                                </div>
                                                <button onClick={() => removeFromCart(item.id_plat)} className="text-white/40 hover:text-red-500 transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <input
                                                    type="text"
                                                    placeholder="Note..."
                                                    className="bg-transparent border-b border-white/10 text-[10px] italic outline-none focus:border-primary w-24"
                                                    value={item.note}
                                                    onChange={(e) => setCart(prev => prev.map(i => i.id_plat === item.id_plat ? { ...i, note: e.target.value } : i))}
                                                />
                                                <div className="flex items-center gap-3">
                                                    <button onClick={() => updateQuantity(item.id_plat, item.quantity - 1)} className="p-1 rounded-lg bg-white/10 hover:bg-white/20 transition-all"><Minus className="w-3 h-3" /></button>
                                                    <span className="font-black text-sm">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id_plat, item.quantity + 1)} className="p-1 rounded-lg bg-white/10 hover:bg-white/20 transition-all"><Plus className="w-3 h-3" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex-1 flex flex-col items-center justify-center text-center py-10 opacity-30">
                                        <Utensils className="w-12 h-12 mb-4" />
                                        <p className="text-xs font-black uppercase tracking-widest">Le panier est vide</p>
                                    </div>
                                )}
                            </div>

                            <div className="pt-8 mt-8 border-t border-white/10 space-y-6">
                                <div className="flex justify-between items-end">
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Total TTC</p>
                                    <p className="text-4xl font-black text-primary">{calculateTotal().toFixed(2)} €</p>
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    disabled={cart.length === 0 || (typeCmd === "Sur place" && !selectedTable)}
                                    className="w-full py-6 bg-primary text-white rounded-[32px] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-20 flex items-center justify-center gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5" /> Envoyer en Cuisine
                                </button>
                            </div>
                        </BentoCard>
                    </div>
                </div>
            </div>
        </main>
    );
}
