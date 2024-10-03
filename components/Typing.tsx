import Image from "next/image";
import typing1 from "@/images/typing1.jpeg";
import typing2 from "@/images/typing2.jpeg";

export default function Typing() {
  return (
    <section className="container flex flex-col border-b py-16 gap-5">
      <div className="flex items-center gap-3">
        <svg width="30" height="30">
          <polygon points="0,30 30,30 15,0" fill="#5dda42" />
        </svg>
        <h1 className="sm:text-5xl text-4xl font-semibold">Typing</h1>
      </div>
      <div className="flex flex-wrap gap-5">
        <Image src={typing1} alt="typing" className="rounded-lg w-[500px]" />
        <Image src={typing2} alt="typing" className="rounded-lg w-[500px]" />
      </div>
    </section>
  );
}
