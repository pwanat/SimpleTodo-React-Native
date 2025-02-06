import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { Project } from "@/types/project";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";

export const fetchProjects = () => useLiveQuery(db.select().from(projects));

export const createProject = async (project: Omit<Project, 'id'>) => {
  await db.insert(projects).values(project);
}

