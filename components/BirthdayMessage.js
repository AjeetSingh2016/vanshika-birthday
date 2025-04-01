import { motion } from 'framer-motion';

const BirthdayMessage = () => {
  const letters = "Happy Birthday!".split("");
  const name = "Vanshika!".split("");

  return (
    <div className="text-center pt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-dancing text-birthday-purple mb-5">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          <div className='py-3'/>
           {name.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.1,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="text-lg sm:text-xl md:text-2xl font-poppins text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <p className="mb-4">
            On this special day, may your heart be filled with joy, your face with smiles,
          </p>
        </motion.div>

        {/* Floating hearts animation */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-400 text-2xl"
              initial={{
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -200],
                x: (i % 2 === 0 ? '+=' : '-=') + Math.random() * 100
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BirthdayMessage;
