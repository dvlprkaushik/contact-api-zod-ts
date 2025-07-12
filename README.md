# Contact Form API with Zod Validation

A simple and type-safe contact form API built with **Express**, **TypeScript**, and **Zod** for runtime validation and type inference. Designed as a beginner-friendly backend boilerplate following clean architecture and modular folder structure.

---

## 📦 Tech Stack & Badges

![Platform](https://img.shields.io/badge/Platform-Backend-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript\&style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js\&style=flat-square)
![Express](https://img.shields.io/badge/Express.js-Minimal-black?logo=express\&style=flat-square)
![Zod](https://img.shields.io/badge/Zod-Validation-lightblue?style=flat-square)

---

## 📖 Description

This project provides a minimal yet powerful backend API to handle contact form submissions. It leverages **Zod** for runtime schema validation and type-safe request handling with **Express** and **TypeScript**.

Ideal for developers looking to understand how to structure an API project using best practices like reusable middleware, validation pipelines, and modular MVC-style architecture.

All incoming data is validated before processing, and error responses are returned with clarity. Responses are structured using a unified utility system to maintain consistency.

---

## 🚀 Key Features

* ✅ **Zod Schema Validation** for runtime type checking
* ✅ **Reusable Middleware** `validateBody(schema)` to enforce request validation
* ✅ **Typed Controllers** using `RequestHandler` and `z.infer<>` for full type safety
* ✅ **Clean JSON Responses** for both success and validation errors
* ✅ **Modular Folder Structure** following MVC principles
* 🇳 **Optional File Persistence** using `fs.writeFileSync`
* 🇳 **Request Metadata** support (timestamps, request IDs)

---

## 🔧 Prerequisites

Make sure you have the following installed:

* **Node.js** v18+
* **npm** or **yarn**

---

## 📥 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/dvlprkaushik/contact-api-zod-ts.git
cd contact-api-zod-ts
npm install
```

Create a `.env` file if needed (for port/configuration), then start the development server:

```bash
npm run dev
```

To build and run in production mode:

```bash
npm run build
npm start
```

---

## 📨 Usage

Send a `POST` request to `/api/v1/contact` with the following JSON body:

```json
{
  "name": "Kaushik",
  "email": "kaushik@example.com",
  "message": "I would like to learn more about your services."
}
```

Expected response:

```json
{
  "success": true,
  "message": "Contact form submitted successfully.",
  "data": {
    "name": "Kaushik",
    "email": "kaushik@example.com",
    "message": "I would like to learn more about your services.",
    "timestamp": "2025-07-12T18:30:00.000Z"
  }
}
```

If validation fails:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "error": "Invalid email format"
    }
  ]
}
```

---

## 📬 API Endpoints

| Method | Endpoint       | Description              | Parameters                        |
| ------ | -------------- | ------------------------ | --------------------------------- |
| POST   | `/api/v1/contact` | Submits the contact form | `name`, `email`, `message` (body) |

### Zod Validation Rules

| Field   | Type   | Rule                      |
| ------- | ------ | ------------------------- |
| name    | string | Required, min length: 1   |
| email   | string | Must be a valid email     |
| message | string | Min length: 10 characters |

---

## 🗂️ Project Structure

```bash
contact-api-zod-ts/
├── src/
│   ├── controllers/
│   │   └── contact.controller.ts        # Handles form submission logic
│   ├── middlewares/
│   │   ├── endpointLogger.middleware.ts # Logs incoming request endpoints
│   │   └── validate.middleware.ts       # validateBody(schema) middleware
│   ├── routes/
│   │   └── contact.routes.ts            # Defines POST /api/contact
│   ├── types/
│   │   └── contact.types.ts             # Custom types and interfaces
│   ├── utils/
│   │   ├── AsyncHandler.ts              # Async error handler wrapper
│   │   └── HealthCheck.ts              # Simple health check utility
│   ├── validators/
│   │   ├── contact.validator.ts         # Zod schema + inferred types
│   │   ├── env.d.ts                     # Global environment type defs
│   │   ├── index.ts                     # Validator index (optional exports)
│   │   └── listener.ts                  # Handles app bootstrapping/listening
│   └── index.ts                         # Entry point - Express app
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json

```

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
PORT=3000

BASE_URL=http://localhost
```

---

## 🧪 Testing

For manual testing, use Postman, Thunder Client, or cURL to send POST requests to:

```
http://localhost:3000/api/v1/contact
```

### 📬 Example cURL Request with Success Response

```bash
curl -X POST http://localhost:3000/api/v1/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Kaushik",
    "email": "kaushik@example.com",
    "message": "I would like to learn more about your services."
  }'
```

```json
{
  "success": true,
  "message": "Contact form submitted successfully.",
  "data": {
    "name": "Kaushik",
    "email": "kaushik@example.com",
    "message": "I would like to learn more about your services.",
    "timestamp": "2025-07-12T18:30:00.000Z"
  }
}
```

(Optional) You can write integration tests using Jest or Supertest (not included yet).

---

## 📌 Notes

* ✅ Types are inferred from Zod using `z.infer<>`
* ✅ Controllers use `RequestHandler<{}, {}, ContactForm>` for full type safety
* ✅ Safe parsing and clean error messaging with `Zod.safeParse`
* ✅ All data is stored temporarily in memory (array), can be extended to file or database

---

## ✨ Future Improvements

* 🔐 Add rate-limiting middleware to prevent abuse
* 📁 Connect to a database (MongoDB/PostgreSQL)
* 📨 Email notification integration using Nodemailer
* 🌐 Deploy to platforms like Vercel, Render, or Railway

---

> Made with ❤️ using TypeScript, Express, and Zod.
