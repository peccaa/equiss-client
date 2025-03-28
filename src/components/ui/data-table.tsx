"use client";

import {
  Table as UiTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Table,
  SortingState,
  flexRender,
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { cn } from "@/utils/ui-utils";
import BasicPagination2 from "@/components/ui/basic-pagination-2";

interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  pageSize?: number;
  // currentUser?: ExtendedUser | null;
  defaultSort?: { id: string; desc: boolean };
  columnVisibility?: Record<string, boolean>;
  showPagination?: boolean;
}

export default function DataTable<TData>({
  data,
  columns,
  pageSize = 8,

  defaultSort = { id: "code", desc: true },
  columnVisibility,
  showPagination = true,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>(
    defaultSort ? [defaultSort] : [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    manualPagination: false,
    initialState: {
      columnVisibility,
      pagination: {
        pageIndex: 0,
        pageSize,
      },
    },
  });

  // Force table to update pageSize when it changes
  useEffect(() => {
    table.setPageSize(pageSize);
  }, [pageSize, table]);

  return (
    <div className="rounded-xl overflow-hidden">
      <UiTable className="table-auto w-full dark:text-gray-300">
        <TableHeader className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 border-t border-b border-gray-100 dark:border-gray-700/60">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const canSort = header.column.getCanSort();
                return (
                  <TableHead
                    key={header.id}
                    className={cn(canSort && "cursor-pointer select-none")}
                    onClick={
                      canSort ? () => header.column.toggleSorting() : undefined
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cell.column.columnDef.meta?.className || ""}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={table.getVisibleLeafColumns().length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </UiTable>
      {/* Add pagination with proper styling */}
      {showPagination && data.length > pageSize && (
        <div className="py-2 border-t border-gray-100 dark:border-gray-700/60">
          <BasicPagination2 table={table} />
        </div>
      )}
    </div>
  );
}
