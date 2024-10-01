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
    <section className="container flex h-20 items-center sm:justify-between justify-center font-bold">
      <Link href="/" className="text-2xl font-semibold hidden sm:inline">
        Sanskar Kumar
      </Link>
      <div className="flex text-lg">
        <Link href="/" className="px-5 hover:text-blue-500">
          Home
        </Link>
        <Link href="/resume" className="px-5 hover:text-blue-500">
          Resumé
        </Link>
        <Link
          onClick={scrollToBottom}
          href="#"
          className="px-5 hover:text-blue-500"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
