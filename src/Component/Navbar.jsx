import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import {
  FileText,
  FolderGit2,
  Home,
  Mail,
  Menu,
  MoonIcon,
  SunIcon,
  User,
  X,
} from "lucide-react";

function Navbar() {
  const { toggleTheme, theme } = useTheme();
  const [mobilemenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { to: "/about", label: "About", icon: <User className="w-4 h-4" /> },
    {
      to: "/project",
      label: "Projects",
      icon: <FolderGit2 className="w-4 h-4" />,
    },
    { to: "/contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
    { to: "/resume", label: "Resume", icon: <FileText className="w-4 h-4" /> },
  ];

  const linkClass = ({ isActive }) =>
    isActive
      ? "pb-1 border-b-2 border-blue-500 flex items-center gap-1.5"
      : "text-gray-700 dark:text-gray-200  transition pb-1 flex items-center gap-1.5";
  return (
    <nav
      className="fixed left-0 top-0 w-full z-50 
  bg-white/90 dark:bg-slate-900/90 
  backdrop-blur-md 
  border-b border-gray-200 dark:border-slate-700
  transition-all duration-300"
    >
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          M.Arif Jamal
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium items-center text-gray-700 dark:text-gray-200">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.icon}
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full 
    bg-gray-100 dark:bg-slate-800 
    hover:bg-gray-200 dark:hover:bg-slate-700 
    transition"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-slate-700" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobilemenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {mobilemenuOpen ? (
              <X className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            ) : (
              <Menu className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobilemenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={linkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
