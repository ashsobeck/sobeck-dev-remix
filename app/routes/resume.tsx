import { Link } from "@remix-run/react";

export const links = () => [
  {
    rel: "preload",
    href: "/static/resume.pdf",
    as: "pdf",
    type: "pdf"
  }
];

export default function Resume() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="w-[98vw] h-[96vh]">
        <embed src='/static/resume.pdf' className="w-full h-[98vh]"></embed>
      </div>
    </main>
  );
}