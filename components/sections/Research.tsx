"use client";

import { researches } from "@/data/researches";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Research() {
  return (
    <section id="research" className="py-32 bg-[#0b1220]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-amber-400 uppercase tracking-widest">
            Publications
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Research & Scientific Works
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {researches.map((research) => (
            <motion.article
              key={research.id}
              variants={item}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                group
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
              "
            >
              <span className="text-amber-400 text-sm">{research.year}</span>

              <h3
                className="
                  text-2xl
                  text-white
                  mt-4
                  leading-snug
                  group-hover:text-amber-400
                  transition-colors
                "
              >
                {research.title}
              </h3>

              <p className="text-slate-400 mt-4">{research.description}</p>

              <button
                className="
                  mt-6
                  text-amber-400
                  font-medium
                "
              >
                Read More →
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
