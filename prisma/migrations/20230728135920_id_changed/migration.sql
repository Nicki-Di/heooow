/*
  Warnings:

  - The primary key for the `LeaderBoard` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `LeaderBoard` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LeaderBoard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "score" INTEGER NOT NULL
);
INSERT INTO "new_LeaderBoard" ("id", "name", "score") SELECT "id", "name", "score" FROM "LeaderBoard";
DROP TABLE "LeaderBoard";
ALTER TABLE "new_LeaderBoard" RENAME TO "LeaderBoard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
