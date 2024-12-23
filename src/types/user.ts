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

export interface UserRequest {
  username: string;
  email: string;
  fullName: string;
  imageProfile: string;
}

interface User {
  id: string;
  fullName: string;
  username: string;
  email: string;
  imageProfile: string;
  friends: string[];
  author: string;
}

export interface PostRequest {
  contentDescription: string;
  media: string[];
  author: User;
}
