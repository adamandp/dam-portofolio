const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Go",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
];

export default function MarqueeSection() {
  return (
    <div className="border-y-4 border-black dark:border-white bg-indigo-500 text-white overflow-hidden py-3">
      <div className="flex w-max animate-[marquee_15s_linear_infinite]">
        {[...SKILLS, ...SKILLS].map((skill, index) => (
          <span
            key={index}
            className="mx-8 flex items-center font-black text-2xl uppercase tracking-widest"
          >
            {skill}
            <span className="mx-8 opacity-50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
