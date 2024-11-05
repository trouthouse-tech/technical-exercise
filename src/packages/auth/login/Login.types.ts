import { z } from "zod";

export type LoginScreenNavigationProp = {
    navigate: (screen: string) => void;
};

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});  

export type LoginFormInputs = z.infer<typeof loginSchema>;
