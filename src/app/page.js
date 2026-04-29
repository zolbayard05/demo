import Image from "next/image";
import Hero from "@/components/Hero";
import ContentCardContainer from "@/components/ContentCardContainer";

let Home = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <ContentCardContainer />
    </main>
  );
};

export default Home;
