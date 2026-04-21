import { z } from "zod";

const optionalUrl = z
  .string()
  .trim()
  .optional()
  .refine((val) => !val || /^https?:\/\/\S+$/i.test(val), "Must be a valid URL (http/https)");

export const projectSchema = z.object({
  title: z.string().trim().min(1, "Project title is required").max(80),
  description: z.string().trim().min(1, "Description is required").max(1000),

  previewLink: optionalUrl,
  githubLink: optionalUrl,

  category: z.string().trim().min(1, "Category is required"),

  projectDate: z.coerce.date().refine((date) => !isNaN(date.getTime()), "Invalid date"),

  role: z.string().trim().min(1, "Role is required").max(500),

  techStack: z.array(z.string().trim().min(1)).min(1, "Pick at least 1 tech"),

  logoUrl: optionalUrl,
});

/**
 * Input type for form values before Zod transforms/coerces them
 * projectDate here will behave like string/unknown from the form
 */
export type ProjectFormValues = z.input<typeof projectSchema>;

/**
 * Parsed type after resolver / schema validation
 * projectDate here becomes Date
 */
export type ProjectPayload = z.output<typeof projectSchema>;
