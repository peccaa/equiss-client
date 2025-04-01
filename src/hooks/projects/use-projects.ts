import { useQuery } from "@tanstack/react-query";
import { ProjectQueryParams } from "@/types/project";
import { fetchProjects } from "@/actions/projects/fetch-projects";

export function useProjects(params: ProjectQueryParams) {
  return useQuery({
    queryKey: ["projects", params],
    queryFn: () => fetchProjects(params),
  });
}
