import Link from "next/link";
import Image from "next/image";
import green_triangle from "@/images/green_triangle.png";

export default function Contact() {
  return (
    <section className="container flex flex-col gap-6 py-14">
      <div className="flex items-center gap-3">
        <Image
          src={green_triangle}
          alt="green triangle"
          className="h-[40px] w-[40px]"
        />
        <h1 className="text-5xl font-semibold">Contact</h1>
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
