import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

interface BasicPaginationProps<TData> {
  table: Table<TData>;
}

export default function BasicPagination2<TData>({
  table,
}: BasicPaginationProps<TData>) {
  const { pageIndex, pageSize } = table.getState().pagination;
  const totalItems = table.getFilteredRowModel().rows.length;

  // Calculate displayed range
  const from = pageIndex * pageSize + 1;
  const to = Math.min((pageIndex + 1) * pageSize, totalItems);

  return (
    <div className="flex items-center justify-end py-3 px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        Showing <strong>{from}</strong> - <strong>{to}</strong> of{" "}
        <strong>{totalItems}</strong> items
      </div>
      <div className="flex items-center gap-2 flex-none">
        <Button
          variant="outline"
          size="icon"
          className="w-8 h-8"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to first page</span>
          <ChevronFirstIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-8 h-8"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-8 h-8"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-8 h-8"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to last page</span>
          <ChevronLastIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
