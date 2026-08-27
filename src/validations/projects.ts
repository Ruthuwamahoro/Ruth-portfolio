import { z} from "zod";

export const projectsSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    releaseTime: z.string().min(1, { message: "Release time is required" }),
    livelink: z.string().url({ message: "Live link must be a valid URL" }),
    githubLink: z.string().url({ message: "GitHub link must be a valid URL" }),
    techStack: z.string().min(1, { message: "Tech stack is required" }),
    cover: z
        .instanceof(File)
        .refine((file) => file.size > 0, "Cover image is required")
        .refine((file) => file.type.startsWith("image/"), "Cover must be an image file")
        .refine((file) => file.size <= 5 * 1024 * 1024, "Cover must be under 5MB"),
})
