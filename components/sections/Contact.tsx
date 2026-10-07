"use client";

import { useRef, useState } from "react";

import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import { BsThreads } from "react-icons/bs";

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
          {/* LEFT CONTENT */}
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

            {/* WhatsApp */}
            <div className="mt-10">
              <a
                href="https://wa.me/6281382552497?text=Hello%20Aryo,%20I%20found%20your%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  p-5
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  hover:border-green-500/40
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                <FaWhatsapp size={32} className="text-green-400" />

                <div>
                  <p className="text-white font-semibold">WhatsApp</p>

                  {/* <p className="text-slate-400 text-sm">+62 812-3456-7890</p> */}
                </div>
              </a>
            </div>

            {/* SOCIALS */}
            <div className="mt-10">
              <h3 className="text-white font-semibold text-lg mb-5">
                Connect With Me
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/aryohakim04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    hover:border-amber-400/30
                    hover:bg-white/10
                    transition-all
                  "
                >
                  <FaInstagram className="text-xl text-pink-400" />
                  <span className="text-white text-sm">@aryohakim04</span>
                </a>

                <a
                  href="https://www.tiktok.com/@aryoanargya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    hover:border-amber-400/30
                    hover:bg-white/10
                    transition-all
                  "
                >
                  <FaTiktok className="text-xl" />
                  <span className="text-white text-sm">@aryoanargya</span>
                </a>

                <a
                  href="https://www.threads.com/@aryohakim04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    hover:border-amber-400/30
                    hover:bg-white/10
                    transition-all
                  "
                >
                  <BsThreads className="text-xl" />
                  <span className="text-white text-sm">@aryohakim04</span>
                </a>

                <a
                  href="https://x.com/AryoAnargya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    hover:border-amber-400/30
                    hover:bg-white/10
                    transition-all
                  "
                >
                  <FaXTwitter className="text-xl" />
                  <span className="text-white text-sm">@AryoAnargya</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/aryo-anargya-70a002249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    hover:border-amber-400/30
                    hover:bg-white/10
                    transition-all
                    sm:col-span-2
                  "
                >
                  <FaLinkedin className="text-xl text-blue-400" />
                  <span className="text-white text-sm">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
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
