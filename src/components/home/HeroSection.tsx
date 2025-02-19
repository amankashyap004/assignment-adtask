"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import { MovingBorderButton } from "../ui/MovingBorderButton";

const HeroSection = () => {
  return (
    <Container className="!px-0 lg:!px-20">
      <div className="relative flex flex-col justify-center items-center gap-12 lg:gap-12 h-full w-full pt-40 pb-4">
        <section className="absolute top-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full h-full overflow-hidden -z-10">
          <div className="relative">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 blur-3xl mix-blend-plus-lighter
               border-l-[300px] border-r-[300px] border-b-[450px] border-t-transparent border-l-transparent border-r-transparent
               md:border-l-[450px] md:border-r-[450px] md:border-b-[500px] border-[#263048]"
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 blur-xl mix-blend-plus-lighter
               border-l-[250px] border-r-[250px] border-b-[450px] border-t-transparent border-l-transparent border-r-transparent
               md:border-l-[300px] md:border-r-[300px] md:border-b-[500px] border-[#0C0C0C]"
            ></div>
          </div>
        </section>
        <section className="flex justify-center items-center z-10">
          <div className="relative group overflow-hidden flex justify-center items-center gap-1 px-3 py-2 bg-gradient-to-r from-[#8E8D8D]/15 to-[#282828]/15 border border-white/5 rounded-2xl">
            <div className="w-4 md:w-6">
              <Image
                src="/images/icons/icon-hero-stars.png"
                alt="Hero Image"
                width={100}
                height={100}
                quality={100}
                className="object-contain w-full"
              />
            </div>
            <p className="font-medium text-[10px] md:text-xs uppercase">
              Transform Your Digital Presence with AI Agents
            </p>
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 -rotate-12 w-6 md:w-8 h-40 opacity-80 bg-gradient-to-r from-[#D9D9D9] to-transparent blur"
              animate={{
                left: ["-75%", "120%"], // Moves from left to right
                opacity: [0.2, 0.8, 0.2], // Smooth fade in-out
              }}
              transition={{
                repeat: Infinity, // Infinite loop
                duration: 2, // Adjust speed
                ease: "linear", // Smooth motion
              }}
            />
          </div>
        </section>
        <section className="flex justify-center items-center">
          <h2 className="bg-gradient-to-r from-[#E2E8F8] to-[#858992] bg-clip-text text-transparent text-5xl lg:text-8xl opacity-20 hover:opacity-100 stroke-white text-log transition-all duration-500">
            ad<span className="font-semibold">Task.</span>ai
          </h2>
        </section>
        <section className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8">
            <p className="text-xs md:text-base text-[#E2E8F8] text-center w-[90%] md:w-3/4 lg:w-2/3">
              Stop struggling with marketing decisions. Our AI assistant
              analyzes your business, creates personalized strategies, and helps
              you execute them - all in real-time.
            </p>
            <div className="flex flex-col justify-center items-center gap-4 pb-4">
              <MovingBorderButton>
                <p className="text-base font-normal">Start Free Trial</p>
              </MovingBorderButton>
              <p className="text-[10px] text-[#C5CDE3]">
                Try AdTask AI free for 30 days
              </p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default HeroSection;
