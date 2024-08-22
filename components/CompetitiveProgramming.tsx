import Image from "next/image";
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
        <h1 className="font-semibold text-5xl">Competitive Programming</h1>
      </div>
      <ol className="ml-14">
        <li>1616 contest rating on Leetcode</li>
        <li>Solved 200+ questions on Leetcode</li>
        <li>Solved 150+ questions on Codechef</li>
      </ol>
    </section>
  );
}
