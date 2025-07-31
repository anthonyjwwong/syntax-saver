import React from "react";
import LandingLangIcon from "../ui/LandingLangIcon";
import { Database } from "lucide-react";
import * as motion from "motion/react-client";
const LanguageSection = () => {
  const languages = [
    { language: "JavaScript", icon: "JS" },
    { language: "Python", icon: "PY" },
    { language: "TypeScript", icon: "TS" },
    { language: "React", icon: "R" },
    { language: "SQL", icon: Database },
    { language: "Go", icon: "GO" },
    { language: "Rust", icon: "RS" },
    { language: "20+ More", icon: "+" },
  ];
  return (
    <div
      className=" bg-gradient-to-b from-white to-slate-50 py-14 px-10"
      id="language"
    >
      <div className="max-w-[1150px] mx-auto lg:p-14">
        <div className="text-center px-2">
          <h4 className="text-2xl font-semibold text-slate-700 md:text-3xl">
            Support for All Major Languages
          </h4>
          <p className="mt-4 text-sm text-slate-500 md:text-md lg:text-lg">
            Syntax highlighting and smart organization for the languages you
            used daily.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 mt-6 gap-4 mx-auto md:grid-cols-4 md:pt-10"
        >
          {languages.map((lang, index) => (
            <motion.div
              key={lang.language}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08, // Fast stagger
                ease: "easeOut",
                type: "spring",
                bounce: 0.3,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                scale: 1.05,
                y: -4,

                transition: {
                  duration: 0.3,
                  rotate: { duration: 0.6, ease: "easeInOut" },
                },
              }}
              whileTap={{
                scale: 0.97,
                transition: { duration: 0.1 },
              }}
              className="cursor-pointer"
            >
              <LandingLangIcon language={lang.language} icon={lang.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LanguageSection;
