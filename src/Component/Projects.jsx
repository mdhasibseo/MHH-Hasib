import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── animation variants ───────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const stats = [
  { value: "08+", label: "Years of Experience" },
  { value: "120", label: "Projects Completed" },
  { value: "95",  label: "Happy Clients" },
  { value: "18",  label: "Awards Won" },
];

// ─── component ────────────────────────────────────────────────────────────────
export default function AboutMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const v = inView ? "visible" : "hidden";

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(135deg,#08071c 0%,#0e0720 55%,#180824 100%)",
        fontFamily: "'Raleway',sans-serif",
      }}
    >
      {/* ── Google Fonts ─────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Raleway:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* ── ambient glows ────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle,#6b21a8 0%,transparent 65%)", transform: "translate(30%,-30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle,#4a1078 0%,transparent 65%)", transform: "translate(-30%,30%)" }} />
      </div>

      {/* ── nav bar ──────────────────────────────────────────────── */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-6">
        {/* logo */}
        <motion.span
          variants={fadeUp(0)} initial="hidden" animate={v}
          className="text-white font-bold text-lg tracking-wider"
          style={{ fontFamily: "'Playfair Display',serif" }}
        >
          Portfolio
        </motion.span>

        {/* nav links */}
        <motion.ul
          variants={fadeUp(0.1)} initial="hidden" animate={v}
          className="hidden md:flex items-center gap-8 list-none"
        >
          {["HOME","ABOUT","PROJECTS","BLOG","CONTACT"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`text-[11px] tracking-[3px] font-semibold transition-colors duration-200 ${
                  item === "ABOUT"
                    ? "text-white border-b border-white pb-0.5"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* hamburger */}
        <motion.div
          variants={fadeUp(0.2)} initial="hidden" animate={v}
          className="flex flex-col gap-[5px] cursor-pointer"
        >
          {[0,1,2].map(i => (
            <span key={i} className={`block h-[2px] bg-white/60 rounded-full ${i===1?"w-5":"w-7"}`} />
          ))}
        </motion.div>
      </nav>

      {/* ── main content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 items-center px-10 lg:px-16 gap-10 pb-36">

        {/* LEFT ─────────────────────────────────────────────────── */}
        <div className="flex flex-col justify-center">

          {/* vertical accent line + name */}
          <motion.div
            variants={fadeLeft(0.2)} initial="hidden" animate={v}
            className="flex items-stretch gap-5 mb-6"
          >
            <div className="w-[3px] rounded-full self-stretch"
              style={{ background: "linear-gradient(180deg,#a855f7,transparent)" }} />
            <div>
              <h1
                className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-none tracking-tight"
                style={{ fontFamily: "'Playfair Display',serif" }}
              >
                Chris Doe
              </h1>
              <p className="mt-3 text-sm tracking-[4px] uppercase text-white/40 font-light">
                Designer / Photographer
              </p>
            </div>
          </motion.div>

          {/* bio */}
          <motion.p
            variants={fadeUp(0.35)} initial="hidden" animate={v}
            className="text-white/45 text-[15px] leading-[1.85] font-light max-w-[440px] mb-8"
          >
            I create compelling visual narratives through design and photography.
            Passionate about detail, driven by creativity — I transform ideas into
            experiences that leave a lasting impression.
          </motion.p>

          {/* skill tags */}
          <motion.div
            variants={fadeUp(0.45)} initial="hidden" animate={v}
            className="flex flex-wrap gap-2 mb-10"
          >
            {["UI/UX Design","Photography","Branding","Motion"].map((s) => (
              <motion.span
                key={s}
                whileHover={{ borderColor: "rgba(168,85,247,0.6)", color: "rgba(216,180,254,0.9)" }}
                className="text-[11px] tracking-[2px] uppercase px-4 py-[7px] rounded-full border border-white/10 text-white/35 font-medium cursor-default transition-all duration-300"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA button — matches hero Contact button style */}
          <motion.div
            variants={fadeUp(0.55)} initial="hidden" animate={v}
            className="flex items-center gap-5"
          >
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full border border-white text-white text-[11px] tracking-[3px] uppercase font-semibold transition-all duration-300"
            >
              Contact
            </motion.button>

            {/* View Profile link — matches screenshot */}
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="text-white/50 text-[11px] tracking-[3px] uppercase font-medium flex items-center gap-2 transition-all duration-300 hover:text-white/80"
            >
              View Profile
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT ────────────────────────────────────────────────── */}
        <div className="relative flex items-center justify-center">

          {/* section counter — top right, same as 01/06 in screenshot */}
          <motion.div
            variants={fadeUp(0.2)} initial="hidden" animate={v}
            className="absolute top-0 right-0 flex items-center gap-3"
          >
            <span className="text-3xl font-bold text-white/90 tracking-tight"
              style={{ fontFamily: "'Playfair Display',serif" }}>02</span>
            <div className="flex flex-col gap-[3px]">
              <div className="w-12 h-[1.5px] bg-white/60 rounded-full" />
              <div className="w-12 h-[1.5px] bg-white/20 rounded-full" />
            </div>
            <span className="text-sm text-white/30 tracking-wider">06</span>
            {/* prev / next arrows */}
            <div className="flex items-center gap-2 ml-2">
              {["‹","›"].map((a, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2, color: "#fff" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/40 text-xl leading-none transition-colors duration-200"
                >
                  {a}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* photo frame — grayscale portrait style */}
          <motion.div
            variants={fadeRight(0.3)} initial="hidden" animate={v}
            className="relative mt-12 w-[260px] lg:w-[300px] xl:w-[340px]"
          >
            {/* decorative offset borders */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-purple-500/15 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-purple-500/08 pointer-events-none" />

            {/* photo box */}
            <div
              className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden"
              style={{ background: "linear-gradient(160deg,#1c1035,#0c0820)" }}
            >
              {/* placeholder silhouette */}
              <svg
                viewBox="0 0 200 300"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 opacity-[0.18]"
                fill="white"
              >
                <ellipse cx="100" cy="72" rx="44" ry="52" />
                <path d="M15 300 Q100 175 185 300Z" />
              </svg>

              {/* purple-to-dark overlay — same cinematic feel */}
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(180deg,rgba(88,28,135,0.25) 0%,rgba(8,7,28,0.55) 100%)" }} />

              {/* replace label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] tracking-[4px] uppercase text-white/15 select-none">
                  Your Photo
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── stats bar — sits above social bar like screenshot ────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.7, ease: [0.22,1,0.36,1] }}
        className="relative z-10 mx-8 mb-4 rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            whileHover={{ backgroundColor: "rgba(168,85,247,0.06)" }}
            className="flex flex-col items-center py-5 transition-colors duration-300 cursor-default"
          >
            <span
              className="text-3xl font-bold text-white/90 leading-none"
              style={{ fontFamily: "'Playfair Display',serif" }}
            >
              {s.value}
            </span>
            <span className="mt-1 text-[10px] tracking-[2px] uppercase text-white/30 font-medium">
              {s.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* ── social bar — exact match to screenshot bottom strip ──── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.85, duration: 0.6 }}
        className="relative z-10 mx-8 mb-6 rounded-xl px-6 py-4"
        style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* social tabs */}
        <div className="flex items-center gap-4 mb-3">
          <span className="text-[10px] tracking-[3px] uppercase text-white/30 font-semibold">Social</span>
          {["Twitter","Dribbble","Facebook"].map((s, i) => (
            <span key={s} className="flex items-center gap-4">
              <motion.a
                href="#"
                whileHover={{ color: "rgba(216,180,254,0.9)" }}
                className={`text-[11px] tracking-[2px] transition-colors duration-200 ${
                  i === 0 ? "text-white/70 font-medium" : "text-white/25"
                }`}
              >
                {s}
              </motion.a>
              {i < 2 && <span className="text-white/10">|</span>}
            </span>
          ))}
        </div>

        {/* two feed cards — same as screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { handle: "@DESIGNMEDIUM", time: "10 min", text: "Design a new portfolio site with DesignMedium. Live now!" },
            { handle: "@DESIGNMEDIUM", time: "45 min", text: "Will be starting a new design in some time. Stay tuned and don't miss out!" },
          ].map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ borderColor: "rgba(168,85,247,0.25)" }}
              className="rounded-lg px-4 py-3 transition-all duration-300 cursor-pointer"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-semibold text-white/60">{post.handle}</span>
                <span className="text-white/20 text-[10px]">•</span>
                <span className="text-[10px] text-white/25">{post.time}</span>
              </div>
              <p className="text-[12px] text-white/40 leading-relaxed font-light">{post.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── right edge tick marks — matches screenshot ───────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3"
      >
        {[1,2,3,4].map((_, i) => (
          <div key={i} className={`rounded-full ${i===0?"w-[3px] h-6 bg-white/50":"w-[2px] h-4 bg-white/15"}`} />
        ))}
      </motion.div>
    </section>
  );
}