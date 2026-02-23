"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BentoCard from "@/components/ui/BentoCard";
import {
    Receipt,
    CreditCard,
    Banknote,
    Search,
    ChevronRight,
    CheckCircle2,
    Table as TableIcon,
    DollarSign,
    QrCode,
    Printer,
    ArrowLeft,
    Utensils
} from "lucide-react";
import Link from "next/link";

export default function CaissePage() {
    const [orders, setOrders] = useState<any[]>([]);
    const [selectedOrder, setSelectedOrder] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        fetchActiveOrders();
    }, []);

    const fetchActiveOrders = async () => {
        try {
            const res = await fetch("/api/commandes");
            const data = await res.json();
            // In POS, we mainly want unpaid orders
            const unpaid = data.filter((o: any) => o.paiements.length === 0);
            setOrders(unpaid);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const calculateTotal = (order: any) => {
        return order.lignes.reduce((acc: number, line: any) => acc + (Number(line.prix_moment) * line.quantite), 0);
    };

    const handlePayment = async (method: string) => {
        if (!selectedOrder) return;
        setIsProcessing(true);
        try {
            const total = calculateTotal(selectedOrder);
            const res = await fetch("/api/paiements", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id_commande: selectedOrder.id_commande,
                    montant: total,
                    methode: method
                })
            });
            if (res.ok) {
                // Success - remove from list and clear selection
                setOrders(prev => prev.filter(o => o.id_commande !== selectedOrder.id_commande));
                setSelectedOrder(null);
                alert("Paiement enregistré avec succès !");
            }
        } catch (error) {
            console.error(error);
        }
        setIsProcessing(false);
    };

    return (
        <main className="min-h-screen pt-24 pb-12 px-8 bg-background font-sans">
            <div className="ambient-glow" />
            <Header />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                {/* Left Side: Active Tickets (Column 5) */}
                <div className="lg:col-span-12 xl:col-span-5 space-y-6">
                    <div className="space-y-1">
                        <h2 className="text-5xl font-black text-secondary tracking-tighter serif italic">
                            Interface <span className="text-primary not-italic">Encaissement</span>
                        </h2>
                        <p className="text-muted font-medium">Sélectionnez un ticket pour finaliser le règlement.</p>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                        <input
                            type="text"
                            placeholder="Chercher une table ou un client..."
                            className="w-full pl-12 pr-6 py-4 glass border border-secondary/5 rounded-2xl outline-none focus:border-primary transition-all font-bold text-secondary shadow-sm"
                        />
                    </div>

                    <div className="space-y-3 h-[600px] overflow-y-auto pr-2 scrollbar-hide">
                        {loading ? (
                            [1, 2, 3].map(i => <div key={i} className="h-24 glass rounded-3xl animate-pulse" />)
                        ) : orders.length > 0 ? (
                            orders.map(order => (
                                <button
                                    key={order.id_commande}
                                    onClick={() => setSelectedOrder(order)}
                                    className={`w-full p-6 rounded-[32px] border-2 transition-all flex items-center justify-between text-left ${selectedOrder?.id_commande === order.id_commande ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10' : 'border-secondary/5 bg-white/60 hover:border-primary/20 hover:scale-[1.01]'}`}
                                >
                                    <div className="flex gap-4 items-center">
                                        <div className="w-14 h-14 rounded-2xl bg-secondary/5 flex flex-col items-center justify-center text-secondary">
                                            <TableIcon className="w-5 h-5" />
                                            <span className="text-sm font-black italic serif">{order.tables?.[0]?.numero || "TK"}</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-[10px] font-black text-primary uppercase tracking-widest">Ticket #{order.id_commande}</p>
                                            <h4 className="text-xl font-black text-secondary serif leading-tight truncate max-w-[150px]">{order.client?.nom || "Clientanonyme"}</h4>
                                            <p className="text-[9px] font-bold text-muted uppercase tracking-tighter">{order.lignes.length} Articles</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-black text-secondary">{calculateTotal(order).toFixed(2)} €</p>
                                        <p className="text-[9px] font-black text-muted uppercase tracking-widest">À régler</p>
                                    </div>
                                </button>
                            ))
                        ) : (
                            <div className="py-20 text-center opacity-30">
                                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                                <p className="text-xs font-black uppercase tracking-widest">Toutes les tables sont à jour</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side: Payment Details (Column 7) */}
                <div className="lg:col-span-12 xl:col-span-7">
                    {selectedOrder ? (
                        <div className="sticky top-32 animate-in slide-in-from-right-8 duration-500">
                            <BentoCard className="!p-10 border-none shadow-2xl bg-white/80 overflow-hidden relative">
                                <Receipt className="absolute top-0 right-0 p-12 opacity-[0.03] w-64 h-64 pointer-events-none" />

                                <div className="space-y-10 relative z-10">
                                    <div className="flex justify-between items-center pb-6 border-b border-secondary/5">
                                        <div>
                                            <h3 className="text-4xl font-black text-secondary serif italic tracking-tighter">Récapitulatif Table {selectedOrder.tables?.[0]?.numero || "Takeaway"}</h3>
                                            <p className="text-xs font-bold text-muted">Serveur : {selectedOrder.employe?.prenom}</p>
                                        </div>
                                        <button onClick={() => setSelectedOrder(null)} className="p-3 rounded-xl hover:bg-secondary/5 text-muted transition-colors"><ArrowLeft /></button>
                                    </div>

                                    {/* Order Items List */}
                                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-4 scrollbar-hide">
                                        {selectedOrder.lignes.map((line: any, idx: number) => (
                                            <div key={idx} className="flex justify-between items-center py-2">
                                                <div className="flex gap-4 items-center">
                                                    <span className="font-black text-primary text-sm">{line.quantite}x</span>
                                                    <p className="font-bold text-secondary text-base">{line.plat?.libelle}</p>
                                                </div>
                                                <p className="font-black text-secondary">{(Number(line.prix_moment) * line.quantite).toFixed(2)} €</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Financials */}
                                    <div className="pt-8 border-t border-secondary/5 space-y-6">
                                        <div className="flex justify-between items-end">
                                            <p className="text-[10px] font-black text-muted uppercase tracking-widest">Sous-total HT</p>
                                            <p className="text-lg font-black text-secondary">{(calculateTotal(selectedOrder) / 1.1).toFixed(2)} €</p>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <p className="text-[10px] font-black text-muted uppercase tracking-widest">TVA (10%)</p>
                                            <p className="text-lg font-black text-secondary">{(calculateTotal(selectedOrder) * 0.1).toFixed(2)} €</p>
                                        </div>
                                        <div className="flex justify-between items-end bg-primary/5 p-8 rounded-[32px]">
                                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Net à payer</p>
                                            <p className="text-6xl font-black text-secondary tracking-tighter">{calculateTotal(selectedOrder).toFixed(2)} €</p>
                                        </div>
                                    </div>

                                    {/* Payment Methods */}
                                    <div className="space-y-6">
                                        <p className="text-[10px] font-black text-muted uppercase tracking-widest text-center">Mode de règlement</p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <button
                                                disabled={isProcessing}
                                                onClick={() => handlePayment("CARTE")}
                                                className="flex flex-col items-center gap-3 p-6 glass rounded-2xl hover:bg-secondary hover:text-white transition-all group"
                                            >
                                                <CreditCard className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Carte</span>
                                            </button>
                                            <button
                                                disabled={isProcessing}
                                                onClick={() => handlePayment("ESPÈCES")}
                                                className="flex flex-col items-center gap-3 p-6 glass rounded-2xl hover:bg-secondary hover:text-white transition-all group"
                                            >
                                                <Banknote className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Espèces</span>
                                            </button>
                                            <button
                                                className="flex flex-col items-center gap-3 p-6 glass rounded-2xl hover:bg-secondary hover:text-white transition-all group"
                                            >
                                                <QrCode className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Mobile</span>
                                            </button>
                                            <button
                                                onClick={() => window.open(`/tickets/${selectedOrder.id_commande}`, '_blank')}
                                                className="flex flex-col items-center gap-3 p-6 glass rounded-2xl hover:bg-secondary hover:text-white transition-all group"
                                            >
                                                <Printer className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Ticket</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </BentoCard>
                        </div>
                    ) : (
                        <BentoCard className="h-full flex flex-col items-center justify-center text-center !p-20 opacity-40">
                            <Utensils className="w-24 h-24 text-muted mb-8" />
                            <h3 className="text-4xl font-black serif italic text-secondary mb-4">Prêt pour l'encaissement</h3>
                            <p className="text-lg font-medium text-muted max-w-md">Sélectionnez une table à gauche pour accéder aux options de règlement et à la facturation.</p>
                        </BentoCard>
                    )}
                </div>
            </div>
        </main>
    );
}
