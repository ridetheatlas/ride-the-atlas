"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "ridetheatlas@gmail.com";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = String(formData.get("name") || "");
        const email = String(formData.get("email") || "");
        const country = String(formData.get("country") || "");
        const activity = String(formData.get("activity") || "");
        const dates = String(formData.get("dates") || "");
        const groupSize = String(formData.get("groupSize") || "");
        const message = String(formData.get("message") || "");

        const subject = `Ride The Atlas enquiry — ${activity || "New enquiry"}`;

        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Country: ${country}`,
            `Activity: ${activity}`,
            `Preferred dates: ${dates}`,
            `Group size: ${groupSize}`,
            "",
            "Message:",
            message,
        ].join("\n");

        const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
        setSubmitted(true);
    }

    const inputClass =
        "w-full border-b border-[#292D28]/25 bg-transparent px-0 py-3 text-[#292D28] outline-none transition placeholder:text-[#292D28]/40 focus:border-[#E56A2E]";

    const labelClass =
        "mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#292D28]/65";

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className={labelClass}>
                        Your name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Full name"
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="email" className={labelClass}>
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
                <div>
                    <label htmlFor="country" className={labelClass}>
                        Where are you from?
                    </label>
                    <input
                        id="country"
                        name="country"
                        type="text"
                        placeholder="Your country"
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="activity" className={labelClass}>
                        What are you interested in?
                    </label>
                    <select
                        id="activity"
                        name="activity"
                        required
                        defaultValue=""
                        className={`${inputClass} cursor-pointer`}
                    >
                        <option value="" disabled>
                            Select an activity
                        </option>
                        <option value="Mountain biking">Mountain biking</option>
                        <option value="Ski touring">Ski touring</option>
                        <option value="Both biking and skiing">Both biking and skiing</option>
                        <option value="Other">Something else</option>
                    </select>
                </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
                <div>
                    <label htmlFor="dates" className={labelClass}>
                        When would you like to come?
                    </label>
                    <input
                        id="dates"
                        name="dates"
                        type="text"
                        placeholder="Approximate dates"
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="groupSize" className={labelClass}>
                        Group size
                    </label>
                    <input
                        id="groupSize"
                        name="groupSize"
                        type="text"
                        placeholder="Number of people"
                        className={inputClass}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="message" className={labelClass}>
                    Tell us about your plans
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Your experience, what you're looking for, and any questions..."
                    className={`${inputClass} resize-y`}
                />
            </div>

            <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#E56A2E] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#292D28]"
            >
                Send enquiry <span className="ml-4 text-lg">↗</span>
            </button>

            {submitted && (
                <p className="text-sm leading-relaxed text-[#292D28]/65">
                    Your email app should open with your enquiry ready. Please review it
                    and press Send there.
                </p>
            )}

            <p className="text-xs leading-relaxed text-[#292D28]/50">
                This form opens your email application. Your message is not sent until
                you press Send in that application.
            </p>
        </form>
    );
}