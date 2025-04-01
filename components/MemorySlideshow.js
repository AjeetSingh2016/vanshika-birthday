import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const MemorySlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const memories = [
    {
      image: '/memory1.jpg',
      caption: 'Happy moments together! 😊'
    },
    {
      image: '/memory2.jpg',
      caption: 'Creating beautiful memories! 🌟'
    },
    {
      image: '/memory3.jpg',
      caption: 'Special times with special people! 💖'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === memories.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[300px] h-[500px] md:w-[400px] md:h-[600px] max-w-3xl mx-auto   overflow-hidden rounded-xl shadow-2xl flex items-center justify-center">
      {memories.map((memory, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, x: '100%' }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            x: currentIndex === index ? 0 : '-100%',
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full md:w-full md:h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
            <Image
              src={memory.image}
              alt={`Memory ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <motion.p
              className="absolute bottom-4 left-0 right-0 text-center text-white text-xl font-dancing px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {memory.caption}
            </motion.p>
          </div>
        </motion.div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {memories.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MemorySlideshow;
