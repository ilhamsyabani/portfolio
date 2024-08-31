import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Work from "@/components/Work";
import Image from "next/image";
import Testimoni from "@/components/Testimoni";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Work />
     <Testimoni />
     <Cta />
    </main>
  );
}
