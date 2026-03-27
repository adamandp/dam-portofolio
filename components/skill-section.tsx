"use client";

import { motion } from "motion/react";
import SectionHeader from "./section-header";
import { Layout } from "lucide-react";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Globe,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";

const SKILLS = {
  frontend: [
    { name: "React", icon: <Code2 size={24} /> },
    { name: "Next.js", icon: <Globe size={24} /> },
    { name: "Vue.js", icon: <Layout size={24} /> },
    { name: "Tailwind CSS", icon: <Zap size={24} /> },
    { name: "Ant Design", icon: <Layers size={24} /> },
  ],
  backend: [
    { name: "Node.js", icon: <Server size={24} /> },
    { name: "NestJS", icon: <Cpu size={24} /> },
    { name: "Prisma", icon: <Database size={24} /> },
    { name: "TypeScript", icon: <Terminal size={24} /> },
    { name: "PostgreSQL", icon: <Database size={24} /> },
  ],
};

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-neutral-50 dark:bg-zinc-950"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* soft gradient blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] bg-pink-300/25 dark:bg-purple-600/25 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-cyan-300/25 dark:bg-cyan-500/25 blur-3xl rounded-full" />

        {/* subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:44px_44px]" />

        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.12))] dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55))]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader title="Technical Arsenal" subtitle="Core Competencies" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="brutal-card relative bg-white dark:bg-zinc-900 border-black dark:border-white backdrop-blur-sm  transition-all"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-cyan-300 to-blue-400 dark:from-cyan-500 dark:to-blue-600 border-2 border-black dark:border-white shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#FFF]">
                <Layout size={32} className="text-black dark:text-white" />
              </div>
              <h3 className="text-3xl font-black uppercase text-black dark:text-white">
                Frontend
              </h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {SKILLS.frontend.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="group flex items-center space-x-2 px-4 py-2 bg-white dark:bg-zinc-800 backdrop-blur border-2 border-black dark:border-white font-bold text-black dark:text-white hover:bg-pink-50 dark:hover:bg-zinc-700 transition-all "
                >
                  <span className="text-pink-500 dark:text-cyan-400">
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="brutal-card relative bg-white dark:bg-zinc-900 border-black dark:border-white backdrop-blur-sm  transition-all"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-lime-300 to-green-400 dark:from-purple-500 dark:to-fuchsia-600 border-2 border-black dark:border-white shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#FFF]">
                <Server size={32} className="text-black dark:text-white" />
              </div>
              <h3 className="text-3xl font-black uppercase text-black dark:text-white">
                Backend
              </h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {SKILLS.backend.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="group flex items-center space-x-2 px-4 py-2 bg-white dark:bg-zinc-800 backdrop-blur border-2 border-black dark:border-white font-bold text-black dark:text-white hover:bg-lime-50 dark:hover:bg-zinc-700 transition-all "
                >
                  <span className="text-cyan-600 dark:text-purple-400">
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
