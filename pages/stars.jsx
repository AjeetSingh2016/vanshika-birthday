// pages/index.js
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Enhanced Confetti
  const Confetti = () => (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ 
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            backgroundColor: `hsl(${Math.random() * 360}, 85%, 65%)`
          }}
          initial={{ 
            x: Math.random() * windowSize.width,
            y: -50,
            scale: 0
          }}
          animate={{ 
            y: windowSize.height + 50,
            scale: [0, 1, 0.5],
            rotate: Math.random() * 720
          }}
          transition={{ 
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 1.5,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );

  // Enhanced Sparkles with glow
  const Sparkles = ({ children }) => (
    <div className="relative">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 shadow-lg"
          style={{ width: '4px', height: '4px' }}
          initial={{ 
            x: Math.random() * 120 - 60,
            y: Math.random() * 120 - 60,
            scale: 0 
          }}
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            boxShadow: [
              "0 0 0 rgba(255,255,0,0)",
              "0 0 10px rgba(255,255,0,0.8)",
              "0 0 0 rgba(255,255,0,0)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden">
      {/* Enhanced Background Effects */}
      <motion.div 
        className="fixed inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
            "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)"
          ]
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Confetti */}
      <Confetti />

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <Sparkles>
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              textShadow: ["0 0 10px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.8)", "0 0 10px rgba(255,255,255,0)"]
            }}
            transition={{ 
              duration: 1.5,
              textShadow: { duration: 3, repeat: Infinity }
            }}
          >
            PARTY TIME!
          </motion.h1>
        </Sparkles>
      </div>

      {/* Enhanced Falling Balls with trails */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-80"
            style={{ 
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              background: `radial-gradient(circle, hsl(${Math.random() * 360}, 90%, 60%), transparent)`
            }}
            initial={{ 
              x: Math.random() * windowSize.width,
              y: -50,
              scale: 0.5
            }}
            animate={{ 
              y: windowSize.height + 50,
              scale: [0.5, 1, 0.5],
              rotate: Math.random() * 1080
            }}
            transition={{ 
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl shadow-2xl border border-white/20"
              initial={{ scale: 0.7, y: 100, rotate: -5 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.7, y: 100, rotate: 5 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center drop-shadow-lg">
                Claim Your Epic Gift! 🎉
              </h2>
              <div className="space-y-4 min-w-[300px]">
                <motion.a 
                  href="/gift1.zip" 
                  className="block w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-3 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Gift #1 - Surprise!
                </motion.a>
                <motion.a 
                  href="/gift2.zip" 
                  className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Gift #2 - Mystery!
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}