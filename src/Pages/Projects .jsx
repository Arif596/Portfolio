import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    image: "./ecommerce.png",
    badge: "Trending",
    badgeColor: "bg-orange-500",
    title: "Full-Stack E-Commerce Platform",
    description:
      "A full-stack e-commerce app built with React, Node.js, Express, and PostgreSQL. Features JWT auth, Stripe payments, Cloudinary uploads, Redux Toolkit state management, and an Admin Dashboard with Recharts analytics.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redux Toolkit",
      "Stripe",
      "Tailwind CSS",
      "Cloudinary",
      "JWT",
      "Recharts",
    ],
    demo: "https://ecommerce-mernstack-ai-web-app.netlify.app/",
    github: "https://github.com/Arif596/E-commerce-Frontend",
  },
  {
    image: "./dashboard.png",
    badge: "Featured",
    badgeColor: "bg-purple-500",
    title: "E-Commerce Admin Dashboard",
    description:
      "A full-featured Admin Dashboard for e-commerce management. Includes revenue analytics with Recharts, order & product CRUD, user management, and JWT-based role access control — deployed separately on Netlify.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Recharts",
      "Redux Toolkit",
      "Tailwind CSS",
      "JWT",
      "Axios",
    ],
    demo: "https://ecommerce-mernstack-admin-dashboard.netlify.app/",
    github: "https://github.com/Arif596/E-Commerce-Admin-Dashbaord",
  },
  {
    image: "./urbanmart.png",
    badge: "New",
    badgeColor: "bg-cyan-500",
    title: "UrbanMart – React E-Commerce App",
    description:
      "Responsive e-commerce SPA with React.js, React Router v7, and Context API for global state. Integrates Clerk auth, react-slick carousel, Axios, Lottie animations, and React Toastify for a polished user experience.",
    tech: [
      "React.js",
      "React Router v7",
      "Context API",
      "Clerk",
      "Axios",
      "Tailwind CSS",
      "React Toastify",
      "Lottie",
      "react-slick",
    ],
    demo: "https://e-commerce-urban-mart-in-react-js.vercel.app/",
    github: "https://github.com/Arif596/ECommerce-Urban-Mart-In-React-Js-",
  },
  {
    image: "./auth-system.png",
    badge: "Secure",
    badgeColor: "bg-emerald-500",
    title: "MERN Auth & Verification System",
    description:
      "Secure MERN authentication system with JWT, bcrypt, and Twilio OTP/SMS verification. Features Nodemailer for transactional emails, React Hook Form on the frontend, and scalable REST APIs with MVC architecture.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Twilio",
      "Nodemailer",
      "Axios",
      "React Hook Form",
    ],
    demo: "https://mern-authentication-frontend-eta.vercel.app/",
    github: "https://github.com/Arif596/Mern_Authentication_Frontend",
  },
  {
    image: "./license-generator.png",
    badge: "Full-Stack",
    badgeColor: "bg-blue-500",
    title: "License Generator – ASP.NET Core",
    description:
      "ASP.NET Core system for generating, encrypting, and validating software licenses. Includes user CRUD, Razor Pages MVC frontend, SQL Server persistence, and AJAX/jQuery for dynamic real-time interactions.",
    tech: [
      "ASP.NET Core",
      "Razor Pages",
      "C#",
      "SQL Server",
      "Entity Framework",
      "AJAX",
      "jQuery",
      "Bootstrap",
    ],
    demo: "https://116.203.172.126:1620/",
    github: null,
  },
];

function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          setTimeout(() => setVisible(true), index * 120);
      },
      { threshold: 0.1 },
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
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition:
          "opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? "5px 5px 0px 0px rgba(168,85,247,0.4)"
          : "2px 2px 0px 0px rgba(168,85,247,0.1)",
      }}
      className={`
        flex flex-col overflow-hidden border bg-white dark:bg-gray-900
        transition-all duration-300
        ${
          hovered ? "border-purple-500" : "border-gray-300 dark:border-gray-700"
        }
      `}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.title}
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
          className="w-full h-full object-cover"
        />

        {/* Overlay — lighter on light theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-gray-900/80 via-transparent to-transparent" />

        {/* Badge */}
        <span
          className={`absolute top-3 left-3 ${project.badgeColor} text-white text-[10px] font-bold font-mono px-2.5 py-1 tracking-wider uppercase`}
        >
          {project.badge}
        </span>

        {/* Hover overlay links */}
        <div
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
          className="absolute inset-0 flex items-center justify-center gap-3 bg-black/20 dark:bg-black/40"
        >
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="bg-purple-500 text-white font-mono text-xs font-bold px-4 py-2 hover:bg-purple-600 transition"
          >
            Live Demo
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-xs font-bold px-4 py-2 border border-gray-300 dark:border-gray-600 hover:border-purple-500 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t, j) => (
            <span
              key={j}
              className="
                font-mono text-[10px] font-semibold px-2 py-0.5
                border border-gray-300 dark:border-gray-700
                text-gray-600 dark:text-gray-400
                hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400
                transition-colors duration-200
              "
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="font-mono text-[10px] font-semibold px-2 py-0.5 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-600">
              +{project.tech.length - 5} more
            </span>
          )}
        </div>

        {/* Title */}
        <h2
          className={`
            font-bold text-lg font-mono tracking-tight leading-snug
            transition-colors duration-200
            ${hovered ? "text-purple-600 dark:text-purple-400" : "text-gray-900 dark:text-white"}
          `}
        >
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-xs font-mono leading-relaxed font-medium flex-1">
          {project.description}
        </p>

        {/* Divider */}
        <div
          style={{
            width: hovered ? "100%" : "32px",
            transition: "width 0.4s ease",
          }}
          className="h-px bg-purple-500/50"
        />

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="
              border-2 border-purple-500 font-mono text-xs font-bold px-4 py-2
              text-purple-600 dark:text-white
              hover:bg-purple-500 hover:text-white
              transition-all duration-200 flex items-center gap-1.5
            "
          >
            Live <span className="font-mono">{"<-->"}</span>
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                border border-gray-400 dark:border-gray-600 font-mono text-xs font-bold px-4 py-2
                text-gray-700 dark:text-gray-400
                hover:border-purple-500 hover:text-purple-600 dark:hover:text-white
                transition-all duration-200 flex items-center gap-1.5
              "
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.1 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="min-h-screen pt-5 px-6 mt-4 max-w-7xl mx-auto">
      {/* Header */}
      <div
        ref={headerRef}
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
        className="flex items-center justify-between mb-10"
      >
        <div className="flex items-center gap-3 flex-1">
          <h1 className="text-2xl font-bold text-purple-500 font-mono whitespace-nowrap ml-10">
            #projects
          </h1>
          <div className="h-px bg-purple-500 flex-1 max-w-sm" />
        </div>

        {/* View All button — light theme fixed */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="
            font-mono text-sm font-bold px-4 py-1.5
            border border-gray-400 dark:border-gray-600
            text-gray-800 dark:text-gray-300
            hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400
            transition-all duration-200 flex items-center gap-1.5
          "
        >
          {showAll ? "Show Less ←" : "View All ~~>"}
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ml-10">
        {visibleProjects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      {!showAll && (
        <div
          style={{
            opacity: headerVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => setShowAll(true)}
            className="
              font-mono text-sm font-bold px-8 py-3
              border-2 border-purple-500
              text-purple-600 dark:text-purple-400
              hover:bg-purple-500 hover:text-white
              transition-all duration-300
              flex items-center gap-2
            "
          >
            View All Projects
            <span>{"~~>"}</span>
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
