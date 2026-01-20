import Reveal from "@/components/Reveal";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <Reveal>
      <section id="contact" className="py-3 px-6">
        <div className="w-full max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            {/* <p className="text-xs uppercase tracking-[0.25em] text-[rgb(var(--muted))] mb-2">
              Get in touch
            </p> */}
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Contact</h2>
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
            <form className="space-y-5 text-sm md:pr-8 md:border-r border-[rgb(var(--border))] pb-6 md:pb-0">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your name" className="input" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="input"
                />
              </div>

              <input type="text" placeholder="Subject" className="input" />

              <textarea
                rows={5}
                placeholder="Message"
                className="input resize-none"
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
            </form>

            {/* RIGHT: CONTACT INFO */}
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
