import React from "react";

interface SectionHeadingProps {
  name?: string;
  title?: string;
  subTitle?: string;
  paragraph?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  name,
  title,
  subTitle,
  paragraph,
  className,
}) => {
  return (
    <div
      className={`lg:px-20 flex justify-center items-center gap-px md:gap-4 w-full ${className}`}
    >
      <div className="bg-gradient-to-r from-[#0D111A] to-[#5C73AE] h-px w-[15%] md:w-1/5 lg:w-1/4" />
      <div className="flex flex-col justify-center items-center gap-4 md:gap-8 w-[85%] md:w-3/5 lg:w-1/2">
        <section>
          <div className="px-6 py-2 bg-gradient-to-r from-[#8E8D8D]/20 to-[#282828]/20 border border-white/5 rounded-2xl overflow-hidden">
            <p className="uppercase font-medium text-xs">{name}</p>
          </div>
        </section>
        <section>
          <div className="flex flex-col justify-center items-center text-center font-medium text-xl md:text-3xl">
            <h2>{title}</h2>
            <h2 className="bg-gradient-to-tr from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] bg-clip-text text-transparent">
              {subTitle}
            </h2>
          </div>
        </section>
        <section className="text-center">
          <p className="text-[10px] md:text-sm text-[#E2E8F8]">{paragraph}</p>
        </section>
      </div>
      <div className="bg-gradient-to-l from-[#0D111A] to-[#5C73AE] h-px w-[15%] md:w-1/5 lg:w-1/4" />
    </div>
  );
};

export default SectionHeading;
