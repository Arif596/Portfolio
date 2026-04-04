import React, { useState, useEffect, useRef } from "react";
import Skills from "./Skills";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Tech Stacks" },
];

function About() {
  const [showMore, setShowMore] = useState(false);
  const [visible, setVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setImageVisible(true); },
      { threshold: 0.1 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 ml-10">

      {/* Header */}
      <div
        ref={sectionRef}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
        className="flex items-center gap-4 mb-16"
      >
        <h2 className="text-2xl font-bold text-purple-500 font-mono whitespace-nowrap">
          #about-me
        </h2>
        <div className="h-px bg-purple-500 w-64" />
      </div>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Left — Bio */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
          className="flex-1 max-w-2xl"
        >
          {/* Greeting */}
          <p className="text-gray-900 dark:text-white font-mono text-sm font-bold mb-4 tracking-wide">
            Hello, I'm Arif!
          </p>

          <p className="text-gray-700 dark:text-gray-300 font-mono text-sm leading-relaxed mb-4 font-medium">
            I'm a Full Stack Developer based in Lahore, Pakistan. I can develop
            responsive websites from scratch and build modern user-friendly web
            experiences using MERN Stack, Angular, and more.
          </p>

          <p className="text-gray-700 dark:text-gray-300 font-mono text-sm leading-relaxed mb-4 font-medium">
            Transforming ideas into scalable applications has been my passion.
            I always strive to learn about the newest technologies and frameworks.
          </p>

          {/* Expanded content */}
          <div
            style={{
              maxHeight: showMore ? "700px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="flex flex-col gap-4 pt-1">
              <p className="text-gray-700 dark:text-gray-300 font-mono text-sm leading-relaxed font-medium">
                I have hands-on experience with React.js, Angular, Node.js,
                Express.js, MongoDB, PostgreSQL, and SQL Server. I've worked
                on ERP systems, e-commerce platforms, real-time chat apps,
                and authentication systems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono text-sm leading-relaxed font-medium">
                Currently pursuing MSc Software Engineering from UET Lahore
                while working full-time at Apex Innovation Technology —
                constantly growing and contributing to real-world projects.
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono text-sm leading-relaxed font-medium">
                I enjoy collaborating in teams, solving complex problems,
                and delivering clean, maintainable code. Open to exciting
                opportunities and challenges.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mt-2">
                {stats.map(({ value, label }, i) => (
                  <div
                    key={label}
                    style={{ transitionDelay: `${i * 80}ms` }}
                    className="
                      border px-5 py-3 text-center transition-all duration-300
                      border-gray-400 dark:border-gray-700
                      hover:border-purple-500 dark:hover:border-purple-500/50
                      hover:shadow-[0_0_12px_rgba(168,85,247,0.15)]
                      group
                    "
                  >
                    <p className="text-2xl font-bold text-purple-500 font-mono group-hover:scale-110 transition-transform duration-200 inline-block">
                      {value}
                    </p>
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-500 font-mono mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Read More Button — fixed for both themes */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="
              mt-6 font-mono text-sm px-5 py-2
              flex items-center gap-2
              border-2 font-bold tracking-wide
              transition-all duration-300
              border-purple-500
              text-purple-600 dark:text-white
              bg-transparent
              hover:bg-purple-500
              hover:text-white
              active:scale-95
            "
          >
            <span>{showMore ? "Show Less" : "Read More"}</span>
            <span
              style={{
                display: "inline-block",
                transform: showMore ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              {showMore ? "←" : "~~>"}
            </span>
          </button>
        </div>

        {/* Right — Photo + dot grid */}
        <div
          ref={imageRef}
          style={{
            opacity: imageVisible ? 1 : 0,
            transform: imageVisible ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
          }}
          className="relative hidden md:flex items-start justify-end w-72 flex-shrink-0"
        >
          {/* Dot grid top-left */}
          <div className="absolute top-0 right-16 grid grid-cols-5 gap-2">
            {Array(25).fill(0).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 opacity-60"
              />
            ))}
          </div>

          {/* Photo wrapper — white border on dark, purple shadow */}
          <div
            className="
              relative z-10 mt-8
              ring-2 ring-gray-200 dark:ring-white/20
              shadow-[4px_4px_0px_0px_rgba(168,85,247,0.4)]
              hover:shadow-[6px_6px_0px_0px_rgba(168,85,247,0.6)]
              transition-shadow duration-300
            "
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
          >
            <img
              src="/about-section.png"
              alt="Muhammad Arif Jamal"
              className="
                w-56 h-72 object-cover object-top
                brightness-90 dark:brightness-110
                contrast-105
              "
            />
            {/* Dark overlay removed on dark theme, subtle on light */}
            <div className="
              absolute inset-0
              bg-white/5 dark:bg-transparent
              mix-blend-overlay
            " />
          </div>

          {/* Dot grid bottom-right */}
          <div className="absolute bottom-0 right-0 grid grid-cols-5 gap-2">
            {Array(25).fill(0).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 opacity-30"
              />
            ))}
          </div>

          {/* Purple corner accent */}
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-purple-500 z-20 opacity-70" />
          <div className="absolute top-6 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-500 z-20 opacity-70" />
        </div>

      </div>

      {/* Skills */}
      <Skills />

    </section>
  );
}

export default About;