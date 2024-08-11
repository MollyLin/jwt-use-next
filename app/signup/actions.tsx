'use server'

import { SignupFormSchema } from '@/app/_lib/definitions';

export async function signup(previousState, formData) {
  // 1. validate incoming fields before any authentication logic
  /**
   * Zod's Schema methods: .safeParse()
   * Describe: don't want Zod to throw errors when validation fails
   * @returns: { success: false, error: ZodError }
   * */ 
  const validationResult = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validationResult.success) {
    return {
      success: false,
      error: validationResult.error.flatten().fieldErrors, // @returns: { email: 'error message', password: 'error message' }
    };
  }
  // 2. create user 
  // 3. Create session
}