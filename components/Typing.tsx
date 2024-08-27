import Image from "next/image";
import green_triangle from "@/images/green_triangle.png";
import typing1 from "@/images/typing1.png";
import typing2 from "@/images/typing2.png";

export default function Typing() {
  return (
    <section className="container flex flex-col border-b py-16 gap-5">
      <div className="flex items-center gap-3">
        <Image
          src={green_triangle}
          alt="green triangle"
          className="h-[40px] w-[40px]"
        />
        <h1 className="text-5xl font-semibold">Typing</h1>
      </div>
      <div className="flex flex-wrap gap-5">
        <Image src={typing1} alt="typing" className="rounded-lg w-[500px]" />
        <Image src={typing2} alt="typing" className="rounded-lg w-[500px]" />
      </div>
    </section>
  );
}
