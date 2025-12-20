"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  fullName: string;
  location: string;
  contactNumber: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    location: "",
    contactNumber: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Create form data for Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("contactNumber", formData.contactNumber);
      formDataToSend.append("timestamp", new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      });

      // With no-cors mode, we can't read the response, so we assume success
      setStatus("success");
      setFormData({ fullName: "", location: "", contactNumber: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700 mb-6">
          We&apos;ve received your inquiry. Our team will contact you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[#0D9488] font-semibold hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          placeholder="Enter your location (e.g., Kathmandu)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="contactNumber"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Contact Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#0D9488] text-white py-3.5 px-6 rounded-lg font-semibold hover:bg-[#0F766E] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit"
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to be contacted by our team.
      </p>
    </form>
  );
}
