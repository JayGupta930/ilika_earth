'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 right-5 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-green-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-5 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-green-600 to-cyan-600 text-transparent bg-clip-text text-sm font-bold tracking-wider uppercase">
              Let's Connect
            </span>
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We'd Love to <span className="bg-gradient-to-r from-green-600 to-cyan-600 text-transparent bg-clip-text">Hear From You</span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Have questions about our sustainable solutions? Ready to make a difference? Reach out and let's create a greener future together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Contact Info Cards - Left Side */}
          <motion.div 
            className="lg:col-span-2 space-y-4 sm:space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Email Card */}
            <motion.div
              className="group bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div 
                  className="bg-gradient-to-br from-green-500 to-cyan-500 p-2.5 sm:p-3 rounded-xl shadow-lg flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                  <a href="mailto:ilikaearth@gmail.com" className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors duration-200 break-all">
                    ilikaearth@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="group bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-100"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div 
                  className="bg-gradient-to-br from-cyan-500 to-blue-500 p-2.5 sm:p-3 rounded-xl shadow-lg flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                  <a href="tel:+918817101064" className="text-sm sm:text-base text-gray-600 hover:text-cyan-600 transition-colors duration-200">
                    +91 8817101064
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="group bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div 
                  className="bg-gradient-to-br from-green-500 to-emerald-500 p-2.5 sm:p-3 rounded-xl shadow-lg flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Raipur, India<br />
                    Chhattisgarh 492015
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-green-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Follow Us</h3>
              <div className="flex gap-2 sm:gap-3">
                {[
                  { icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', label: 'Facebook' },
                  { icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', label: 'Twitter' },
                  { icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z', label: 'LinkedIn' }
                ].map((social, index) => (
                  <motion.button
                    key={index}
                    className="bg-white p-2.5 sm:p-3 rounded-lg shadow hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div 
            className="lg:col-span-3 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-3 sm:px-4 sm:py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 text-gray-900 text-sm sm:text-base"
                      placeholder="John Doe"
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-3 sm:px-4 sm:py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:bg-white transition-all duration-300 text-gray-900 text-sm sm:text-base"
                      placeholder="john@example.com"
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>
                </div>

                {/* Subject Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-3 sm:px-4 sm:py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 text-gray-900 text-sm sm:text-base"
                    placeholder="How can we help you?"
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 py-3 sm:px-4 sm:py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:bg-white transition-all duration-300 resize-none text-gray-900 text-sm sm:text-base"
                    placeholder="Tell us more about your project or inquiry..."
                    required
                    whileFocus={{ scale: 1.01 }}
                  ></motion.textarea>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">Minimum 10 characters required</p>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 via-green-600 to-cyan-600 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-700 to-cyan-700"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <motion.svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
