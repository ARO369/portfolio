"use client";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import { Footer } from "@/components/Footer";
import HomePage from "@/components/HomePage";
import { Macbook } from "@/components/Macbook";
import ProjectsPage from "@/components/ProjectsPage";

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
        <div id="projects">
          <ProjectsPage />
        </div>

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
