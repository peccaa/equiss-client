import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableSkeletonProps {
  columnCount: number;
  rowCount: number;
}

export function TableSkeleton({ columnCount, rowCount }: TableSkeletonProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {Array(columnCount)
              .fill(null)
              .map((_, i) => (
                <TableHead key={i}>
                  <Skeleton className="h-6 w-full max-w-[100px]" />
                </TableHead>
              ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(rowCount)
            .fill(null)
            .map((_, rowIndex) => (
              <TableRow key={rowIndex}>
                {Array(columnCount)
                  .fill(null)
                  .map((_, colIndex) => (
                    <TableCell key={colIndex}>
                      <Skeleton className="h-6 w-full" />
                    </TableCell>
                  ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
