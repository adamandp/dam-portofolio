"use client";

import { PROJECTS, PROJECTS_INTERFACE } from "@/utils/static-data";
import { motion } from "motion/react";
import { ArrowRight, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectModal from "./project-modal";

interface ProjectContainerProps {
  setSelectedProject: (project: PROJECTS_INTERFACE) => void;
}

function ProjectContainer({ setSelectedProject }: ProjectContainerProps) {
  return (
    <section
      id="projects"
      className="py-12 lg:py-24 bg-[#FDFBF7] dark:bg-zinc-900 border-y-4 border-black dark:border-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black uppercase text-black dark:text-white mb-12 flex flex-col">
          <span>Proof of</span>
          <span className="text-[#ff3366]">Execution.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              // Animasi y (vertikal) biasanya lebih smooth dibanding scale untuk scroll
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // once: false bikin animasi jalan tiap kali di-scroll (tidak hanya awal load)
              viewport={{ once: false, amount: 0.1 }}
              // Delay dikecilkan dari 0.5 ke 0.1 agar tidak patah-patah/menunggu lama
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              onClick={() => setSelectedProject(project)}
              style={{ willChange: "transform, opacity" }} // Hardware acceleration
              className="group cursor-pointer relative brutal-border bg-white dark:bg-zinc-800 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_white] hover:shadow-[0px_0px_0_0_#000] dark:hover:shadow-[0px_0px_0_0_white] flex flex-col hover:translate-x-2 hover:translate-y-2 transition-all duration-300 transform-gpu"
            >
              {/* Image Container */}
              <div className="h-56 w-full relative overflow-hidden border-b-4 border-black dark:border-white bg-zinc-200 dark:bg-zinc-800">
                {/* Image Setup */}
                {project.images && project.images.length > 0 ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Briefcase
                      size={64}
                      className="opacity-30 text-black dark:text-white"
                    />
                  </div>
                )}

                {/* Brutalist Color Tint Overlay - Hilang saat di hover! */}
                <div
                  className={`absolute inset-0 opacity-60 mix-blend-multiply dark:mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 ${project.color} ${project.darkColor}`}
                ></div>

                {/* View Details Label */}
                <div className="absolute bottom-4 right-4 bg-white dark:bg-zinc-900 text-black dark:text-white px-3 py-1 font-bold border-2 border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#FFF] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 z-10">
                  View Details <ArrowRight size={16} />
                </div>
              </div>

              <div className="p-6 grow flex flex-col">
                <h3 className="text-2xl font-black uppercase mb-2 group-hover:text-pink-600 dark:group-hover:text-lime-400 transition-colors">
                  {project.title}
                </h3>
                <p className="font-medium text-zinc-700 dark:text-zinc-300 mb-6 grow">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-zinc-200 dark:bg-zinc-700 border border-black dark:border-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-zinc-200 dark:bg-zinc-700 border border-black dark:border-zinc-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] =
    useState<PROJECTS_INTERFACE | null>(null);

  useEffect(() => {
    if (selectedProject) {
      // Mencegah background page ikut ke-scroll saat Modal terbuka
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <>
      <ProjectContainer setSelectedProject={setSelectedProject} />
      <ProjectModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </>
  );
}
