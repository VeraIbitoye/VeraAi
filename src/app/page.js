"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAssignment2, setShowAssignment2] = useState(false);

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
          <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 md:bg-transparent md:flex md:space-x-6 text-center md:text-left transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {["Home", "About Me", "Contact", "Assignment"].map((link) => (
              <li key={link} className="md:py-0 py-2">
                <a href={`#${link.replace(" ", "").toLowerCase()}`} className="block text-white hover:text-gray-300 transition-colors" onClick={() => setMenuOpen(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      <div className="mt-24">
        {/* Home Section */}
        <motion.section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center px-4">
          <motion.img src="/my-picture.jpg" alt="My Picture" className="w-72 h-72 rounded-full border-4 border-white shadow-2xl object-cover" />
          <motion.h1 className="mt-6 text-5xl font-extrabold">
            Hello, I'm <span className="text-yellow-300">Ibitoye Veracity Oluwafunke</span>
          </motion.h1>
          <motion.p className="mt-4 text-lg max-w-3xl">Welcome to my portfolio!</motion.p>
        </motion.section>

        {/* About Me Section */}
        <motion.section id="aboutme" className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 py-12">
          <motion.h2 className="text-4xl font-bold text-blue-600">About Me</motion.h2>
          <motion.p className="mt-6 text-lg text-gray-700 max-w-4xl">
            I am Ibitoye Veracity Oluwafunke, a dedicated Computer Science student at Yaba College of Technology (YABATECH), with matric number F/HD/23/3210036. Passionate about technology and problem-solving, I am eager to explore innovative solutions in programming, data analytics, and software development.
          </motion.p>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 py-12">
          <motion.h2 className="text-4xl font-bold text-purple-600">Contact Me</motion.h2>
          <motion.div className="mt-6 space-y-4 text-lg">
            <p className="text-gray-700"><strong>Phone:</strong> +234 913 440 0624</p>
            <p className="text-gray-700"><strong>Email:</strong> veraibitoye23@gmail.com</p>
          </motion.div>
        </motion.section>

        {/* Assignment Section */}
        <motion.section id="assignment" className="min-h-screen bg-white text-center px-4 py-12">
          <motion.h2 className="text-4xl font-bold text-blue-600">Assignment 1</motion.h2>
          <motion.h2 className="text-2xl font-bold text-gray-700">Write short notes on the following:</motion.h2>
          <motion.div className="mt-8 text-left text-gray-700 space-y-4">
            <p><strong>Machine Learning:</strong> A field of AI that enables computers to learn from data.</p>
            <p><strong>Artificial Intelligence (AI):</strong> AI involves creating systems capable of problem-solving and decision-making.</p>
            <p><strong>Supervised Learning:</strong> Model training on labeled data where inputs have correct outputs.</p>
            <p><strong>Unsupervised Learning:</strong> Learning patterns in unlabeled data like clustering.</p>
            <p><strong>Deep Learning:</strong> Uses neural networks with multiple layers.</p>
          </motion.div>

          {!showAssignment2 && (
            <motion.button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all" onClick={() => setShowAssignment2(true)}>
              Read More
            </motion.button>
          )}

          {showAssignment2 && (
            <motion.div className="mt-12 text-left text-gray-700">
              <motion.h2 className="text-4xl font-bold text-blue-600">Assignment 2</motion.h2>
              <motion.h2 className="text-2xl font-bold text-gray-700"> create a problem that can be solved by identifying the issues,  debugging and isolating or solving the problem. You are to document the procedure on how you go about it.</motion.h2>

              {/* Placeholder for Image */}
              <motion.img src="/my-pictures.jpg" alt="Assignment 2" className="w-full h-auto rounded-lg shadow-lg my-6" />

              <p><strong>Problem Statement:</strong> A company's chatbot is providing incorrect responses, leading to customer complaints and loss of trust.</p>

              <h3 className="text-2xl font-bold text-gray-800 mt-6">Procedure to Identify and Solve the Problem:</h3>

              <ul className="list-disc ml-6 space-y-4">
                <li><strong>Identify the Issue:</strong> Review complaints, conduct test interactions, and check for patterns in chatbot errors.</li>
                <li><strong>Debugging:</strong> Verify if the chatbot retrieves correct data, analyze the NLP model, and check for recent code updates.</li>
                <li><strong>Isolate the Problem:</strong> Test different queries to see if errors occur in specific topics or across all responses.</li>
                <li><strong>Solve the Problem:</strong> Update the knowledge base, retrain the NLP model, debug faulty logic, and conduct extensive testing before redeployment.</li>
              </ul>
            </motion.div>
          )}
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-6">
        <p>&copy; 2025 Vera. Designed with love. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
