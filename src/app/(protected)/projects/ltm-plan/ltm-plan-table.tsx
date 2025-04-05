"use client";

import { useRouter, usePathname } from "next/navigation";
import { createLtmColumns } from "./create-ltm-columns";
import { Project } from "@/types/project";
import { PaginationState, SortingState } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Download, Copy, BarChart2 } from "lucide-react";
import { ltmColumnConfig } from "@/config/column-visibility-config";
import { useColumnVisibility } from "@/hooks/projects/use-column-visibility";
import { EditColumnsMenu } from "@/components/edit-columns-menu";

interface LtmPlanTableProps {
  data: Project[];
  totalCount: number;
  initialPagination: PaginationState;
  initialSort: string;
}

export function LtmPlanTable({
  data,
  totalCount,
  initialPagination,
  initialSort,
}: LtmPlanTableProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [pagination, setPagination] =
    useState<PaginationState>(initialPagination);
  const [sorting, setSorting] = useState<SortingState>(
    initialSort?.includes(",")
      ? [
          {
            id: initialSort.split(",")[0],
            desc: initialSort.split(",")[1] === "desc",
          },
        ]
      : [],
  );

  // Define all columns
  const allColumns = createLtmColumns();

  // Use the column visibility hook
  const {
    visibleColumns,
    setVisibleColumns,
    availableColumns,
    visibleColumnsArray,
  } = useColumnVisibility(allColumns, ltmColumnConfig);

  // Update URL when pagination or sorting changes
  useEffect(() => {
    const query = new URLSearchParams();
    query.set("page", pagination.pageIndex.toString());
    query.set("size", pagination.pageSize.toString());

    if (sorting.length > 0) {
      query.set("sort", `${sorting[0].id},${sorting[0].desc ? "desc" : "asc"}`);
    }

    router.push(`${pathname}?${query.toString()}`);
  }, [pagination, sorting, pathname, router]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Copy className="h-4 w-4" />
            Copy
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <BarChart2 className="h-4 w-4" />
            Analyze
          </Button>
        </div>
        <EditColumnsMenu
          columns={availableColumns}
          visibleColumns={visibleColumns}
          setVisibleColumns={setVisibleColumns}
        />
      </div>

      <DataTable
        columns={visibleColumnsArray}
        data={data}
        pageCount={Math.ceil(totalCount / pagination.pageSize)}
        pagination={pagination}
        onPaginationChangeAction={setPagination}
        onSortingChangeAction={setSorting}
        sorting={sorting}
      />
    </div>
  );
}
