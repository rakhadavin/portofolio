// src/lib/validations/project.schema.ts
import { z } from "zod";

const optionalUrl = z
  .string()
  .trim()
  .optional()
  .refine(
    (val) => !val || /^https?:\/\/\S+$/i.test(val),
    "Must be a valid URL (http/https)"
  );

export const projectSchema = z.object({
  title: z.string().trim().min(1, "Project title is required").max(80),
  description: z.string().trim().min(1, "Description is required").max(1000),

  previewLink: optionalUrl,
  githubLink: optionalUrl,

  category: z.string().trim().min(1, "Category is required"),
  projectDate: z.coerce.date({
    required_error: "Project date is required",
    invalid_type_error: "Invalid date",
  }),

  role: z.string().trim().min(1, "Role is required").max(500),

  techStack: z.array(z.string().trim().min(1)).min(1, "Pick at least 1 tech"),

  // OPTIONAL: will be filled after upload to Supabase
  logoUrl: optionalUrl,
});

export type ProjectFormValues = z.infer<typeof projectSchema>;