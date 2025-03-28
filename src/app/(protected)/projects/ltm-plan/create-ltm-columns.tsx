"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatCurrency } from "@/utils/format-utils";
import { MoreHorizontal, CheckCircle, Edit, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Priority } from "@/types/project-meta";
import { PriorityBadge } from "@/components/priority-badge";

export const createLtmColumns = (
  setProjects: Dispatch<SetStateAction<Project[]>>,
): ColumnDef<Project>[] => [
  {
    accessorKey: "code",
    header: "Kode",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("code")}</div>
    ),
  },
  {
    accessorKey: "title",
    header: "Tittel",
    cell: ({ row }) => (
      <div className="max-w-[300px] truncate" title={row.getValue("title")}>
        {row.getValue("title")}
      </div>
    ),
  },
  {
    accessorKey: "plannedYear",
    header: "År",
    cell: ({ row }) => row.getValue("plannedYear"),
  },
  {
    accessorKey: "tg",
    header: "TG",
    cell: ({ row }) => (
      <Badge variant="soft" color="info" className="text-xs">
        {row.getValue("tg")}
      </Badge>
    ),
  },
  {
    accessorKey: "kg",
    header: "KG",
    cell: ({ row }) => (
      <Badge variant="soft" color="warning" className="text-xs">
        {row.getValue("kg")}
      </Badge>
    ),
  },
  {
    accessorKey: "priority",
    header: "Prioritet",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as Priority;
      return <PriorityBadge priority={priority} />;
    },
  },
  {
    accessorKey: "budget",
    header: "Budsjett",
    cell: ({ row }) => formatCurrency(row.getValue("budget")),
  },
  {
    accessorKey: "building",
    header: "Bygning",
    cell: ({ row }) => {
      const building = row.getValue("building") as {
        name: string;
        location: string;
      };
      return (
        <div className="flex flex-col">
          <span>{building?.name}</span>
          <span className="text-xs text-muted-foreground">
            {building?.location}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const project = row.original;

      /*const handleApprove = async () => {
        try {
          const today = new Date();
          const startDate = new Date(today.getFullYear(), today.getMonth(), 1);

          await approveProject(project.id, {
            approved: true,
            startDate: startDate.toISOString().split("T")[0],
          });

          // Remove this project from the list since it's now approved
          setProjects((prev) => prev.filter((p) => p.id !== project.id));
        } catch (error) {
          console.error("Failed to approve project:", error);
        }
      };*/

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => console.log("hallo")}
                className="cursor-pointer"
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                <span>Godkjenn</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Edit className="mr-2 h-4 w-4" />
                <span>Rediger</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Slett</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
