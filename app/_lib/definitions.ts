import { z } from 'zod';

export const SignupFormSchema = z.object({
  email: z.string().email({ message: '請輸入合法的 email.' }).trim(),
  password: z.string().min(8, { message: '需要 8 字元以上長度' }),
});