import { PrismaClient } from "../lib/generated/prisma";

const prisma = new PrismaClient();

async function main() {
    console.log("Starting Seeding Process...");

    // 1. Clean Data
    await prisma.paiement.deleteMany();
    await prisma.ligne_Commande.deleteMany();
    await prisma.commande.deleteMany();
    await prisma.reservation.deleteMany();
    await prisma.employe.deleteMany();
    await prisma.table_Restaurant.deleteMany();
    await prisma.plat.deleteMany();
    await prisma.categorie.deleteMany();
    await prisma.client.deleteMany();

    console.log("DB Cleared.");

    // 2. Categories
    const categories = [
        { libelle: 'Entrées' },
        { libelle: 'Plats Principaux' },
        { libelle: 'Desserts' },
        { libelle: 'Boissons' },
        { libelle: 'Vins' },
        { libelle: 'Végétarien' }
    ];
    for (const cat of categories) {
        await prisma.categorie.create({ data: cat });
    }
    const createdCats = await prisma.categorie.findMany({ orderBy: { id_categorie: 'asc' } });

    // 3. Plats
    const platsData = [
        { libelle: 'Salade César royale', prix_actuel: 14.50, id_categorie: createdCats[0].id_categorie },
        { libelle: 'Bruschetta tomate/basilic', prix_actuel: 9.50, id_categorie: createdCats[0].id_categorie },
        { libelle: 'Escargots au beurre aillé', prix_actuel: 12.00, id_categorie: createdCats[0].id_categorie },
        { libelle: 'Soupe à l\'oignon traditionnelle', prix_actuel: 10.50, id_categorie: createdCats[0].id_categorie },

        { libelle: 'Entrecôte 300g Argentée', prix_actuel: 29.00, id_categorie: createdCats[1].id_categorie },
        { libelle: 'Risotto aux Cèpes', prix_actuel: 22.00, id_categorie: createdCats[1].id_categorie },
        { libelle: 'Magret de Canard au Miel', prix_actuel: 26.50, id_categorie: createdCats[1].id_categorie },
        { libelle: 'Burger Gourmet Chap', prix_actuel: 19.50, id_categorie: createdCats[1].id_categorie },
        { libelle: 'Filet de Bar aux agrumes', prix_actuel: 24.00, id_categorie: createdCats[1].id_categorie },

        { libelle: 'Tarte Tatin maison', prix_actuel: 9.50, id_categorie: createdCats[2].id_categorie },
        { libelle: 'Crème Brûlée Vanille', prix_actuel: 8.50, id_categorie: createdCats[2].id_categorie },
        { libelle: 'Mousse Chocolat noir', prix_actuel: 8.00, id_categorie: createdCats[2].id_categorie },
        { libelle: 'Café Gourmand', prix_actuel: 11.50, id_categorie: createdCats[2].id_categorie },
        { libelle: 'Profiteroles au chocolat', prix_actuel: 10.00, id_categorie: createdCats[2].id_categorie },

        { libelle: 'Soda Artisanal', prix_actuel: 5.50, id_categorie: createdCats[3].id_categorie },
        { libelle: 'Eau de source (1L)', prix_actuel: 6.00, id_categorie: createdCats[3].id_categorie },
        { libelle: 'Nectar de Fruits bio', prix_actuel: 6.50, id_categorie: createdCats[3].id_categorie },

        { libelle: 'Châteauneuf-du-pape 2018', prix_actuel: 98.00, id_categorie: createdCats[4].id_categorie },
        { libelle: 'Bordeaux Supérieur', prix_actuel: 48.00, id_categorie: createdCats[4].id_categorie },
        { libelle: 'Rosé de Provence', prix_actuel: 34.00, id_categorie: createdCats[4].id_categorie },
        { libelle: 'Champagne Brut Premium', prix_actuel: 85.00, id_categorie: createdCats[4].id_categorie },

        { libelle: 'Lasagnes de légumes', prix_actuel: 18.00, id_categorie: createdCats[5].id_categorie },
        { libelle: 'Salade de Quinoa & Avocat', prix_actuel: 16.50, id_categorie: createdCats[5].id_categorie }
    ];
    await prisma.plat.createMany({ data: platsData });
    const allPlats = await prisma.plat.findMany();

    // 4. Tables
    const tablesData = [
        { numero: 1, capacite: 2, zone: 'Terrasse' },
        { numero: 2, capacite: 2, zone: 'Fenêtre' },
        { numero: 3, capacite: 4, zone: 'Terrasse' },
        { numero: 4, capacite: 2, zone: 'Terrasse' },
        { numero: 5, capacite: 6, zone: 'Salle Centrale' },
        { numero: 6, capacite: 4, zone: 'Fenêtre' },
        { numero: 7, capacite: 4, zone: 'Salle Centrale' },
        { numero: 8, capacite: 2, zone: 'Coin Intime' },
        { numero: 9, capacite: 2, zone: 'Coin Intime' },
        { numero: 10, capacite: 6, zone: 'Salle Centrale' },
        { numero: 11, capacite: 4, zone: 'Salle Centrale' },
        { numero: 12, capacite: 4, zone: 'Fenêtre' },
        { numero: 14, capacite: 2, zone: 'Fenêtre' },
        { numero: 20, capacite: 8, zone: 'Salon Privé' },
    ];
    await prisma.table_Restaurant.createMany({ data: tablesData });
    const allTables = await prisma.table_Restaurant.findMany();

    // 5. Clients (20+)
    const clientsData = [
        { nom: 'Jean Dupont', telephone: '0611223344', email: 'jean.dupont@test.com' },
        { nom: 'Marie Curie', telephone: '0622334455', email: 'marie.curie@lab.com' },
        { nom: 'Antoine Griezmann', telephone: '0633445566', email: 'antoine.g@fff.fr' },
        { nom: 'Alice Wonderland', telephone: '0644556677', email: 'alice@wonder.com' },
        { nom: 'Bob Builder', telephone: '0655667788', email: 'bob@build.com' },
        { nom: 'Hélène Rocher', telephone: '0666778899', email: 'helene@rocher.com' },
        { nom: 'Marc Lefebvre', telephone: '0677889900', email: 'marc.l@pro.com' },
        { nom: 'Sophie Martin', telephone: '0688990011', email: 'sophie.m@gmail.com' },
        { nom: 'Thomas Dubois', telephone: '0699001122', email: 'thomas.d@orange.fr' },
        { nom: 'Julie Petit', telephone: '0610111213', email: 'julie.p@mail.fr' },
        { nom: 'Kevin Roux', telephone: '0614151617', email: 'kevin.r@yahoo.com' },
        { nom: 'Léa Leroy', telephone: '0618192021', email: 'lea.l@free.fr' },
        { nom: 'Nicolas Bertrand', telephone: '0622232425', email: 'nicolas.b@test.com' },
        { nom: 'Chloé Morel', telephone: '0626272829', email: 'chloe.m@pro.com' },
        { nom: 'Hugo Fournier', telephone: '0630313233', email: 'hugo.f@gmail.com' },
        { nom: 'Camille Girard', telephone: '0634353637', email: 'camille.g@mail.com' },
        { nom: 'Arthur Bonnet', telephone: '0638394041', email: 'arthur.b@test.com' },
        { nom: 'Sarah Francois', telephone: '0642434445', email: 'sarah.f@orange.fr' },
        { nom: 'Paul Martinez', telephone: '0646474849', email: 'paul.m@pro.fr' },
        { nom: 'Élodie Perrin', telephone: '0650515253', email: 'elodie.p@gmail.com' }
    ];
    await prisma.client.createMany({ data: clientsData });
    const allClients = await prisma.client.findMany();

    // 6. Staff
    const staffData = [
        { nom: 'Marie', prenom: 'L.', role: 'Serveur' },
        { nom: 'Jean', prenom: 'P.', role: 'Serveur' },
        { nom: 'Pierre', prenom: 'G.', role: 'Cuisinier' },
        { nom: 'Sophie', prenom: 'B.', role: 'Manager' },
        { nom: 'Lucie', prenom: 'K.', role: 'Serveur' },
        { nom: 'Marc', prenom: 'A.', role: 'Serveur' },
        { nom: 'Hélène', prenom: 'S.', role: 'Serveur' },
        { nom: 'Thomas', prenom: 'M.', role: 'Cuisinier' },
        { nom: 'Julie', prenom: 'V.', role: 'Manager' },
        { nom: 'Kevin', prenom: 'D.', role: 'Serveur' },
    ];
    await prisma.employe.createMany({ data: staffData });
    const allStaff = await prisma.employe.findMany();

    // 7. Historical Data (120+ orders across 30 days)
    console.log("Generating 120+ historical orders...");
    const today = new Date();
    for (let i = 0; i < 150; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - Math.floor(Math.random() * 30));
        date.setHours(12 + Math.floor(Math.random() * 10), Math.floor(Math.random() * 60));

        const client = allClients[Math.floor(Math.random() * allClients.length)];
        const staff = allStaff[Math.floor(Math.random() * 3)]; // Serveurs

        const commande = await prisma.commande.create({
            data: {
                date_creation: date,
                id_employe: staff.id_employe,
                id_client: client.id_client,
                statut_cuisine: 'Prêt',
                type_cmd: 'Sur place'
            }
        });

        // Random items (2 to 5)
        const numItems = Math.floor(Math.random() * 4) + 2;
        let total = 0;
        for (let j = 0; j < numItems; j++) {
            const plat = allPlats[Math.floor(Math.random() * allPlats.length)];
            await prisma.ligne_Commande.create({
                data: {
                    id_commande: commande.id_commande,
                    id_plat: plat.id_plat,
                    quantite: Math.random() > 0.8 ? 2 : 1,
                    prix_moment: plat.prix_actuel,
                    note_cuisson: plat.libelle.includes('Entrecôte') ? 'A point' : null
                }
            });
            total += Number(plat.prix_actuel) * (Math.random() > 0.8 ? 2 : 1);
        }

        await prisma.paiement.create({
            data: {
                id_commande: commande.id_commande,
                montant: total,
                methode: ['CARTE', 'ESPÈCES', 'TITRE RESTO'][Math.floor(Math.random() * 3)],
                date_paiement: date
            }
        });
    }

    // 8. Active Service Data (Orders for today, unpaid)
    console.log("Generating 5 active orders for today...");
    for (let i = 0; i < 5; i++) {
        const table = allTables[i]; // Occupy first 5 tables
        const staff = allStaff[i % 3];
        const client = allClients[i % 10];

        const cmd = await prisma.commande.create({
            data: {
                date_creation: new Date(),
                id_employe: staff.id_employe,
                id_client: client.id_client,
                statut_cuisine: 'En cours',
                type_cmd: 'Sur place',
                tables: { connect: { id_table: table.id_table } }
            }
        });

        const plat = allPlats[Math.floor(Math.random() * 10)];
        await prisma.ligne_Commande.create({
            data: {
                id_commande: cmd.id_commande,
                id_plat: plat.id_plat,
                quantite: 2,
                prix_moment: plat.prix_actuel
            }
        });
    }

    // 9. Upcoming Reservations
    console.log("Generating reservations...");
    const resData = [
        { name: "Jean Dupont", guests: 4, hoursOffset: 2 },
        { name: "Alice Martin", guests: 2, hoursOffset: 3.5 },
        { name: "Marc Lefebvre", guests: 6, hoursOffset: 5 },
        { name: "Nicolas Bertrand", guests: 2, hoursOffset: 24 },
        { name: "Camille Girard", guests: 4, hoursOffset: 26 },
        { name: "Arthur Bonnet", guests: 3, hoursOffset: 48 },
        { name: "Sarah Francois", guests: 5, hoursOffset: 12 },
        { name: "Paul Martinez", guests: 2, hoursOffset: 15 },
        { name: "Julie Petit", guests: 4, hoursOffset: 72 },
        { name: "Hugo Fournier", guests: 8, hoursOffset: 4 },
    ];

    for (const res of resData) {
        const date = new Date();
        date.setHours(date.getHours() + res.hoursOffset);

        const client = await prisma.client.findFirst({ where: { nom: { contains: res.name.split(' ')[0] } } });

        await prisma.reservation.create({
            data: {
                date_heure: date,
                nb_personnes: res.guests,
                id_client: client?.id_client || allClients[0].id_client,
                statut: "Confirmé",
                tables: { connect: { id_table: allTables[Math.floor(Math.random() * allTables.length)].id_table } }
            }
        });
    }

    console.log("Seeding Success! Database is now popularised.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
