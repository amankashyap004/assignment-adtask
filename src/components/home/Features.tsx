"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";
import Container from "../layout/Container";

const Features = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full gap-8 md:gap-16 lg:gap-24">
      <div className="absolute top-52 md:top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9] opacity-50 w-52 h-32 md:w-[350px] md:h-52 blur-3xl rounded-full"></div>
      <div className="absolute top-52 md:top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#263048] w-60 h-40 md:w-[450px] md:h-60 blur-3xl rounded-full"></div>
      <SectionHeading
        name="Features"
        title="Feature packed to make"
        subTitle="Digital marketing easier and affordable."
        paragraph="Experience Intelligent Features to optimize your marketing efforts."
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          <div className="order-1">
            <FeatureCardWrapper innerClassName="!p-0 md:!p-0">
              <div className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full h-full p-0">
                <div className="relative flex justify-center items-center w-full h-full gap-4 pt-4 md:pt-0">
                  <RotatingQuarterCircle />
                </div>
                <div className="space-y-2 px-4 pb-4 md:px-8 md:pb-8">
                  <h3 className="font-semibold text-sm md:text-base bg-gradient-to-r from-white to-[#5C73AE] bg-clip-text text-transparent">
                    Reach Target Audience
                  </h3>
                  <p className="font-light text-xs">
                    Pinpoint the perfect audience with precision. Our AI-driven
                    targeting ensures every message resonates where it matters
                    most.
                  </p>
                </div>
              </div>
            </FeatureCardWrapper>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 order-3 lg:order-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            <FeatureCardWrapper>
              <div className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full h-full">
                <div className="absolute right-0 top-12 md:top-[70px] flex flex-col justify-center items-center z-10">
                  <p className="px-4 md:pe-10 text-[10px] bg-gradient-to-r from-[#E2E8F8] to-[#858992] bg-clip-text text-transparent">
                    GEN AI Powered
                  </p>
                  <div className="w-[180%] h-px bg-white blur-[0.5px] mt-0.5"></div>
                </div>
                <div className="bg-gradient-to-r from-[#C7D7FF] to-[#788199] p-px rounded-2xl z-30">
                  <div className="bg-gradient-to-r from-[#7687B5] to-[#333B4F] fill-black rounded-2xl">
                    <div className="bg-[#000000]/20 ps-2 pe-8 py-4 rounded-2xl">
                      <div className="relative flex justify-center items-center h-full z-20">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ms-2 bg-[#7687B5] blur w-14 h-12 rounded-full z-10"></div>
                        <div className={`w-14 md:w-16 animate-spin-icon z-20`}>
                          <Image
                            src="/images/home/feature-2-icon-1.png"
                            alt=""
                            width={400}
                            height={350}
                            quality={100}
                            className="object-contain w-full"
                          />
                        </div>
                        <div
                          className={`absolute -bottom-2 left-12 w-8 md:w-10 animate-spin-icon z-20`}
                        >
                          <Image
                            src="/images/home/feature-2-icon-1.png"
                            alt=""
                            width={400}
                            height={350}
                            quality={100}
                            className="object-contain w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm md:text-base bg-gradient-to-r from-white to-[#5C73AE] bg-clip-text text-transparent">
                    Marketing made Easier
                  </h3>
                  <p className="font-light text-xs">
                    Save time and simplify campaign management. Let automated
                    workflows handle the heavy lifting, so you can focus on
                    creativity.
                  </p>
                </div>
              </div>
            </FeatureCardWrapper>
            <FeatureCardWrapper>
              <div className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full h-full">
                <div className="flex justify-center items-center gap-4">
                  <div className="bg-gradient-to-r from-[#C7D7FF] to-[#788199] p-px rounded-2xl z-30">
                    <div className="bg-gradient-to-r from-[#7687B5] to-[#333B4F] fill-black rounded-2xl">
                      <div className="bg-[#000000]/20 px-4 py-4 rounded-2xl">
                        <div className="relative flex justify-center items-center h-full z-20">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#7687B5] blur-lg w-14 h-12 rounded-full z-10"></div>
                          <div className="flex justify-center items-end w-full h-16 md:h-20 gap-3 z-20">
                            <AnimatedBars />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`w-16 md:w-20 z-20`}>
                    <Image
                      src="/images/home/feature-3-icon-1.png"
                      alt=""
                      width={400}
                      height={350}
                      quality={100}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm md:text-base bg-gradient-to-r from-white to-[#5C73AE] bg-clip-text text-transparent">
                    Smart Marketing Insights
                  </h3>
                  <p className="font-light text-xs">
                    Unlock actionable data to guide every decision. Stay ahead
                    of trends, refine your strategies, and make confident moves
                    with powerful analytics.
                  </p>
                </div>
              </div>
            </FeatureCardWrapper>
          </div>
          <div className="order-2 lg:order-3">
            <FeatureCardWrapper>
              <div className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full h-full">
                <div className="relative flex justify-center items-center w-full h-full gap-4">
                  <div className={`w-full z-20`}>
                    <Image
                      src="/images/home/feature-4-icon-1.png"
                      alt=""
                      width={400}
                      height={350}
                      quality={100}
                      className="object-contain w-full"
                    />
                  </div>

                  <ZoomIcons />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm md:text-base bg-gradient-to-r from-white to-[#5C73AE] bg-clip-text text-transparent">
                    Intelligent Agents to Optimize your Reach
                  </h3>
                  <p className="font-light text-xs">
                    Scale and refine your marketing with AI-powered agents. They
                    track performance in real-time to help you reach more
                    customers efficiently.
                  </p>
                </div>
              </div>
            </FeatureCardWrapper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;

const FeatureCardWrapper = ({
  children,
  className = "",
  innerClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) => {
  return (
    <div
      className={`relative bg-gradient-to-l from-[#7687B5] to-[#333B4F] p-px rounded-2xl w-full h-full ${className}`}
    >
      <div
        className={`flex flex-col justify-between items-center gap-4 p-4 md:p-8 bg-gradient-to-tl from-[#0B0B0B] to-[#1D2333] rounded-2xl relative overflow-hidden h-full ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

const RotatingQuarterCircle = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center rounded-full">
      {/* Rotating Quarter Arc */}
      <div className="relative w-64 h-64 flex justify-center items-center overflow-hidden rounded-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full"
        >
          {/* Outer Tapering Shape */}
          <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-l from-[#7687B5]/20 to-transparent clip-triangle"></div>

          {/* Inner Red Triangle */}
          <div className="absolute top-1/2 left-0 w-full h-full mt-2 bg-gradient-to-l from-[#5A5F7A]/20 to-transparent clip-triangle"></div>
        </motion.div>

        <AnimatedIcons />
      </div>

      {/* Center White Dot */}
      <div className="absolute w-2 h-2 bg-white rounded-full"></div>

      {/* First Scaling Circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[700px] md:w-[200%] h-[700px] md:h-[200%]">
        <motion.div
          animate={{ scale: [0, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-[#E6EDFF]/10 flex justify-center items-center rounded-full w-full h-full"
        />
      </div>

      {/* Second Scaling Circle (starts when first reaches 50%) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[700px] md:w-[200%] h-[700px] md:h-[200%]">
        <motion.div
          animate={{ scale: [0, 1] }}
          transition={{
            duration: 3,
            delay: 4, // Delay starts after first is halfway (50%)
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-[#E6EDFF]/10 flex justify-center items-center rounded-full w-full h-full"
        />
      </div>
    </div>
  );
};

const AnimatedIcons = () => {
  const icons = [
    { top: "top-8 left-12", delay: Math.random() * 2 },
    { top: "top-1/2 right-4", delay: Math.random() * 2 },
    { top: "bottom-6 left-16", delay: Math.random() * 2 },
  ];

  return (
    <div className="relative w-full h-full text-[#788199] text-opacity-45 text-xl md:text-2xl">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: icon.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className={`absolute ${icon.top}`}
        >
          <FaUser />
        </motion.div>
      ))}
    </div>
  );
};

const AnimatedBars = () => {
  const [heights, setHeights] = useState([80, 64, 40, 52]); // Initial heights

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights([
        Math.floor(Math.random() * (80 - 40 + 1)) + 40, // Random height between 4px and 20px
        Math.floor(Math.random() * (80 - 40 + 1)) + 40,
        Math.floor(Math.random() * (80 - 40 + 1)) + 40,
        Math.floor(Math.random() * (80 - 40 + 1)) + 40,
      ]);
    }, 3000); // Change height every 3s

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex justify-center items-end w-full h-full gap-3 z-20">
      {heights.map((height, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-b from-[#C7D7FF] to-[#788199] w-2.5 md:w-3 rounded-xl"
          animate={{ height: `${height}px` }}
          transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition
        />
      ))}
    </div>
  );
};

const ZoomIcons = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-hidden">
      {Array.from({ length: 5 }).map((_, index) => {
        const angle = (index * 72 * Math.PI) / 180; // 5 icons in a circular layout

        return (
          <motion.div
            key={index}
            initial={{ x: 0, y: 0, scale: 0 }}
            animate={{
              x: [0, Math.cos(angle) * 220, 0], // Move outward and return
              y: [0, Math.sin(angle) * 220, 0],
              scale: [0.5, 1, 0], // Zoom in & out effect
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-[#788199] text-4xl"
          >
            <FaUser />
          </motion.div>
        );
      })}
    </div>
  );
};
