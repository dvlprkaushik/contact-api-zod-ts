import type { ContactForm } from "@/types/contact.types.js";
import type { RequestHandler } from "express";
import type { ZodSchema } from "zod/v3";

export const validateBody = (schema: ZodSchema) => {
  const validator: RequestHandler<{}, {}, ContactForm> = (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Validation Failed",
        errors: result.error.flatten().fieldErrors,
      });
    }
    req.body = result.data;
    next();
  };
  return validator;
};
