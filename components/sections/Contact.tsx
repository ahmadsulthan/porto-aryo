"use client";

import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const formData = new FormData(e.currentTarget);

      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSuccess(data.message || "Message sent successfully");

      formRef.current?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0b1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div>
            <span className="text-amber-400 uppercase tracking-[0.25em] text-sm">
              Contact
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
              Let's Build Something Meaningful
            </h2>

            <p className="mt-6 text-slate-400 leading-8 max-w-xl">
              Open for research collaboration, education projects, speaking
              engagements, and community development initiatives.
            </p>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              placeholder="Your Name"
              required
              disabled={loading}
              className="
                w-full
                p-4
                rounded-xl
                bg-white/5
                border
                border-white/10
                text-white
                placeholder:text-slate-500
                focus:outline-none
                focus:border-amber-400
                transition
              "
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              disabled={loading}
              className="
                w-full
                p-4
                rounded-xl
                bg-white/5
                border
                border-white/10
                text-white
                placeholder:text-slate-500
                focus:outline-none
                focus:border-amber-400
                transition
              "
            />

            <input
              name="subject"
              placeholder="Subject"
              required
              disabled={loading}
              className="
                w-full
                p-4
                rounded-xl
                bg-white/5
                border
                border-white/10
                text-white
                placeholder:text-slate-500
                focus:outline-none
                focus:border-amber-400
                transition
              "
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              disabled={loading}
              className="
                w-full
                p-4
                rounded-xl
                bg-white/5
                border
                border-white/10
                text-white
                placeholder:text-slate-500
                focus:outline-none
                focus:border-amber-400
                transition
                resize-none
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                px-6
                py-3
                bg-amber-400
                text-black
                rounded-xl
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-amber-400/20
                disabled:opacity-50
                disabled:cursor-not-allowed
                disabled:hover:scale-100
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <div
                className="
                  p-4
                  rounded-xl
                  bg-green-500/10
                  border
                  border-green-500/20
                  text-green-400
                "
              >
                {success}
              </div>
            )}

            {error && (
              <div
                className="
                  p-4
                  rounded-xl
                  bg-red-500/10
                  border
                  border-red-500/20
                  text-red-400
                "
              >
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
