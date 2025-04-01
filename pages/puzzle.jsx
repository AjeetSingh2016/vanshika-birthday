'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedPuzzle from '../components/components/EnhancedPuzzle';

export default function PuzzlePage() {
  const router = useRouter();
  const [pieces, setPieces] = useState([]);
  const [solved, setSolved] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const imageSrc = '/puzzle-image.jpg'; // Update this to a relevant birthday image
  const numPieces = 6;

  useEffect(() => {
    // Initialize puzzle pieces
    const initialPieces = Array.from({ length: numPieces }, (_, index) => ({
      id: index,
    }));
    
    // Shuffle pieces
    const shuffled = [...initialPieces].sort(() => Math.random() - 0.5);
    setPieces(shuffled);
  }, []);

  useEffect(() => {
    // Check if puzzle is solved
    const isSolved = pieces.length > 0 && 
      pieces.every((piece, index) => piece.id === index);

    if (isSolved && !solved) {
      setSolved(true);
      setTimeout(() => {
        setShowOriginal(true);
        setTimeout(() => {
          setRedirecting(true);
          router.push('/stars'); // Changed from '/stars' to '/presents'
        }, 3000);
      }, 1000);
    }
  }, [pieces, router, solved]);

  const handleDragEnd = (sourceIndex, destIndex) => {
    if (sourceIndex === destIndex) return;

    setPieces(prevPieces => {
      const newPieces = [...prevPieces];
      const [movedPiece] = newPieces.splice(sourceIndex, 1);
      newPieces.splice(destIndex, 0, movedPiece);
      return newPieces;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-200 via-purple-100 to-blue-100 text-pink-800 p-4">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6 font-cursive drop-shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Solve Puzzle! 🎀
      </motion.h1>
      

      <AnimatePresence mode="wait">
        {showOriginal ? (
          <motion.div
            key="original-image"
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-2 font-cursive text-purple-600">Yay, You Did It! 🎉</h2>
            <motion.div className="w-full max-w-md mx-auto mb-2 relative">
              <img 
                src={imageSrc} 
                alt="Complete Birthday Present" 
                className="w-full h-auto rounded-lg shadow-lg border-4 border-pink-300"
              />
            
            </motion.div>
            {redirecting ? (
              <motion.div>
                <p className="text-xl font-cursive">Opening your special birthday gift...</p>
                <motion.div
                  className="w-16 h-16 border-4 border-t-transparent border-purple-400 rounded-full mt-4 mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ) : (
              <p className="text-xl font-cursive text-purple-600">You're the birthday star! 🌟</p>
            )}
          </motion.div>
        ) : solved ? (
          <motion.div
            key="solved-message"
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 font-cursive text-purple-600">Puzzle Complete! 🎂</h2>
          </motion.div>
        ) : (
          <motion.div
            key="puzzle-container"
            className="w-full max-w-md bg-white bg-opacity-70 p-4 rounded-lg shadow-lg border-2 border-dashed border-pink-400"
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-full h-96 overflow-hidden rounded-lg">
                <EnhancedPuzzle
                  pieces={pieces}
                  imageSrc={imageSrc}
                  numPieces={numPieces}
                  onDragEnd={handleDragEnd}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}