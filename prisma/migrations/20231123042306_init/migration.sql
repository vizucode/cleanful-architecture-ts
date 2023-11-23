-- CreateTable
CREATE TABLE "Color" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "HexCode" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "ColorId" INTEGER NOT NULL,
    "Title" TEXT NOT NULL,
    "Status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL,
    "CardId" INTEGER NOT NULL,
    "Title" TEXT NOT NULL,
    "IsFinished" BOOLEAN NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_ColorId_fkey" FOREIGN KEY ("ColorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_CardId_fkey" FOREIGN KEY ("CardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
