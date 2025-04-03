'use client'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Level Up Your Competitive Programming?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join Contesto today and take your coding competitions to the next level. 
            It&apos;s free to get started!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg shadow-lg">
              Get Started for Free
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;