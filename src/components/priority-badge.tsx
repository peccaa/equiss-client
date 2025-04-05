import { Badge } from "@/components/ui/badge";
import { Priority } from "@/types/project-meta";

interface PriorityBadgeProps {
  priority: Priority;
  className?: string;
}

export function PriorityBadge({
  priority,
  className = "",
}: PriorityBadgeProps) {
  // Using the valid color types from the Badge component
  const colorMap: Record<
    Priority,
    | "default"
    | "destructive"
    | "success"
    | "info"
    | "warning"
    | "secondary"
    | "dark"
  > = {
    [Priority.PRI_1]: "destructive",
    [Priority.PRI_2]: "warning",
    [Priority.PRI_3]: "info",
  };

  // Display the priority number
  const priorityLabel = {
    [Priority.PRI_1]: "Pri-1",
    [Priority.PRI_2]: "Pri-2",
    [Priority.PRI_3]: "Pri-3",
  };

  return (
    <Badge
      color={colorMap[priority]}
      variant="soft"
      className={`text-xs ${className}`}
    >
      {priorityLabel[priority]}
    </Badge>
  );
}
