export interface user {
  email: string;
  password: string;
  username: string;
  fullName: string;
}

export type userType = {
  email: string;
  password: string;
  username: string;
  fullName: string;
  profile?: File;
};

export type AccesUserType = {
  email: string;
  password: string;
};
