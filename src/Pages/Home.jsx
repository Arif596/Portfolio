import React, { useEffect, useState } from "react";
import About from "./About";
import Projects from "./Projects ";
import Skills from "./Skills";
import Contact from "./Contact";
import Experience from "./Expirence";
const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Angular Developer",
];

function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const role = roles[currentRole];
    let timeout;
    if (!isDeleting && displayed.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayed(role.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(role.slice(0, displayed.length - 1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);
  return (
    <main className="min-h-screen bg-transparent pt-10">
      <div className="fixed top-1/3 -translate-y-1/2 left-5 md:flex flex-col hidden gap-4 z-10 items-center">
        {/* Top line */}
        <div className="w-0.5 h-50 bg-gray-400"></div>

        {/* GitHub */}
        <a
          target="_blank"
          href="https://github.com/Arif596"
          className="text-gray-400 hover:text-white transition-colors hover:scale-125 transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/muhammad-arif-jamal/"
          className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-125 transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
      <section className="max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {/* Left side */}
          <div className="flex-1 ml-20">
            {/* Greating */}
            {/* <p className="text-2xl text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              Hi There!
              <span className="animate-wave inline-block">👋</span>
            </p> */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              I'M{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                M.Arif Jamal
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 dark:text-purple-400 mb-8 h-10">
              {displayed}
              <span className="animate-pulse">|</span>
            </h2>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/contact"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition"
              >
                Hire Me
              </a>
              <a
                href="/project"
                className="px-6 py-3 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-lg font-medium transition"
              >
                {" "}
                View Projects
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center relative">
            <div className="absolute w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative w-80 h-96 flex items-center justify-center">
              {/* Geometric squares — background decoration */}
              <div className="absolute top-8 left-10 w-20 h-20 border-2 border-purple-500 opacity-40"></div>
              <div className="absolute top-12 left-14 w-20 h-20 border-2 border-purple-400 opacity-30"></div>
              <div className="absolute top-16 left-18 w-20 h-20 border-2 border-purple-300 opacity-10"></div>

              {/* Dot grid — right side */}
              <div className="absolute top-16 right-0 grid grid-cols-4 gap-1.5">
                {Array(16)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="w-0.5 h-0.5 bg-gray-500 rounded-full opacity-60"
                    ></div>
                  ))}
              </div>

              {/* Photo */}
              <img
                src="/mypic.jpeg"
                alt="Muhammad Arif Jamal"
                className="relative z-10 w-84 h-100 object-cover object-top"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                }}
              />

              {/* Bottom tagline */}
              <div
                className="absolute bottom-0 left-0 right-0 z-20 flex items-center gap-2 
                    border border-gray-600 bg-black/40 backdrop-blur-sm px-3 py-2"
              >
                <div className="w-3 h-3 bg-purple-500 flex-shrink-0"></div>
                <p className="text-white text-xs font-mono">
                  Passionate about learning and exploring new opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quote Section */}
      {/* Quote Section */}
      <section className="py-12 px-6 bg-transparent">
        <div className="max-w-4xl mx-auto relative">
          {/* Top box */}
          <div className="border border-purple-500/30 bg-transparent backdrop-blur-sm p-6 relative">
            <span className="absolute -top-5 left-6 text-5xl text-purple-400/60 font-serif leading-none">
              "
            </span>
            <p className="text-gray-900 dark:text-white font-mono text-lg md:text-xl pl-4">
              First, solve the problem. Then, write the code.
            </p>
          </div>

          {/* Bottom box — author */}
          <div className="border border-purple-500/30 bg-transparent backdrop-blur-sm p-4 ml-auto w-fit relative">
            <span className="absolute -top-5 left-4 text-5xl text-purple-400/60 font-serif leading-none">
              "
            </span>
            <p className="text-purple-500 dark:text-purple-400 font-mono text-sm md:text-base">
              — John Johnson
            </p>
          </div>
        </div>
      </section>
      <Experience />
      <About />
      <div className="mt-2 text-center">
        <Projects />
      </div>
      {/* <Skills /> */}
      <Contact />
    </main>
  );
}

export default Home;
