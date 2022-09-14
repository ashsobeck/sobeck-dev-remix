import { Link } from "@remix-run/react";
import { Hero } from "~/components/Hero";
import { Projects } from "~/components/Projects";
import { Mission } from "~/components/Mission";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div
        className=" w-full"
      >
        <Hero />
        <Mission />
        <div
          className="w-inherit flex justify-center items-center"
        >
          <Projects />
        </div>
      </div>

    </main>
  );
}
