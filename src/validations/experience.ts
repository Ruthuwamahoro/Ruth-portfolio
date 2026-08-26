import { z} from "zod";

export const experienceSchema = z.object({
    period: z.string().min(1, { message: "Period is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    company: z.string().min(1, { message: "Company is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    tags: z.array(z.string().min(1, { message: "Tag cannot be empty" })).min(1, { message: "At least one tag is required" }),
});