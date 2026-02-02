import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { prisma } from "../../../../src/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  // 1️⃣ Find task & check ownership
  const task = await prisma.task.findFirst({
    where: {
      id: Number(id),
      user: {
        email: session.user.email,
      },
    },
  });

  if (!task) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // 2️⃣ Safely read body (may be empty)
  let data: any = {};
  try {
    data = await req.json();
  } catch {
    data = {};
  }

  // 3️⃣ Decide update type
  const updateData =
    typeof data.title === "string"
      ? { title: data.title }
      : { completed: !task.completed };

  // 4️⃣ Update and return updated task
  const updated = await prisma.task.update({
    where: { id: task.id },
    data: updateData,
  });

  return NextResponse.json(updated);
}

/* DELETE TASK */
export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  await prisma.task.deleteMany({
    where: {
      id: Number(id),
      user: {
        email: session.user.email,
      },
    },
  });

  return NextResponse.json({ success: true });
}
