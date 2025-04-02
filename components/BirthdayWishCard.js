import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null);

  // Use Intersection Observer to detect when card enters/exits viewport
  useEffect(() => {
    const options = {
      root: null, // use the viewport
      rootMargin: "0px",
      threshold: 0.1, // 10% visibility threshold only
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // When at least 10% of the card is visible, open it
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          setIsOpen(true);
        }
        // When less than 10% is visible, close it
        else {
          setIsOpen(false);
        }
      });
    }, options);

    // Start observing the card
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Manual click handler still works
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const cardVariants = {
    closed: {
      rotateY: 0,
      transition: { duration: 0.6 },
    },
    open: {
      rotateY: -160,
      transition: { duration: 4 },
    },
  };

  const containerVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 1 },
    },
    open: {
      rotate: 5,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="flex items-center justify-center md:min-h-screen w-full p-4 overflow-hidden md:pl-80">
      <div className="relative w-full max-w-md mx-auto">
        <motion.div
          ref={cardRef}
          className="relative w-full aspect-[3/4] mx-auto cursor-pointer"
          style={{
            transformStyle: "preserve-3d",
            perspective: "2500px",
            maxHeight: "80vh", // Ensure card doesn't exceed viewport height
          }}
          variants={containerVariants}
          animate={isOpen ? "open" : "closed"}
          onClick={handleClick}
        >
          {/* Card Front */}
          <motion.div
            className="absolute w-full h-full bg-white rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3),inset_0_0_30px_rgba(0,0,0,0.2)]"
            variants={cardVariants}
            animate={isOpen ? "open" : "closed"}
            style={{ transformOrigin: "left" }}
          >
            <h3
              className={`text-center mt-6 sm:mt-8 font-sans text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#f6d365] to-[#fda085] bg-clip-text text-transparent p-2 ${
                isOpen ? "invisible" : "visible"
              }`}
            >
              HAPPY BIRTHDAY!
            </h3>

            <div className="absolute w-full h-4/5 top-16">
              {/* First balloon - scales with container */}
              <div
                className="absolute w-1/5 aspect-square rounded-full bg-[rgba(239,71,111,0.7)] left-[5%] top-[15%]
                            after:content-[''] after:absolute after:w-[1px] after:h-[150%] after:bg-[#ffd166] after:top-full after:left-1/2
                            before:content-[''] before:absolute before:border-r-[5px] before:border-l-[5px] before:border-t-0 before:border-transparent before:border-b-[8px] before:border-b-[#ef476f] before:top-[98%] before:left-[40%]"
              />

              {/* Second balloon */}
              <div
                className="absolute w-1/5 aspect-square rounded-full bg-[rgba(6,214,160,0.7)] left-[28%] top-[8%]
                            after:content-[''] after:absolute after:w-[1px] after:h-[150%] after:bg-[#ffd166] after:top-full after:left-1/2
                            before:content-[''] before:absolute before:border-r-[5px] before:border-l-[5px] before:border-t-0 before:border-transparent before:border-b-[8px] before:border-b-[#06d6a0] before:top-[98%] before:left-[40%]"
              />

              {/* Third balloon */}
              <div
                className="absolute w-1/5 aspect-square rounded-full bg-[rgba(255,209,102,0.7)] left-[50%] top-[15%]
                            after:content-[''] after:absolute after:w-[1px] after:h-[150%] after:bg-[#ffd166] after:top-full after:left-1/2
                            before:content-[''] before:absolute before:border-r-[5px] before:border-l-[5px] before:border-t-0 before:border-transparent before:border-b-[8px] before:border-b-[#ffd166] before:top-[98%] before:left-[40%]"
              />

              {/* Fourth balloon */}
              <div
                className="absolute w-1/5 aspect-square rounded-full bg-[rgba(17,138,178,0.7)] left-[72%] top-[8%]
                            after:content-[''] after:absolute after:w-[1px] after:h-[150%] after:bg-[#ffd166] after:top-full after:left-1/2
                            before:content-[''] before:absolute before:border-r-[5px] before:border-l-[5px] before:border-t-0 before:border-transparent before:border-b-[8px] before:border-b-[#118ab2] before:top-[98%] before:left-[40%]"
              />
            </div>
          </motion.div>

          <div className="absolute w-full h-full rounded-lg shadow-[inset_0_0_50px_rgba(0,0,0,0.2)] z-[-1] bg-white flex flex-col border-l-2 border-dotted border-[#333]">
  {/* Header */}
  <div className="flex justify-center items-center py-2 sm:py-4 md:py-6">
    <h3 className="font-sans text-lg sm:text-xl md:text-2xl text-[#333] border-2 border-dotted border-[#333] p-1 sm:p-2">
      HAPPY BIRTHDAY!
    </h3>
  </div>
  
  {/* Content */}
  <div className="flex-grow flex flex-col justify-center px-4 md:px-6">
    <h3 className="font-serif italic text-sm sm:text-base md:text-lg text-[#333] mb-2">
      Dear Vanshika,
    </h3>
    <h3 className="font-dancing font-bold text-sm sm:text-base md:text-lg text-[#333]">
      I hope your day is filled with lots of love and laughter! May
      all of your birthday wishes come true.
    </h3>
  </div>
  
  {/* Image container */}
  <div className="flex justify-center items-center px-2 sm:px-4 md:px-6 pb-2 sm:pb-4 md:pb-6" style={{ flex: "0 0 50%" }}>
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      <Image
        src="/images/wishCard/wishcard.png"
        alt="Birthday Wish"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
      />
    </div>
  </div>
</div>
        </motion.div>
      </div>
    </div>
  );
}