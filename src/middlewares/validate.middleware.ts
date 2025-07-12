import type { ContactForm } from "@/types/contact.types.js";
import type { RequestHandler } from "express";
import z, { type ZodType } from "zod";

export const validateBody = (schema: ZodType<any>) => {
  const validator: RequestHandler<{}, {}, ContactForm> = (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const flattened = z.flattenError(result.error);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: flattened.fieldErrors,
      });
    }
    req.body = result.data;
    next();
  };
  return validator;
};
