import { createContact } from "@/controllers/contact.controller.js";
import { validateBody } from "@/middlewares/validate.middleware.js";
import type { ContactForm } from "@/types/contact.types.js";
import { asyncHandler } from "@/utils/AsyncHandler.js";
import { contactSchema } from "@/validators/contact.validator.js";
import { Router } from "express";

const contactRouter = Router();

contactRouter.route("/v1/contact").post(validateBody<ContactForm>(contactSchema), asyncHandler(createContact));

export { contactRouter };