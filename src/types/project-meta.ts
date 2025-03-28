export type Status = {
  id: number;
  code: string;
  name: string;
};

export type Risk = {
  id: number;
  code: string;
  name: string;
};

export type Category = {
  id: number;
  code: string;
  name: string;
};

export type Nscode = {
  id: number;
  code: string;
  name: string;
};

export enum Priority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export const PriorityLabels: Record<Priority, string> = {
  [Priority.LOW]: "Pri 3",
  [Priority.MEDIUM]: "Pri 2",
  [Priority.HIGH]: "Pri 1",
};
