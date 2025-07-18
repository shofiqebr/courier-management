import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-[#F5FAFF] py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A1D56] mb-6">
          Get in Touch
        </h2>
        <form className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-[#3C486B] rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-[#3C486B] rounded"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-[#3C486B] rounded md:col-span-2 h-32"
          ></textarea>
          <button className="bg-[#0A1D56] text-white py-3 rounded md:col-span-2 hover:bg-[#133c86]">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}