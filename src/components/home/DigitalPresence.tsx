import React from "react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { MovingBorderButton } from "../ui/MovingBorderButton";

const DigitalPresence = () => {
  return (
    <Container className="!px-0 lg:!px-20">
      <div className="relative flex flex-col justify-center items-center pt-8 pb-20 w-full h-full gap-14 md:gap-16 lg:gap-24">
        <section className="absolute top-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full h-full overflow-hidden -z-10">
          <div className="relative">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 blur-3xl mix-blend-plus-lighter
               border-l-[250px] border-r-[250px] border-b-[300px] border-t-transparent border-l-transparent border-r-transparent
               md:border-l-[350px] md:border-r-[350px] md:border-b-[400px] border-[#263048]"
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 blur-xl mix-blend-plus-lighter
               border-l-[200px] border-r-[200px] border-b-[300px] border-t-transparent border-l-transparent border-r-transparent
               md:border-l-[300px] md:border-r-[300px] md:border-b-[400px] border-[#0C0C0C]"
            ></div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <h2 className="bg-gradient-to-r from-[#E2E8F8] to-[#858992] bg-clip-text text-transparent text-5xl lg:text-8xl opacity-20 hover:opacity-100 stroke-white text-log transition-all duration-500">
            ad<span className="font-semibold">Task.</span>ai
          </h2>
        </section>
        <section className="relative flex flex-col justify-center items-center w-full h-full gap-8 md:gap-12">
          <div className="flex flex-col text-center font-medium text-xl md:text-3xl">
            <h2>Are you ready to boost </h2>
            <h2 className="bg-gradient-to-tr from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] bg-clip-text text-transparent">
              your Digital Presence?
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <MovingBorderButton>Start Free Trial</MovingBorderButton>
            <Button className="bg-transparent w-[185px] h-[48px]">
              Schedule a Call
            </Button>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default DigitalPresence;
