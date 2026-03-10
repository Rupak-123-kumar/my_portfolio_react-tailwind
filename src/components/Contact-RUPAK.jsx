import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <section className="pt-36 px-6 py-16 bg-gray-50 min-h-screen">

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Contact Me
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT – Contact Info */}
          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h3>

            <p className="mb-3 text-gray-700">
              📞 <strong>Phone:</strong> +91 6299361809
            </p>

            <p className="mb-3 text-gray-700">
              📧 <strong>Email:</strong> 
              <a href="mailto:rupakk746@gmail.com" className="text-blue-600 ml-1">
                rupakk746@gmail.com
              </a>
            </p>

            <p className="mb-3 text-gray-700">
              🏢 <strong>Company:</strong> XYZ Software Solutions Pvt. Ltd.
            </p>

            <p className="mb-3 text-gray-700">
              📍 <strong>Address:</strong> Jaipur, Rajasthan
            </p>
          </div>

          {/* RIGHT – Form */}
          <form className="bg-white p-6 rounded-xl shadow-md border flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* Footer only for Contact page */}
      <Footer />
    </>
  );
}
