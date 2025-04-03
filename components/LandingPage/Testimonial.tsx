'use client'
import { motion } from "framer-motion";

const TestimonialSection = () => {
  // Testimonials data could be moved to a separate file
  const testimonials = [
    {
      quote: "Contesto completely changed how I approach competitive programming. I've improved my rating significantly since I started using it.",
      author: "Alex Chen",
      role: "Software Engineer at Google"
    },
    {
      quote: "I used to miss contests all the time before Contesto. Now I never miss an opportunity to practice and improve my skills.",
      author: "Sophia Rodriguez",
      role: "Computer Science Student"
    },
    {
      quote: "The analytics feature helped me identify my weaknesses and focus my practice more effectively. Highly recommended!",
      author: "Michael Kim",
      role: "Competitive Programmer"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of competitive programmers who have improved their skills with Contesto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="h-full bg-gray-50 rounded-xl p-8 border border-gray-100 relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute -top-3 left-8 text-5xl text-blue-300 opacity-40">&quot;</div>
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;