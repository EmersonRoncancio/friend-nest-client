type names = 'email' | 'password' | 'username' | 'fullName';

export interface formRegisterType {
  label: string;
  type: string;
  name: names;
  placeholder: string;
}

export const formRegister: formRegisterType[] = [
  {
    label: 'Correo',
    type: 'text',
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

type TypeUser = ['email', 'password', 'username', 'fullName', 'profile'];

export const addUserType: TypeUser = [
  'email',
  'password',
  'username',
  'fullName',
  'profile',
];
