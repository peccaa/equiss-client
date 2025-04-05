import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";

// Helper function to get column ID safely
export const getColumnId = (column: any): string => {
  if (column.id) return column.id;
  if (column.accessorKey) return String(column.accessorKey);
  return "unknown";
};

export interface ColumnVisibilityConfig {
  // Columns that should be available in the view
  availableColumns: string[];
  // Default visibility state for columns
  defaultVisibility: Record<string, boolean>;
}

export function useColumnVisibility<T>(
  allColumns: ColumnDef<T, any>[],
  config: ColumnVisibilityConfig,
) {
  // State for column visibility
  const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>(
    config.defaultVisibility,
  );

  // Filter columns to only include those configured as available
  const availableColumns = allColumns.filter((column) => {
    const columnId = getColumnId(column);
    return config.availableColumns.includes(columnId);
  });

  // Filter columns based on visibility state
  const visibleColumnsArray = availableColumns.filter((column) => {
    const columnId = getColumnId(column);
    return columnId === "unknown" || visibleColumns[columnId];
  });

  return {
    visibleColumns,
    setVisibleColumns,
    availableColumns,
    visibleColumnsArray,
  };
}
