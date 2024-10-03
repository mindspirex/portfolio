import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="container flex flex-col gap-6 py-14">
      <div className="flex items-center gap-3">
        <svg width="30" height="30">
          <polygon points="0,30 30,30 15,0" fill="#5dda42" />
        </svg>
        <h1 className="sm:text-5xl text-4xl font-semibold">Contact</h1>
      </div>
      <div className="flex flex-wrap gap-8 ml-14 text-lg font-bold">
        <Link href="https://www.linkedin.com/in/sanskar-kumar-85800b214/">
          LinkedIn
        </Link>
        <Link href="mailto:ksanskar.kumar@gmail.com">Email</Link>
        <Link href="https://github.com/mindspirex">Github</Link>
        <Link href="https://leetcode.com/u/sanskar3">Leetcode</Link>
      </div>
    </section>
  );
}
