import { Code2, Globe, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-zinc-900 text-white dark:text-zinc-400 py-12 border-t-8 border-yellow-400 dark:border-lime-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-3xl font-black uppercase tracking-tighter text-white">
          Adam<span className="text-yellow-500 dark:text-lime-400">.</span>Dev
        </div>

        <div className="flex gap-6">
          <span className="hover:text-yellow-400 dark:hover:text-lime-400 transition-colors">
            <Code2 size={28} />
          </span>
          <span className="hover:text-pink-400 dark:hover:text-cyan-400 transition-colors">
            <Terminal size={28} />
          </span>
          <span className="hover:text-cyan-400 dark:hover:text-purple-400 transition-colors">
            <Globe size={28} />
          </span>
        </div>

        <div className="font-medium text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Adam Developer.
          <br />
          Engineered with React & Tailwind.
        </div>
      </div>
    </footer>
  );
}
