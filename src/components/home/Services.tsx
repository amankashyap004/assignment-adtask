import React from "react";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import Container from "../layout/Container";
import { MovingBorderButton } from "../ui/MovingBorderButton";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-8 md:gap-16 lg:gap-24">
      <SectionHeading
        name="SERVICES"
        title="Innovative Services"
        subTitle="for Growth."
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
          {sections.map((section, index) => (
            <div key={index} className="relative">
              <div className=" absolute left-1/2 -top-px transform -translate-x-1/2 bg-[#D9D9D9] w-8 h-1 z-20"></div>
              {/* Large screens */}
              <div className="md:hidden ">
                <BorderDecorations hide={section.hideBorder} />
                <FrameLines hide={section.hideFrame} />
              </div>

              {/* Medium screens */}
              <div className="hidden md:block lg:hidden">
                <BorderDecorations hide={section.hideBorderM} />
                <FrameLines hide={section.hideFrameM} />
              </div>

              {/* Medium to large screens */}
              <div className="hidden lg:block">
                <BorderDecorations hide={section.hideBorderL} />
                <FrameLines hide={section.hideFrameL} />
              </div>

              <StyledSection
                image={section.image}
                title={section.title}
                description={section.description}
              />
            </div>
          ))}
        </div>
      </Container>
      <div>
        <MovingBorderButton>Contact Us</MovingBorderButton>
      </div>
    </div>
  );
};

export default Services;

const DotGrid = () => (
  <div className="grid grid-cols-2 gap-x-1.5 gap-y-4 bg-gradient-to-b from-[#333B4F] to-[#7687B5] p-1 rounded">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="flex justify-center items-center w-0.5 h-0.5 rounded-full bg-[#D9D9D9]"
      ></div>
    ))}
  </div>
);

const BorderDecorations = ({ hide = [] }: { hide?: number[] }) => {
  const positions = [
    { pos: "-left-4 -top-4", id: 1 },
    { pos: "-right-4 -top-4", id: 2 },
    { pos: "-left-4 -bottom-4", id: 3 },
    { pos: "-right-4 -bottom-4", id: 4 },
  ];

  return (
    <>
      {positions.map(({ pos, id }) =>
        hide.includes(id) ? null : (
          <div key={id} className={`absolute ${pos}`}>
            <DotGrid />
          </div>
        )
      )}
    </>
  );
};

const FrameLine = ({
  position,
  orientation,
}: {
  position: string;
  orientation: string;
}) => {
  const gradient = "bg-gradient-to-b from-[#263048] via-[#5C73AE] to-[#263048]";
  const commonStyles = "absolute transform ";

  const styles =
    orientation === "vertical"
      ? `w-0.5 h-[70%] ${gradient} ${position} top-1/2 -translate-y-1/2`
      : `w-[70%] h-0.5 ${gradient} ${position} left-1/2 -translate-x-1/2`;

  return <div className={commonStyles + styles}></div>;
};

const FrameLines = ({ hide = [] }: { hide?: number[] }) => {
  const positions = [
    { pos: "-left-2", id: 1, orientation: "vertical" },
    { pos: "-right-2", id: 2, orientation: "vertical" },
    { pos: "-top-0", id: 3, orientation: "horizontal" },
    { pos: "-bottom-2", id: 4, orientation: "horizontal" },
  ];

  return (
    <>
      {positions.map(({ pos, id, orientation }) =>
        hide.includes(id) ? null : (
          <FrameLine key={id} position={pos} orientation={orientation} />
        )
      )}
    </>
  );
};

const StyledSection = ({ image, title, description }: any) => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-4 z-20 px-4 py-16 lg:p-16">
      <section className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full h-full -z-10">
        <div className="relative">
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 blur-3xl mix-blend-plus-lighter
          border-t-transparent border-l-transparent border-r-transparent border-[#263048]
          border-l-[150px] border-r-[150px] border-b-[200px] md:border-l-[150px] md:border-r-[150px] md:border-b-[210px]`}
          ></div>
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 blur-xl mix-blend-plus-lighter
          border-t-transparent border-l-transparent border-r-transparent border-[#0C0C0C] 
          border-l-[120px] border-r-[120px] border-b-[210px] md:border-l-[120px] md:border-r-[120px] md:border-b-[220px]`}
          ></div>
        </div>
      </section>
      <div className="w-16">
        <Image
          src={image}
          alt=""
          width={400}
          height={350}
          quality={100}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h3 className="font-semibold text-sm bg-gradient-to-r from-white to-[#5C73AE] bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

const sections = [
  {
    hideBorderL: [4],
    hideFrameL: [4],
    hideBorderM: [],
    hideFrameM: [4],
    hideBorder: [],
    hideFrame: [4],
    image: "/images/icons/icon-service-1.png",
    title: "Smart Ad Targeting",
    description:
      "AI-powered audience segmentation ensures your ads reach the right people, delivering higher ROI and maximum conversion rates.",
  },
  {
    hideBorderL: [1, 3, 4],
    hideFrameL: [1, 4],
    hideBorderM: [1, 3],
    hideFrameM: [1, 4],
    hideBorder: [1, 2],
    hideFrame: [4],
    image: "/images/icons/icon-service-2.png",
    title: "AI-Powered Analytics",
    description:
      "Leverage artificial intelligence to gain deep insights into customer behavior and improve campaign strategies.",
  },
  {
    hideBorderL: [1, 3],
    hideFrameL: [1, 4],
    hideBorderM: [1, 2],
    hideFrameM: [4],
    hideBorder: [1, 2],
    hideFrame: [4],
    image: "/images/icons/icon-service-3.png",
    title: "Real-Time Reporting",
    description:
      "Get live updates and actionable insights with our real-time reporting dashboard to optimize performance.",
  },
  {
    hideBorderL: [1, 2],
    hideFrameL: [],
    hideBorderM: [1, 2, 3],
    hideFrameM: [1, 4],
    hideBorder: [1, 2],
    hideFrame: [4],
    image: "/images/icons/icon-service-4.png",
    title: "Automated Campaigns",
    description:
      "Set up and run automated campaigns that reach your audience at the perfect time for maximum engagement.",
  },
  {
    hideBorderL: [1, 2, 3],
    hideFrameL: [1],
    hideBorderM: [1, 2],
    hideFrameM: [],
    hideBorder: [1, 2],
    hideFrame: [4],
    image: "/images/icons/icon-service-5.png",
    title: "Cross-Platform Integration",
    description:
      "Seamlessly integrate your campaigns across multiple platforms for a unified and powerful marketing strategy.",
  },
  {
    hideBorderL: [1, 2, 3],
    hideFrameL: [1],
    hideBorderM: [1, 2, 3],
    hideFrameM: [1],
    hideBorder: [1, 2],
    hideFrame: [],
    image: "/images/icons/icon-service-6.png",
    title: "Performance Optimization",
    description:
      "Optimize your campaigns with cutting-edge techniques to ensure maximum reach and impact.",
  },
];
