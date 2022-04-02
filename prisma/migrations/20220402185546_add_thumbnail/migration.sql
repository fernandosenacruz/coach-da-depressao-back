/*
  Warnings:

  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - Made the column `content` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `title`,
    ADD COLUMN `thumbnail` VARCHAR(191) NULL,
    MODIFY `content` VARCHAR(191) NOT NULL;
