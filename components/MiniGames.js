import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const BalloonGame = () => {
  const [balloons, setBalloons] = useState([]);
  const [score, setScore] = useState(0);

  const createBalloon = () => ({
    id: Math.random(),
    x: Math.random() * (window.innerWidth - 100),
    y: window.innerHeight,
    color: ['#FF69B4', '#87CEEB', '#9370DB'][Math.floor(Math.random() * 3)]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBalloons(prev => [...prev, createBalloon()]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const popBalloon = (id) => {
    setBalloons(prev => prev.filter(balloon => balloon.id !== id));
    setScore(prev => prev + 1);
  };

  return (
    <div className="relative h-64 overflow-hidden rounded-xl bg-gradient-to-b from-blue-100 to-pink-100">
      <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full shadow-md">
        Score: {score}
      </div>
      {balloons.map(balloon => (
        <motion.div
          key={balloon.id}
          initial={{ y: balloon.y }}
          animate={{ y: -100 }}
          transition={{ duration: 4, ease: "linear" }}
          style={{ x: balloon.x }}
          className="absolute cursor-pointer"
          onClick={() => popBalloon(balloon.id)}
        >
          <div 
            className="text-4xl transform hover:scale-110 transition-transform"
            style={{ color: balloon.color }}
          >
            🎈
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const CakeGame = () => {
  const [position, setPosition] = useState(50);
  const [cakes, setCakes] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const moveHandler = (e) => {
      const newPos = (e.clientX / window.innerWidth) * 100;
      setPosition(Math.max(0, Math.min(90, newPos)));
    };
    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCakes(prev => [...prev, {
        id: Math.random(),
        x: Math.random() * 90,
      }]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const checkCatch = (cakeX) => {
    return Math.abs(cakeX - position) < 10;
  };

  return (
    <div className="relative h-64 overflow-hidden rounded-xl bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full shadow-md">
        Cakes Caught: {score}
      </div>
      {cakes.map(cake => (
        <motion.div
          key={cake.id}
          className="absolute text-2xl"
          initial={{ y: -50, x: `${cake.x}%` }}
          animate={{ y: 300 }}
          transition={{ duration: 3, ease: "linear" }}
          onAnimationComplete={() => {
            if (checkCatch(cake.x)) {
              setScore(s => s + 1);
            }
            setCakes(prev => prev.filter(c => c.id !== cake.id));
          }}
        >
          🎂
        </motion.div>
      ))}
      <motion.div
        className="absolute bottom-0 text-4xl"
        style={{ left: `${position}%` }}
      >
        🤲
      </motion.div>
    </div>
  );
};

const MiniGames = () => {
  const [activeGame, setActiveGame] = useState('balloon');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            activeGame === 'balloon'
              ? 'bg-birthday-pink text-white'
              : 'bg-white text-birthday-pink'
          }`}
          onClick={() => setActiveGame('balloon')}
        >
          Pop Balloons
        </button>
        <button
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            activeGame === 'cake'
              ? 'bg-birthday-pink text-white'
              : 'bg-white text-birthday-pink'
          }`}
          onClick={() => setActiveGame('cake')}
        >
          Catch the Cake
        </button>
      </div>

      <motion.div
        key={activeGame}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {activeGame === 'balloon' ? <BalloonGame /> : <CakeGame />}
      </motion.div>
    </div>
  );
};

export default MiniGames;