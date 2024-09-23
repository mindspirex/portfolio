import Image from "next/image";
import Link from "next/link";
import green_triangle from "@/images/green_triangle.png";

export default function CompetitiveProgramming() {
  return (
    <section className="container border-b py-20 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Image
          src={green_triangle}
          alt="green triangle"
          className="h-[40px] w-[40px]"
        />
        <h1 className="font-semibold text-4xl sm:text-5xl">
          Competitive Programming
        </h1>
      </div>
      <div className=" flex flex-col ml-14 font-semibold gap-3">
        <p>1616 contest rating on Leetcode</p>
        <p>Solved 200+ questions on Leetcode</p>
        <p>Solved 150+ questions on Codechef</p>
      </div>
    </section>
  );
}
