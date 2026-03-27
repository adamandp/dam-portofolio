"use client";

import { motion } from "motion/react";
import SectionHeader from "./section-header";
import { Globe, Mail, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-neutral-50 dark:bg-zinc-950"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-25 -left-25 w-80 h-80 bg-pink-300/25 dark:bg-purple-600/25 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-300/25 dark:bg-cyan-500/25 blur-3xl rounded-full" />

        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[44px_44px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.12))] dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55))]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader title="Let's Build" subtitle="Start a Conversation" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-black uppercase mb-6 text-black dark:text-white">
              Ready to scale your product?
            </h3>
            <p className="text-xl font-medium mb-10 max-w-md text-zinc-700 dark:text-zinc-300">
              Whether you need a full architectural overhaul or a
              high-performance feature implementation, I'm ready to engineer the
              solution.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:hello@example.com"
                className="flex items-center space-x-4 text-xl font-bold group"
              >
                <div className="p-4 bg-yellow-300 text-black border-4 border-black dark:border-white transition-all group-hover:translate-x-1 group-hover:translate-y-1">
                  <Mail size={24} />
                </div>
                <span className="border-b-2 border-transparent group-hover:border-black dark:group-hover:border-white transition-colors">
                  adamanandaputra@gmail.com
                </span>
              </a>

              <div className="flex items-center space-x-4 text-xl font-bold group">
                <div className="p-4 bg-cyan-300 text-black border-4 border-black dark:border-white transition-all group-hover:translate-x-1 group-hover:translate-y-1">
                  <Globe size={24} />
                </div>
                <span className="border-b-2 border-transparent group-hover:border-black dark:group-hover:border-white transition-colors">
                  Based in Tech Hub, Worldwide
                </span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm font-black uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full p-4 bg-zinc-50 dark:bg-zinc-800 border-4 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-purple-400 transition"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-black uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-4 bg-zinc-50 dark:bg-zinc-800 border-4 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-purple-400 transition"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-black uppercase mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full p-4 bg-zinc-50 dark:bg-zinc-800 border-4 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-purple-400 transition resize-none"
                placeholder="Tell me about your technical requirements..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-lime-400 dark:bg-purple-600 text-black dark:text-white flex items-center justify-center gap-3 brutal-button"
            >
              Send Transmission <Send size={20} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
