import React from "react";
import about from "../assets/about-hasib.png";
import { motion } from "motion/react";
import { delay } from "motion";

const services = [
  {
    icon: "⚡",
    title: "FRONTEND DEVELOPMENT",
    desc: "Pixel-perfect, responsive UIs built with React, Next.js and Tailwind CSS.",
  },
  {
    icon: "🛠",
    title: "BACKEND DEVELOPMENT",
    desc: "Scalable REST APIs and server-side logic with Node.js, Express and MongoDB.",
  },
  {
    icon: "🚀",
    title: "FULLSTACK SOLUTIONS",
    desc: "End-to-end web apps — from database design to deployment on cloud platforms.",
  },
];

const About = () => {
  const fadeup = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <motion.section
     className="bg-zinc-800 md:py-60 md:px-16 px-8 py-12 flex items-end">
      <div className="container mx-auto">
        <div
          className=" grid lg:grid-cols-3 gap-16 lg:grid-cols-[55fr_45fr_45fr]"
          //  style={{ gridTemplateColumns: "55fr 45fr 45fr" }}
        >
          {/* ---- LEFT ---- */}
          <div className="flex flex-col justify-center ">
            <motion.h2
              variants={fadeup}
              custom={0}
              initial="hidden"
              whileInView="visible"
              
              className="md:text-5xl text-3xl font-bold leading-tight text-white"
            >
              MD Hasib is <br />
              <span className="">Right Here!</span>
            </motion.h2>

            <motion.p
              variants={fadeup}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              
              className="md:text-base font-normal text-sm opacity-70 text-white mt-6 mb-8 leading-relaxed"
            >
              With a passion for clean code, I build fast and scalable web
              applications that deliver real results.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeup}
              custom={0.25}
              initial="hidden"
              whileInView="visible"
              

              className="flex items-center gap-4"
            >
              <button className="bg-transparent  text-white border text-sm font-semibold tracking-widest rounded-2xl px-6 py-3 hover:bg-white/80 hover:text-black transition-all">
                HIRE ME
              </button>
              <button className="bg-transparent border border-white/30 text-white text-sm font-semibold tracking-widest px-6 py-3  rounded-2xl hover:border-white/60 transition-all flex items-center gap-2">
                VIEW PROJECTS <span>↗</span>
              </button>
            </motion.div>

            {/* Stats */}
            <div className="flex items-center gap-12 mt-8 pt-8 border-t border-white/8">
              <div>
                <p className="md:text-4xl text-2xl font-bold text-white ">98%</p>
                <p className="text-xs font-normal opacity-60 text-white mt-1">
                  Client Satisfaction
                </p>
              </div>
              <div>
                <p className="md:text-4xl font-bold text-2xl text-white ">20+</p>
                <p className="text-xs font-normal opacity-60 text-white mt-1">
                  Projects Delivered
                </p>
              </div>
            </div>
          </div>

          {/* ---- IMAGE ---- */}
          <motion.div 
          variants={scaleIn}
          
          initial="hidden"
          whileInView="visible"
         
          
          
          className="relative md:top-32 order-first md:order-0  md:right-30 flex items-end   justify-center md:scale-150">
            <img src={about} alt="MD Hasib" className="w-full object-contain" />
          </motion.div>

          {/* ---- RIGHT (Services) ---- */}
          <div className="flex flex-col justify-center gap-6">
            {services.map((service, index) => (
              <motion.div
              initial={{ opacity: 0, x: 200,   }}
              whileInView={{ opacity: 1, x: 0 ,   }}
              transition={{ duration: 0.8, delay: index * 0.15,  ease: [0.16, 1, 0.3, 1] }}
                key={index}
                className="bg-[#1A1A1A] p-6 border border-white/[0.08] hover:border-[#D4F044]/40 transition-all rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#D4F044] text-xl">{service.icon}</span>
                  <p className="md:text-sm font-semibold tracking-widest text-white text-xs">
                    {service.title}
                  </p>
                </div>
                <p className="md:text-sm text-xs font-normal opacity-65 text-white leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
