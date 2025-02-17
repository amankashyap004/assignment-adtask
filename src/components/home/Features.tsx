import React from "react";
import SectionHeading from "../SectionHeading";
import Container from "../layout/Container";
import Image from "next/image";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-8 md:gap-16">
      <SectionHeading
        name="Features"
        title="Feature packed to make"
        subTitle="Digital marketing easier and affordable."
        paragraph="Experience Intelligent Features to optimize your marketing efforts."
      />
      <Container>
        <div>
          <section></section>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
              <div className=" order-1">
                <FeatureCard
                  imageSrc="/images/home/feature-1.png"
                  imageClassName="w-3/4"
                  title="Reach Target Audience"
                  description="Pinpoint the perfect audience with precision. Our AI-driven targeting ensures every message resonates where it matters most."
                />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-1 order-3 lg:order-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                <FeatureCard
                  imageSrc="/images/home/feature-2.png"
                  imageClassName="flex justify-end items-center w-3/4"
                  title="Marketing made Easier"
                  description="Save time and simplify campaign management. Let automated workflows handle the heavy lifting, so you can focus on creativity."
                />
                <FeatureCard
                  imageSrc="/images/home/feature-3.png"
                  imageClassName="w-3/4"
                  title="Smart Marketing Insights"
                  description="Unlock actionable data to guide every decision. Stay ahead of trends, refine your strategies, and make confident moves with powerful analytics."
                />
              </div>
              <div className="order-2 lg:order-3">
                <FeatureCard
                  imageSrc="/images/home/feature-4.png"
                  imageClassName="w-3/4"
                  title="Intelligent Agents to Optimize your Reach"
                  description="Scale and refine your marketing with AI-powered agents. They track performance in real-time to help you reach more customers efficiently."
                />
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Features;

interface FeatureCardProps {
  imageSrc: string;
  imageClassName?: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  imageClassName,
  title,
  description,
}) => {
  return (
    <div className="relative bg-gradient-to-l from-[#7687B5] to-[#333B4F] p-px rounded-2xl h-full max-h-[630px]">
      <div className="flex flex-col justify-between items-center gap-4 p-4 md:p-8 bg-gradient-to-tl from-[#0B0B0B] to-[#1D2333] rounded-2xl relative overflow-hidden h-full">
        {/* Background Decoration */}
        {/* <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full h-full z-10">
          <div className="relative">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-[#7687B5] to-[#333B4F] w-0 h-0 blur-2xl opacity-40
              border-l-[200px] border-l-transparent border-b-[150px] border-t-transparent border-r-[200px] border-r-transparent border-[#7687B5]"
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-[#7687B5] to-[#333B4F] w-0 h-0 blur-2xl opacity-50 
              border-l-[150px] border-l-transparent border-b-[100px] border-t-transparent border-r-[150px] border-r-transparent border-[#0C0C0C]"
            ></div>
          </div>
        </div> */}

        <div className="flex justify-center items-center h-full z-20">
          <div className={`w-auto ${imageClassName}`}>
            <Image
              src={imageSrc}
              alt={title}
              width={400}
              height={350}
              quality={100}
              className="object-contain w-full"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-sm bg-gradient-to-r from-white to-[#5C73AE] bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};
