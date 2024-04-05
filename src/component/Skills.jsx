import React from "react";
import html from "../../src/assets/html.png";
import css from "../../src/assets/css.png";
import javascrippt from "../../src/assets/javascript.png";
import tailwind from "../../src/assets/tailwind.png";
import react from "../../src/assets/react.png";
import git from "../../src/assets/git.jpg";
import mongo from "../../src/assets/mongodb.svg";
import next from "../../src/assets/next.jpg";
import node from "../../src/assets/nodejs.svg"
import aws from "../../src/assets/aws.svg"
import python from "../../src/assets/python.svg";


const Skills = () => {
  return (
    <div className=" border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center">
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src={html}
          alt=""
          width={100}
          height={100}
          className="image-shake"
        />
        <p className="mt-2">HTML</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src={css}
          alt=""
          width={100}
          height={100}
          className="image-shake"
        />
        <p className="mt-2">CSS</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src={javascrippt}
          alt=""
          width={100}
          height={100}
          className="image-shake"
        />
        <p className="mt-2">Javascript</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src={react}
          alt=""
          width={100}
          height={100}
          className="image-shake"
        />
        <p className="mt-2">React.js</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src={tailwind}
          alt=""
          width={100}
          height={100}
          className="image-shake"
        />
        <p className="mt-2">TailwindCss</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src={git}
          alt=""
          width={100}
          height={100}
          className="image-shake"
        />
        <p className="mt-2">Git</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src={next}
          alt=""
          width={100}
          height={100}
          className="image-shake"
        />
        <p className="mt-2">Next.js</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src={mongo}
          alt=""
          width={100}
          height={100}
          className="image-shake"
        />
        <p className="mt-2">MongoDB</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src={node}
          alt=""
          width={100}
          height={100}
          className="image-shake"
        />
        <p className="mt-2">Node.js</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src={aws}
          alt=""
          width={100}
          height={100}
          className="image-shake"
        />
        <p className="mt-2">Aws</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src={python}
          alt=""
          width={100}
          height={100}
          className="image-shake"
        />
        <p className="mt-2">Aws</p>
      </div>
    </div>
  );
};

export default Skills;
