-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL,
    "timestamps" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "latestTimestamps" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);
