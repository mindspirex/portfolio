"use client";

import Link from "next/link";

export default function Navbar() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="container flex h-20 items-center justify-center md:justify-between border-white font-bold">
      <h1 className="text-2xl font-semibold hidden md:inline">Sanskar Kumar</h1>
      <div className="flex text-lg">
        <Link href="#" className="px-3 sm:px-5 hover:text-blue-500">
          Home
        </Link>
        <Link href="/resume" className="px-3 sm:px-5 hover:text-blue-500">
          Resumé
        </Link>
        <Link
          onClick={scrollToBottom}
          href="#"
          className="px-3 sm:px-5 hover:text-blue-500"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
