"use server";

import { ProjectQueryParams } from "@/types/project";

export async function fetchProjects(params: ProjectQueryParams) {
  const queryParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (
      value !== undefined &&
      value !== null &&
      !(typeof value === "string" && value.trim() === "")
    ) {
      queryParams.append(key, String(value));
    }
  }

  console.log(queryParams);

  const response = await fetch(
    `http://localhost:8081/api/projects?${queryParams.toString()}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projects = await response.json();
  const totalCount = Number(response.headers.get("x-total-count")) || 0;
  const totalBudget = Number(response.headers.get("x-total-budget")) || 0;
  const totalEstimate = Number(response.headers.get("x-total-estimate")) || 0;
  const totalBilled = Number(response.headers.get("x-total-billed")) || 0;

  return {
    projects,
    totalCount,
    totalBudget,
    totalEstimate,
    totalBilled,
  };
}
