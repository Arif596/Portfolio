import React, { useState } from "react";

function Projects() {
  const projects = [
    {
      image: "./ecommerce.png",
      badge: "Trending",
      badgeColor: "from-orange-500 to-pink-500",
      title: "Full-Stack E-Commerce Platform",
      description:
        "A full-stack e-commerce app built with React, Node.js, Express, and PostgreSQL. Features JWT auth, Stripe payments, Cloudinary uploads, Redux Toolkit state management, and an Admin Dashboard with Recharts analytics.",
      tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Redux Toolkit", "Stripe", "Tailwind CSS", "Cloudinary", "JWT", "Recharts"],
      demo: "https://ecommerce-mernstack-ai-web-app.netlify.app/",
      github: "https://github.com/Arif596/E-commerce-Frontend",
    },
    {
      image: "./dashboard.png",
      badge: "Featured",
      badgeColor: "from-purple-500 to-blue-500",
      title: "E-Commerce Admin Dashboard",
      description:
        "A full-featured Admin Dashboard for e-commerce management. Includes revenue analytics with Recharts, order & product CRUD, user management, and JWT-based role access control — deployed separately on Netlify.",
      tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Recharts", "Redux Toolkit", "Tailwind CSS", "JWT", "Axios"],
      demo: "https://ecommerce-mernstack-admin-dashboard.netlify.app/",
      github: "https://github.com/Arif596/E-Commerce-Admin-Dashbaord",
    },
    {
      image: "./urbanmart.png",
      badge: "New",
      badgeColor: "from-cyan-500 to-teal-500",
      title: "UrbanMart – React E-Commerce App",
      description:
        "Responsive e-commerce SPA with React.js, React Router v7, and Context API for global state. Integrates Clerk auth, react-slick carousel, Axios, Lottie animations, and React Toastify for a polished user experience.",
      tech: ["React.js", "React Router v7", "Context API", "Clerk", "Axios", "Tailwind CSS", "React Toastify", "Lottie", "react-slick"],
      demo: "https://e-commerce-urban-mart-in-react-js.vercel.app/",
      github: "https://github.com/Arif596/ECommerce-Urban-Mart-In-React-Js-",
    },
    {
      image: "./auth-system.png",
      badge: "Secure",
      badgeColor: "from-green-500 to-emerald-500",
      title: "MERN Auth & Verification System",
      description:
        "Secure MERN authentication system with JWT, bcrypt, and Twilio OTP/SMS verification. Features Nodemailer for transactional emails, React Hook Form on the frontend, and scalable REST APIs with MVC architecture.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Twilio", "Nodemailer", "Axios", "React Hook Form"],
      demo: "https://mern-authentication-frontend-eta.vercel.app/",
      github: "https://github.com/Arif596/Mern_Authentication_Frontend",
    },
    {
      image: "./license-generator.png",
      badge: "Full-Stack",
      badgeColor: "from-blue-500 to-indigo-500",
      title: "License Generator – ASP.NET Core",
      description:
        "ASP.NET Core system for generating, encrypting, and validating software licenses. Includes user CRUD, Razor Pages MVC frontend, SQL Server persistence, and AJAX/jQuery for dynamic real-time interactions.",
      tech: ["ASP.NET Core", "Razor Pages", "C#", "SQL Server", "Entity Framework", "AJAX", "jQuery", "Bootstrap"],
      demo: "https://116.203.172.126:1620/",
      github: null,
    },
  ];

  return (
    <section className="min-h-screen pt-5 px-6 mt-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-purple-500 uppercase tracking-widest mb-1">
          What I've Built
        </p>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-20">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Projects
          </span>
        </h1>
        <div className="mt-3 w-14 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-44">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay always visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Badge */}
              <span
                className={`absolute top-3 left-3 inline-flex items-center gap-1 bg-gradient-to-r ${project.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md`}
              >
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {project.badge}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5 gap-3">
              {/* Title */}
              <h5 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                {project.title}
              </h5>

              {/* Description */}
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-4">
                {project.description}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100 dark:border-gray-800" />

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 6).map((tech, j) => (
                  <span
                    key={j}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 border border-purple-100 dark:border-purple-800"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 6 && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                    +{project.tech.length - 6} more
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-auto pt-1">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold rounded-lg text-xs px-3 py-2 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg text-xs px-3 py-2 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                    </svg>
                    <span className="text-white">GitHub</span>
                  </a>
                ) : (
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gray-100 dark:bg-gray-800 text-gray-400 font-semibold rounded-lg text-xs px-3 py-2 cursor-not-allowed">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                    </svg>
                    Private
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;