import type { contactSchema } from "@/validators/contact.validator.js";
import type z from "zod";

export type ContactForm = z.infer<typeof contactSchema>;
export type Contact = ContactForm;