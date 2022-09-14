import { Link } from "@remix-run/react";

export default function Resume() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="w-full min-h-screen">
        <embed src='/static/resume.pdf' className="w-full h-[98vh]"></embed>
      </div>
    </main>
  );
}