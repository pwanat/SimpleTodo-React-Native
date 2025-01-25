import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { Project } from "@/types/project";

export const createProject = async (project: Omit<Project, 'id'>) => {
  await db.insert(projects).values(project);
}