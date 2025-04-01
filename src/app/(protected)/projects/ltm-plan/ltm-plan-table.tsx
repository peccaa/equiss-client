"use client";

import { useRouter, usePathname } from "next/navigation";
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

  const columns = createLtmColumns();

  return (
    <DataTable
      columns={columns}
      data={data}
      pageCount={Math.ceil(totalCount / pagination.pageSize)}
      pagination={pagination}
      onPaginationChangeAction={setPagination}
      onSortingChangeAction={setSorting}
      sorting={sorting}
    />
  );
}
