import { Hero } from "../features/year/2025/Hero";
import { Gallery } from "../features/year/2025/Gallery";
import { LoveNotes } from "../features/year/2025/Lnotes";
import { FinalMessage } from "../features/year/2025/final";
import { SoundToggle } from "../components/common/SoundToggle";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <LoveNotes />
      <FinalMessage />
      <SoundToggle />
    </main>
  );
}
