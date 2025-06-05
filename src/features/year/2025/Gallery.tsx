import { useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

// Images
import edima1 from "../../../assets/images/edima1.jpeg";
import edima4 from "../../../assets/images/edima4.jpeg";
import edima5 from "../../../assets/images/edima5.jpeg";
import edima6 from "../../../assets/images/edima6.jpeg";
import edima7 from "../../../assets/images/edima7.jpeg";
import edima8 from "../../../assets/images/edima8.jpeg";
import edima9 from "../../../assets/images/edima9.jpeg";
import edima10 from "../../../assets/images/edima10.jpeg";
import edima11 from "../../../assets/images/edima11.jpeg";

const images = [
  { src: edima11, description: "The moment that started everything." },
  { src: edima1, description: "The most beautiful Woman I ever saw." },
  { src: edima4, description: "My Princess." },
  { src: edima5, description: "She glows in the dark." },
  { src: edima6, description: "Hotter than a thousand suns." },
  { src: edima7, description: "Grace and warmth in one photo." },
  { src: edima8, description: "Your eyes aren't  flawlwess, they command complete surrender.." },
  { src: edima9, description: "Joy, elegance, you." },
  { src: edima10, description: "Forever unforgettable." },
  //{ src: edima11, description: "The light that shines bright." },
];
//named export 
export const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(images[0]);

  const openModal = (imageObj: typeof images[0]) => {
    setCurrentImage(imageObj);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleImageHover = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 });
  };

  const handleImageLeave = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
  };

  return (
    <section className="py-24 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-edimaDark mb-10">
        Beautiful Moments 💖
      </h2>

      {/* Hanging Photo Line */}
      <div className="overflow-x-auto flex gap-6 justify-center items-end pb-6">
        {images.map((imgObj, idx) => (
          <motion.div
            key={idx}
            className="w-28 h-28 shrink-0 cursor-pointer hover:shadow-lg bg-white rounded-lg border-2 border-pink-200"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
            onClick={() => openModal(imgObj)}
            style={{
              transform: `rotate(${(Math.random() * 6 - 3).toFixed(2)}deg)`,
            }}
          >
            <img
              src={imgObj.src}
              alt={`Edima ${idx}`}
              className="w-full h-full object-cover rounded-md"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal View */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-[90vw] max-h-[90vh] p-6 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src={currentImage.src}
              alt="Enlarged"
              className="max-h-[60vh] w-full object-contain mb-4"
            />
            <p className="text-edimaDark text-lg">{currentImage.description}</p>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};
