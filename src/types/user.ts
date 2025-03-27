export enum Authorities {
  SYS = "ROLE_SYSADMIN",
  ADMIN = "ROLE_ADMIN",
  USER = "ROLE_USER",
}

export type User = {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  email: string;
  activated: boolean;
  authorities: Authorities[];
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  password?: string;
};

export type UserVM = {
  id: number;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
};
