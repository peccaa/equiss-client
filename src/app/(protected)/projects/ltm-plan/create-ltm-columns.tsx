import { ColumnDef } from "@tanstack/react-table";
import { Project } from "@/types/project";
import { formatCurrency, formatDate } from "@/utils/format-utils";
import { PriorityBadge } from "@/components/priority-badge";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function createLtmColumns(): ColumnDef<Project>[] {
  return [
    {
      accessorKey: "code",
      header: "ID",
      enableSorting: true,
      cell: ({ row }) => {
        const code = row.original.code;
        const title = row.original.title;

        return (
          <div className="flex flex-col">
            <span className="font-medium text-secondary-foreground">
              {code}
            </span>
            <span className="text-sm text-muted-foreground">{title}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "building",
      header: "Blokk(er)",
      cell: ({ row }) => {
        const building = row.original.building;
        const blocks = row.original.blocks || [];

        // Format as "location - building"
        const locationBuildingText = building
          ? `${building.location} - ${building.name}`
          : "—";

        return (
          <div className="flex flex-col gap-1">
            {/* If blocks are empty, show "felles" badge */}
            {blocks.length === 0 ? (
              <Badge variant="soft" color="info" className="w-fit">
                felles
              </Badge>
            ) : (
              /* If blocks are not empty, show the list of blocks as badges */
              <div className="flex flex-wrap gap-1">
                {blocks.map((block, index) => (
                  <Badge
                    key={block.id || index}
                    variant="outline"
                    className="text-xs"
                  >
                    {block.name}
                  </Badge>
                ))}
              </div>
            )}

            <span className="text-sm">{locationBuildingText}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "nscode",
      header: "Nscode",
      cell: (info) => {
        const nscode = info.getValue() as any;
        if (!nscode) return "—";

        return (
          <div className="flex flex-col">
            <span className="font-medium">{nscode.code}</span>
            <span className="text-xs text-muted-foreground md:block hidden">
              {nscode.name}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "category",
      header: "Kategori",
      cell: (info) => {
        const category = info.getValue() as any;
        if (!category) return "—";

        return (
          <div className="flex flex-col">
            <span className="font-medium">{category.code}</span>
            <span className="text-xs text-muted-foreground md:block hidden">
              {category.name}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "tg",
      header: "TG",
      cell: (info) => {
        const tg = info.getValue() as string;
        return tg || "—";
      },
    },
    {
      accessorKey: "kg",
      header: "KG",
      cell: (info) => {
        const kg = info.getValue() as string;
        return kg || "—";
      },
    },
    {
      accessorKey: "plannedYear",
      header: "Periode",
      enableSorting: true,
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "budget",
      header: "Estimat",
      enableSorting: true,
      cell: (info) => formatCurrency(info.getValue() as number),
    },
    {
      accessorKey: "startDate",
      header: "Opprettet",
      enableSorting: true,
      cell: (info) => formatDate(info.getValue() as string),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const status = info.getValue() as any;
        return status ? status.name : "—";
      },
    },
    {
      accessorKey: "progress",
      header: "Progress",
      cell: (info) => {
        const progress = info.getValue() as number;
        return `${progress}%`;
      },
    },
    {
      accessorKey: "priority",
      header: "Priority",
      enableSorting: true,
      cell: (info) => {
        const priority = info.getValue() as any;
        return <PriorityBadge priority={priority} />;
      },
    },
    {
      id: "actions",
      cell: () => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
}
