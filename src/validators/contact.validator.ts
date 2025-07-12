import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email format"),
    message: z.string().min(10, "Message must be at least 10 characters")
});