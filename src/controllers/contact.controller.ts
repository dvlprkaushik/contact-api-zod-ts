import type { Contact, ContactForm } from "@/types/contact.types.js";
import type { Request, Response } from "express";

const CONTACT: Contact[] = [];

export const createContact = async (
  req: Request<{}, {}, ContactForm>,
  res: Response
): Promise<void> => {
  const { name, email, message } = req.body;

  if (CONTACT.some((c) => c.email === email)) {
    res.status(400).json({
      success: false,
      message: "Contact already exists",
    });
    return;
  }
  const newContact: Contact = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };
  CONTACT.push(newContact);
  res.status(201).json({
    success: true,
    message: "Contact form submitted successfully.",
    data: newContact,
  });
};
