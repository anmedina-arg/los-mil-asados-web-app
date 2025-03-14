import { z } from 'zod';

export const registerSchema = z.object({
  userName: z
    .string()
    .min(2, {
      message: 'First name must be at least 2 characters long',
    })
    .max(50),
  email: z.string().email(),
  password: z.string().min(10).max(500),
});
