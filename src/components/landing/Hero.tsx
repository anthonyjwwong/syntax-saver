import React from "react";
import Link from "next/link";
import * as motion from "motion/react-client";
import CodeEditorInstance from "../ui/HeroCodeEditor";

const Hero = () => {
  return (
    <div className="w-full pb-30 bg-gradient-to-br from-indigo-500 to-purple-600 relative">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="relative z-10">
        <div className="pt-20 w-[90%] mx-auto max-w-[1150px] md:pt-20 gap-4 lg:flex md:pb-13 lg:pt-25">
          <div className="w-full lg:w-[50%] md:mt-6 mx-auto lg:mt-20">
            <div className="sm:text-center lg:text-left">
              {/* First heading - animates immediately */}
              <h1 className="text-3xl text-white font-black md:text-4xl lg:text-5xl">
                Stop Googling the Same Code
              </h1>

              {/* Second heading - delayed */}
              <h1 className="text-3xl text-white font-black md:text-4xl lg:text-5xl mt-1 lg:mt-5">
                Start Building Faster
              </h1>

              {/* Subtitle - more delayed */}
              <p className="text-sm font-light mt-3 text-white sm:text-center lg:text-left lg:text-lg">
                Save code snippets that you often use, but just cannot seem to
                remember.
              </p>
            </div>

            {/* Buttons - last to animate */}
            <div className="mt-5 text-center lg:text-left">
              <motion.div
                whileHover={{
                  y: -2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  href="/login"
                  className="bg-white text-indigo-600 hover:bg-gray-50 px-5 py-3 rounded-lg font-semibold transition-all cursor-pointer inline-block"
                >
                  Get started
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -2,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-block ml-3"
              >
                <Link
                  href="#features"
                  className="border-2 border-white/30 text-white px-5 py-3 rounded-lg font-semibold transition-all cursor-pointer inline-block"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Code Editor - animates with scale + slide */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mx-auto lg:w-[50%]"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <CodeEditorInstance />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
