import { z } from 'zod';

export const User = z.object({
  email: z
    .string()
    .min(1, { message: 'El correo es requerido' })
    .email({ message: 'El correo es invalido' }),
  password: z
    .string()
    .min(1, {
      message: 'La contraseña es requerida',
    })
    .min(8, {
      message: 'Debe ser mayor a 8 digitos',
    })
    .max(20, {
      message: 'Debe ser menor a 20 digitos',
    }),
  username: z.string().min(1, { message: 'El usuario es requerido' }),
  fullName: z.string().min(1, { message: 'El nombre es requerido' }),
  profile: z.any().optional(),
});

export type UserFormData = z.infer<typeof User>;
