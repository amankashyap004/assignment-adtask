import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Container from "../layout/Container";
import MovingBorder from "../ui/MovingBorder";

const VideoSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full gap-16 md:gap-24">
      <div className="absolute top-2/3 md:top-2/3 -left-1/2 md:-left-72 transform -translate-y-1/2 bg-[#263048] w-[450px] h-[450px] md:w-[600px] md:h-[600px] blur-[100px] opacity-50 rounded-full"></div>
      <section className="w-full">
        <Container>
          <MovingBorder>
            <div className="relative w-full h-full rounded-3xl">
              <div className="flex justify-center items-center w-full h-full bg-black rounded-3xl">
                <div className="w-44 md:w-80 pb-8 md:pb-16">
                  <Image
                    src="/images/logo-video.png"
                    alt="Hero Image"
                    width={300}
                    height={100}
                    quality={100}
                    className="object-contain w-full"
                  />
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 md:w-16">
                    <Image
                      src="/images/icons/icon-youtube.png"
                      alt="Hero Image"
                      width={200}
                      height={100}
                      quality={100}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </MovingBorder>
        </Container>
      </section>
      <section className="w-full">
        <div className="flex justify-center items-center w-full gap-16 md:gap-28 overflow-auto">
          <Marquee className="flex justify-center items-center w-full gap-16 md:gap-28">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 md:w-20 me-16 md:me-40"
              >
                <Image
                  src={brand}
                  alt=""
                  width={200}
                  height={100}
                  quality={100}
                  className="object-contain w-full"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      <section>
        <Container>
          <div className="flex flex-col justify-center items-center gap-10 md:gap-16">
            <div>
              <p className="text-[#E2E8F8] text-sm lg:text-base">
                Adtask AI works with :
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-4 lg:gap-12">
              {brandIcons.map((brand, index) => (
                <div
                  key={index}
                  className="group flex flex-col justify-center items-center gap-1 md:gap-2"
                >
                  <div className="flex flex-col justify-center items-center gap-2 group-hover:-translate-y-4 md:group-hover:-translate-y-8 transition-all duration-300">
                    <div className=" flex justify-center items-center w-24 md:w-24 lg:w-32 ">
                      <Image
                        src={brand.image}
                        alt=""
                        width={200}
                        height={100}
                        quality={100}
                        className="object-contain w-full"
                      />
                    </div>
                    <div className="md:invisible group-hover:visible transition-all duration-300 ease-in">
                      <p className="text-xs md:text-sm">{brand.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default VideoSection;

const brands = [
  "/images/brand-logo/logo-amazon.png",
  "/images/brand-logo/logo-cocacola.png",
  "/images/brand-logo/logo-google.png",
  "/images/brand-logo/logo-intel.png",
  "/images/brand-logo/logo-salesforce.png",
  "/images/brand-logo/logo-sony.png",
  "/images/brand-logo/logo-workday.png",
  "/images/brand-logo/logo-amazon.png",
  "/images/brand-logo/logo-cocacola.png",
  "/images/brand-logo/logo-google.png",
  "/images/brand-logo/logo-intel.png",
  "/images/brand-logo/logo-salesforce.png",
  "/images/brand-logo/logo-sony.png",
  "/images/brand-logo/logo-workday.png",
];

const brandIcons = [
  {
    name: "Google Ads",
    image: "/images/brand-logo/brand-icon-1.png",
  },
  {
    name: "Tik Tok Ads",
    image: "/images/brand-logo/brand-icon-2.png",
  },
  {
    name: "Meta",
    image: "/images/brand-logo/brand-icon-3.png",
  },
  {
    name: "Linkedin Ads",
    image: "/images/brand-logo/brand-icon-4.png",
  },
  {
    name: "Amazon Ads",
    image: "/images/brand-logo/brand-icon-5.png",
  },
  {
    name: "X/Twitter",
    image: "/images/brand-logo/brand-icon-6.png",
  },
];
