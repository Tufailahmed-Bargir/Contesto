'use client'
import { motion } from "framer-motion";
import { BarChart, Bell, Calendar, Globe } from "lucide-react";

// Feature data could be moved to a separate file
const FeatureSection = () => {
  const features = [
    {
      title: "Personalized Contest Alerts",
      description: "Set up custom notifications for contests that match your interests and skill level.",
      icon: Bell,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Comprehensive Calendar",
      description: "View all upcoming contests in a clean, intuitive calendar interface.",
      icon: Calendar,
      color: "from-cyan-400 to-cyan-600"
    },
    {
      title: "Performance Analytics",
      description: "Track your progress across platforms with detailed performance insights.",
      icon: BarChart,
      color: "from-indigo-400 to-indigo-600"
    },
    {
      title: "Global Community",
      description: "Connect with fellow programmers and participate in exclusive community events.",
      icon: Globe,
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to excel in coding competitions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contesto brings together all the tools you need to stay on top of your competitive programming journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="h-full bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;