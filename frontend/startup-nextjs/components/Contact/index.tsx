"use client"; //  TALA CHANGE: needed because we use React state + fetch in the browser

import React, { useState } from "react";

import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  //  TALA CHANGE: store form fields (keeps existing UI unchanged)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //  TALA CHANGE: show user feedback without changing styling/layout
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  //  TALA CHANGE: submit form data to PHP API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:8000/api/contactUs.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // ✅ Send JSON (PHP must decode php://input)
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        // ✅ Prefer backend error message if provided
        throw new Error(data.error || data.message || "Failed to send message");
      }

      setStatus("success");

      // ✅ Optional: clear form after success
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong");
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>

              {/* ✅ TALA CHANGE: attach submit handler (no styling changed) */}
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        value={name} // ✅ TALA CHANGE
                        onChange={(e) => setName(e.target.value)} // ✅ TALA CHANGE
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        value={email} // ✅ TALA CHANGE
                        onChange={(e) => setEmail(e.target.value)} // ✅ TALA CHANGE
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        value={message} // ✅ TALA CHANGE
                        onChange={(e) => setMessage(e.target.value)} // ✅ TALA CHANGE
                      ></textarea>
                    </div>
                  </div>

                  {/* ✅ TALA CHANGE: simple status text, no design changes */}
                  {status === "success" && (
                    <div className="w-full px-4 mb-4 text-sm font-medium text-green-600">
                      Message sent successfully.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="w-full px-4 mb-4 text-sm font-medium text-red-600">
                      {errorMsg}
                    </div>
                  )}

                  <div className="w-full px-4">
                    <button
                      type="submit" // TALA CHANGE
                      disabled={status === "loading"} //  TALA CHANGE
                      className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                    >
                      {status === "loading" ? "Sending..." : "Submit Ticket"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
