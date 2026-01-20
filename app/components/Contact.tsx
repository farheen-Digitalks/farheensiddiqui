"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          placeholder="Name"
          className="w-full border p-3 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full border p-3 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Message"
          className="w-full border p-3 rounded"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
