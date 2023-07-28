import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { LeaderBoardType } from "@/globals/types";
import { prisma } from "@/globals/prisma";

export async function GET(request: NextRequest) {
  try {
    const result = await prisma.leaderBoard.findMany({
      take: 10,
      orderBy: {
        score: "desc",
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error occurred." }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: LeaderBoardType = await request.json();
    await prisma.leaderBoard.upsert({
      where: { name: body.name, score: { lt: Number(body.score) } },
      update: { score: Number(body.score) },
      create: { name: body.name, score: Number(body.score) },
    });
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError)
      if (error.code === "P2002") return NextResponse.json({}, { status: 200 });
    return NextResponse.json({ error: "Error occurred." }, { status: 400 });
  }
}
