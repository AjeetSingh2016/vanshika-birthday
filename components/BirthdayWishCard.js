import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      });
    }, options);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

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
            maxHeight: "80vh",
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
              {/* Balloons */}
              {[
                { bg: "rgba(239,71,111,0.7)", left: "5%", top: "15%", border: "#ef476f" },
                { bg: "rgba(6,214,160,0.7)", left: "28%", top: "8%", border: "#06d6a0" },
                { bg: "rgba(255,209,102,0.7)", left: "50%", top: "15%", border: "#ffd166" },
                { bg: "rgba(17,138,178,0.7)", left: "72%", top: "8%", border: "#118ab2" },
              ].map((balloon, index) => (
                <div
                  key={index}
                  className={`absolute w-1/5 aspect-square rounded-full bg-[${balloon.bg}] left-[${balloon.left}] top-[${balloon.top}]
                              after:content-[''] after:absolute after:w-[1px] after:h-[150%] after:bg-[#ffd166] after:top-full after:left-1/2
                              before:content-[''] before:absolute before:border-r-[5px] before:border-l-[5px] before:border-t-0 before:border-transparent before:border-b-[8px] before:border-b-[${balloon.border}] before:top-[98%] before:left-[40%]`}
                />
              ))}
            </div>
          </motion.div>

          {/* Card Inside */}
          <div className="absolute w-full h-full rounded-lg shadow-[inset_0_0_50px_rgba(0,0,0,0.2)] z-[-1] bg-white flex flex-col justify-between border-l-2 border-dotted border-[#333]">
            <h3 className="text-center mt-4 sm:mt-6 font-sans text-xl sm:text-2xl md:text-3xl text-[#333] border-r-2 border-t-2 border-b-2 border-dotted border-[#333] p-2">
              HAPPY BIRTHDAY!
            </h3>
            <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8">
              <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#333] mb-2">
                Dear Friend,
              </p>
              <p className="font-dancing font-bold text-lg sm:text-lg md:text-lg text-[#333]">
                I hope your day is filled with lots of love and laughter! May
                all of your birthday wishes come true.
              </p>
            </div>
            <div className="w-full px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
              <div className="relative w-full max-w-md mx-auto h-auto">
                <Image
                  src="/images/wishCard/wishcard.png"
                  alt="Horizontal Photo"
                  layout="responsive"
                  width={700}
                  height={400}
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
