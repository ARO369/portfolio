import dynamic from "next/dynamic";

// Import components that use client-side features with { ssr: false }
const AboutPage = dynamic(() => import("@/components/AboutPage"), {
  ssr: false,
});
const ContactPage = dynamic(() => import("@/components/ContactPage"), {
  ssr: false,
});
import { Footer } from "@/components/Footer";
import HomePage from "@/components/HomePage";
import { Macbook } from "@/components/Macbook";
const ProjectsPage = dynamic(() => import("@/components/ProjectsPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen antialiased text-white dark:bg-grid-white/[0.06] bg-grid-white/[0.02]"
        id="home"
      >
        {/* home */}
        <HomePage />

        {/* macbook */}
        <Macbook />

        {/* projects*/}
        <ProjectsPage />

        {/* About */}
        <AboutPage />

        {/* Contact Page */}
        <ContactPage />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
