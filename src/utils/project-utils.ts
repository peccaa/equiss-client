import { Project } from "@/types/project";
import { updateProjectField } from "@/actions/update-project-field";
import { Dispatch, SetStateAction } from "react";

export const handleSave = async <T>(
  rowId: number,
  field: keyof Project,
  newValue: T,
  projects: Project[],
  setProjects: Dispatch<SetStateAction<Project[]>>,
) => {
  try {
    await updateProjectField(rowId, field, newValue);
    setProjects((prev) =>
      prev.map((project) =>
        project.id === rowId ? { ...project, [field]: newValue } : project,
      ),
    );
  } catch (error) {
    console.error(`Failed to update ${field}:`, error);
  }
};
