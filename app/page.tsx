import dynamic from "next/dynamic";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";

const SocialProof = dynamic(() =>
  import("@/components/sections/SocialProof").then((mod) => mod.SocialProof)
);
const Services = dynamic(() =>
  import("@/components/sections/Services").then((mod) => mod.Services)
);
const VideoSection = dynamic(() =>
  import("@/components/sections/VideoSection").then((mod) => mod.VideoSection)
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((mod) => mod.Testimonials)
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((mod) => mod.Contact)
);
const Footer = dynamic(() =>
  import("@/components/sections/Footer").then((mod) => mod.Footer)
);

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Services />
        <VideoSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
