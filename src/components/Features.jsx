// components/Features.tsx
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Real-Time Parcel Tracking',
    description: 'Track parcels in real-time using geolocation and Google Maps integration.',
  },
  {
    title: 'Role-based Dashboards',
    description: 'Separate interfaces for Admins, Customers, and Delivery Agents.',
  },
  {
    title: 'Optimized Delivery Routes',
    description: 'Smart route suggestions for delivery agents using Maps API.',
  },
  {
    title: 'Secure Booking System',
    description: 'Book parcels with COD or prepaid options, fully secured with JWT.',
  },
  {
    title: 'Analytics & Reports',
    description: 'Admins can view metrics, export CSV/PDF reports, and manage users.',
  },
];

export default function Features() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          System Features
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Empowering logistics through real-time tracking, role-based control, and seamless booking.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="text-blue-600 w-6 h-6 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
