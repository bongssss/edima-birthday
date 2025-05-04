import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export const FinalMessage = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowConfetti(true), 2000);
  }, []);

  return (
    <section className="h-screen bg-edimaDark text-edimaPink flex flex-col justify-center items-center px-6 text-center">
      {showConfetti && <Confetti numberOfPieces={300} recycle={false} />}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="text-4xl md:text-3xl font-[cursive] italic">
          My Dearest Princess Edima Samuel Koffi,
        </h2>
        <br/>
        <br/>
        <p className="text-lg md:text-xl leading-8 font-[cursive] italic">

          I am not afraid to say it. The depth of my love for you goes far beyond what words can hold.
          <br />
          You have such a hold on me that even in your absence, you are present
          <br />
          etched into every moment, woven into the fabric of my deepest desires.
          <br />
          Your sweet voice echoes in my silence, the mere thought of you brings light to my eyes and strength to my bones.
          <br />
          <br/>
          It has been a while since we held each other and as the moments draw closer, I begin to imagine
          <br />
          Will seeing you again feel like waking from a long, breathless dream?
          <br />
          If so, let me not wake gently, but all at once, with awe, with wonder and with love renewed.
          <br />
          To reiterate my declaration, your aspirations remain my quest, they move me to action and not by duty but by unwavering devotion.
          <br />
          <br/>
          Finally, your dreams are now even more so intertwined with my own.  
          <br />
          And I now count the moments with growing eagerness, 
          longing to hear your voice not in the silence of my mind, but from your lips, near enough to touch.
          <br />
          Happy birthday, With all my love.
          <br />
          <br />
          Your betrothed,
          <br />
          Ubongabasi Etim. 
        </p>
      </motion.div>
    </section>
  );
};
