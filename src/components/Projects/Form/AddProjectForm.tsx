"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema, type ProjectFormValues } from "@/lib/validations/project.schema";
import { supabase } from "@/lib/supabase/client";

const TECH_OPTIONS = [
    "PostgreSQL",
    "Next.js",
    "Python",
    "MySQL",
    "Prisma",
    "NestJS",
    "Excel",
] as const;

export default function AddProjectForm() {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: "",
            description: "",
            previewLink: "",
            githubLink: "",
            category: "",
            projectDate: undefined as any,
            role: "",
            techStack: [],
            logoUrl: "",
        },
    });

    const logoUrl = watch("logoUrl");

    async function uploadLogoToSupabase(file: File) {
        // pastiin bucket kamu udah ada, misal namanya: "project-logos"
        const bucket = "project-logos";

        const ext = file.name.split(".").pop()?.toLowerCase() || "png";
        const filePath = `projects/${crypto.randomUUID()}.${ext}`;

        const { error: uploadError } = await supabase.storage
            .from(bucket)
            .upload(filePath, file, {
                cacheControl: "3600",
                upsert: false,
                contentType: file.type,
            });

        if (uploadError) throw new Error(uploadError.message);

        // Cara 1 (public bucket): ambil public URL
        const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
        if (!data.publicUrl) throw new Error("Failed to get public URL");

        return data.publicUrl;
    }

    const onSubmit = async (values: ProjectFormValues) => {
        // values.logoUrl sudah berisi URL kalau user upload logo
        // tinggal kirim ke backend NestJS kamu
        const res = await fetch("/api/projects", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });

        if (!res.ok) {
            const msg = await res.text();
            throw new Error(msg || "Failed to save project");
        }

        // reset / toast bebas
        alert("Saved!");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* TITLE */}
            <div>
                <label>Project Title</label>
                <input {...register("title")} placeholder="What's your project name?" />
                {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>

            {/* DESCRIPTION */}
            <div>
                <label>Description</label>
                <textarea {...register("description")} placeholder="Tell public about your project" />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>

            {/* LINKS (optional) */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label>Preview Link (optional)</label>
                    <input {...register("previewLink")} placeholder="Any website / portfolio link?" />
                    {errors.previewLink && <p className="text-red-500">{errors.previewLink.message}</p>}
                </div>
                <div>
                    <label>GitHub (optional)</label>
                    <input {...register("githubLink")} placeholder="Drop your repository here" />
                    {errors.githubLink && <p className="text-red-500">{errors.githubLink.message}</p>}
                </div>
            </div>

            {/* CATEGORY + DATE */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label>Category</label>
                    <select {...register("category")}>
                        <option value="">Select category</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="Data Analyst">Data Analyst</option>
                        <option value="Data Scientist">Data Scientist</option>
                        <option value="UI/UX">UI/UX</option>
                    </select>
                    {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                </div>

                <div>
                    <label>Project Date</label>
                    <input type="date" {...register("projectDate")} />
                    {errors.projectDate && <p className="text-red-500">{errors.projectDate.message}</p>}
                </div>
            </div>

            {/* ROLE */}
            <div>
                <label>Your Role</label>
                <textarea {...register("role")} placeholder="Let them know your contribution here" />
                {errors.role && <p className="text-red-500">{errors.role.message}</p>}
            </div>

            {/* TECH STACK (min 1) */}
            <div>
                <label>Tech Stack</label>

                <Controller
                    control={control}
                    name="techStack"
                    render={({ field }) => (
                        <div className="flex flex-wrap gap-2">
                            {TECH_OPTIONS.map((t) => {
                                const active = field.value.includes(t);
                                return (
                                    <button
                                        type="button"
                                        key={t}
                                        onClick={() => {
                                            if (active) field.onChange(field.value.filter((x) => x !== t));
                                            else field.onChange([...field.value, t]);
                                        }}
                                        className={`px-3 py-2 rounded-xl border ${active ? "bg-white text-black" : ""}`}
                                    >
                                        {t}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                />

                {errors.techStack && <p className="text-red-500">{errors.techStack.message}</p>}
            </div>

            {/* LOGO upload (optional) -> store URL in logoUrl */}
            <div>
                <label>Project Logo (optional)</label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;

                        try {
                            // basic guard (optional)
                            if (file.size > 2 * 1024 * 1024) throw new Error("Max 2MB");

                            const url = await uploadLogoToSupabase(file);
                            setValue("logoUrl", url, { shouldValidate: true, shouldDirty: true });
                        } catch (err: any) {
                            alert(err.message || "Upload failed");
                        }
                    }}
                />

                {logoUrl ? (
                    <p className="text-sm mt-2">
                        Uploaded: <a className="underline" href={logoUrl} target="_blank" rel="noreferrer">View</a>
                    </p>
                ) : (
                    <p className="text-sm mt-2 opacity-70">No logo uploaded</p>
                )}

                {errors.logoUrl && <p className="text-red-500">{errors.logoUrl.message}</p>}
            </div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Project"}
            </button>
        </form>
    );
}