'use client'
import { motion } from "framer-motion";

const HowItWorksSection = () => {
  // Steps data could be moved to a separate file
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and customize your profile with your preferred coding platforms and areas of interest."
    },
    {
      number: "02",
      title: "Set Your Preferences",
      description: "Choose which contests you want to track and how you'd like to be notified about upcoming events."
    },
    {
      number: "03",
      title: "Receive Timely Alerts",
      description: "Get notifications before contests start so you never miss an opportunity to participate."
    },
    {
      number: "04",
      title: "Track Your Progress",
      description: "After each contest, view your performance statistics and see how you're improving over time."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Contesto Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes and never miss a coding contest again.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 right-0 w-full h-0.5 bg-blue-200 z-0 transform translate-x-1/2">
                  <motion.div 
                    className="h-full bg-blue-500" 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  />
                </div>
              )}
              
              <motion.div 
                className="relative z-10 h-full bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;