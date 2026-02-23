"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function TicketPrintPage() {
    const params = useParams();
    const [order, setOrder] = useState<any>(null);

    useEffect(() => {
        fetch(`/api/commandes/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                // Trigger print once data is loaded
                setTimeout(() => window.print(), 500);
            });
    }, [params.id]);

    if (!order) return <div className="p-10 text-center font-mono">Chargement du ticket...</div>;

    const total = order.lignes.reduce((acc: number, line: any) => acc + (Number(line.prix_moment) * line.quantite), 0);
    const tax = total * 0.1;

    return (
        <div className="ticket-container bg-white p-8 max-w-[400px] mx-auto font-mono text-sm uppercase">
            <style jsx global>{`
                @media print {
                    body * { visibility: hidden; }
                    .ticket-container, .ticket-container * { visibility: visible; }
                    .ticket-container { 
                        position: absolute; 
                        left: 0; 
                        top: 0; 
                        width: 100%;
                        padding: 0;
                    }
                }
            `}</style>

            <div className="text-center space-y-2 mb-8">
                <h1 className="text-2xl font-black tracking-tighter">EAT CHAP CHAP</h1>
                <p>123 Avenue des Saveurs, 75001 Paris</p>
                <p>Tél: 01 23 45 67 89</p>
                <div className="border-b-2 border-dashed border-black w-full pt-4" />
            </div>

            <div className="space-y-1 mb-6">
                <div className="flex justify-between">
                    <span>Ticket #:</span>
                    <span>{order.id_commande}</span>
                </div>
                <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{new Date(order.date_creation).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex justify-between">
                    <span>Table:</span>
                    <span>{order.tables?.[0]?.numero || "A EMPORTER"}</span>
                </div>
                <div className="flex justify-between">
                    <span>Serveur:</span>
                    <span>{order.employe?.prenom}</span>
                </div>
            </div>

            <div className="border-b-2 border-dashed border-black mb-6" />

            <div className="space-y-4 mb-8">
                {order.lignes.map((line: any, idx: number) => (
                    <div key={idx} className="space-y-1">
                        <div className="flex justify-between font-bold">
                            <span>{line.quantite}x {line.plat?.libelle}</span>
                            <span>{(line.prix_moment * line.quantite).toFixed(2)}€</span>
                        </div>
                        {line.note_cuisson && <p className="text-[10px] italic indent-4">[{line.note_cuisson}]</p>}
                    </div>
                ))}
            </div>

            <div className="border-b-2 border-dashed border-black mb-6" />

            <div className="space-y-2 mb-10 text-lg font-black">
                <div className="flex justify-between">
                    <span>HT:</span>
                    <span>{(total - tax).toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                    <span>TVA (10%):</span>
                    <span>{tax.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-2xl pt-2 border-t border-black">
                    <span>TOTAL:</span>
                    <span>{total.toFixed(2)}€</span>
                </div>
            </div>

            <div className="text-center space-y-4">
                <p className="font-bold">MERCI DE VOTRE VISITE !</p>
                <p className="text-[10px]">Société Eat Chap Chap SAS - RCS Paris 123 456 789</p>
                <div className="flex justify-center pt-4">
                    <div className="w-48 h-12 bg-black flex items-center justify-center text-white text-xs tracking-widest">
                        BARCODE_MOCK
                    </div>
                </div>
            </div>
        </div>
    );
}
