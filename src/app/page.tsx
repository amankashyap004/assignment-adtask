import HeroSection from "@/components/home/HeroSection";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col gap-16 lg:gap-20 w-full">
        <HeroSection />
        <div />
      </main>
    </Layout>
  );
}
