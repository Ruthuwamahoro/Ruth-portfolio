import z from "zod";

export const contactsSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Email must be a valid email address" }),
    message: z.string().min(1, { message: "Message is required" }),
})