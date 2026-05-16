import React from "react";
import ME from '../assets/ME.png'
import { motion } from "motion/react";

const FuturisticHero = () => {
  return (
    <>
    


    <motion.section className= "  min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden">
      <div className="relative w-[350px] h-[223px] md:w-[1200px] md:h-[650px] rounded-[30px] overflow-hidden bg-[#050505] border-t-4 border-[#ff214f] shadow-2xl">

        {/* BACKGROUND GLOW */}
        <motion.div 
        whileInView={{ opacity:[0.4,0.8,0.4], scale:[1,1.1,1] }} transition={{ duration:5, repeat:Infinity }}
        className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#ff214f]/10 blur-[120px]" />

        {/* IMAGE SIDE */}
        <motion.div initial={{ x:200, opacity:0 }} whileInView={{ x:0, opacity:1 }} transition={{ duration:1.4, ease:"easeOut" }} className="absolute right-0 top-0 w-[48%] h-full">
          <motion.img
        whileInView={{ scale:[1.08,1.15] }} transition={{ duration:8, repeat:Infinity, repeatType:"reverse", ease:"easeInOut" }}
            src={ME}
            alt=""
            className="w-full h-full object-cover grayscale contrast-125 brightness-75"
          />

          {/* DARK OVERLAY */}
          <motion.div whileInView={{ y:[0,-20,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }} className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent" />
        </motion.div>

        {/* DECORATIVE CIRCLE */}
        <div className="absolute bottom-[-60px] left-[-60px] w-[220px] h-[220px] rounded-full border border-white/5" />

        {/* TOP RIGHT SMALL TEXT */}
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:1, duration:1 }} className="absolute top-[120px] right-[90px] w-[140px] text-[12px] leading-[18px] text-white/60 z-20">
          No objective to measure development in historical perspective writing and modern technological evolution.
        </motion.div>

        {/* VERTICAL TEXT */}
        <div className="absolute right-[90px] bottom-[170px] rotate-90 text-[11px] tracking-[5px] uppercase text-white/30 z-20">
          Creative Developer
        </div>

        {/* MAIN CONTENT */}
        <div className="absolute left-[90px] top-1/2 -translate-y-1/2 z-30">

          {/* MAIN TITLE */}
          <motion.h1 initial={{ y:120, opacity:0 }} whileInView={{ y:0, opacity:1 }} transition={{ duration:1, ease:[0.22,1,0.36,1] }} className="md:text-[120px] text-[42px] leading-[100px] tracking-[-8px] font-black uppercase text-[#ff214f] font-orbitron">
            MD HAsib
          </motion.h1>

          <motion.h1 initial={{ width:0 }} whileInView={{ width:300 }} transition={{ delay:0.8, duration:1.2, ease:"easeOut" }} className="text-[120px] leading-[100px] tracking-[-8px] font-black uppercase text-[#ff214f] font-orbitron">
           mhh
          </motion.h1>

          {/* UNDERLINE */}
          <div className="w-[300px] h-[6px] bg-[#ff214f] mt-4" />

          {/* DESCRIPTION */}
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ delay:1.2, duration:1 }} className="absolute left-[350px] top-[110px] w-[180px] text-[12px]  text-white/75">
          I am Hasib from Pabna, Bangladesh, a passionate full stack developer currently studying in class 10 and building modern web applications while growing my startup, MHH Group, with creative ideas and innovative technology.
          </motion.p>

          {/* SIGNATURE */}
          <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} transition={{ delay:1.5, duration:1 }} className="absolute left-[300px] top-[250px] text-[#ff214f] text-[55px] text-xl italic font-light">
            hasib
          </motion.div>
        </div>
      </div>
    </motion.section>
    </>
    
  );
};

export default FuturisticHero;