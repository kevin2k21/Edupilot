import { prisma } from '@/src/db'
import { NextResponse } from 'next/server'

// GET /api/tasks → fetch tasks
export async function GET() {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(tasks)
}

// POST /api/tasks → create task
export async function POST(req: Request) {
  const { title } = await req.json()

  const task = await prisma.task.create({
    data: { title },
  })

  return NextResponse.json(task)
}
