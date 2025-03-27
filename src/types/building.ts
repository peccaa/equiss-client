export type Location = {
  id: number;
  name: string;
};

export type Building = {
  id: number;
  name: string;
  location: Location;
};

export type BuildingVM = {
  id: number;
  name: string;
  location: string;
};

export type Block = {
  id: number;
  name: string;
  description: string;
  building: Building;
};

export type BlockVM = {
  id: number;
  name: string;
};
