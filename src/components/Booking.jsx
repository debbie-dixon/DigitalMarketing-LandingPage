import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Header from "./Header";

export default function Booking() {
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    myServices: [
      "Search Engine Optimization (SEO)",
      "Pay Per Click (PPC) Management",
      "Conversion Rate Optimization (CRO)",
      "Social Media & Content Marketing",
      "Full-Service Digital Marketing",
      "Other / Custom Strategy",
    ],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!apiKey) {
      console.error("Web3Forms API Key is missing in .env file");
      setStatus("error");
      return;
    }

    try {
      // Replace with your Web3Forms access key from https://web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", service: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Header text="Work With Us" id="book" color="text-blue-950" />
      <div className="mx-4 my-8 max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:mx-auto sm:p-8">
        <h2 className="text-2xl font-bold text-blue-950 mb-2">
          Send us a message
        </h2>
        <p className="text-slate-600 mb-6 text-sm">
          Have a question or want to discuss your project? Fill out the form
          below and we'll get back to you as soon as possible.
        </p>
        <p className="text-slate-600 mb-6 text-sm">
          We typically respond within 24 hours on business days.
        </p>

        {/* Success Notification */}
        {status === "success" && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-sm">
            <CheckCircle2 className="size-5 shrink-0" />
            <span>Thank you! Your message has been sent successfully.</span>
          </div>
        )}

        {/* Error Notification */}
        {status === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-800 text-sm">
            <AlertCircle className="size-5 shrink-0" />
            <span>
              Something went wrong while sending your message. Please try again.
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-blue-950  uppercase tracking-wider mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-slate-900 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-blue-950  uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-slate-900 text-sm"
            />
          </div>

          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-slate-900 text-sm text-gray-900 bg-white cursor-pointer"
          >
            <option value="" disabled>
              Select a service...
            </option>
            {formData.myServices.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>

          <div>
            <label className="block text-xs font-semibold text-blue-950  uppercase tracking-wider mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional details or questions you have..."
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-slate-900 text-sm resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-medium px-4 py-3 rounded-lg text-sm transition-colors disabled:opacity-50"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="size-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
