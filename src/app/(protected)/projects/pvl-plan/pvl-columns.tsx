import { Project } from "@/types/project";
import { ColumnDef } from "@tanstack/react-table";
import { EditableCell } from "@/components/table/editable-cell";
import { Priority } from "@/types/project-meta";
import { handleSave } from "@/utils/project-utils";
import { BudgetSchema } from "@/lib/validation/project";
import { Dispatch, SetStateAction } from "react";

export const ltmColumns = (
  projects: Project[],
  setProjects: Dispatch<SetStateAction<Project[]>>,
): ColumnDef<Project>[] => [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "code", header: "Code" },
  { accessorKey: "title", header: "Title" },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row, getValue }) => (
      <EditableCell
        value={getValue<Priority>()}
        rowId={row.original.id}
        editComponent={
          <select defaultValue={getValue<Priority>()}>
            {Object.values(Priority).map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        }
        onSave={(rowId, newValue) =>
          handleSave(rowId, "priority", newValue, projects, setProjects)
        }
      />
    ),
  },
  {
    accessorKey: "budget",
    header: "Budget",
    cell: ({ row, getValue }) => (
      <EditableCell
        value={getValue<number>()}
        rowId={row.original.id}
        editComponent={
          <input
            type="number"
            defaultValue={getValue<number>()}
            step={1000}
            style={{ width: "100%" }}
          />
        }
        validate={BudgetSchema}
        onSave={(rowId, newValue) =>
          handleSave(rowId, "budget", Number(newValue), projects, setProjects)
        }
      />
    ),
  },
];
