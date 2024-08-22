import Image from "next/image";
import green_triangle from "@/images/green_triangle.png";

export default function Projects() {
  return (
    <section className="container flex flex-col py-20 border-b gap-5">
      <div className="flex items-center gap-3">
        <Image
          src={green_triangle}
          alt="green triangle"
          className="h-[40px] w-[40px]"
        />
        <h1 className="font-semibold text-5xl">Projects</h1>
      </div>
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col gap-3 w-64 h-96 bg-gray-100"></div>
        <div className="flex flex-col gap-3 w-64 h-96 bg-gray-100"></div>
        <div className="flex flex-col gap-3 w-64 h-96 bg-gray-100"></div>
      </div>
    </section>
  );
}
