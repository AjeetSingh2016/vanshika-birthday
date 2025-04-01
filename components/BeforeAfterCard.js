import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const BeforeAfterCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const beforeImage = "/images/beforeAfter/before.jpg";
  const afterImage = "/images/beforeAfter/after.jpg";

  return (
    <div className="relative w-[300px] h-[500px] md:w-[400px] md:h-[600px] mx-auto my-8 mb-16">
      <h3 className="text-2xl font-dancing text-center text-birthday-purple mb-4">
        {/* Then & Now */}
      </h3>
      <div 
        className="perspective-1000 w-full h-full cursor-pointer" 
        onClick={handleFlip}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Before Photo (Front) */}
          <div
            className={`absolute w-full h-full rounded-xl overflow-hidden shadow-xl backface-hidden transform-gpu ${
              isFlipped ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Image
              src={beforeImage}
              alt="Before"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            <p className="absolute bottom-4 left-4 text-white text-2xl font-dancing">
              Click here ✨
            </p>
          </div>

          {/* After Photo (Back) */}
          <div
            className={`absolute w-full h-full rounded-xl overflow-hidden shadow-xl backface-hidden transform-gpu ${
              isFlipped ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: "rotateY(180deg)",
            }}
          >
            <Image
              src={afterImage}
              alt="After"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            <p className="absolute bottom-4 right-4 text-white text-2xl font-dancing">
              Click here🌟
            </p>
          </div>
        </motion.div>
      </div>
      <p className="text-center mt-4 text-gray-600 font-poppins">
        Hover or click to see the transformation!
      </p>
    </div>
  );
};

export default BeforeAfterCard;
