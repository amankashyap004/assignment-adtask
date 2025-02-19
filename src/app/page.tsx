import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import VideoSection from "@/components/home/VideoSection";
import Features from "@/components/home/Features";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";
import ContactUs from "@/components/home/ContactUs";
import DigitalPresence from "@/components/home/DigitalPresence";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <Layout>
      <main className="relative flex flex-col gap-16 md:gap-24 lg:gap-32 w-full">
        <div>
          <HeroSection />
          <VideoSection />
        </div>
        <Features />
        <Services />
        <Testimonial />
        <ContactUs />
        <DigitalPresence />
        <ChatBot />
      </main>
    </Layout>
  );
}
