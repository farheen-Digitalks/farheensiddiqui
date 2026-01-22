"use client";

import { FormEvent, useState } from "react";
import Reveal from "@/components/Reveal";
import { MapPin, Phone, Mail } from "lucide-react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/18hZllZzCEnjz7STClBXkNOs7pk7jxzhF6lEDGp5HBtw/formResponse";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body: data,
        mode: "no-cors", // Google Forms ke liye
      });

      form.reset(); // form clear [web:146]
      setStatus("success");

      // 3s baad popup hide
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <Reveal>
      <section id="contact" className="py-3 px-6">
        <div className="w-full max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Contact</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6" />
            <p className="text-[rgb(var(--muted))] max-w-2xl mx-auto text-sm md:text-base">
              I&apos;m open to full‑time opportunities and freelance projects.
            </p>
          </div>

          {/* Card */}
          <div
            className="
              grid md:grid-cols-[1.4fr_1.1fr] gap-10
              rounded-3xl
              shadow-[0_18px_50px_rgba(15,23,42,0.18)]
              p-8 md:p-10
            "
          >
            {/* LEFT: FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 text-sm md:pr-8 md:border-r border-[rgb(var(--border))] pb-6 md:pb-0"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="entry.159954832"
                  placeholder="Your name"
                  className="input"
                  required
                />
                <input
                  type="email"
                  name="entry.445634187"
                  placeholder="Your email"
                  className="input"
                  required
                />
              </div>

              <input
                type="text"
                name="entry.1337169108"
                placeholder="Subject"
                className="input"
              />

              <textarea
                rows={5}
                name="entry.329277012"
                placeholder="Message"
                className="input resize-none"
                required
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="
                    inline-flex items-center justify-center
                    px-8 py-2.5 rounded-full
                    bg-gradient-to-r from-indigo-500 to-purple-500
                    text-white text-sm font-medium
                    shadow-[0_14px_35px_rgba(79,70,229,0.5)]
                    hover:opacity-95
                    transition
                  "
                >
                  Send message
                </button>
              </div>

              {/* Simple popup */}
              {status === "success" && (
                <div className="mt-4 text-xs md:text-sm text-green-600 bg-green-50 border border-green-200 px-4 py-2 rounded-lg">
                  Message sent successfully.
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 text-xs md:text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-2 rounded-lg">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>

            {/* RIGHT: CONTACT INFO (same as before) */}
            <div className="space-y-8">
              <div className="space-y-6 text-sm">
                <ContactRow
                  icon={<MapPin className="w-5 h-5" />}
                  label="Address"
                  value="Surat, Gujarat, India"
                />
                <ContactRow
                  icon={<Phone className="w-5 h-5" />}
                  label="Call Me"
                  value="+91 9098685861"
                />
                <ContactRow
                  icon={<Mail className="w-5 h-5" />}
                  label="Email"
                  value="masoomfarru634@zohomail.in"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

type RowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function ContactRow({ icon, label, value }: RowProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-11 h-11 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-sm">{label}</p>
        <p className="text-[rgb(var(--muted))]">{value}</p>
      </div>
    </div>
  );
}
