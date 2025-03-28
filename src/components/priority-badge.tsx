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
    [Priority.HIGH]: "destructive",
    [Priority.MEDIUM]: "warning",
    [Priority.LOW]: "info",
  };

  // Display the priority number
  const priorityLabel = {
    [Priority.HIGH]: "Pri 1",
    [Priority.MEDIUM]: "Pri 2",
    [Priority.LOW]: "Pri 3",
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
