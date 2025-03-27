export type QueryParams = {
  query?: string;
  page?: number;
  size?: number;
  sort?: string;
};

export type SelectOption<T = string | number> = {
  value: T;
  label: string;
};
