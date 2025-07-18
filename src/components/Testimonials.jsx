
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Customer",
    feedback:
      "Booking a parcel has never been easier. The real-time tracking keeps me updated every step of the way!",
  },
  {
    name: "Hasan Ahmed",
    role: "Delivery Agent",
    feedback:
      "I love how organized the system is. Route optimization really saves me time.",
  },
  {
    name: "Rafiq Islam",
    role: "Admin",
    feedback:
      "Managing parcel analytics and assigning agents is smooth and efficient.",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-800"
        >
          What People Are Saying
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Hear feedback from our satisfied customers, delivery agents, and admins.
        </motion.p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              className="bg-white shadow-md rounded-lg p-6 text-left"
            >
              <p className="text-gray-600 mb-4">“{item.feedback}”</p>
              <h4 className="text-blue-600 font-semibold">{item.name}</h4>
              <span className="text-gray-500 text-sm">{item.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
