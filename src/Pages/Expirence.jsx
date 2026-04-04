import React, { useState, useEffect, useRef } from "react";

const experiences = [
  {
    number: "01",
    title: "Full Stack Developer",
    company: "Apex Innovation Technology",
    location: "Lahore, Pakistan",
    period: "October 2024 - Present",
    type: "Full-time",
    description: [
      "Worked on a Payroll System using AngularJS with Bootstrap frontend and .NET backend, implementing state management, form validation, routing, and API integration.",
      "Developed Sales & Warehouse ERP Application with 20+ pages using Angular + TypeScript with core modules: Sales Order, Purchase Order, Inventory, AR Invoice, and Incoming Payment.",
      "Built and integrated REST APIs in .NET with JWT authentication, session handling, and pagination for large datasets.",
      "Designed responsive UI using Bootstrap, FontAwesome, toast notifications, custom pipes, and dynamic sidebar.",
      "Delivered SAP-like business logic & calculations, solving complex frontend use cases and ensuring smooth API communication.",
    ],
    tech: ["Angular", "TypeScript", "React.js", ".NET", "Node.js", "MongoDB", "Bootstrap", "JWT", "Material UI"],
  },
  {
    number: "02",
    title: "Junior React.js Developer",
    company: "Neftonic",
    location: "PWD Islamabad",
    period: "June 2023 - October 2023",
    type: "Full-time",
    description: [
      "Developed a quiz app with interactive and responsive functionality ensuring smooth user experience.",
      "Built advertisement web app with dynamic ad management features using Mantine and Material UI.",
      "Implemented React Router and integrated Content APIs for seamless navigation and dynamic content.",
      "Optimized app performance using React memoization techniques and code-splitting, reducing loading times.",
      "Collaborated with backend developers to integrate API endpoints and implement robust error-handling mechanisms.",
    ],
    tech: ["React.js", "React Router", "Mantine UI", "Material UI", "Axios", "JavaScript"],
  },
  {
    number: "03",
    title: "Junior Laravel Developer",
    company: "92Devs",
    location: "Rawalpindi, Pakistan",
    period: "March 2023 - July 2023",
    type: "Full-time",
    description: [
      "Developed a hospital management system in Laravel with authentication, API functionality, and Eloquent ORM.",
      "Managed SQL databases and optimized performance with efficient queries and pagination for large datasets.",
      "Set up mail services for client notifications and ensured smooth data handling through robust backend practices.",
      "Migrated HTTP clients in Laravel and implemented efficient database management strategies.",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Eloquent ORM", "REST APIs", "Bootstrap"],
  },
];

function ExperienceCard({ exp, index, expanded, onToggle }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 150);
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
      onClick={onToggle}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      className={`
        border cursor-pointer group
        ${expanded
          ? "border-purple-500 shadow-[0_0_0_1px_rgba(168,85,247,0.3)] dark:shadow-[0_0_0_1px_rgba(168,85,247,0.2)]"
          : "border-gray-300 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500/60"
        }
      `}
    >
      <div className="flex items-start gap-5 px-6 py-6">

        {/* Number */}
        <span className="text-gray-400 dark:text-gray-600 font-mono text-sm mt-1 flex-shrink-0 w-6">
          {exp.number}
        </span>

        {/* Left Content */}
        <div className="flex-1 min-w-0">

          {/* Title */}
          <h3
            className="font-mono font-bold text-base text-purple-500 dark:text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-200"
          >
            {exp.title}
          </h3>

          {/* Company */}
          <p className="font-mono text-sm font-bold text-gray-900 dark:text-white mt-0.5 tracking-wide">
            {exp.company}
          </p>

          {/* First description — always visible */}
          <p className="font-mono text-xs mt-3 leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
            {exp.description[0]}
          </p>

          {/* Expanded bullets */}
          <div
            style={{
              maxHeight: expanded ? "500px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <ul className="mt-3 flex flex-col gap-2">
              {exp.description.slice(1).map((desc, j) => (
                <li
                  key={j}
                  className="font-mono text-xs leading-relaxed flex gap-2 text-gray-700 dark:text-gray-300 font-medium"
                >
                  <span className="text-purple-500 flex-shrink-0 mt-0.5">▸</span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.tech.map((t, j) => (
              <span
                key={j}
                className="
                  border font-mono text-[10px] px-2 py-0.5 font-semibold tracking-wide
                  border-gray-400 dark:border-gray-600
                  text-gray-800 dark:text-gray-300
                  hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400
                  transition-colors duration-200
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Date, Location, Toggle */}
        <div className="text-right flex-shrink-0 hidden md:flex flex-col items-end gap-1 mt-0.5">
          <p className="font-mono text-xs font-semibold text-gray-800 dark:text-gray-200">
            {exp.period}
          </p>
          <p className="font-mono text-xs text-gray-500 dark:text-gray-500">
            {exp.location}
          </p>
          <span
            className="font-mono text-[10px] text-purple-500 dark:text-purple-400 mt-1 font-bold tracking-wider"
          >
            {expanded ? "▲ less" : "▼ more"}
          </span>
        </div>
      </div>

      {/* Bottom accent line when expanded */}
      <div
        style={{
          height: "2px",
          background: "linear-gradient(90deg, #a855f7, transparent)",
          transform: expanded ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        }}
      />
    </div>
  );
}

function Experience() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 ml-10">

      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl font-bold text-purple-500 font-mono whitespace-nowrap">
          #experience
        </h2>
        <div className="h-px bg-purple-500 w-64" />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-2">
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={i}
            exp={exp}
            index={i}
            expanded={expanded === i}
            onToggle={() => setExpanded(expanded === i ? null : i)}
          />
        ))}
      </div>

    </section>
  );
}

export default Experience;