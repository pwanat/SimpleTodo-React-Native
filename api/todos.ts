import { db } from "@/db/client";
import { projects, todos } from "@/db/schema";
import { eq } from "drizzle-orm";

export const fetchIncompleteTodos = () =>
  db
    .select()
    .from(todos)
    .leftJoin(projects, eq(todos.project_id, projects.id))
    .where(eq(todos.completed, 0));
