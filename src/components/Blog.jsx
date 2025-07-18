import { motion } from "framer-motion";

const posts = [
  {
    title: "5 Ways to Optimize Your Supply Chain",
    summary: "Explore how modern logistics solutions can streamline your operations.",
  },
  {
    title: "Why Real-Time Tracking Matters",
    summary: "Learn how live tracking increases transparency and customer satisfaction.",
  },
];

export default function Blog() {
  return (
    <section className="bg-white py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1D56] mb-8">
          From Our Blog
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => (
            <div key={index} className="border p-6 rounded-lg text-left hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#0A1D56] mb-2">
                {post.title}
              </h3>
              <p className="text-[#3C486B]">{post.summary}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}