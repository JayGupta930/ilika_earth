'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-12 mt-24"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get in touch to learn more about our sustainable solutions
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={itemVariants}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={contactInfoVariants}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">ilikaearth@gmail.com</p>
              </motion.div>
              <motion.div variants={contactInfoVariants}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 8817101064</p>
              </motion.div>
              <motion.div variants={contactInfoVariants}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  Raipur, India<br />
                  Raipur, Chhattisgarh 492015
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ y: -5 }}
          >
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="relative"
              >
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
                  Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100 transition-all duration-300 placeholder-gray-400"
                  placeholder="Enter your full name"
                  required
                  whileFocus={{ scale: 1.01, y: -2 }}
                  whileHover={{ borderColor: "#10b981" }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-green-500/20 opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="relative"
              >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                  Email Address *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100 transition-all duration-300 placeholder-gray-400"
                  placeholder="your.email@example.com"
                  required
                  whileFocus={{ scale: 1.01, y: -2 }}
                  whileHover={{ borderColor: "#10b981" }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-green-500/20 opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="relative"
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-3">
                  Message *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100 transition-all duration-300 placeholder-gray-400 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                  required
                  whileFocus={{ scale: 1.01, y: -2 }}
                  whileHover={{ borderColor: "#10b981" }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-green-500/20 opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-3 right-3 text-xs text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Be specific for better assistance
                  </span>
                </motion.div>
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-green-500 text-white px-6 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="button-bg"
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </motion.svg>
                </span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
