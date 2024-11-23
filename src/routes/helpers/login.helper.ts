type names = 'email' | 'password' | 'username' | 'fullName';

export interface formsTypes {
  label: string;
  type: string;
  name: names;
  placeholder: string;
}

export const formRegister: formsTypes[] = [
  {
    label: 'Correo',
    type: 'email',
    name: 'email',
    placeholder: 'your@email.com',
  },
  {
    label: 'Contraseña',
    type: 'password',
    name: 'password',
    placeholder: 'password',
  },
  {
    label: 'Usuario',
    type: 'text',
    name: 'username',
    placeholder: 'your_user',
  },
  {
    label: 'Nombre completo',
    type: 'text',
    name: 'fullName',
    placeholder: 'yourName',
  },
];

type accesNames = 'email' | 'password';

export interface formAccesTypes {
  label: string;
  type: string;
  name: accesNames;
  placeholder: string;
}

export const formLogin: formAccesTypes[] = [
  {
    label: 'Correo',
    type: 'email',
    name: 'email',
    placeholder: 'Correo',
  },
  {
    label: 'Contraseña',
    type: 'password',
    name: 'password',
    placeholder: 'Contraseña',
  },
];

type TypeUser = ['email', 'password', 'username', 'fullName', 'profile'];

export const addUserType: TypeUser = [
  'email',
  'password',
  'username',
  'fullName',
  'profile',
];

type TypeAccesUser = ['email', 'password'];

export const accesUser: TypeAccesUser = ['email', 'password'];

export const userRequestAux = {
  email: '',
  fullName: '',
  password: '',
  username: '',
  imageProfile: '',
};

export const postRequestAux = [
  {
    contentDescription: '',
    media: [],
    author: {
      id: '',
      fullName: '',
      username: '',
      email: '',
      imageProfile: '',
      friends: [],
      author: '',
    },
  },
];

export const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
