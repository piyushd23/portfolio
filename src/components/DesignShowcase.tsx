import React from "react";

import img1 from "../assets/images/design_work_1.png";
import img2 from "../assets/images/design_work_2.png";
import img3 from "../assets/images/design_work_3.png";
import img4 from "../assets/images/design_work_4.jpg";
import img5 from "../assets/images/design_work_5.png";
import img6 from "../assets/images/design_work_6.png";

// Exact dimensions of the user-provided images to preserve aspect ratio pixel-perfectly
const IMAGES_DATA = [
  { image: img1, aspect: "1024 / 587" },
  { image: img2, aspect: "1024 / 533" },
  { image: img3, aspect: "1024 / 531" },
  { image: img4, aspect: "1024 / 640" },
  { image: img5, aspect: "1024 / 563" },
  { image: img6, aspect: "1024 / 603" }
];

export default function DesignShowcase() {
  // Duplicate the images array to create a seamless infinite marquee effect
  const marqueeImages = [...IMAGES_DATA, ...IMAGES_DATA];

  return (
    <section 
      className="py-10 sm:py-16 w-full overflow-hidden bg-transparent select-none relative" 
      id="design-playground"
    >
      {/* Infinite scrolling track container */}
      <div className="relative w-full flex overflow-hidden py-4">
        <div className="animate-marquee-track flex flex-row items-center py-2">
          {marqueeImages.map((item, index) => (
            <div 
              key={index} 
              className="mx-3 sm:mx-4 shrink-0 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] bg-white dark:bg-[#1C1C1E] transition-all duration-300 hover:scale-[1.02] hover:border-zinc-400 dark:hover:border-zinc-650 h-[220px] sm:h-[320px]"
              style={{ aspectRatio: item.aspect }}
            >
              <img
                src={item.image}
                alt={`Design showcase screen ${index + 1}`}
                draggable="false"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
