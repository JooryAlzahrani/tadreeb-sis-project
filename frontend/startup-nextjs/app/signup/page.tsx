"use client"; 
import Link from "next/link";
import { useState, FormEvent } from "react";



const SignupPage = () => {
  // --- 1. State for Form Data and Status ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    major: "",
    password: "",
  });
  const [status, setStatus] = useState({
    message: "",
    success: false,
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ message: "Registering...", success: false, error: false });

    // --- 2. API Call to register.php ---
    try {
      const response = await fetch("http://localhost/api/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Send the data as a JSON string
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // --- 3. Handle Response ---
      if (data.success) {
        setStatus({
          message: data.message ,
          success: true,
          error: false,
        });
        // Optionally clear the form:
        setFormData({ name: "", email: "", university: "", major: "", password: "" });
      } else {
        setStatus({
          message: data.message || "Registration failed due to an unknown error.",
          success: false,
          error: true,
        });
      }
    } catch (e) {
      console.error("Fetch error:", e);
      setStatus({
        message: "Network error. Could not connect to the registration service.",
        success: false,
        error: true,
      });
    }
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {/* MODIFIED: Main Title */}
                  Create Your Tadreeb Account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  {/* MODIFIED: Intro Paragraph */}
                  Join Tadreeb and connect with trusted companies offering verified internships.
                </p>
                
                {/* --- Social Sign-In Buttons (omitted for brevity) --- */}

                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                  <p className="w-full px-5 text-center text-base font-medium text-body-color">
                    register with your details
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                </div>

                {/* --- Status Message Display --- */}
                {status.message && (
                    <div className={`mb-4 p-3 rounded text-center text-white font-medium ${
                        status.success ? 'bg-green-500' : status.error ? 'bg-red-500' : 'bg-blue-500'
                    }`}>
                        {status.message}
                    </div>
                )}
                
                {/* --- 4. Form Submission Handling --- */}
                <form onSubmit={handleSubmit}>
                  {/* Full Name Input */}
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Full Name{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  
                  {/* University Email Input */}
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      University Email{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your university email"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  
                  {/* University Input */}
                  <div className="mb-8">
                    <label
                      htmlFor="university"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      University{" "}
                    </label>
                    <input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      placeholder="Enter your university name"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  
                  {/* Major Input */}
                  <div className="mb-8">
                    <label
                      htmlFor="major"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Major{" "}
                    </label>
                    <input
                      type="text"
                      name="major"
                      value={formData.major}
                      onChange={handleChange}
                      placeholder="Enter your academic major"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  
                  {/* Password Input */}
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Your Password{" "}
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your Password"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  
                  {/* Checkbox remains the same */}
                  <div className="mb-8 flex">
                    <label
                      htmlFor="checkboxLabel"
                      className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabel"
                          className="sr-only"
                        />
                        <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                          <span className="opacity-0">
                            {/* SVG Checkmark */}
                          </span>
                        </div>
                      </div>
                      <span>
                        By registering, you agree to the
                        <a href="#0" className="text-primary hover:underline">
                          {" "}
                          Terms and Conditions{" "}
                        </a>
                        , and our
                        <a href="#0" className="text-primary hover:underline">
                          {" "}
                          Privacy Policy{" "}
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="mb-6">
                    <button 
                      type="submit" // Ensure this is type="submit"
                      className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Already have an account?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Log In
                  </Link>
                </p>
                
                {/* Closing Note */}
                <p className="mt-8 text-center text-sm font-medium text-body-color/80 dark:text-white/80">
                  Once registered, users can log in anytime to browse, save, and apply for internships that match their academic and professional goals.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* SVG Background remains the same */}
      </section>
    </>
  );
};

export default SignupPage;