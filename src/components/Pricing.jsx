/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Flexible Pricing for Every Business
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Basic", "Pro", "Enterprise"].map((plan, idx) => (
            <motion.div
              key={plan}
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2">{plan}</h3>
              <p className="text-gray-500 mb-4">
                {plan === 'Basic' ? 'Starter features for small users.' : plan === 'Pro' ? 'Advanced tools for growing companies.' : 'Custom solutions for large logistics teams.'}
              </p>
              <p className="text-blue-600 text-3xl font-semibold mb-6">
                {plan === 'Basic' ? '$19' : plan === 'Pro' ? '$49' : 'Custom'}
              </p>
              <a href="/register" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}