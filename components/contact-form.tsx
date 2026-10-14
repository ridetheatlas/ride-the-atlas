
"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClass =
    "w-full rounded-none border border-[#292D28]/15 bg-white/40 px-4 py-3.5 text-sm text-[#292D28] outline-none transition-colors duration-200 placeholder:text-[#292D28]/35 hover:border-[#292D28]/35 focus:border-[#E56A2E] focus:bg-white/70";

const labelClass =
    "mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#292D28]/70";

export default function ContactForm() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (status === "sending") return;

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") || "").trim(),
            email: String(formData.get("email") || "").trim(),
            country: String(formData.get("country") || "").trim(),
            activity: String(formData.get("activity") || ""),
            dates: String(formData.get("dates") || "").trim(),
            groupSize: String(formData.get("groupSize") || "").trim(),
            message: String(formData.get("message") || "").trim(),
        };

        setStatus("sending");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.error || "We couldn't send your enquiry. Please try again."
                );
            }

            setStatus("success");
            form.reset();
        } catch (error) {
            setStatus("error");
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className={labelClass}>
                        Your name <span className="text-[#E56A2E]">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        maxLength={120}
                        required
                        placeholder="Full name"
                        className={inputClass}
                        disabled={status === "sending"}
                    />
                </div>

                <div>
                    <label htmlFor="email" className={labelClass}>
                        Email address <span className="text-[#E56A2E]">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        maxLength={254}
                        required
                        placeholder="you@example.com"
                        className={inputClass}
                        disabled={status === "sending"}
                    />
                </div>

                <div>
                    <label htmlFor="country" className={labelClass}>
                        Where are you based?
                    </label>
                    <input
                        id="country"
                        name="country"
                        type="text"
                        autoComplete="country-name"
                        maxLength={100}
                        placeholder="Your country"
                        className={inputClass}
                        disabled={status === "sending"}
                    />
                </div>

                <div>
                    <label htmlFor="activity" className={labelClass}>
                        Your adventure <span className="text-[#E56A2E]">*</span>
                    </label>
                    <select
                        id="activity"
                        name="activity"
                        required
                        defaultValue=""
                        className={`${inputClass} cursor-pointer`}
                        disabled={status === "sending"}
                    >
                        <option value="" disabled>
                            Choose your activity
                        </option>
                        <option value="Mountain biking">Mountain biking</option>
                        <option value="Ski touring">Ski touring</option>
                        <option value="Both biking and skiing">
                            Mountain biking &amp; ski touring
                        </option>
                        <option value="Other">Something else</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="dates" className={labelClass}>
                        Preferred dates
                    </label>
                    <input
                        id="dates"
                        name="dates"
                        type="text"
                        maxLength={150}
                        placeholder="e.g. September 2027"
                        className={inputClass}
                        disabled={status === "sending"}
                    />
                </div>

                <div>
                    <label htmlFor="groupSize" className={labelClass}>
                        Number of riders
                    </label>
                    <select
                        id="groupSize"
                        name="groupSize"
                        defaultValue=""
                        className={`${inputClass} cursor-pointer`}
                        disabled={status === "sending"}
                    >
                        <option value="" disabled>
                            Select group size
                        </option>
                        <option value="1 person">Just me</option>
                        <option value="2 people">2 people</option>
                        <option value="3–4 people">3–4 people</option>
                        <option value="5–8 people">5–8 people</option>
                        <option value="9+ people">9+ people</option>
                        <option value="Not yet decided">Not sure yet</option>
                    </select>
                </div>
            </div>

            <div className="border-t border-[#292D28]/10 pt-7">
                <label htmlFor="message" className={labelClass}>
                    Tell us what you have in mind{" "}
                    <span className="text-[#E56A2E]">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={5}
                    placeholder="Tell us about your plans, your experience, and the adventure you're looking for..."
                    className={`${inputClass} min-h-36 resize-y leading-relaxed`}
                    disabled={status === "sending"}
                />
                <p className="mt-2 text-[11px] leading-relaxed text-[#292D28]/50">
                    Nothing needs to be finalised yet. A rough idea is a great place to start.
                </p>
            </div>

            <div className="flex flex-col items-start gap-4 border-t border-[#292D28]/10 pt-7">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex min-h-14 items-center justify-between gap-10 bg-[#E56A2E] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#292D28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E56A2E] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60"
                >
                    <span>
                        {status === "sending"
                            ? "Sending enquiry..."
                            : status === "success"
                                ? "Send another enquiry"
                                : "Send your enquiry"}
                    </span>
                    <span
                        aria-hidden="true"
                        className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                    >
                        {status === "sending" ? "…" : "↗"}
                    </span>
                </button>

                {status === "success" && (
                    <p
                        role="status"
                        className="text-sm leading-relaxed text-green-800"
                    >
                        Thank you for getting in touch. Your enquiry has been sent
                        successfully. We'll be in touch as soon as we can.
                    </p>
                )}

                {status === "error" && (
                    <p
                        role="alert"
                        className="text-sm leading-relaxed text-red-700"
                    >
                        {errorMessage}
                    </p>
                )}

                <p className="max-w-md text-[11px] leading-relaxed text-[#292D28]/50">
                    Your details will be sent securely to Ride The Atlas so we can
                    respond to your enquiry.
                </p>
            </div>
        </form>
    );
}
