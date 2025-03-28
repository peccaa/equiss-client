import React from "react";
import { fetchProjects } from "@/app/(protected)/projects/actions/fetch-projects";
import { ProjectType } from "@/types/project";
import { LtmPlanTable } from "@/app/(protected)/projects/ltm-plan/ltm-plan-table";

export default async function LtmPlanPage() {
  const response = await fetchProjects({
    projectType: ProjectType.PLANNED,
    approved: false,
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">LTM-Plan</h1>
      </div>
      <LtmPlanTable initialData={response} />
    </div>
  );
}
