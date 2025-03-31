import { motion } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';

const GiftBox = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // Call the onOpen callback after animation
      setTimeout(() => {
        onOpen();
      }, 1000);
    }
  };

  return (
    <motion.div
      className="cursor-pointer text-center"
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <motion.div
        className="inline-block"
        animate={isOpening ? {
          y: [0, -20, 700],
          rotate: [0, -10, 10],
          scale: [1, 1.2, 0]
        } : {}}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          {/* Gift box lid */}
          <motion.div
            className="w-32 h-8 bg-birthday-pink rounded-t-lg mx-auto"
            animate={isOpening ? {
              y: -20,
              rotate: 10,
              scale: 1.1
            } : {}}
          />
          {/* Gift box body */}
          <div className="w-32 h-32 bg-birthday-pink rounded-b-lg mx-auto flex items-center justify-center">
            <div className="w-8 h-full bg-white absolute" />
            <div className="w-full h-8 bg-white absolute" />
          </div>
        </div>
      </motion.div>
      <motion.p
        className="mt-4 text-2xl font-dancing text-birthday-purple"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Click to Open Your Surprise!
      </motion.p>
    </motion.div>
  );
};

export default GiftBox;