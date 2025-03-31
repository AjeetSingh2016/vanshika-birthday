import { motion } from 'framer-motion';
import { useState } from 'react';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000 w-64 h-80 mx-auto cursor-pointer" onClick={handleFlip}>
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full bg-birthday-pink rounded-xl p-4 flex items-center justify-center shadow-xl backface-hidden ${
            isFlipped ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl mb-4">📸</div>
            <p className="text-white font-dancing text-2xl">Click to see a special memory!</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute w-full h-full bg-white rounded-xl p-4 flex items-center justify-center shadow-xl backface-hidden transform rotate-y-180 ${
            isFlipped ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-center">
            <img
              src="/memory.jpg"
              alt="Special Memory"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-birthday-purple font-dancing text-xl">A moment to cherish forever!</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;