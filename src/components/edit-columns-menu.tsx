import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Settings } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

interface EditColumnsMenuProps<T> {
  columns: ColumnDef<T, any>[];
  visibleColumns: Record<string, boolean>;
  setVisibleColumns: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
}

export function EditColumnsMenu<T>({
  columns,
  visibleColumns,
  setVisibleColumns,
}: EditColumnsMenuProps<T>) {
  // Toggle column visibility
  const toggleColumn = (columnId: string) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [columnId]: !prev[columnId],
    }));
  };

  // Helper function to get column ID safely
  const getColumnId = (column: ColumnDef<T, any>): string => {
    if (column.id) return column.id;

    // Access the column definition as a generic object to bypass type checking
    const colDef = column as any;
    if (colDef.accessorKey) return String(colDef.accessorKey);

    // Fallback
    return "unknown";
  };

  // Helper function to get column header name
  const getColumnHeader = (column: ColumnDef<T, any>): string => {
    if (typeof column.header === "string") return column.header;

    // Fallback to column ID
    return getColumnId(column);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto h-8 gap-1">
          <Settings className="h-4 w-4" />
          Edit columns
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[400px] overflow-y-auto">
          {columns
            .filter((column) => getColumnId(column) !== "unknown")
            .map((column) => {
              const columnId = getColumnId(column);
              const displayName = getColumnHeader(column);
              const isVisible = visibleColumns[columnId];

              return (
                <DropdownMenuItem
                  key={columnId}
                  onClick={() => toggleColumn(columnId)}
                  className="cursor-pointer flex items-center justify-between"
                >
                  <span>{displayName}</span>
                  {isVisible && <Check className="h-4 w-4 ml-2" />}
                </DropdownMenuItem>
              );
            })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
