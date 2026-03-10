import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {

  const [result, setResult] = useState("");
  const [isSent, setIsSent] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ddc49eb5-29c5-4907-8bab-8db998eb7255");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      setIsSent(true);

      event.target.reset();

      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    } else {
      setResult("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 relative">

      {/* POPUP */}
      {isSent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex justify-center items-center bg-black/50 z-50"
        >
          <div className="bg-white p-6 rounded-xl shadow-xl text-center">
            <h2 className="text-xl font-bold mb-2 text-green-600">
              🎉 Message Sent!
            </h2>
            <p className="text-gray-700">Thanks for contacting me. I’ll reply soon.</p>
          </div>
        </motion.div>
      )}

      {/* TITLE */}
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT CONTACT INFO */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Get in Touch
          </h3>

          <p className="text-lg text-gray-700 mb-4">
            📞 <span className="font-semibold">Phone:</span> +91 6299361809
          </p>

          <p className="text-lg text-gray-700 mb-4">
            📧 <span className="font-semibold">Email:</span>
            <a href="mailto:rupakk746@gmail.com" className="text-blue-600 ml-1">
              rupakk746@gmail.com
            </a>
          </p>

          <p className="text-lg text-gray-700 mb-4">
            🏢 <span className="font-semibold">Company:</span>  
            XYZ Software Solutions Pvt. Ltd.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            📍 <span className="font-semibold">Address:</span>  
            NH C11, NIMS University Jaipur, Rajasthan - 303121
          </p>

          {/* Google Map */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8450261682684!2d90.42190151498356!3d23.78585428456819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71ff2a01f0f%3A0x7c3053b16c2e2a49!2sGoogle!5e0!3m2!1sen!2sbd!4v1633410672463!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </motion.div>

        {/* RIGHT - FORM */}
        <motion.form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="4"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <motion.button
            type="submit"
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all
              ${isSent ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSent ? "Sent ✔" : "Send Message ✉️"}
          </motion.button>

          {result && (
            <p className="text-lg font-medium mt-2 text-center">
              {result}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
