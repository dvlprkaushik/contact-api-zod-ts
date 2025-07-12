import type { Contact, ContactForm } from "@/types/contact.types.js";
import type { RequestHandler } from "express";

const CONTACT: Contact[] = [];

export const createContact: RequestHandler<{}, {}, ContactForm> = (
  req,
  res
) => {
  const { name, email, message } = req.body;

  if (CONTACT.find((c) => c.email === email)) {
    return res.status(400).json({
      success: false,
      message: "Contact already exists",
    });
  }
  const newContact: Contact = {
    name,
    email,
    message,
  };
  CONTACT.push(newContact);
  res.status(201).json({
    success: true,
    message: "Contact form submitted successfully.",
    data: newContact,
  });
};
