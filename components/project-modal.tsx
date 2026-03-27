import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Layers,
  Cpu,
  Zap,
  Globe,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";

interface ProjectModalProps {
  selectedProject: any;
  setSelectedProject: (project: any | null) => void;
}

export default function ProjectModal({
  selectedProject,
  setSelectedProject,
}: ProjectModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = selectedProject?.images?.length || 0;

  // Fungsi untuk memindahkan scroll ke index tertentu
  const scrollToIndex = useCallback((index: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
      setCurrentIndex(index);
    }
  }, []);

  // Update index secara sinkron saat user geser manual pakai jari/trackpad
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    const scrollLeft = scrollRef.current.scrollLeft;
    // Hitung sedang berada di index gambar ke berapa berdasarkan posisi scroll
    const newIndex = Math.round(scrollLeft / width);

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalImages) {
      setCurrentIndex(newIndex);
    }
  };

  // Fungsi Next & Prev dengan Infinite Looping
  const scrollNext = useCallback(() => {
    if (totalImages <= 1) return;
    const nextIndex = (currentIndex + 1) % totalImages; // Mentok kanan -> balik ke 0
    scrollToIndex(nextIndex);
  }, [currentIndex, totalImages, scrollToIndex]);

  const scrollPrev = useCallback(() => {
    if (totalImages <= 1) return;
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages; // Mentok kiri -> balik ke akhir
    scrollToIndex(prevIndex);
  }, [currentIndex, totalImages, scrollToIndex]);

  // Efek Auto-Scroll yang sinkron dengan State Index
  useEffect(() => {
    if (totalImages <= 1 || !isAutoScrolling) return;

    // Setiap kali currentIndex berubah, interval direset.
    // Jadi kalau user swipe manual, auto-scroll gak akan langsung motong secara tiba-tiba
    const intervalId = setInterval(() => {
      scrollNext();
    }, 2000); // 3 Detik

    return () => clearInterval(intervalId);
  }, [isAutoScrolling, scrollNext, totalImages, currentIndex]);

  // Reset semuanya kalau user buka modal project lain
  useEffect(() => {
    setCurrentIndex(0);
    setIsAutoScrolling(true);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0 });
    }
  }, [selectedProject]);

  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ willChange: "opacity" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ y: 50, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 20, scale: 0.95 }}
            style={{ willChange: "transform, opacity" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#111] brutal-border shadow-[10px_10px_0_0_#000] dark:shadow-[10px_10px_0_0_#FFF] transform-gpu"
          >
            {/* Modal Header */}
            <div
              className={`sticky top-0 z-20 flex justify-between items-center p-4 sm:p-6 ${selectedProject.color} ${selectedProject.darkColor} border-b-4 border-black dark:border-white ${selectedProject.textColor} ${selectedProject.darkTextColor}`}
            >
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter truncate pr-4">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 bg-white text-black border-4 border-black shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10 space-y-10 text-black dark:text-white">
              {/* Image Gallery Section */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <section>
                  <h4 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                    <ImageIcon className="text-purple-500 dark:text-purple-400" />{" "}
                    Gallery
                  </h4>

                  <div
                    className="relative group"
                    onMouseEnter={() => setIsAutoScrolling(false)}
                    onMouseLeave={() => setIsAutoScrolling(true)}
                    onTouchStart={() => setIsAutoScrolling(false)}
                    onTouchEnd={() => setIsAutoScrolling(true)}
                  >
                    <div className="relative brutal-border shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#FFF] bg-black">
                      {/* Container Scroll */}
                      <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transform-gpu"
                      >
                        {selectedProject.images.map(
                          (img: string, idx: number) => (
                            <div
                              key={idx}
                              className="w-full flex-shrink-0 snap-center aspect-video relative bg-zinc-200 dark:bg-zinc-800"
                            >
                              <img
                                src={img}
                                alt={`${selectedProject.title} screenshot ${idx + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          ),
                        )}
                      </div>

                      {/* Navigation Buttons (hanya muncul jika gambar > 1) */}
                      {totalImages > 1 && (
                        <>
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 md:group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                            <button
                              onClick={scrollPrev}
                              className="p-2 bg-white text-black border-4 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all block"
                              aria-label="Previous image"
                            >
                              <ChevronLeft size={24} />
                            </button>
                          </div>

                          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 md:group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                            <button
                              onClick={scrollNext}
                              className="p-2 bg-white text-black border-4 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all block"
                              aria-label="Next image"
                            >
                              <ChevronRight size={24} />
                            </button>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Hint / Indikator Bawah */}
                    {totalImages > 1 && (
                      <div className="flex items-center justify-between mt-4">
                        {/* Dot Indicators */}
                        <div className="flex items-center gap-2">
                          {selectedProject.images.map((_: any, idx: number) => (
                            <button
                              key={idx}
                              onClick={() => scrollToIndex(idx)}
                              className={`h-3 rounded-none border-2 border-black dark:border-white transition-all ${
                                idx === currentIndex
                                  ? "w-8 bg-black dark:bg-white"
                                  : "w-3 bg-white dark:bg-[#111] hover:bg-zinc-300 dark:hover:bg-zinc-700"
                              }`}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>
                        {/* Text Hint (e.g., 1 / 3) */}
                        <div className="font-black text-sm uppercase px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#FFF]">
                          {currentIndex + 1} / {totalImages}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

              <section>
                <h4 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                  <Layers className="text-pink-500 dark:text-lime-400" />{" "}
                  Project Overview
                </h4>
                <p className="text-lg font-medium leading-relaxed">
                  {selectedProject.fullDesc}
                </p>
              </section>

              <section>
                <h4 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                  <Cpu className="text-cyan-500 dark:text-cyan-400" />{" "}
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((t: string) => (
                    <span
                      key={t}
                      className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 font-bold uppercase text-sm brutal-border shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#FFF]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                  <Zap className="text-yellow-500 dark:text-yellow-400" />{" "}
                  Architectural Challenges
                </h4>
                <div className="p-6 bg-yellow-50 dark:bg-zinc-900 border-l-8 border-yellow-400 dark:border-yellow-400 font-medium text-lg">
                  {selectedProject.challenges}
                </div>
              </section>

              <div className="pt-6 border-t-4 border-black dark:border-zinc-700 flex flex-wrap gap-4">
                <button
                  className={`${selectedProject.color} ${selectedProject.darkColor} ${selectedProject.textColor} ${selectedProject.darkTextColor} flex items-center gap-2 font-bold py-3 px-6 brutal-border shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}
                >
                  View Live Deployment <Globe size={20} />
                </button>
                <button className="bg-white dark:bg-zinc-800 flex items-center gap-2 font-bold py-3 px-6 brutal-border shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#FFF] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  Examine Source <Terminal size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
