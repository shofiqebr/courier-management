/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-[#F5FAFF] text-[#0A1D56] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Ship Smarter?
        </motion.h2>
        <motion.p
          className="text-lg text-[#3C486B] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Book your first parcel in minutes and experience real-time tracking,
          optimized delivery, and hassle-free service.
        </motion.p>
        <motion.a
          href="/register"
          className="inline-block bg-[#0A1D56] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#133c86] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}
