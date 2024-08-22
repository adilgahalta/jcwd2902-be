-- DropForeignKey
ALTER TABLE `managers` DROP FOREIGN KEY `managers_id_fkey`;

-- AlterTable
ALTER TABLE `managers` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AddForeignKey
ALTER TABLE `managers` ADD CONSTRAINT `managers_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
