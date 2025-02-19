import React from "react";
import SectionHeading from "../SectionHeading";
import Container from "../layout/Container";

const Testimonial = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full gap-8 md:gap-16 lg:gap-24">
      <div className="absolute top-52 md:top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9] opacity-50 w-52 h-32 md:w-[350px] md:h-52 blur-3xl rounded-full"></div>
      <div className="absolute top-52 md:top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#263048] w-60 h-40 md:w-[450px] md:h-60 blur-3xl rounded-full"></div>
      <SectionHeading
        name="Testimonials"
        title="Trusted by"
        subTitle="Trusted by satisfied clients"
        paragraph="Discover how we’ve driven growth and innovation."
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              message={testimonial.message}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;

interface TestimonialCardProps {
  message: string;
  name: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ message, name }) => {
  return (
    <div className="relative bg-gradient-to-l from-[#7687B5] to-[#333B4F] p-px rounded-2xl h-full">
      <div className="flex flex-col gap-4 md:gap-6 p-4 md:p-8 bg-gradient-to-tl from-[#0B0B0B] to-[#131313] rounded-2xl relative overflow-hidden h-full">
        <p className="text-sm text-[#C5CDE3]">{message}</p>
        <p className="text-sm font-medium">{name}</p>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "- Brand Director at a Tech Startup",
    message:
      "“We used to struggle with consistent branding across platforms. adTask's unified dashboard ensures our message stays on point every single time.”",
  },
  {
    name: "- Head of Growth at Tech Startup",
    message:
      "“adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!”",
  },
  {
    name: "- Ecommerce Manager at Home Décor Brand",
    message:
      "“We've tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!”",
  },
  {
    name: "- Digital Strategist at SaaS Company",
    message:
      "“What impressed me most was the real-time optimization. adTask's intelligent agents just keep refining our campaigns—our ad spend has never worked harder!”",
  },
  {
    name: "- Social Media Lead at Non-Profit Organization ",
    message:
      "“adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers.”",
  },
  {
    name: "- Social Media Manager at a Fitness Brand",
    message:
      "“We've seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!”",
  },
];
