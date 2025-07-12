import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state
    
  
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE,
  import.meta.env.VITE_APP_EMAILJS_TEMPLATE,
  formRef.current,
  import.meta.env.VITE_APP_EMAILJS_PUBLIC
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };


  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-4 h-[450px]">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-white-50 mb-1"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your good name"
                    required
                    className="w-full px-3 py-2 text-sm text-black placeholder:text-gray-400 bg-white rounded-md"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-white-50 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full px-3 py-2 text-sm text-black placeholder:text-gray-400 bg-white rounded-md"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-white-50 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help?"
                    rows="3"
                    required
                    className="w-full px-3 py-2 text-sm text-black placeholder:text-gray-400 bg-white rounded-md resize-none"
                  />
                </div>

                <button type="submit" className="w-full mt-7">
                  <div className="cta-button group px-4 py-2 text-sm">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img
                        src="/images/arrow-down.svg"
                        alt="arrow"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7">
            <div className="bg-[#cd7c2e] w-full h-[350px] sm:h-[400px] lg:h-[450px] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
