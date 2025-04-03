'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen pt-24 pb-10 flex items-center bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={item}
            >
              Track, Compete, 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                {" "}Conquer
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
              variants={item}
            >
              Never miss a coding contest again. Contesto helps you track all major
              programming competitions in one place, with personalized reminders
              and performance analytics.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              variants={item}
            >
                <Link href={'/Dash'}>
                
                
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-6 text-lg rounded-lg hover:shadow-lg transition duration-300">
                Get Started 
              </Button>
              </Link>

              <Link href={'/Dash'}> 
              <Button variant="outline" className="px-8 py-6 text-lg rounded-lg border-blue-500 text-blue-600">
                Explore Contests
              </Button>
              </Link>
            </motion.div>
            <motion.div
              className="mt-8 text-sm text-gray-500 flex items-center gap-2"
              variants={item}
            >
              <span>Tracking contests from</span>
              <div className="flex space-x-4">
                {["Codeforces", "LeetCode", "HackerRank", "CodeChef"].map((platform) => (
                  <span key={platform} className="font-medium">
                    {platform}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur-xl opacity-30"></div>
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl">Upcoming Contests</h3>
                    <span className="text-sm text-blue-600">View All</span>
                  </div>
                  {[
                    { name: "Google Kickstart Round E", platform: "Google", time: "2h 15m" },
                    { name: "LeetCode Weekly Contest", platform: "LeetCode", time: "1d 4h" },
                    { name: "Codeforces Round #856", platform: "Codeforces", time: "2d 7h" }
                  ].map((contest, index) => (
                    <motion.div 
                      key={contest.name}
                      className="p-4 my-3 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.2 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{contest.name}</h4>
                          <p className="text-sm text-gray-500">{contest.platform}</p>
                        </div>
                        <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                          {contest.time}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;