"use client";

import React from "react";

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Build a mailto link dynamically so the subject/body include form values
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = encodeURIComponent(String(formData.get("name") || ""));
    const email = encodeURIComponent(String(formData.get("email") || ""));
    const message = encodeURIComponent(String(formData.get("message") || ""));
    const subject = `Portfolio contact from ${name}`;
    const body = `From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:robinsdev2@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <form
      className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-zinc-400 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-zinc-400 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-zinc-400 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900"
          placeholder="How can I help?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-zinc-800 active:translate-y-px dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
      >
        Send Message
      </button>
      <p className="text-xs text-zinc-500">
        This opens your email client with the message prefilled to robinsdev2@gmail.com.
      </p>
    </form>
  );
};

export default ContactForm;
