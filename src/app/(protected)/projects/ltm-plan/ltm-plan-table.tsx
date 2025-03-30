"use client";

import { useRouter } from "next/navigation";
import { createLtmColumns } from "./create-ltm-columns";
import { Project } from "@/types/project";
import { PaginationState, SortingState } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { DataTable } from "@/components/ui/data-table";

interface LtmPlanTableProps {
  data: Project[];
  totalCount: number;
  initialPagination: PaginationState;
  initialSort: string;
}

export function LtmPlanTable({
  data: initialData,
  totalCount,
  initialPagination,
  initialSort,
}: LtmPlanTableProps) {
  const router = useRouter();
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

  useEffect(() => {
    const query = new URLSearchParams({
      page: pagination.pageIndex.toString(),
      size: pagination.pageSize.toString(),
    });

    if (sorting.length > 0) {
      query.set("sort", `${sorting[0].id},${sorting[0].desc ? "desc" : "asc"}`);
    }

    router.push(`?${query.toString()}`);
  }, [pagination, sorting, router]);

  const columns = createLtmColumns();

  return (
    <DataTable
      columns={columns}
      data={initialData}
      pageCount={Math.ceil(totalCount / pagination.pageSize)}
      pagination={pagination}
      onPaginationChangeAction={setPagination}
      onSortingChangeAction={setSorting}
      sorting={sorting}
    />
  );
}
