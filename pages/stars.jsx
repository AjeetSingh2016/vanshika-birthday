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
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Enhanced Confetti with shapes
  const Confetti = () => (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(100)].map((_, i) => {
        const isStar = Math.random() > 0.7;
        return (
          <motion.div
            key={i}
            className={`absolute ${isStar ? 'star' : 'rounded-full'}`}
            style={{ 
              width: isStar ? '15px' : `${Math.random() * 12 + 6}px`,
              height: isStar ? '15px' : `${Math.random() * 12 + 6}px`,
              background: isStar 
                ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'yellow\'%3E%3Cpath d=\'M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z\'/%3E%3C/svg%3E")'
                : `hsl(${Math.random() * 360}, 90%, 70%)`,
              backgroundSize: 'cover'
            }}
            initial={{ 
              x: Math.random() * windowSize.width,
              y: -50,
              scale: 0
            }}
            animate={{ 
              y: windowSize.height + 50,
              scale: [0, 1.2, 0.8],
              rotate: Math.random() * 360
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 1,
              ease: "easeOut"
            }}
          />
        );
      })}
    </div>
  );

  // Enhanced Sparkles with particle variety
  const Sparkles = ({ children }) => (
    <div className="relative">
      {[...Array(40)].map((_, i) => {
        const isGlow = Math.random() > 0.5;
        return (
          <motion.div
            key={i}
            className={`absolute ${isGlow ? 'rounded-full' : 'star'}`}
            style={{ 
              width: isGlow ? '6px' : '10px',
              height: isGlow ? '6px' : '10px',
              background: isGlow 
                ? 'radial-gradient(circle, rgba(255,255,255,0.9), transparent)'
                : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'gold\'%3E%3Cpath d=\'M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z\'/%3E%3C/svg%3E")',
              backgroundSize: 'cover'
            }}
            initial={{ 
              x: Math.random() * 150 - 75,
              y: Math.random() * 150 - 75,
              scale: 0 
            }}
            animate={{ 
              scale: [0, 1.3, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 1.8,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        );
      })}
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        className="fixed inset-0 opacity-25"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
            "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)"
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Confetti */}
      <Confetti />

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <Sparkles>
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200 tracking-wide text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              textShadow: [
                "0 0 15px rgba(255,255,255,0.3)",
                "0 0 25px rgba(255,255,255,0.8)",
                "0 0 15px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ 
              duration: 1.2,
              textShadow: { duration: 4, repeat: Infinity }
            }}
          >
            
            UNWRAP THE FUN!
          </motion.h1>
        </Sparkles>
      </div>

      {/* Enhanced Falling Gifts */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * windowSize.width,
              y: -50,
              scale: 0.7
            }}
            animate={{ 
              y: windowSize.height + 50,
              scale: [0.7, 1, 0.7],
              rotate: Math.random() > 0.5 ? 360 : -360
            }}
            transition={{ 
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 1.5,
              ease: "easeInOut"
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-45">
              <div className="w-3 h-8 bg-yellow-300 rounded-full transform -rotate-45" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Gift Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-20 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-700/95 to-indigo-800/95 p-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-md max-w-md w-full"
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 100 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">
                  Your Special Gifts! 🎁
                </h2>
                <p className="text-purple-200 text-lg">Unwrap your surprises now!</p>
              </motion.div>

              <div className="space-y-5">
                {/* Gift 1 */}
                <motion.a 
                  href="https://drive.google.com/uc?export=download&id=1JmbrnCVGMvwuUicqFtGB-D66PBCW2S-r"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-all"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">Scrapbook #1</h3>
                    <h3 
      
                      className="text-yellow-300 hover:text-yellow-200 text-sm transition-colors"
                    >
                      Download Now
                    </h3>
                  </div>
                </motion.a>

                {/* Gift 2 */}
                <motion.a 
                  href="https://ncert-epub.s3.us-east-1.amazonaws.com/test/slideshow.mp4"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-all"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">Slideshow #2</h3>
                    <h3 className=' text-yellow-300 hover:text-yellow-200'>
                      Download Now
                    </h3>
                  </div>
                </motion.a>
              </div>

              <motion.div 
                className="mt-6 text-center text-purple-300 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Enjoy your exclusive rewards!
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}