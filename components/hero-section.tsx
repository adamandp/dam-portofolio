"use client";

import { ArrowRight } from "lucide-react";
import GithubIcon from "@/components/icons/github";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section id="home" className="relative mt-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-25 -left-25 w-80 h-80 bg-pink-300/25 dark:bg-purple-600/25 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-300/25 dark:bg-cyan-500/25 blur-3xl rounded-full" />

        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[44px_44px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.12))] dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55))]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center  relative min-h-screen">
        <motion.div className="max-w-4xl z-10">
          <div className="inline-block mb-6 px-4 py-2 border-2 border-black dark:border-white font-bold bg-[#FF90E8] dark:bg-[#FF90E8] text-black dark:text-black shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white] -rotate-3">
            STATUS: ACCEPTING NEW CHALLENGES
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter uppercase mb-8">
            build
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-yellow-500 dark:from-lime-400 dark:to-cyan-400 stroke-2 [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">
              unfair
            </span>
            <br />
            experiences.
          </h1>

          <p className="text-md md:text-lg lg:text-xl font-medium max-w-2xl mb-12 border-l-8 border-black dark:border-white pl-6">
            I architect and build scalable, high-performance web applications.
            Engineering digital excellence with modern architectures and
            confident design.
          </p>

          <div className="flex flex-col gap-3 lg:flex-row">
            <a
              href="#projects"
              className="bg-[#FF2D00] text-white brutal-button brutal-border flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm lg:text-base shadow-[3px_3px_0px_0px_black] dark:shadow-[3px_3px_0px_0px_white] hover:shadow-[1px_1px_0px_0px] dark:hover:shadow-[1px_1px_0px_0px] hover:translate-x-1 hover:translate-y-1 w-fit"
            >
              Inspect My Work
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <a
              href="#contact"
              className="bg-white text-black dark:bg-black dark:text-white brutal-button brutal-border flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm lg:text-base shadow-[3px_3px_0px_0px_black] dark:shadow-[3px_3px_0px_0px_white] hover:shadow-[1px_1px_0px_0px] dark:hover:shadow-[1px_1px_0px_0px] hover:translate-x-1 hover:translate-y-1 w-fit"
            >
              <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Steal My Code
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity z-20"
        >
          <span className="font-bold uppercase tracking-widest text-xs rotate-90 mb-6">
            Scroll
          </span>
          <div className="w-0.5 h-16 bg-black dark:bg-white"></div>
        </motion.div>
      </div>
    </section>
  );
}
