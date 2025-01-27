"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white fixed w-full z-20 shadow-lg top-0 left-0"
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">Veracity</h1>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <ul
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 md:bg-transparent md:flex md:space-x-6 text-center md:text-left transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {["Home", "About Me", "Contact", "Assignment"].map((link) => (
              <li key={link} className="md:py-0 py-2">
                <a
                  href={`#${link.replace(" ", "").toLowerCase()}`}
                  className="block text-white hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Sections */}
      <div className="mt-24">
        {/* Home Section */}
        <motion.section
          id="home"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center px-4"
        >
    <motion.img
  src="/my-picture.jpg"
  alt="My Picture"
  className="w-72 h-72 rounded-full border-4 border-white shadow-2xl object-cover"
  whileHover={{ scale: 1.1, rotate: 5 }}
/>



          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-6 text-5xl font-extrabold"
          >
            Hello, I'm <span className="text-yellow-300">Ibitoye Veracity Oluwafunke</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-4 text-lg max-w-3xl"
          >
             Welcome to my portfolio!
          </motion.p>
          
        </motion.section>

        {/* About Me Section */}
        <motion.section
          id="aboutme"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 py-12"
        >
          <motion.h2
            variants={item}
            className="text-4xl font-bold text-blue-600"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-6 text-lg text-gray-700 max-w-4xl"
          >
            

I am Ibitoye Veracity Oluwafunke, a dedicated Computer Science student at Yaba 
College of Technology (YABATECH), with matric number F/HD/23/3210036. 
Passionate about technology and problem-solving, I am eager to explore
 innovative solutions in programming, data analytics, and software development.
  My goal is to leverage my skills to create impactful projects that contribute 
  to the ever-evolving tech landscape. I am always excited to learn, adapt, and 
  grow in the dynamic world of computing.
          </motion.p>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 py-12"
        >
          <motion.h2
            variants={item}
            className="text-4xl font-bold text-purple-600"
          >
            Contact Me
          </motion.h2>
          <motion.div
            variants={item}
            className="mt-6 space-y-4 text-lg"
          >
            <p className="text-gray-700">
              <strong>Phone:</strong> +234 913 440 0624
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> veraibitoye23@gmail.com
            </p>
          </motion.div>
          <motion.a
            href="#home"
            variants={item}
            className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            Back to Home
          </motion.a>
        </motion.section>

        {/* Assignment Section */}
        <motion.section
          id="assignment"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 py-12"
        >
          <motion.h2
            variants={item}
            className="text-4xl font-bold text-blue-600"
          >
            Assignment
          </motion.h2>
          <div className="mt-8 max-w-3xl space-y-6 text-left text-gray-700">
            {[
              {
                title: "Machine Learning",
                content:
                  "Machine learning is a field of artificial intelligence that enables computers to learn from data and improve performance over time without explicit programming.",
              },
              {
                title: "Artificial Intelligence (AI)",
                content:
                  "Artificial Intelligence (AI) involves creating systems capable of tasks requiring human intelligence, such as problem-solving and decision-making.",
              },
              {
                title: "Supervised Learning",
                content:
                  "Supervised learning involves training a model on labeled data where inputs are paired with correct outputs for prediction or classification.",
              },
              {
                title: "Unsupervised Learning",
                content:
                  "Unsupervised learning focuses on unlabeled data, discovering patterns like clustering or dimensionality reduction.",
              },
              {
                title: "Deep Learning",
                content:
                  "Deep learning uses neural networks with multiple layers to solve complex problems, a subset of machine learning.",
              },
            ].map(({ title, content }) => (
              <motion.div key={title} variants={item}>
                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                <p>{content}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-6"
      >
        <p>&copy; 2025 Vera. Designed with love. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
