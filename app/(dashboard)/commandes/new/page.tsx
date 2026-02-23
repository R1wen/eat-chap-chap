"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import { Plus, Minus, Search, CheckCircle2, Loader2, XCircle, ArrowLeft, ShoppingCart, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewCommandePage() {
    const router = useRouter();
    const [plats, setPlats] = useState<any[]>([]);
    const [clients, setClients] = useState<any[]>([]);
    const [employes, setEmployes] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [tables, setTables] = useState<any[]>([]);
    const [cart, setCart] = useState<any[]>([]);
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
    const [searchPlat, setSearchPlat] = useState("");
    const [activeCat, setActiveCat] = useState("Tous");
    const [form, setForm] = useState({
        id_client: "",
        id_employe: "",
        id_table: "",
        type_cmd: "Sur place"
    });

    useEffect(() => {
        Promise.all([
            fetch("/api/plats").then(r => r.json()).catch(() => []),
            fetch("/api/clients").then(r => r.json()).catch(() => []),
            fetch("/api/employes").then(r => r.json()).catch(() => []),
            fetch("/api/categories").then(r => r.json()).catch(() => []),
            fetch("/api/tables").then(r => r.json()).catch(() => [])
        ]).then(([p, c, e, cat, t]) => {
            setPlats(Array.isArray(p) ? p : []);
            setClients(Array.isArray(c) ? c : []);
            setEmployes(Array.isArray(e) ? e : []);
            setCategories(Array.isArray(cat) ? cat : []);
            setTables(Array.isArray(t) ? t : []);
        });
    }, []);

    const showToast = (msg: string, ok: boolean) => {
        setToast({ msg, ok });
        setTimeout(() => setToast(null), 4000);
    };

    const addToCart = (plat: any) => {
        setCart(prev => {
            const existing = prev.find(i => i.id_plat === plat.id_plat);
            if (existing) return prev.map(i => i.id_plat === plat.id_plat ? { ...i, quantity: i.quantity + 1 } : i);
            return [...prev, { id_plat: plat.id_plat, libelle: plat.libelle, price: Number(plat.prix_actuel), quantity: 1, note: "" }];
        });
    };

    const removeFromCart = (id: number) => setCart(prev => prev.filter(i => i.id_plat !== id));
    const updateQty = (id: number, delta: number) => {
        setCart(prev => prev.map(i => i.id_plat === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i));
    };
    const updateNote = (id: number, note: string) => {
        setCart(prev => prev.map(i => i.id_plat === id ? { ...i, note } : i));
    };

    const total = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);

    const filteredPlats = plats.filter(p => {
        const matchSearch = p.libelle.toLowerCase().includes(searchPlat.toLowerCase());
        const matchCat = activeCat === "Tous" || p.categorie?.libelle === activeCat;
        return matchSearch && matchCat && p.disponible;
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (cart.length === 0) { showToast("Ajoutez au moins un plat", false); return; }
        if (!form.id_employe) { showToast("Sélectionnez un serveur", false); return; }
        setSaving(true);
        try {
            const body = {
                id_client: form.id_client ? parseInt(form.id_client) : null,
                id_employe: parseInt(form.id_employe),
                type_cmd: form.type_cmd,
                items: cart.map(i => ({ id_plat: i.id_plat, quantity: i.quantity, price: i.price, note: i.note }))
            };
            const res = await fetch("/api/commandes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            if (res.ok) {
                const data = await res.json();
                showToast("Commande enregistrée !", true);
                setTimeout(() => router.push(`/commandes/${data.id_commande}`), 1000);
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

            <form onSubmit={handleSubmit} className="max-w-7xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Menu */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-4">
                        <Link href="/commandes">
                            <button type="button" className="p-3 rounded-xl glass border-secondary/10 hover:bg-secondary/5 transition-all">
                                <ArrowLeft className="w-5 h-5 text-secondary" />
                            </button>
                        </Link>
                        <div>
                            <h2 className="text-4xl font-black text-secondary tracking-tighter serif">
                                Prise d'<span className="text-primary italic">Ordre</span>
                            </h2>
                            <p className="text-muted font-medium">Sélectionnez les plats pour la commande.</p>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                        <input
                            type="text"
                            placeholder="Rechercher un plat..."
                            className="w-full pl-12 pr-4 py-4 glass border-secondary/10 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary"
                            value={searchPlat}
                            onChange={e => setSearchPlat(e.target.value)}
                        />
                    </div>

                    {/* Category tabs */}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                        {["Tous", ...categories.map(c => c.libelle)].map(cat => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActiveCat(cat)}
                                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeCat === cat ? 'bg-primary text-white shadow-lg' : 'text-muted hover:text-secondary glass border-secondary/10'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Plat grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-secondary/10">
                        {filteredPlats.map(plat => (
                            <button
                                key={plat.id_plat}
                                type="button"
                                onClick={() => addToCart(plat)}
                                className="p-4 bg-white/70 rounded-2xl border border-secondary/10 text-left hover:border-primary/30 hover:shadow-lg transition-all group"
                            >
                                <p className="font-black text-secondary text-sm leading-tight group-hover:text-primary transition-colors">{plat.libelle}</p>
                                <p className="text-[10px] text-muted mt-1 font-bold uppercase">{plat.categorie?.libelle}</p>
                                <p className="text-lg font-black text-primary mt-2">{Number(plat.prix_actuel).toFixed(2)} €</p>
                            </button>
                        ))}
                        {filteredPlats.length === 0 && (
                            <div className="col-span-full text-center py-12 opacity-30">
                                <p className="text-[10px] font-black uppercase tracking-widest text-muted">Aucun plat disponible</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Order Details + Cart */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-white/80 rounded-[32px] shadow-xl p-8 border border-secondary/5 space-y-6">
                        <h3 className="text-2xl font-black text-secondary serif italic">Détails de la commande</h3>

                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted">Serveur *</label>
                                <select required className="w-full p-4 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary font-bold text-secondary appearance-none" value={form.id_employe} onChange={e => setForm({ ...form, id_employe: e.target.value })}>
                                    <option value="">— Sélectionner —</option>
                                    {employes.map(e => <option key={e.id_employe} value={e.id_employe}>{e.prenom} {e.nom} ({e.role})</option>)}
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted">Client (optionnel)</label>
                                <select className="w-full p-4 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary font-bold text-secondary appearance-none" value={form.id_client} onChange={e => setForm({ ...form, id_client: e.target.value })}>
                                    <option value="">— Aucun client —</option>
                                    {clients.map(c => <option key={c.id_client} value={c.id_client}>{c.nom}</option>)}
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted">Type</label>
                                <select className="w-full p-4 bg-secondary/5 border border-secondary/10 rounded-2xl outline-none focus:border-primary font-bold text-secondary appearance-none" value={form.type_cmd} onChange={e => setForm({ ...form, type_cmd: e.target.value })}>
                                    <option value="Sur place">Sur place</option>
                                    <option value="À emporter">À emporter</option>
                                </select>
                            </div>
                        </div>

                        {/* Cart */}
                        <div className="border-t border-secondary/10 pt-6 space-y-3">
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted">
                                <ShoppingCart className="w-4 h-4" />
                                Panier ({cart.length} article{cart.length !== 1 ? "s" : ""})
                            </div>
                            {cart.length === 0 && (
                                <div className="text-center py-8 opacity-20">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted">Sélectionnez des plats</p>
                                </div>
                            )}
                            {cart.map(item => (
                                <div key={item.id_plat} className="space-y-2 p-3 bg-secondary/5 rounded-xl">
                                    <div className="flex justify-between items-center">
                                        <p className="font-black text-secondary text-sm">{item.libelle}</p>
                                        <button type="button" onClick={() => removeFromCart(item.id_plat)} className="text-red-400 hover:text-red-600 transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <button type="button" onClick={() => updateQty(item.id_plat, -1)} className="w-7 h-7 rounded-lg bg-white border border-secondary/10 flex items-center justify-center hover:bg-secondary/10 transition-colors">
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="font-black text-secondary w-5 text-center">{item.quantity}</span>
                                            <button type="button" onClick={() => updateQty(item.id_plat, 1)} className="w-7 h-7 rounded-lg bg-white border border-secondary/10 flex items-center justify-center hover:bg-secondary/10 transition-colors">
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                        <span className="font-black text-primary text-sm">{(item.price * item.quantity).toFixed(2)} €</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Note de cuisson..."
                                        className="w-full text-[11px] p-2 bg-white border border-secondary/10 rounded-lg outline-none focus:border-primary font-medium text-muted"
                                        value={item.note}
                                        onChange={e => updateNote(item.id_plat, e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>

                        {cart.length > 0 && (
                            <div className="border-t border-secondary/10 pt-6">
                                <div className="flex justify-between items-end mb-6">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted">Total</p>
                                    <p className="text-3xl font-black text-secondary serif">{total.toFixed(2)} €</p>
                                </div>
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="w-full py-5 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                                >
                                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                                    Envoyer en cuisine
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </main>
    );
}
