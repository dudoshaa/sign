import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-600 text-white p-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {currentYear}. All rights reserved.</p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/dudoshaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/durdona-burkhonova-9332b0369"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:burxonovadurdona027@gmail.com"
            className="hover:text-gray-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
