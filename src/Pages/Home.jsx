import React, { useEffect, useState } from "react";
import About from "./About";
import Projects from "./Projects ";
import Skills from "./Skills";
import Contact from "./Contact";
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
      <section className="max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          {/* Left side */}
          <div className="flex-1">
            {/* Greating */}
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              Hi There!
              <span className="animate-wave inline-block">👋</span>
            </p>
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
            <div className="relative w-80 h-80 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-full flex items-center justify-center border border-purple-500/30">
                <span className="text-8xl">👨‍💻</span>
              </div>

              {/* Floating tech badges */}
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded animate-bounce">
                Angular Js
              </div>
              <div className="absolute top-8 left-0 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded animate-bounce delay-100">
                Express Js
              </div>
              <div className="absolute bottom-8 right-0 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded animate-bounce delay-200">
                Java Script
              </div>
              <div className="absolute bottom-0 left-8 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded animate-bounce delay-300">
                React Js
              </div>
              <div className="absolute top-1/2 right-[-30px] bg-green-500 text-white text-xs font-bold px-2 py-1 rounded animate-bounce delay-100">
                Node Js
              </div>
              <div className="absolute top-1/2 left-[-30px] bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded animate-bounce delay-200">
                MongoDB
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <div className="mt-2 text-center">
        <Projects />
      </div>
      {/* <Skills /> */}
      <Contact/>
    </main>
  );
}

export default Home;
