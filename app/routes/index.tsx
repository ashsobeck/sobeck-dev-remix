import { Link } from "@remix-run/react";
import { Hero } from "~/components/Hero";
import { Projects } from "~/components/Projects";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div
        className=" w-full"
      >
        <Hero />
        <Projects />
      </div>

    </main>
  );
}
