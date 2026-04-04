import React, { useState, useEffect, useRef } from "react";

const skillCategories = [
  {
    category: "Languages",
    icon: "</>",
    skills: ["JavaScript", "TypeScript", "C#"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "{ }",
    skills: [
      "React.js", "Angular", "Node.js", "Express.js",
      "ASP.NET Core", "Redux Toolkit", "Tailwind CSS",
      "Bootstrap", "Axios", "Recharts",
    ],
  },
  {
    category: "Databases",
    icon: "[db]",
    skills: ["PostgreSQL", "MongoDB", "SQL Server", "Neon"],
  },
  {
    category: "Cloud Technologies",
    icon: "~//",
    skills: ["Cloudinary", "Netlify", "Render", "Vercel"],
  },
  {
    category: "Tools",
    icon: "###",
    skills: ["Git & GitHub", "Postman", "VSCode", "Stripe", "Twilio", "Nodemailer", "JWT", "bcrypt"],
  },
];

function SkillCard({ cat, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
        boxShadow: hovered
          ? "4px 4px 0px 0px rgba(168,85,247,0.35)"
          : "2px 2px 0px 0px rgba(168,85,247,0.1)",
      }}
      className={`
        border bg-transparent flex flex-col
        transition-all duration-300
        ${hovered
          ? "border-purple-500"
          : "border-gray-400 dark:border-gray-700"
        }
      `}
    >
      {/* Card Header */}
      <div
        className={`
          px-4 py-3 flex items-center justify-between
          border-b transition-colors duration-300
          ${hovered
            ? "border-purple-500 bg-purple-500/5 dark:bg-purple-500/10"
            : "border-gray-400 dark:border-gray-700"
          }
        `}
      >
        <h3 className="text-gray-900 dark:text-white font-bold font-mono text-sm tracking-wide">
          {cat.category}
        </h3>
        <span
          className={`
            font-mono text-[10px] font-bold px-1.5 py-0.5
            transition-colors duration-300
            ${hovered
              ? "text-purple-600 dark:text-purple-400"
              : "text-gray-500 dark:text-gray-600"
            }
          `}
        >
          {cat.icon}
        </span>
      </div>

      {/* Skills */}
      <div className="px-4 py-4 flex flex-wrap gap-2">
        {cat.skills.map((skill, j) => (
          <span
            key={j}
            style={{ transitionDelay: `${j * 30}ms` }}
            className={`
              font-mono text-[11px] font-semibold px-2 py-1
              border transition-all duration-200
              ${hovered
                ? "border-purple-400 text-purple-700 dark:text-purple-300 bg-purple-500/5 dark:bg-purple-500/10"
                : "border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-400"
              }
              hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-300
            `}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Bottom count */}
      <div className="mt-auto px-4 pb-3">
        <p
          className={`
            font-mono text-[10px] font-bold tracking-widest uppercase
            transition-colors duration-300
            ${hovered ? "text-purple-500" : "text-gray-400 dark:text-gray-700"}
          `}
        >
          {cat.skills.length} skills
        </p>
      </div>
    </div>
  );
}

function Skills() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Header */}
      <div
        ref={headerRef}
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
        className="flex items-center gap-4 mb-16"
      >
        <h2 className="text-2xl font-bold text-purple-500 font-mono whitespace-nowrap">
          #skills
        </h2>
        <div className="h-px bg-purple-500 w-64" />
      </div>

      <div className="flex flex-col md:flex-row gap-10">

        {/* Left — Decorative */}
        <div className="hidden md:block relative w-56 flex-shrink-0">

          {/* Dot grid top */}
          <div className="absolute top-0 left-0 grid grid-cols-5 gap-2">
            {Array(25).fill(0).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 opacity-60"
              />
            ))}
          </div>

          {/* Dot grid mid */}
          <div className="absolute top-28 left-16 grid grid-cols-5 gap-2">
            {Array(25).fill(0).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 opacity-40"
              />
            ))}
          </div>

          {/* Geometric squares */}
          <div className="absolute top-6 left-24 w-20 h-20 border border-gray-400 dark:border-gray-600 opacity-60" />
          <div className="absolute top-44 left-4 w-16 h-16 border-2 border-purple-500 opacity-50" />
          <div className="absolute top-48 left-8 w-16 h-16 border border-purple-400 opacity-25" />
          <div className="absolute top-64 left-24 w-12 h-12 border border-gray-400 dark:border-gray-600 opacity-40" />

          {/* Purple accent corner */}
          <div className="absolute top-4 left-22 w-5 h-5 border-t-2 border-l-2 border-purple-500 opacity-80" />
          <div className="absolute top-[168px] left-2 w-4 h-4 border-b-2 border-r-2 border-purple-400 opacity-70" />

          {/* Vertical line */}
          <div className="absolute left-2 top-20 h-28 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
        </div>

        {/* Right — Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-1">
          {skillCategories.map((cat, i) => (
            <SkillCard key={i} cat={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;