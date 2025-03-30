import { ColumnDef } from "@tanstack/react-table";
import { Project } from "@/types/project";

export function createLtmColumns(): ColumnDef<Project>[] {
  return [
    {
      accessorKey: "code",
      header: "Code",
      enableSorting: true,
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "title",
      header: "Title",
      enableSorting: true,
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "projectNumber",
      header: "Number",
      enableSorting: true,
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "priority",
      header: "Priority",
      enableSorting: true,
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "budget",
      header: "Budget",
      enableSorting: true,
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "startDate",
      header: "Start Date",
      enableSorting: true,
      cell: (info) => info.getValue(),
    },
  ];
}
