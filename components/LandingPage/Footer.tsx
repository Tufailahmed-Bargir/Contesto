'use client'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">Contesto</h3>
              <p className="text-gray-400 mb-4">
                The ultimate coding contest tracker for competitive programmers.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "GitHub", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Testimonials", "FAQ"],
            },
            {
              title: "Resources",
              links: ["Blog", "Documentation", "Community", "Support"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Contact", "Privacy Policy"],
            },
          ].map((column, index) => (
            <div key={column.title} className="col-span-1">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h3 className="text-lg font-bold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} Contesto. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
