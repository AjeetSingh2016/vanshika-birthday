'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


const Surprise = () => {
  return (
<div className="flex flex-col items-center justify-center bg-gradient-to-b text-black p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Birthday Surprise</h1>
        <p className="text-xl opacity-80">Solve the puzzle to unlock your special surprise!</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-md"
      >
        <Link href="/puzzle">
          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            Cick to Begin
          </button>
        </Link>
      </motion.div>
    </div>
  )
}

export default Surprise
