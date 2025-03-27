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
