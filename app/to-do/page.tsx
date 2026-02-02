import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import TodoPage from "./TodoPage";

export default async function TodoRoutePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return <TodoPage />;
}
