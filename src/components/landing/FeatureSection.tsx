import React from "react";
import { Search, Users, Folder } from "lucide-react";
import * as motion from "motion/react-client";
const FeatureSection = () => {
  const features = [
    {
      icon: <Search size={20} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />,
      title: "Instant Search",
      description:
        "Find any snippet in seconds with powerful search across code, tags, and descriptions.",
    },
    {
      icon: <Users size={20} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />,
      title: "Team Sharing",
      description:
        "Share snippets with your team. Perfect for onboarding and maintaining code consistency.",
    },
    {
      icon: <Folder size={20} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />,
      title: "Organization",
      description:
        "Organize by language, project, or custom tags. Everything stays neat and findable",
    },
  ];
  return (
    <div
      className="w-full py-20 px-15 bg-gradient-to-b from-slate-50 to-slate-100"
      id="features"
    >
      <div className="max-w-[1150px] mx-auto lg:p-14">
        <div className="text-center mb-10 md:mb-12 mx-auto lg:mb-20">
          <h4 className="text-2xl font-semibold text-slate-700 md:text-3xl lg:text-4xl lg:font-extrabold">
            Built for Developer Productivity
          </h4>
          <p className="mt-4 text-sm text-slate-700 md:text-md lg:text-base ">
            Everything you need to save time, share knowledge, and onboard team
            members faster.
          </p>
        </div>

        <div className="w-[95%] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-1">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1, // Stagger each card
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -10, // Lift higher than your CSS hover
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="sm:max-w-[300px] sm:mx-auto text-center bg-white p-6 shadow-md rounded-lg flex flex-col h-full lg:py-10 cursor-pointer group"
            >
              {/* Icon with animation */}
              <div className="flex justify-center mb-4">
                <motion.div
                  className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center lg:w-14 lg:h-14 group-hover:bg-indigo-400 group-hover:text-white transition-colors duration-300"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  {feature.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <motion.p
                  className="text-lg text-slate-700 font-semibold lg:text-xl lg:pb-3"
                  whileHover={{
                    color: "#6560c8", // Indigo color on hover
                    transition: { duration: 0.2 },
                  }}
                >
                  {feature.title}
                </motion.p>
                <p className="text-sm text-gray-500 lg:text-base lg:leading-7">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
