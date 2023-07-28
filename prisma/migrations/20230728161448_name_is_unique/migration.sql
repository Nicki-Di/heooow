/*
  Warnings:

  - The primary key for the `LeaderBoard` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `LeaderBoard` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LeaderBoard" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "score" INTEGER NOT NULL
);
INSERT INTO "new_LeaderBoard" ("name", "score") SELECT "name", "score" FROM "LeaderBoard";
DROP TABLE "LeaderBoard";
ALTER TABLE "new_LeaderBoard" RENAME TO "LeaderBoard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
