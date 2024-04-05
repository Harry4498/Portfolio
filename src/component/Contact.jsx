import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="work">
      <div className="text-center">
        <h2 className="primary-color text-4xl font-extrabold leading-tight ">
          Contact Me
        </h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 rounded-xl bg-gray-800">
          <div className="p-10">
            <form action="https://getform.io/f/zaxdorma" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Your Name"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border-gray-700 rounded-md focus:border-pink-600 sm:px-6 sm:py-6 sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2.5 relative">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Your Email"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border-gray-700 rounded-md focus:border-pink-600 sm:px-6 sm:py-6 sm:text-base"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5 relative">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Your Message"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border-gray-700 rounded-md focus:border-pink-600 sm:px-6 sm:py-6 sm:text-base"
                      rows="4"
                    ></textarea>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-2xl bg-primary-color text-white rounded-md w-full p-4 mt-2 font-semibold sm:px-6 sm:py-6 sm:text-base"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
