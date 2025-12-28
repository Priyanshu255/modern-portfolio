"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";
import Link from "next/link";
import InkCursor from "@/components/InkCursor";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { contactSchema } from "@/lib/validations/contact";

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  // const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  function validateField<Key extends keyof typeof values>(
    field: Key,
    value: string
  ) {
    const partial = {
      ...values,
      [field]: value,
    };

    const result = contactSchema.safeParse(partial);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors((prev) => ({
        ...prev,
        [field]: fieldErrors[field] || [],
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [field]: [],
      }));
    }
  }

  async function handleSubmit(formData: FormData) {
    setErrors({});
    // setSuccess(false);

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors);
      return; // STOP here (no server call)
    }

    setLoading(true);

    const result = await sendContactEmail(formData);

    if (!result.success) {
      setErrors(result.errors || {});
    } else {
      // setSuccess(true);
      setValues({
        name: "",
        email: "",
        message: "",
      });
    }
    setLoading(false);
  }

  return (
    <div
      className="w-full h-[100vh] px-10 pt-10 md:px-20 flex flex-col items-center justify-start"
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <InkCursor />
      <div className="flex items-center justify-between w-full my-5">
        <Link href="/" className="underline cursor-pointer text-purple">
          Back to Home
        </Link>
      </div>
      <form
        // action={handleSubmit}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleSubmit(formData);
        }}
        className="w-full h-full flex flex-col items-center mt-20 md:mt-0 md:justify-center gap-5"
      >
        <div className="w-full">
          <input
            name="name"
            placeholder="Your name"
            autoComplete="off"
            className="w-full p-4 rounded-lg bg-[#111928bf] shadow-2xl"
            disabled={loading}
            value={values.name ?? ""}
            onChange={(e) => {
              const value = e.target.value;
              setValues((v) => ({ ...v, name: value }));
              validateField("name", value);
            }}
          />
          {errors.name && (
            <p className="text-red-500 pl-4 pt-2 text-sm">{errors.name[0]}</p>
          )}
        </div>

        <div className="w-full">
          <input
            name="email"
            // type="email"
            placeholder="Your email"
            autoComplete="off"
            className="w-full p-4 rounded-lg bg-[#111928bf] shadow-2xl"
            disabled={loading}
            value={values.email ?? ""}
            onChange={(e) => {
              const value = e.target.value;
              setValues((v) => ({ ...v, email: value }));
              validateField("email", value);
            }}
          />
          {errors.email && (
            <p className="text-red-500 pl-4 pt-2">{errors.email[0]}</p>
          )}
        </div>

        <div className="w-full">
          <textarea
            name="message"
            placeholder="Your message"
            autoComplete="off"
            rows={4}
            className="w-full p-4 rounded-lg bg-[#111928bf] shadow-2xl"
            disabled={loading}
            value={values.message ?? ""}
            onChange={(e) => {
              const value = e.target.value;
              setValues((v) => ({ ...v, message: value }));
              validateField("message", value);
            }}
          />
          {errors.message && (
            <p className="text-red-500 pl-4 pt-1">{errors.message[0]}</p>
          )}
        </div>

        <MagicButton
          title={loading ? "Sending..." : "Send"}
          icon={<FaLocationArrow />}
          position="right"
          type="submit"
          disabled={loading}
        />
      </form>
    </div>
  );
}
