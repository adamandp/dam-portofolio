"use client";

import { Menu, Moon, Sun, Terminal, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-40 border-b-4 border-black dark:border-white bg-[#FDFBF7] dark:bg-zinc-950 transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-black uppercase tracking-tighter flex items-center gap-2"
          >
            <Terminal size={28} />
            <div>
              Dam<span className="text-yellow-500 dark:text-lime-400">.</span>
              Dev
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-bold uppercase tracking-wide hover:text-yellow-500 dark:hover:text-lime-400 transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={toggleTheme}
              className={`p-2 bg-white dark:bg-zinc-800 rounded-none brutal-border brutal-shadow active:shadow-[1px_1px_0px_0px] dark:active:shadow-[1px_1px_0px_0px] active:translate-x-1 active:translate-y-1`}
            >
              {resolvedTheme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2">
              {resolvedTheme === "dark" ? (
                <Sun size={24} />
              ) : (
                <Moon size={24} />
              )}
            </button>
            <button onClick={() => setIsMenuOpen(true)}>
              <Menu size={32} className="text-black dark:text-white" />
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-50 bg-yellow-400 dark:bg-purple-600 flex flex-col items-center justify-center border-l-8 border-black dark:border-white`}
          >
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 p-2 bg-white text-black border-4 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={closeMenu}
                  className="text-4xl font-black uppercase tracking-tighter text-black dark:text-white hover:underline decoration-8 underline-offset-8"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
