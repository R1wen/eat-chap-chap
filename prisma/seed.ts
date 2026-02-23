import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma";
import * as dotenv from "dotenv";

dotenv.config();

const connectionString =
    process.env.DATABASE_URL ||
    "postgresql://postgres.gtouaxevpmcxdmolqhan:VYZYvBG7hSRkwFj4@aws-0-eu-central-1.pooler.supabase.com:6543/postgres";

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// Helpers
const rand = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const randInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const pastDate = (daysAgo: number, hour = 12) => {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    d.setHours(hour, randInt(0, 59), 0, 0);
    return d;
};
const futureDate = (hoursFromNow: number) => {
    const d = new Date();
    d.setHours(d.getHours() + hoursFromNow, randInt(0, 59), 0, 0);
    return d;
};

async function main() {
    console.log("�Y-'️  Clearing all tables...");
    await prisma.paiement.deleteMany();
    await prisma.ligne_Commande.deleteMany();
    await prisma.commande.deleteMany();
    await prisma.reservation.deleteMany();
    await prisma.employe.deleteMany();
    await prisma.table_Restaurant.deleteMany();
    await prisma.plat.deleteMany();
    await prisma.categorie.deleteMany();
    await prisma.client.deleteMany();
    console.log("�o. Tables cleared.");

    // �"?�"?�"? 1. CATEGORIES �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?
    console.log("�Y", Seeding categories...");
    await prisma.categorie.createMany({
        data: [
            { libelle: "Entrées" },
            { libelle: "Plats Principaux" },
            { libelle: "Desserts" },
            { libelle: "Boissons" },
            { libelle: "Vins & Spiritueux" },
            { libelle: "Végétarien" },
        ],
    });
    const cats = await prisma.categorie.findMany({ orderBy: { id_categorie: "asc" } });
    const [catEntrees, catPlats, catDesserts, catBoissons, catVins, catVeg] = cats;

    // �"?�"?�"? 2. PLATS (menu) �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?
    console.log("�Y��️  Seeding menu items...");
    await prisma.plat.createMany({
        data: [
            // Entrées
            { libelle: "Salade César Royale", prix_actuel: 14.5, id_categorie: catEntrees.id_categorie },
            { libelle: "Bruschetta Tomate Basilic", prix_actuel: 9.5, id_categorie: catEntrees.id_categorie },
            { libelle: "Escargots Beurre Aillé", prix_actuel: 12.0, id_categorie: catEntrees.id_categorie },
            { libelle: "Soupe à l'Oignon Gratinée", prix_actuel: 10.5, id_categorie: catEntrees.id_categorie },
            { libelle: "Carpaccio de B�"uf", prix_actuel: 16.0, id_categorie: catEntrees.id_categorie },
            { libelle: "Foie Gras Maison", prix_actuel: 22.0, id_categorie: catEntrees.id_categorie },
            // Plats
            { libelle: "Entrecôte 300g", prix_actuel: 29.0, id_categorie: catPlats.id_categorie },
            { libelle: "Risotto aux Cèpes", prix_actuel: 22.0, id_categorie: catPlats.id_categorie },
            { libelle: "Magret de Canard Miel", prix_actuel: 26.5, id_categorie: catPlats.id_categorie },
            { libelle: "Burger Gourmet Chap", prix_actuel: 19.5, id_categorie: catPlats.id_categorie },
            { libelle: "Filet de Bar Agrumes", prix_actuel: 24.0, id_categorie: catPlats.id_categorie },
            { libelle: "Côtes d'Agneau Rôties", prix_actuel: 32.0, id_categorie: catPlats.id_categorie },
            { libelle: "Poulet Rôti Grand-mère", prix_actuel: 21.0, id_categorie: catPlats.id_categorie },
            // Desserts
            { libelle: "Tarte Tatin Maison", prix_actuel: 9.5, id_categorie: catDesserts.id_categorie },
            { libelle: "Crème Brûlée Vanille", prix_actuel: 8.5, id_categorie: catDesserts.id_categorie },
            { libelle: "Mousse Chocolat Noir", prix_actuel: 8.0, id_categorie: catDesserts.id_categorie },
            { libelle: "Café Gourmand", prix_actuel: 11.5, id_categorie: catDesserts.id_categorie },
            { libelle: "Profiteroles Chocolat", prix_actuel: 10.0, id_categorie: catDesserts.id_categorie },
            // Boissons
            { libelle: "Soda Artisanal", prix_actuel: 5.5, id_categorie: catBoissons.id_categorie },
            { libelle: "Eau de Source 1L", prix_actuel: 6.0, id_categorie: catBoissons.id_categorie },
            { libelle: "Jus de Fruits Bio", prix_actuel: 6.5, id_categorie: catBoissons.id_categorie },
            { libelle: "Café Espresso", prix_actuel: 3.5, id_categorie: catBoissons.id_categorie },
            // Vins
            { libelle: "Châteauneuf-du-Pape 2018", prix_actuel: 98.0, id_categorie: catVins.id_categorie },
            { libelle: "Bordeaux Supérieur", prix_actuel: 48.0, id_categorie: catVins.id_categorie },
            { libelle: "Rosé de Provence", prix_actuel: 34.0, id_categorie: catVins.id_categorie },
            { libelle: "Champagne Brut Premium", prix_actuel: 85.0, id_categorie: catVins.id_categorie },
            // Végétarien
            { libelle: "Lasagnes de Légumes", prix_actuel: 18.0, id_categorie: catVeg.id_categorie },
            { libelle: "Quinoa & Avocat", prix_actuel: 16.5, id_categorie: catVeg.id_categorie },
            { libelle: "Buddha Bowl", prix_actuel: 17.5, id_categorie: catVeg.id_categorie },
        ],
    });
    const allPlats = await prisma.plat.findMany();

    // �"?�"?�"? 3. TABLES �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?
    console.log("�Y�' Seeding restaurant tables...");
    await prisma.table_Restaurant.createMany({
        data: [
            { numero: 1, capacite: 2, zone: "Terrasse" },
            { numero: 2, capacite: 2, zone: "Fenêtre" },
            { numero: 3, capacite: 4, zone: "Terrasse" },
            { numero: 4, capacite: 2, zone: "Terrasse" },
            { numero: 5, capacite: 6, zone: "Salle Centrale" },
            { numero: 6, capacite: 4, zone: "Fenêtre" },
            { numero: 7, capacite: 4, zone: "Salle Centrale" },
            { numero: 8, capacite: 2, zone: "Coin Intime" },
            { numero: 9, capacite: 2, zone: "Coin Intime" },
            { numero: 10, capacite: 6, zone: "Salle Centrale" },
            { numero: 11, capacite: 4, zone: "Salle Centrale" },
            { numero: 12, capacite: 4, zone: "Fenêtre" },
            { numero: 14, capacite: 2, zone: "Fenêtre" },
            { numero: 20, capacite: 8, zone: "Salon Privé" },
        ],
    });
    const allTables = await prisma.table_Restaurant.findMany({ orderBy: { numero: "asc" } });

    // �"?�"?�"? 4. CLIENTS �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?
    console.log("�Y'� Seeding clients...");
    await prisma.client.createMany({
        data: [
            { nom: "Jean Dupont", telephone: "0611223344", email: "jean.dupont@test.com" },
            { nom: "Marie Curie", telephone: "0622334455", email: "marie.curie@lab.com" },
            { nom: "Antoine Griezmann", telephone: "0633445566", email: "antoine.g@fff.fr" },
            { nom: "Alice Martin", telephone: "0644556677", email: "alice@wonder.com" },
            { nom: "Bob Builder", telephone: "0655667788", email: "bob@build.com" },
            { nom: "Hélène Rocher", telephone: "0666778899", email: "helene@rocher.com" },
            { nom: "Marc Lefebvre", telephone: "0677889900", email: "marc.l@pro.com" },
            { nom: "Sophie Martin", telephone: "0688990011", email: "sophie.m@gmail.com" },
            { nom: "Thomas Dubois", telephone: "0699001122", email: "thomas.d@orange.fr" },
            { nom: "Julie Petit", telephone: "0610111213", email: "julie.p@mail.fr" },
            { nom: "Kevin Roux", telephone: "0614151617", email: "kevin.r@yahoo.com" },
            { nom: "Léa Leroy", telephone: "0618192021", email: "lea.l@free.fr" },
            { nom: "Nicolas Bertrand", telephone: "0622232425", email: "nicolas.b@test.com" },
            { nom: "Chloé Morel", telephone: "0626272829", email: "chloe.m@pro.com" },
            { nom: "Hugo Fournier", telephone: "0630313233", email: "hugo.f@gmail.com" },
            { nom: "Camille Girard", telephone: "0634353637", email: "camille.g@mail.com" },
            { nom: "Arthur Bonnet", telephone: "0638394041", email: "arthur.b@test.com" },
            { nom: "Sarah François", telephone: "0642434445", email: "sarah.f@orange.fr" },
            { nom: "Paul Martinez", telephone: "0646474849", email: "paul.m@pro.fr" },
            { nom: "�?lodie Perrin", telephone: "0650515253", email: "elodie.p@gmail.com" },
        ],
    });
    const allClients = await prisma.client.findMany();

    // �"?�"?�"? 5. STAFF �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?
    console.log("�Y'��?��Y�� Seeding staff...");
    await prisma.employe.createMany({
        data: [
            { nom: "Laurent", prenom: "M.", role: "Manager" },
            { nom: "Dubois", prenom: "P.", role: "Serveur" },
            { nom: "Garcia", prenom: "S.", role: "Serveur" },
            { nom: "Bernard", prenom: "T.", role: "Cuisinier" },
            { nom: "Petit", prenom: "A.", role: "Serveur" },
            { nom: "Richard", prenom: "J.", role: "Cuisinier" },
            { nom: "Simon", prenom: "L.", role: "Serveur" },
            { nom: "Michel", prenom: "C.", role: "Manager" },
            { nom: "Lefèvre", prenom: "H.", role: "Cuisinier" },
            { nom: "Romain", prenom: "K.", role: "Serveur" },
        ],
    });
    const allStaff = await prisma.employe.findMany();
    const servers = allStaff.filter((e) => e.role === "Serveur");

    // �"?�"?�"? 6. HISTORICAL ORDERS (last 30 days, paid) �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?
    console.log("�Y"o Seeding 150 historical orders...");
    const methods = ["CARTE", "ESP�^CES", "TITRE RESTO"];
    const kitchenStatuses = ["Prêt", "Servi"];

    for (let i = 0; i < 150; i++) {
        const daysAgo = randInt(0, 30);
        const hour = randInt(11, 22);
        const orderDate = pastDate(daysAgo, hour);
        const client = rand(allClients);
        const staff = rand(servers);

        const commande = await prisma.commande.create({
            data: {
                date_creation: orderDate,
                id_employe: staff.id_employe,
                id_client: client.id_client,
                statut_cuisine: rand(kitchenStatuses),
                type_cmd: Math.random() > 0.1 ? "Sur place" : "�? emporter",
            },
        });

        // 2�?"5 items per order
        let total = 0;
        const numItems = randInt(2, 5);
        for (let j = 0; j < numItems; j++) {
            const plat = rand(allPlats);
            const qty = Math.random() > 0.75 ? 2 : 1;
            await prisma.ligne_Commande.create({
                data: {
                    id_commande: commande.id_commande,
                    id_plat: plat.id_plat,
                    quantite: qty,
                    prix_moment: plat.prix_actuel,
                    note_cuisson: plat.libelle.includes("Entrecôte") ? rand(["Saignant", "�? point", "Bien cuit"]) : null,
                },
            });
            total += Number(plat.prix_actuel) * qty;
        }

        await prisma.paiement.create({
            data: {
                id_commande: commande.id_commande,
                montant: total,
                methode: rand(methods),
                date_paiement: orderDate,
            },
        });
    }

    // �"?�"?�"? 7. ACTIVE ORDERS (today, unpaid) �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?
    console.log("�Y"� Seeding 6 active in-progress orders...");
    const activeStatuses = ["En attente", "En cours", "En cours"];
    for (let i = 0; i < 6; i++) {
        const table = allTables[i];
        const staff = servers[i % servers.length];
        const client = allClients[i % allClients.length];

        const cmd = await prisma.commande.create({
            data: {
                date_creation: new Date(),
                id_employe: staff.id_employe,
                id_client: client.id_client,
                statut_cuisine: rand(activeStatuses),
                type_cmd: "Sur place",
                tables: { connect: { id_table: table.id_table } },
            },
        });

        const numItems = randInt(1, 3);
        for (let j = 0; j < numItems; j++) {
            const plat = rand(allPlats.slice(0, 15)); // main dishes only
            await prisma.ligne_Commande.create({
                data: {
                    id_commande: cmd.id_commande,
                    id_plat: plat.id_plat,
                    quantite: 1,
                    prix_moment: plat.prix_actuel,
                },
            });
        }
    }

    // �"?�"?�"? 8. RESERVATIONS �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?
    console.log("�Y". Seeding reservations...");
    const reservationData = [
        { clientIdx: 0, guests: 4, hoursOffset: 2, statut: "Confirmé" },
        { clientIdx: 1, guests: 2, hoursOffset: 3, statut: "Confirmé" },
        { clientIdx: 2, guests: 6, hoursOffset: 5, statut: "Confirmé" },
        { clientIdx: 3, guests: 2, hoursOffset: 24, statut: "Confirmé" },
        { clientIdx: 4, guests: 4, hoursOffset: 26, statut: "En attente" },
        { clientIdx: 5, guests: 3, hoursOffset: 48, statut: "Confirmé" },
        { clientIdx: 6, guests: 5, hoursOffset: 12, statut: "Confirmé" },
        { clientIdx: 7, guests: 2, hoursOffset: 15, statut: "En attente" },
        { clientIdx: 8, guests: 4, hoursOffset: 72, statut: "Confirmé" },
        { clientIdx: 9, guests: 8, hoursOffset: 4, statut: "Confirmé" },
        { clientIdx: 10, guests: 2, hoursOffset: -48, statut: "Honorée" },
        { clientIdx: 11, guests: 4, hoursOffset: -24, statut: "Honorée" },
        { clientIdx: 12, guests: 3, hoursOffset: -5, statut: "Annulée" },
    ];

    for (const r of reservationData) {
        const tableForRes = allTables[randInt(6, allTables.length - 1)]; // use tables not occupied by active orders
        await prisma.reservation.create({
            data: {
                date_heure: futureDate(r.hoursOffset),
                nb_personnes: r.guests,
                id_client: allClients[r.clientIdx].id_client,
                statut: r.statut,
                tables: { connect: { id_table: tableForRes.id_table } },
            },
        });
    }

    console.log(`
�o. Seeding complete!
   �?� ${cats.length} categories
   �?� ${allPlats.length} menu items
   �?� ${allTables.length} tables
   �?� ${allClients.length} clients
   �?� ${allStaff.length} staff members
   �?� 150 historical paid orders
   �?� 6 active in-progress orders
   �?� ${reservationData.length} reservations
  `);
}

main()
    .catch((e) => {
        console.error("�O Seed failed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
