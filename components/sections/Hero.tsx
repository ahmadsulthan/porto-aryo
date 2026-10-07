"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-[#07111f]
        pt-28
        lg:pt-0
      "
    >
      <div
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          w-[350px]
          h-[350px]
          lg:w-[500px]
          lg:h-[500px]
          rounded-full
          bg-amber-400/10
          blur-[120px]
        "
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                text-amber-400
                uppercase
                tracking-[0.3em]
                text-xs
                sm:text-sm
              "
            >
              Researcher • Educator • Community Leader
            </motion.span>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                text-5xl
                sm:text-6xl
                lg:text-8xl
                font-bold
                text-white
                mt-6
                leading-tight
              "
            >
              Aryo
              <br />
              Anargya
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                mt-8
                text-slate-400
                text-lg
                leading-8
                max-w-xl
              "
            >
              Sociology Education Graduate passionate about research,
              educational development, youth empowerment, and community
              engagement.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                mt-10
              "
            >
              <a
                href="#research"
                className="
                  px-6
                  py-4
                  rounded-xl
                  bg-amber-400
                  text-black
                  font-medium
                  text-center
                "
              >
                View Research
              </a>

              <a
                href="/cv/aryo-cv.pdf"
                className="
                  px-6
                  py-4
                  rounded-xl
                  border
                  border-white/10
                  text-white
                  text-center
                  hover:bg-white/5
                  transition
                "
              >
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              flex
              justify-center
              lg:justify-end
            "
          >
            <div
              className="
                w-full
                max-w-[350px]
                h-[420px]
                rounded-[40px]
                border
                border-amber-400/20
                bg-gradient-to-b
                from-slate-800
                to-slate-900
                overflow-hidden
              "
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                }}
                className="
    flex
    justify-center
    lg:justify-end
    relative
  "
              >
                {/* Glow Background */}
                <div
                  className="
      absolute
      w-[280px]
      h-[280px]
      md:w-[350px]
      md:h-[350px]
      rounded-full
      bg-amber-400/20
      blur-[80px]
    "
                />

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
      relative
      w-full
      max-w-[340px]
      h-[420px]
      md:max-w-[380px]
      md:h-[470px]
      rounded-[36px]
      overflow-hidden
      border
      border-white/10
      bg-gradient-to-b
      from-slate-800
      to-slate-900
      shadow-2xl
      backdrop-blur-sm
    "
                >
                  <Image
                    src="/images/aryo-profile.svg"
                    alt="Aryo Anargya"
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div
                    className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/40
        via-transparent
        to-transparent
      "
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
