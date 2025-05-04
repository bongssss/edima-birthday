import { useEffect, useState } from "react";

const messages = [
  "From the first moment I met you, I knew you were something special.",
  "My princess.",
  "You embody beauty elegance and intelligence effortlessly",
  "Happy Birthday, Edima. I love you endlessly and always. 💖",
];

export const LoveNotes = () => {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (currentMsgIndex >= messages.length) {
      setCurrentMsgIndex(0); // Reset to the first message
    }

    const currentMsg = messages[currentMsgIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText(currentMsg.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex >= currentMsg.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedText("");
          setCurrentMsgIndex((i) => (i + 1) % messages.length); // Cycle through messages
        }, 2000); // Wait 2 seconds before starting next message
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentMsgIndex]);

  return (
    <section className="bg-edimaPink py-24 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-edimaDark mb-10">
        Some Words From Me to You...
      </h2>
      <div className="text-2xl md:text-3xl font-medium text-edimaDark min-h-[100px] transition-all duration-300">
        {displayedText}
        <span className="animate-pulse">|</span>
      </div>
    </section>
  );
};
