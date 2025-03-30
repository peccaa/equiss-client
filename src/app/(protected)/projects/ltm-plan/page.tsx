import React from "react";
import { fetchProjects } from "@/app/(protected)/projects/actions/fetch-projects";
import { ProjectType } from "@/types/project";
import { LtmPlanTable } from "@/app/(protected)/projects/ltm-plan/ltm-plan-table";

export default async function LtmPlanPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; size?: string; sort?: string }>;
}) {
  const { page, size, sort } = await searchParams;

  const pageNumber = Number(page ?? 0);
  const sizeNumber = Number(size ?? 10);
  const sortValue = sort ?? "code,asc";

  const response = await fetchProjects({
    projectType: ProjectType.PLANNED,
    approved: false,
    page: pageNumber,
    size: sizeNumber,
    sort: sortValue,
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">LTM Plan</h1>
      </div>

      <LtmPlanTable
        data={response.projects}
        totalCount={response.totalCount}
        initialPagination={{ pageIndex: pageNumber, pageSize: sizeNumber }}
        initialSort={sortValue}
      />
    </div>
  );
}
