import { z } from "zod";

export const BUDGET_OPTIONS = [
  "500 $ - 2000 $",
  "2,000 $ - 5,000 $",
  "5,000 $ - 10,000 $",
  "от 10,000 $",
  "Хочу получить оценку",
] as const;

export const CONTACT_METHOD_OPTIONS = ["Telegram", "WhatsApp", "Email"] as const;

const MAX_ATTACHMENT_SIZE_BYTES = 10 * 1024 * 1024;

export const contactRequestSchema = z.object({
  name: z.string().min(1, "Укажите имя"),
  message: z.string().min(1, "Опишите задачу"),
  budget: z.enum(BUDGET_OPTIONS),
  contactMethod: z.enum(CONTACT_METHOD_OPTIONS),
  contact: z.string().min(1, "Укажите телефон, ник или почту"),
  attachment: z.instanceof(File).nullable().refine(
    file => !file || file.size <= MAX_ATTACHMENT_SIZE_BYTES,
    "Файл слишком большой (максимум 10 МБ)",
  ),
});

export type ContactRequestValues = z.infer<typeof contactRequestSchema>;
