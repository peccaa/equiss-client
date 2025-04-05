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
  PRI_1 = "PRI_1",
  PRI_2 = "PRI_2",
  PRI_3 = "PRI_3",
}

export const PriorityLabels: Record<Priority, string> = {
  [Priority.PRI_3]: "Pri-3",
  [Priority.PRI_2]: "Pri-2",
  [Priority.PRI_1]: "Pri-1",
};
