"use client";

import { useState } from "react";
import { Project } from "@/types/project";
import DataTable from "@/components/ui/data-table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/utils/format-utils";
import { createLtmColumns } from "@/app/(protected)/projects/ltm-plan/create-ltm-columns";

interface LtmPlanTableProps {
  initialData: {
    projects: Project[];
    totalCount: number;
    totalBudget: number;
    totalEstimate: number;
    totalBilled: number;
  };
}

export function LtmPlanTable({ initialData }: LtmPlanTableProps) {
  const [projects, setProjects] = useState<Project[]>(initialData.projects);
  const [stats, setStats] = useState({
    totalCount: initialData.totalCount,
    totalBudget: initialData.totalBudget,
    totalEstimate: initialData.totalEstimate,
    totalBilled: initialData.totalBilled,
  });

  const columns = createLtmColumns(setProjects);

  return (
    <Card>
      <CardHeader className="px-6 py-4 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-medium">
          Planlagte prosjekter
        </CardTitle>
        <div className="flex gap-2">
          <Badge variant="outline" className="px-3 py-1">
            Total: {stats.totalCount} prosjekter
          </Badge>
          <Badge color="default" className="px-3 py-1">
            Budsjett: {formatCurrency(stats.totalBudget)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <DataTable
          data={projects}
          columns={columns}
          pageSize={10}
          showPagination={true}
        />
      </CardContent>
    </Card>
  );
}
