"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

const fieldClass =
  "w-full px-3 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)]/70 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)] disabled:opacity-50 disabled:cursor-not-allowed";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: result.message });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Something went wrong",
        });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
  };

  return (
    <div>
      {status.type === "success" && (
        <div
          className="mb-4 p-4 rounded-xl border border-emerald-500/35 bg-emerald-500/10 dark:bg-emerald-500/15 dark:border-emerald-400/30"
          role="status"
        >
          <div className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
              {status.message}
            </p>
          </div>
        </div>
      )}

      {status.type === "error" && (
        <div
          className="mb-4 p-4 rounded-xl border border-red-500/35 bg-red-500/10 dark:bg-red-500/15 dark:border-red-400/30"
          role="alert"
        >
          <div className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm font-medium text-red-900 dark:text-red-100">
              {status.message}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={status.type === "loading"}
            className={fieldClass}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status.type === "loading"}
            className={fieldClass}
            placeholder="your@email.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            disabled={status.type === "loading"}
            className={fieldClass}
          >
            <option value="">Select a topic…</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Account Issue">Account Issue</option>
            <option value="General Question">General Question</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            disabled={status.type === "loading"}
            className={fieldClass}
            placeholder="Describe your issue or question…"
          />
        </div>

        <button
          type="submit"
          disabled={status.type === "loading"}
          className="w-full bg-[var(--color-primary)] text-white py-3 px-4 rounded-xl font-semibold transition-[filter,transform] duration-200 hover:brightness-105 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md"
        >
          {status.type === "loading" ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </button>
      </form>

      <div className="mt-4 flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
        <svg
          className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        <span>We typically respond within 24 hours.</span>
      </div>
    </div>
  );
}
