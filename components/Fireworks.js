import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Firework = ({ x, delay }) => {
  const colors = ['#FF69B4', '#87CEEB', '#9370DB', '#FFB6C1', '#DDA0DD'];
  const particles = Array.from({ length: 12 }, (_, i) => ({
    angle: (i * 30 * Math.PI) / 180,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, y: '100vh' }}
      animate={{
        opacity: [0, 1, 0],
        y: ['100vh', `${Math.random() * 50 + 20}vh`],
        transition: {
          duration: 2,
          delay,
          times: [0, 0.2, 1]
        }
      }}
      style={{ left: `${x}%` }}
    >
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: particle.color }}
          animate={{
            x: [0, Math.cos(particle.angle) * 100],
            y: [0, Math.sin(particle.angle) * 100],
            opacity: [1, 0],
            scale: [1, 0]
          }}
          transition={{
            duration: 1,
            delay: delay + 0.2,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  );
};

const Fireworks = () => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks(prev => [
        ...prev,
        {
          id: Math.random(),
          x: Math.random() * 100,
          delay: Math.random() * 0.5
        }
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Clean up old fireworks
  useEffect(() => {
    const cleanup = setInterval(() => {
      setFireworks(prev => prev.slice(-5));
    }, 3000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {fireworks.map(firework => (
        <Firework key={firework.id} x={firework.x} delay={firework.delay} />
      ))}
    </div>
  );
};

export default Fireworks;