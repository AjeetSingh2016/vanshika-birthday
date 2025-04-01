import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const EnhancedTwoLayerCake = () => {
  const flameVariants = {
    animate: {
      scaleY: [1, 1.15, 0.95, 1.1, 1],
      scaleX: [1, 0.95, 1.05, 0.98, 1],
      filter: [
        "brightness(100%)",
        "brightness(115%)",
        "brightness(90%)",
        "brightness(110%)",
        "brightness(100%)",
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex min-h-[350px] items-center justify-center p-4 text-black ">
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
        {/* Cake shadow */}
        <div className="absolute top-1/2 left-1/2 w-4/5 h-8 -translate-x-1/2 translate-y-[140px] transform rounded-full bg-gray-500 opacity-20 blur-lg"></div>

        {/* Bottom cake layer */}
        <div className="absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-[20px] transform">
          <div className="relative h-36 w-full rounded-3xl border-4 border-amber-400 bg-gradient-to-b from-yellow-200 to-amber-300 shadow-md">
            {/* Bottom layer texture */}
            <div className="absolute left-0 top-4 h-28 w-full overflow-hidden opacity-25">
              {[...Array(14)].map((_, i) => (
                <div
                  key={`texture-b-${i}`}
                  className="absolute h-px w-full bg-amber-800"
                  style={{ top: i * 6 }}
                ></div>
              ))}
            </div>
            {/* Button centered in bottom layer */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [1, 1.1, 1], // Keyframes for the pulsing effect
                opacity: 1,
              }}
              transition={{
                duration: 2, // Slow pulse duration
                repeat: Infinity, // Infinite loop
                repeatType: "reverse", // Smooth reversing pulse effect
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Link href="/puzzle">
                <button className="transform rounded-full bg-pink-600 px-6 py-2 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-pink-700 ">
                  Click to Get
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Middle frosting */}
        <div className="absolute top-32 left-1/2 w-10/12 -translate-x-1/2 -translate-y-[156px] transform z-50">
          <div className="h-8 w-full rounded-lg bg-white shadow-sm"></div>
          {/* Icing drips */}
          {Array.from({ length: 15 }, (_, i) => i * 6.66).map(
            (percentage, i) => (
              <div
                key={`drip-${i}`}
                className="absolute top-6 rounded-b-xl bg-white shadow-sm"
                style={{
                  left: `${percentage}%`,
                  width: `${8 + (i % 3) * 2}px`,
                  height: `${10 + (i % 4) * 4}px`,
                }}
              ></div>
            )
          )}
        </div>

        {/* Top cake layer */}
        <div className="absolute top-1/3 left-1/2 w-9/12 -translate-x-1/2 -translate-y-[164px] transform">
          <div className="h-36 w-full rounded-t-2xl border-4 border-rose-400 border-b-0 bg-gradient-to-b from-rose-200 to-rose-300 shadow-md ">
            {/* Top layer texture */}
            <div className="absolute left-0 top-4 h-24 w-full overflow-hidden opacity-25">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`texture-t-${i}`}
                  className="absolute h-px w-full bg-rose-800"
                  style={{ top: i * 6 }}
                ></div>
              ))}
            </div>
            {/* Top icing */}
            <div className="absolute -top-3 left-0 h-8 w-full rounded-t-2xl bg-white shadow-sm"></div>
            {/* Top icing swirls */}
            <div className="absolute left-0 top-0 w-full">
              {Array.from({ length: 13 }, (_, i) => i * 8.33).map(
                (percentage, i) => (
                  <div
                    key={`swirl-${i}`}
                    className="absolute -top-4 rounded-full bg-white shadow-sm"
                    style={{
                      left: `${percentage}%`,
                      width: "8px",
                      height: "8px",
                    }}
                  ></div>
                )
              )}
            </div>
            {/* Sprinkles */}
            {[...Array(25)].map((_, i) => (
              <div
                key={`sprinkle-${i}`}
                className={`absolute rounded-full w-2 h-2 shadow-sm ${
                  [
                    "bg-pink-500",
                    "bg-yellow-500",
                    "bg-blue-500",
                    "bg-purple-500",
                    "bg-green-500",
                  ][i % 5]
                }`}
                style={{
                  top: `${Math.floor(Math.random() * 8) - 6}px`,
                  left: `${Math.floor(Math.random() * 95)}%`,
                }}
              ></div>
            ))}
            {/* Centered text in top layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <h1 className="text-xl font-bold text-pink-700 md:text-2xl">
                Get Birthday Surprise
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Candles */}
        {[15, 28, 40, 55, 70, 80].map((percentage, i) => (
          <div
            key={`candle-${i}`}
            className="absolute top-1/2 z-40 -translate-y-[244px]"
            style={{ left: `${percentage}%` }}
          >
            <div
              className={`h-20 w-4 rounded-t-md shadow-md ${
                [
                  "bg-red-400",
                  "bg-yellow-400",
                  "bg-blue-400",
                  "bg-green-400",
                  "bg-purple-400",
                  "bg-pink-400",
                ][i % 6]
              }`}
            ></div>
            <div className="absolute -top-2 left-1.5 h-4 w-1 rounded-full bg-gray-800"></div>
            <motion.div
              className="absolute -top-8 left-0.5 h-6 w-3 rounded-full bg-orange-500 opacity-80 shadow-orange-300"
              variants={flameVariants}
              animate="animate"
              transition={{ delay: i * 0.15 }}
            ></motion.div>
            <motion.div
              className="absolute -top-7 left-1 h-4 w-2 rounded-full bg-yellow-300 shadow-yellow-200"
              variants={flameVariants}
              animate="animate"
              transition={{ delay: i * 0.15 + 0.05 }}
            ></motion.div>
            <motion.div
              className="absolute -top-6 left-1.5 h-3 w-1 rounded-full bg-white"
              variants={flameVariants}
              animate="animate"
              transition={{ delay: i * 0.15 + 0.1 }}
            ></motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedTwoLayerCake;
