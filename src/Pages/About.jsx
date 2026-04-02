import React from "react";
import Skills from "./Skills";
const skills = [
  {
    label: "Language",
    color: "purple",
    items: ["Javascript", "TypeScript", "C#"],
  },
  {
    label: "Frameworks & Libraries",
    color: "teal",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Angular",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Material UI",
      "Mantine UI",
      "ASP.NET Core",
      "Laravel",
      "jQuery",
    ],
  },
  {
    label: "Integration",
    color: "amber",
    items: ["REST APIs", "Stripe", "Swagger / .NET APIs", "Postman", "JSON"],
  },
  {
    label: "DevOps & Databases",
    color: "coral",
    items: ["Git", "Docker", "MongoDB", "SQL", "PostgreSQL"],
  },
];
const badgeColors = {
  purple:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  teal: "bg-teal-100   text-teal-800   dark:bg-teal-900/30   dark:text-teal-300",
  amber:
    "bg-amber-100  text-amber-800  dark:bg-amber-900/30  dark:text-amber-300",
  coral:
    "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
};
function Badge({ label, color }) {
  return (
    <span
      className={`text-xs font-medium px-3 py-1 rounded-full ${badgeColors[color]}`}
    >
      {label}
    </span>
  );
}
function About() {
  return (
    <section className="max-w-7xl mx-auto  px-6 py-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-1 h-10 bg-purple-500 rounded-full" />
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
            Get to know me
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Let Me{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Introduce Myself
            </span>
          </h2>
        </div>
      </div>
      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Bio */}
        <div className="space-y-5 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
          <p>
            I am a highly motivated{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Software Engineer
            </span>{" "}
            with <span className="text-purple-500 font-medium">1 year</span> of
            hands-on experience building and integrating dynamic web
            applications.
          </p>
          <p>
            Proficient in modern stacks including{" "}
            <span className="text-purple-500 font-medium">
              MongoDB, Express.js, React.js, and Node.js
            </span>
            , with additional experience in Angular and TypeScript. Strong
            expertise in React.js for creating efficient, responsive UIs with
            best practices for component-based architecture.
          </p>
          <p>
            Experienced in collaborating within teams to deliver high-quality,
            maintainable, and scalable applications. Dedicated to continuous
            learning, solving complex problems, and contributing effectively in
            dynamic environments.
          </p>
          {/* Stat pills */}
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { value: "1+", label: "Year Experience " },
              { value: "10+", label: "Projects Built " },
              { value: "5+", label: "Tech Stacks " },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-gray-50 dark:bg-white/5 rounded-2xl px-5 py-3 text-center"
              >
                <p className="text-2xl font-bold text-purple-500">{value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Right -Skills */}
        <div className="space-y-4">
          {skills.map(({ label, color, items }) => (
            <div
              key={label}
              className="bg-gray-50 dark:bg-white/5 rounded-2xl p-5 border border-transparent hover:border-purple-500/20 transition"
            >
              <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item} label={item} color={color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Skills/>
    </section>
    
  );
}

export default About;
