import React from "react";

const MovingBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full lg:w-[800px] h-52 md:h-[450px] lg:h-[500px] overflow-hidden text-[#E2E8F8] rounded-3xl">
      <div className="absolute inset-0 bg-[conic-gradient(transparent_270deg,#7687B5,transparent)] w-full h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-rotate-border rounded-full" />
      <div className="absolute inset-[1px] bg-gradient-to-t from-[#333B4F]/20 to-[#566999]/20 rounded-3xl flex items-center justify-center "></div>
      <div className="absolute inset-1 bg-[#7687B5]/30 rounded-3xl flex items-center justify-center z-30">
        {children}
      </div>
    </div>
  );
};

export default MovingBorder;
