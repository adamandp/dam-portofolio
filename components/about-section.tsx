"use client";

import { motion } from "motion/react";
import SectionHeader from "./section-header";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-zinc-900 border-b-4 border-black dark:border-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="About Me" subtitle="Who I Am" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`relative bg-pink-300 dark:bg-purple-600 aspect-square max-w-md mx-auto w-full brutal-border brutal-shadow overflow-hidden`}
          >
            <Image
              src="/assets/dam.jpeg"
              alt="Banner"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg md:text-xl font-medium"
          >
            <p>
              I don't just write code; I solve complex architectural problems.
              With a profound understanding of both client-side aesthetics and
              server-side mechanics, I deliver end-to-end solutions that drive
              measurable business results.
            </p>
            <p>
              My expertise lies in building robust systems using{" "}
              <strong className="bg-yellow-200 dark:bg-lime-500/30 px-1 border-b-2 border-black dark:border-lime-400">
                Next.js, Node.js, and modern relational databases
              </strong>
              . I approach every project with strict TypeScript typing,
              comprehensive testing, and an unwavering commitment to
              performance.
            </p>
            <p>
              I thrive in environments that demand high standards and innovative
              thinking. If you need a product built right the first time, you're
              in the right place.
            </p>

            <div className="pt-8 flex items-center space-x-4">
              <div className="text-5xl font-black text-pink-500 dark:text-lime-400">
                3+
              </div>
              <div className="font-bold uppercase leading-tight border-l-4 border-black dark:border-white pl-4">
                Years of <br /> Commercial <br /> Experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
