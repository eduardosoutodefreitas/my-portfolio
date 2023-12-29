import { z } from 'zod';
export const sendMessageValidator = z.object({
  name: z.string().min(3, 'Por favor, informe seu nome.'),
  email: z
    .string()
    .email('Por favor, informe um email válido.')
    .min(3, 'Por favor, informe seu email.'),
  message: z
    .string()
    .min(10, 'Sua mensagem deve ter ao menos 10 caracteres.')
    .max(500),
});
export type FormData = z.infer<typeof sendMessageValidator>;
