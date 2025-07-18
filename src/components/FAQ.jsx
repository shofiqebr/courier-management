import { motion } from 'framer-motion'

const faqs = [
  {
    question: "How do I track my parcel?",
    answer: "You can track your parcel in real-time from your dashboard after logging in."
  },
  {
    question: "Can I cancel a booking?",
    answer: "Yes, bookings can be canceled within a certain time frame from the dashboard."
  },
  {
    question: "Is there customer support?",
    answer: "Absolutely, we offer 24/7 customer support via chat and phone."
  }
]

export default function FAQ() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
