"use client";

import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12"
    >
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-black dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <div
          className={`inline-block px-4 py-2 bg-yellow-400 dark:bg-purple-500 text-black font-bold border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:text-white`}
        >
          {subtitle}
        </div>
      )}
    </motion.div>
  );
}
