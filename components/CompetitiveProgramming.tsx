import Image from "next/image";
import Link from "next/link";

export default function CompetitiveProgramming() {
  return (
    <section className="container border-b py-20 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <svg width="30" height="30">
          <polygon points="0,30 30,30 15,0" fill="#5dda42" />
        </svg>
        <h1 className="font-semibold text-4xl sm:text-5xl">
          Competitive Programming
        </h1>
      </div>
      <div className="flex flex-wrap ml-14 font-semibold gap-5">
        <Link
          href="https://leetcode.com/u/sanskar3"
          className="p-5 rounded-xl border"
        >
          <p>1616 Contest Rating on Leetcode</p>
        </Link>
        <Link
          href="https://leetcode.com/u/sanskar3"
          className="p-5 rounded-xl border"
        >
          <p>200+ Questions on Leetcode</p>
        </Link>
        <Link
          href="https://www.codechef.com/users/carbon64"
          className="p-5 rounded-xl border"
        >
          <p>150+ Questions on Codechef</p>
        </Link>
      </div>
    </section>
  );
}
