import HomePage from "@/components/HomePage";
import { Macbook } from "@/components/Macbook";

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen antialiased text-white dark:bg-grid-white/[0.08]  bg-grid-white/[0.02]"
        id="home"
      >
        {/* Intro */}
        <HomePage />

        {/* macbook */}
        <Macbook />

        {/* <HomePage /> */}
      </main>
    </>
  );
}
