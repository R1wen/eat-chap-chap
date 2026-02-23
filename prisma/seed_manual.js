const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("Seeding started...");
    try {
        // Clean
        await prisma.paiement.deleteMany();
        await prisma.ligne_Commande.deleteMany();
        await prisma.commande.deleteMany();
        await prisma.reservation.deleteMany();
        await prisma.employe.deleteMany();
        await prisma.table_Restaurant.deleteMany();
        await prisma.plat.deleteMany();
        await prisma.categorie.deleteMany();
        await prisma.client.deleteMany();

        // Categorie
        const cats = ['Entrées', 'Plats', 'Desserts', 'Boissons', 'Vins'].map(c => ({ libelle: c }));
        await prisma.categorie.createMany({ data: cats });
        const createdCats = await prisma.categorie.findMany();

        // Plats
        const plats = [
            { libelle: 'Salade', prix_actuel: 12, id_categorie: createdCats[0].id_categorie },
            { libelle: 'Burger', prix_actuel: 18, id_categorie: createdCats[1].id_categorie },
            { libelle: 'Pizza', prix_actuel: 15, id_categorie: createdCats[1].id_categorie },
            { libelle: 'Tarte', prix_actuel: 8, id_categorie: createdCats[2].id_categorie },
            { libelle: 'Soda', prix_actuel: 5, id_categorie: createdCats[3].id_categorie },
            { libelle: 'Rouge', prix_actuel: 25, id_categorie: createdCats[4].id_categorie },
        ];
        await prisma.plat.createMany({ data: plats });
        const allPlats = await prisma.plat.findMany();

        // Clients
        const clients = [
            { nom: 'Client A', telephone: '01' },
            { nom: 'Client B', telephone: '02' },
            { nom: 'Client C', telephone: '03' },
            { nom: 'Client D', telephone: '04' },
            { nom: 'Client E', telephone: '05' },
        ];
        await prisma.client.createMany({ data: clients });
        const allClients = await prisma.client.findMany();

        // Tables
        const tables = [1, 2, 3, 4, 5].map(n => ({ numero: n, capacite: 4, zone: 'Salle' }));
        await prisma.table_Restaurant.createMany({ data: tables });
        const allTables = await prisma.table_Restaurant.findMany();

        // Staff
        const staff = ['Marie', 'Jean', 'Pierre', 'Sophie', 'Lucie'].map(n => ({ nom: n, prenom: 'X', role: 'Serveur' }));
        await prisma.employe.createMany({ data: staff });
        const allStaff = await prisma.employe.findMany();

        // Reservations
        for (let i = 0; i < 5; i++) {
            await prisma.reservation.create({
                data: {
                    date_heure: new Date(),
                    nb_personnes: 2,
                    id_client: allClients[i].id_client,
                    statut: 'Confirmé',
                    tables: { connect: { id_table: allTables[i].id_table } }
                }
            });
        }

        // Commandes
        for (let i = 0; i < 5; i++) {
            const cmd = await prisma.commande.create({
                data: {
                    date_creation: new Date(),
                    id_employe: allStaff[i].id_employe,
                    id_client: allClients[i].id_client,
                    statut_cuisine: 'Prêt',
                    type_cmd: 'Sur place'
                }
            });
            await prisma.ligne_Commande.create({
                data: {
                    id_commande: cmd.id_commande,
                    id_plat: allPlats[i].id_plat,
                    quantite: 1,
                    prix_moment: allPlats[i].prix_actuel
                }
            });
            await prisma.paiement.create({
                data: {
                    id_commande: cmd.id_commande,
                    montant: Number(allPlats[i].prix_actuel),
                    methode: 'CARTE'
                }
            });
        }

        console.log("Seeding successful!");
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
