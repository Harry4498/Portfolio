import React from "react";
import myimage from "../../src/assets/my.jpeg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md: grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="primary-color font-extrabold text-4xl mb-4">
              About Me
            </h2>
            <p className="text-base lg:text-lg">
              Results-oriented Full-Stack Developer with expertise in front-end
              and back-end development. Proficient in React, Next.js, React
              Native, Node.js, Express, and MongoDB. Strong problem-solving
              skills and a proven ability to deliver high-quality work.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          width={300}
          height={300}
          src={myimage}
          alt="My Image"
        />
      </div>
    </div>
  );
};

export default About;
