-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "timestamps" DROP NOT NULL,
ALTER COLUMN "timestamps" DROP DEFAULT,
ALTER COLUMN "timestamps" SET DATA TYPE TEXT,
ALTER COLUMN "latestTimestamps" SET DATA TYPE TEXT;
