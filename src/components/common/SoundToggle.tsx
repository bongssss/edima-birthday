import { useSound } from "../../hooks/use-sound";
import { useEffect, useState } from "react";

export const SoundToggle = () => {
  const { isPlaying, toggle } = useSound("/sounds/Davido-ft-omah-lay.mp3");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 1500);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 bg-edimaDark text-edimaPink px-4 py-2 rounded-full shadow-xl transition hover:scale-105"
    >
      {isPlaying ? "🔊 Music On" : "🔇 Music Off"}
    </button>
  );
};
