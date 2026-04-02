import React from "react";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Angular", icon: "🔺" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "HTML5", icon: "🧱" },
      { name: "CSS3", icon: "🎨" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      { name: "ASP.NET Core", icon: "🔵" },
      { name: "REST APIs", icon: "🔗" },
      { name: "MVC Architecture", icon: "🏗️" },
      { name: "JWT Auth", icon: "🔐" },
      { name: "bcrypt", icon: "🔒" },
      { name: "Middleware", icon: "🧩" },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "SQL Server", icon: "🗃️" },
      { name: "Neon", icon: "💡" },
    ],
  },
  {
    category: "Tools & Services",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", icon: "🐙" },
      { name: "Redux Toolkit", icon: "🔄" },
      { name: "Stripe", icon: "💳" },
      { name: "Cloudinary", icon: "☁️" },
      { name: "Twilio", icon: "📱" },
      { name: "Nodemailer", icon: "📧" },
      { name: "Axios", icon: "📡" },
      { name: "Vite", icon: "⚡" },
      { name: "Clerk", icon: "👤" },
      { name: "Recharts", icon: "📊" },
      { name: "AJAX & jQuery", icon: "✨" },
      { name: "Netlify / Render", icon: "🚀" },
    ],
  },
];

function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-purple-500 uppercase tracking-widest mb-2">
          What I Work With
        </p>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Skills
          </span>
        </h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((cat, i) => (
          <div
            key={i}
            className="border border-default rounded-xl p-6 bg-neutral-primary-soft shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Category Title */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xl">{cat.icon}</span>
              <h3 className="text-lg font-bold text-heading tracking-tight">
                {cat.category}
              </h3>
            </div>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span
                  key={j}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-softer text-fg-brand-strong border border-brand-subtle shadow-xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-default"
                >
                  <span>{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;