-- CreateTable
CREATE TABLE "Client" (
    "id_client" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "telephone" VARCHAR(20),
    "email" VARCHAR(150),

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id_client")
);

-- CreateTable
CREATE TABLE "Table_Restaurant" (
    "id_table" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "capacite" INTEGER NOT NULL,
    "zone" VARCHAR(50),

    CONSTRAINT "Table_Restaurant_pkey" PRIMARY KEY ("id_table")
);

-- CreateTable
CREATE TABLE "Employe" (
    "id_employe" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "prenom" VARCHAR(100) NOT NULL,
    "role" VARCHAR(50) NOT NULL,

    CONSTRAINT "Employe_pkey" PRIMARY KEY ("id_employe")
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id_categorie" SERIAL NOT NULL,
    "libelle" VARCHAR(100) NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id_categorie")
);

-- CreateTable
CREATE TABLE "Plat" (
    "id_plat" SERIAL NOT NULL,
    "libelle" VARCHAR(150) NOT NULL,
    "prix_actuel" DECIMAL(10,2) NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "id_categorie" INTEGER NOT NULL,

    CONSTRAINT "Plat_pkey" PRIMARY KEY ("id_plat")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id_reservation" SERIAL NOT NULL,
    "date_heure" TIMESTAMP(3) NOT NULL,
    "nb_personnes" INTEGER NOT NULL,
    "statut" VARCHAR(50) NOT NULL DEFAULT 'En attente',
    "id_client" INTEGER NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id_reservation")
);

-- CreateTable
CREATE TABLE "Commande" (
    "id_commande" SERIAL NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type_cmd" VARCHAR(50) NOT NULL DEFAULT 'Sur place',
    "statut_cuisine" VARCHAR(50) NOT NULL DEFAULT 'En attente',
    "id_employe" INTEGER NOT NULL,
    "id_client" INTEGER,
    "id_reservation" INTEGER,

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("id_commande")
);

-- CreateTable
CREATE TABLE "Ligne_Commande" (
    "id_ligne" SERIAL NOT NULL,
    "quantite" INTEGER NOT NULL DEFAULT 1,
    "prix_moment" DECIMAL(10,2) NOT NULL,
    "note_cuisson" VARCHAR(255),
    "id_commande" INTEGER NOT NULL,
    "id_plat" INTEGER NOT NULL,

    CONSTRAINT "Ligne_Commande_pkey" PRIMARY KEY ("id_ligne")
);

-- CreateTable
CREATE TABLE "Paiement" (
    "id_paiement" SERIAL NOT NULL,
    "date_paiement" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "montant" DECIMAL(10,2) NOT NULL,
    "methode" VARCHAR(50) NOT NULL,
    "id_commande" INTEGER NOT NULL,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("id_paiement")
);

-- CreateTable
CREATE TABLE "_ReservationToTable_Restaurant" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ReservationToTable_Restaurant_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CommandeToTable_Restaurant" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CommandeToTable_Restaurant_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Table_Restaurant_numero_key" ON "Table_Restaurant"("numero");

-- CreateIndex
CREATE INDEX "_ReservationToTable_Restaurant_B_index" ON "_ReservationToTable_Restaurant"("B");

-- CreateIndex
CREATE INDEX "_CommandeToTable_Restaurant_B_index" ON "_CommandeToTable_Restaurant"("B");

-- AddForeignKey
ALTER TABLE "Plat" ADD CONSTRAINT "Plat_id_categorie_fkey" FOREIGN KEY ("id_categorie") REFERENCES "Categorie"("id_categorie") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id_client") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_id_employe_fkey" FOREIGN KEY ("id_employe") REFERENCES "Employe"("id_employe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id_client") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_id_reservation_fkey" FOREIGN KEY ("id_reservation") REFERENCES "Reservation"("id_reservation") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ligne_Commande" ADD CONSTRAINT "Ligne_Commande_id_commande_fkey" FOREIGN KEY ("id_commande") REFERENCES "Commande"("id_commande") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ligne_Commande" ADD CONSTRAINT "Ligne_Commande_id_plat_fkey" FOREIGN KEY ("id_plat") REFERENCES "Plat"("id_plat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_id_commande_fkey" FOREIGN KEY ("id_commande") REFERENCES "Commande"("id_commande") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReservationToTable_Restaurant" ADD CONSTRAINT "_ReservationToTable_Restaurant_A_fkey" FOREIGN KEY ("A") REFERENCES "Reservation"("id_reservation") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReservationToTable_Restaurant" ADD CONSTRAINT "_ReservationToTable_Restaurant_B_fkey" FOREIGN KEY ("B") REFERENCES "Table_Restaurant"("id_table") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommandeToTable_Restaurant" ADD CONSTRAINT "_CommandeToTable_Restaurant_A_fkey" FOREIGN KEY ("A") REFERENCES "Commande"("id_commande") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommandeToTable_Restaurant" ADD CONSTRAINT "_CommandeToTable_Restaurant_B_fkey" FOREIGN KEY ("B") REFERENCES "Table_Restaurant"("id_table") ON DELETE CASCADE ON UPDATE CASCADE;
