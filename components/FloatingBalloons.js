import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingBalloons = () => {
  const [balloons, setBalloons] = useState([]);
  const colors = ['#FF69B4', '#87CEEB', '#9370DB', '#FFB6C1', '#DDA0DD'];
  const messages = [
    'Happy Birthday! 🎉',
    'Make a wish! ⭐',
    'Have a great day! 🌟',
    'Keep smiling! 😊',
    'Dream big! 🌈'
  ];

  useEffect(() => {
    const newBalloons = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      color: colors[i],
      message: messages[i],
      delay: i * 0.5
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          initial={{ y: '100vh', x: balloon.x }}
          animate={{
            y: '-100vh',
            x: balloon.x + Math.sin(balloon.id) * 100
          }}
          transition={{
            duration: 15,
            delay: balloon.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute"
        >
          <div
            className="relative"
            style={{ color: balloon.color }}
          >
            <div className="text-6xl">🎈</div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: balloon.delay + 1 }}
              className="absolute top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-4 py-2 rounded-full shadow-lg text-sm"
            >
              {balloon.message}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBalloons;