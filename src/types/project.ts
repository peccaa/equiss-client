import { QueryParams } from "@/types/common";
import { UserVM } from "@/types/user";
import { BuildingVM, BlockVM } from "@/types/building";
import { Category, Nscode, Priority, Risk, Status } from "@/types/project-meta";

export enum ProjectType {
  PLANNED = "PLANNED",
  STANDARD = "STANDARD",
}

export type ProjectQueryParams = QueryParams & {
  projectType?: ProjectType;
  approved?: boolean;
  priority?: string | null;
  userId?: number | null;
  statusId?: number | null;
  categoryId?: number | null;
  nscodeId?: number | null;
  locationId?: number | null;
  buildingId?: number | null;
  startPlan?: number | null;
  endPlan?: number | null;
  projectYear?: number | null;
};

export type Project = {
  id: number;
  code: string;
  title: string;
  projectType: ProjectType;
  projectNumber: string | null;
  approved: boolean | null;
  comment: string | null;
  thumbnail: string | null;
  measure: string | null;
  deficiency: string | null;
  description: string | null;
  tg: string;
  kg: string;
  priority: Priority;
  progress: number;
  budget: number | null;
  estimate: number | null;
  billed: number | null;
  plannedYear: number;
  startDate: string | null;
  dueDate: string | null;
  status: Status;
  user: UserVM;
  risks: Risk[] | null;
  category: Category;
  nscode: Nscode;
  building: BuildingVM;
  blocks: BlockVM[] | null;
};
