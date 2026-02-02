import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { prisma } from "../../../src/db";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const tasks = await prisma.task.findMany({
    where: {
      user: {
        email: session.user.email,
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  return NextResponse.json(tasks);
}
/* UPDATE TASK */

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title } = await req.json();

  const task = await prisma.task.create({
    data: {
      title,
      user: {
        connectOrCreate: {
          where: { email: session.user.email },
          create: {
            email: session.user.email,
            name: session.user.name ?? "Anonymous",
          },
        },
      },
    },
  });

  return NextResponse.json(task);
}
