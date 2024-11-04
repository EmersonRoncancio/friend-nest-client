export interface formRegisterType {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

export const formRegister: formRegisterType[] = [
  {
    label: 'Correo',
    type: 'text',
    name: 'correo',
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
    name: 'usuario',
    placeholder: 'your_user',
  },
  {
    label: 'Nombre completo',
    type: 'text',
    name: 'nombreCompleto',
    placeholder: 'yourName',
  },
];
