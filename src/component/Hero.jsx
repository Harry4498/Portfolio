import { TypeAnimation } from "react-type-animation";
import Heroimg from "../../src/assets/profile-pic.png";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      {/* imgae div */}
      <div className="my-auto mx-auto">
        <div className="w-[300px] h-auto lg:w-[400px]">
          <img src={Heroimg} alt=" Image " />
        </div>
      </div>

      {/* Text part  */}
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I`m a </span>
          <br />
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1000,
              "Webdesigner",
              1000,
              "Enterpreneur",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl ">
          My name is Harshit Raj and I have 1 year of experience in sofware
          development.
        </p>
        <div>
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl image-shake mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white cursor-pointer "
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white  hover:cursor-pointer hover: border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
