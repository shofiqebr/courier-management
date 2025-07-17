import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Register & Login",
    description: "Create an account and securely log in as a customer.",
  },
  {
    title: "2. Book a Parcel",
    description:
      "Enter pickup & delivery details, parcel size, and payment type.",
  },
  {
    title: "3. Track in Real-time",
    description: "See parcel status and location on the map at every stage.",
  },
  {
    title: "4. Receive Confirmation",
    description: "Get notified when your parcel is delivered successfully.",
  },
];

export default function HowItWorks() {
  return (
    <section className=" bg-gray-100 py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our system makes courier booking and tracking easy and seamless.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white shadow-md p-6 rounded-xl text-center"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
