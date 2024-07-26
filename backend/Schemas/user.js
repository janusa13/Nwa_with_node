import z from 'zod';

const emailSchema = z.string().email({ message: "Invalid email format" });

const passwordSchema = z
  .string()
  .min(6, { message: "Password must be at least 6 characters long" });


const userSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: emailSchema,
  password: passwordSchema,
});

export function validateUser(object) {
  return userSchema.safeParse(object);
}