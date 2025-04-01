"use client";

import React from "react";
import { ProjectType } from "@/types/project";
import { LtmPlanTable } from "@/app/(protected)/projects/ltm-plan/ltm-plan-table";
import { useSearchParams } from "next/navigation";
import { useProjects } from "@/hooks/projects/use-projects";
import { TableSkeleton } from "@/components/skeletons/table-skeleton";

export default function LtmPlanPage() {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") ?? "0");
  const size = Number(searchParams.get("size") ?? "10");
  const sort = searchParams.get("sort") ?? "code,asc";

  const { data, isLoading, error } = useProjects({
    projectType: ProjectType.PLANNED,
    approved: false,
    page,
    size,
    sort,
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">LTM Plan</h1>
      </div>

      {isLoading ? (
        <TableSkeleton columnCount={6} rowCount={10} />
      ) : error ? (
        <div className="p-4 rounded-md bg-destructive/10 text-destructive border border-destructive">
          Error loading projects: {error.message}
        </div>
      ) : data ? (
        <LtmPlanTable
          data={data.projects}
          totalCount={data.totalCount}
          initialPagination={{ pageIndex: page, pageSize: size }}
          initialSort={sort}
        />
      ) : null}
    </div>
  );
}
