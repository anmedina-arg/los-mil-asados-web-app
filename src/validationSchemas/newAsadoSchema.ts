import { z } from 'zod';

export const newAsadoSchema = z.object({
  nombre: z
    .string()
    .min(10, {
      message: 'El nombre del evento debe tener al menos 10 caracteres',
    })
    .max(50, {
      message: 'El nombre del evento debe tener menos de 50 caracteres',
    }),
  fecha: z.string(),
  sede: z
    .string()
    .min(10, {
      message: 'La sede debe tener al menos 10 caracteres',
    })
    .max(50, {
      message: 'La sede debe tener menos de 50 caracteres',
    }),
  usuarioId: z.string().optional(),
  asadoId: z.string().optional(),
});
