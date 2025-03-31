import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GiftBox from "../components/GiftBox";
import BirthdayMessage from "../components/BirthdayMessage";
import FloatingBalloons from "../components/FloatingBalloons";
import FlipCard from "../components/FlipCard";
import MemorySlideshow from "../components/MemorySlideshow";
import MiniGames from "../components/MiniGames";
import PlayableMusic from "../components/PlayableMusic";
import Fireworks from "../components/Fireworks";
import BeforeAfterCard from "../components/BeforeAfterCard";
import BirthdayWishCard from "../components/BirthdayWishCard";
import Surprise from "../components/Surprise";

export default function Home() {
  const [isGiftOpened, setIsGiftOpened] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 relative overflow-hidden">
      <PlayableMusic />

      <AnimatePresence>
        {!isGiftOpened ? (
          <motion.div
            key="gift"
            className="min-h-screen flex items-center justify-center"
            exit={{ opacity: 0, scale: 0 }}
          >
            <GiftBox onOpen={() => setIsGiftOpened(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-4 pb-4 pt-4"
          >
            <FloatingBalloons />
            <Fireworks />

            {/* <section className="mb-16">
       
            </section> */}
            <section className="mb-16 min-h-screen ">
            
              <div className="grid gap-8 mb-16">
              <BirthdayMessage />
                <MemorySlideshow />
                {/* <FlipCard /> */}
                
              </div>
            </section>

            <section className="mb-16">
              <BirthdayWishCard
                imageUrl="https://picsum.photos/600/400"
                message="Wishing you an amazing birthday filled with joy and happiness!"
              />
            </section>

            <section className="mb-16">
            
            <div className="grid gap-8">
              <BeforeAfterCard />
              {/* <FlipCard /> */}
              
            </div>
          </section>

            <section className="mb-16">
              <h2 className="text-3xl font-dancing text-center text-birthday-purple mb-8">
               Surprise
              </h2>
              <Surprise />
            </section>

            <footer className="text-center py-8">
              <p className="text-xl font-dancing text-birthday-purple">
                Made with ❤️ for your special day!
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
