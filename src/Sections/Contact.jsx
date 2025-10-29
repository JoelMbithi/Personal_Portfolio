import React, { useState, useRef, useCallback } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaCheck, FaRocket } from 'react-icons/fa';

// Memoized InputField with stable props
const InputField = React.memo(({ label, name, type = "text", required = true, textarea = false, value, onChange }) => (
  <div className="relative">
    <label htmlFor={name} className="block text-sm font-medium text-white mb-2">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    {textarea ? (
      <textarea
        id={name}
        name={name}
        rows="4"
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors duration-300 resize-none"
        placeholder={`Enter your ${label.toLowerCase()}...`}
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-colors duration-300"
        placeholder={`Enter your ${label.toLowerCase()}...`}
      />
    )}
  </div>
));

// Static ContactForm component (not wrapped in motion)
const ContactForm = ({ onSubmit, isSubmitting, status, formData, handleChange }) => (
  <div className="lg:col-span-2">
    <form
      onSubmit={onSubmit}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
      </div>

      <InputField label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
      <InputField label="Message" name="message" textarea={true} value={formData.message} onChange={handleChange} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
      >
        <div className="flex items-center justify-center space-x-2">
          <FaPaperPlane className="transition-transform duration-300" />
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </div>

        {isSubmitting && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </button>

      {status === 'ERROR' && (
        <p className="text-red-400 font-medium text-center p-3 bg-red-400/10 rounded-lg border border-red-400/20">
          Oops! Something went wrong. Please try again.
        </p>
      )}
    </form>
  </div>
);

// Enhanced FloatingElements with more animations
const FloatingElements = () => {
  const elements = [
    { icon: <FaPaperPlane />, delay: 0, size: "text-4xl" },
    { icon: <FaEnvelope />, delay: 1, size: "text-3xl" },
    { icon: <FaRocket />, delay: 2, size: "text-5xl" },
    { icon: <FaMapMarkerAlt />, delay: 3, size: "text-3xl" },
    { icon: <FaPhone />, delay: 4, size: "text-4xl" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} text-white/10`}
          style={{
            left: `${10 + index * 20}%`,
            top: `${15 + (index % 3) * 25}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.sin(index) * 20, 0],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + element.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay * 2,
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
};

// Background gradient orbs with animation
const AnimatedBackgroundOrbs = () => (
  <>
    <motion.div
      className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.1, 0.2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute top-3/4 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.05, 0.15, 0.05],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </>
);

export const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  // Scroll animations only for visual elements, not for form
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Nairobi, Kenya",
      description: "Available for remote work worldwide",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "joellembithi@gmail.com",
      description: "I'll respond within 24 hours",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+254 743 861 565",
      description: "24 hours",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/joelmbithi",
      color: "hover:bg-blue-600"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/joelmbithi",
      color: "hover:bg-gray-800"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/joelmbithi",
      color: "hover:bg-cyan-500"
    }
  ];

  const handleChange = useCallback((e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/myzjpoyl", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setShowModal(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Enhanced Background Elements */}
      <FloatingElements />
      <AnimatedBackgroundOrbs />

      {/* Animated Container - Only for visual elements, form is separate */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Enhanced Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
            I'm always open to new opportunities and collaborations.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Information with Animations */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.9, type: "spring", stiffness: 80 }}
          >
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.99 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Get In Touch
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                Have a project in mind or want to discuss potential opportunities? 
                I'd love to hear from you. Let's create something extraordinary together.
              </motion.p>
              
              {/* Contact Methods */}
              <div className="space-y-4 mb-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
                    whileHover={{ 
                      x: 5,
                      backgroundColor: "rgba(255,255,255,0.05)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      className={`p-3 rounded-lg bg-gradient-to-r ${item.color} text-white group-hover:shadow-lg`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-300">{item.value}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div>
                <motion.h4 
                  className="text-white font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  Follow Me
                </motion.h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 rounded-lg text-white transition-all duration-300 ${social.color} backdrop-blur-sm border border-white/10`}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -3,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        delay: 1.4 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Quick Stats */}
            <motion.div
              className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, type: "spring" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h4 
                className="text-white font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                Quick Response
              </motion.h4>
              <motion.p 
                className="text-gray-300 text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                Typically replies within 2 hours
              </motion.p>
              <div className="flex justify-center space-x-2">
                {[1, 2, 3].map((dot) => (
                  <motion.div
                    key={dot}
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: dot * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Static (no animations that cause re-renders) */}
          <ContactForm 
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            status={status}
            formData={formData}
            handleChange={handleChange}
          />
        </div>
      </motion.div>

      {/* Enhanced Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 shadow-2xl max-w-md w-full text-center"
              initial={{ scale: 0, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 10 }}
              transition={{ 
                type: "spring", 
                damping: 25,
                stiffness: 200
              }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.2, 
                  type: "spring",
                  stiffness: 200
                }}
              >
                <FaCheck className="text-3xl text-white" />
              </motion.div>
              
              <motion.h3
                className="text-2xl font-bold text-white mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                Message Sent Successfully!
              </motion.h3>
              
              <motion.p
                className="text-gray-300 mb-6 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                Thanks for reaching out! I've received your message and will get back to you within 24 hours. 
                Looking forward to connecting with you!
              </motion.p>

              <motion.button
                onClick={() => setShowModal(false)}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                Awesome, Thanks!
              </motion.button>

              {/* Enhanced Floating particles in modal */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400 rounded-full"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${20 + (i % 3) * 20}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      x: [0, Math.sin(i) * 10, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;