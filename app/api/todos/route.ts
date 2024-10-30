import { NextResponse, NextRequest } from "next/server";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, title: "Learn Next.js", completed: false },
  { id: 2, title: "Practice TypeScript", completed: true },
  { id: 3, title: "Build a small project", completed: false },
];

export async function GET(req: NextRequest) {
  return NextResponse.json({ data: todos }, { status: 200 });
}
