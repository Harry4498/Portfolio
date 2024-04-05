import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-6 mx-auto bg-gray-800 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <span className="primary-color text-lg sm:text-xl">Harshit Raj</span>
        <p className="text-hover-color hover:text-hover-color text-sm sm:text-base">
          harshitraj0029@gmail.com
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://www.instagram.com/coder_dynasty/"
            className="text-hover-color hover:text-hover-color image-shake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="https://twitter.com/thefirst_flyer"
            className="text-hover-color image-shake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl sm:text-3xl hover:bg-primary-color" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshitraj0029/"
            className="text-hover-color hover:text-hover-color image-shake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl sm:text-3xl hover:primary-color" />
          </a>
          <a
            href="https://github.com/Harry4498"
            className=" text-hover-color hover:text-hover-color image-shake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl sm:text-3xl hover:primary-color" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
