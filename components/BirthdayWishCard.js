import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const cardVariants = {
    closed: {
      rotateY: 0,
      transition: { duration: 0.6 }
    },
    open: {
      rotateY: -160,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 1 }
    },
    open: {
      rotate: 5,
      transition: { duration: 1 }
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <motion.div
        className="relative w-[250px] h-[350px] cursor-pointer"
        style={{ transformStyle: 'preserve-3d', perspective: '2500px' }}
        variants={containerVariants}
        animate={isOpen ? 'open' : 'closed'}
        onClick={handleClick}
      >
        {/* Card Front */}
        <motion.div
          className="absolute w-full h-full bg-white overflow-hidden shadow-[inset_100px_20px_100px_rgba(0,0,0,0.2),30px_0_50px_rgba(0,0,0,0.4)]"
          variants={cardVariants}
          animate={isOpen ? 'open' : 'closed'}
          style={{ transformOrigin: 'left' }}
        >
          <h3 
            className={`text-center mt-8 font-tahoma text-2xl font-bold bg-gradient-to-r from-[#f6d365] to-[#fda085] bg-clip-text text-transparent ${isOpen ? 'invisible' : 'visible'}`}
          >
            HAPPY BIRTHDAY Love!
          </h3>
          <div className="absolute">
            <div className="absolute w-[85px] h-[95px] rounded-full bg-[rgba(239,71,111,0.7)] left-[-10px] top-[50px] after:content-[''] after:absolute after:w-[1px] after:h-[155px] after:bg-[#ffd166] after:top-[95px] after:left-[43px] before:content-[''] before:absolute before:border-r-[7px] before:border-l-[7px] before:border-t-0 before:border-transparent before:border-b-[10px] before:border-b-[#ef476f] before:top-[94px] before:left-[37px]" />
            <div className="absolute w-[85px] h-[95px] rounded-full bg-[rgba(6,214,160,0.7)] left-[50px] top-[20px] after:content-[''] after:absolute after:w-[1px] after:h-[155px] after:bg-[#ffd166] after:top-[95px] after:left-[43px] before:content-[''] before:absolute before:border-r-[7px] before:border-l-[7px] before:border-t-0 before:border-transparent before:border-b-[10px] before:border-b-[#06d6a0] before:top-[94px] before:left-[37px]" />
            <div className="absolute w-[85px] h-[95px] rounded-full bg-[rgba(255,209,102,0.7)] left-[110px] top-[50px] after:content-[''] after:absolute after:w-[1px] after:h-[155px] after:bg-[#ffd166] after:top-[95px] after:left-[43px] before:content-[''] before:absolute before:border-r-[7px] before:border-l-[7px] before:border-t-0 before:border-transparent before:border-b-[10px] before:border-b-[#ffd166] before:top-[94px] before:left-[37px]" />
            <div className="absolute w-[85px] h-[95px] rounded-full bg-[rgba(17,138,178,0.7)] left-[170px] top-[20px] after:content-[''] after:absolute after:w-[1px] after:h-[155px] after:bg-[#ffd166] after:top-[95px] after:left-[43px] before:content-[''] before:absolute before:border-r-[7px] before:border-l-[7px] before:border-t-0 before:border-transparent before:border-b-[10px] before:border-b-[#118ab2] before:top-[94px] before:left-[37px]" />
          </div>
        </motion.div>

        {/* Card Inside */}
        <div className="absolute w-full h-full bg-white shadow-[inset_100px_20px_100px_rgba(0,0,0,0.2)] z-[-1]">
          <h3 className="text-center mt-8 font-tahoma text-2xl text-[#333] outline-dotted outline-[#333]">
            HAPPY BIRTHDAY vodoo!
          </h3>
          <p className="mt-10 mx-10 font-[Brush-Script-MT] text-[#333]">Dear Friend,</p>
          <p className="mx-10 font-[Brush-Script-MT] text-[#333]">
            Happy birthday!! I hope your day is filled with lots of love and
            laughter! May all of your birthday wishes come true.
          </p>
          <p className="absolute left-[150px] top-[200px] text-[#333] font-[Brush-Script-MT]">
            Pawan
          </p>
        </div>
      </motion.div>
    </div>
  );
}