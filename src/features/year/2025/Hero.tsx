import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import gsap from "gsap";

export const Hero = () => {
  const [isConfettiDone, setIsConfettiDone] = useState(false);

  useEffect(() => {
    // Start confetti and set the state to hide the text after it finishes
    const timer = setTimeout(() => {
      setIsConfettiDone(true); // Hide the text after confetti
    }, 5000); // Duration of confetti (5 seconds)

    gsap.from(".headline", { opacity: 0, y: 50, duration: 1.2 });

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <section className="h-screen bg-pink-50 flex flex-col justify-center items-center relative">
      {!isConfettiDone && <Confetti />} {/* Confetti only visible when not done */}
      
      {/* Happy Birthday Edima text */}
      <motion.h1
        className={`headline text-4xl md:text-6xl font-bold text-pink-600 transition-opacity duration-1000 ${isConfettiDone ? "opacity-0" : "opacity-100"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Happy Birthday
        Edima Samuel Koffi 🤭🎉
      </motion.h1>
    </section>
  );
};
