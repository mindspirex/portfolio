import Image from "next/image";
import hello from "@/images/hello.png";
import computer from "@/images/computer.png";

export default function Hello() {
  return (
    <section className="container flex justify-start lg:justify-evenly border-b pb-16 pt-10 lg:pt-28 lg:pb-40 gap-10">
      <Image
        src={hello}
        alt="hello"
        className="h-[358px] w-[387px] hidden lg:inline"
      />
      <div className="flex flex-col justify-end gap-5 py-4">
        <h1 className="text-7xl font-bold text-[#FF5925]">Hello!</h1>
        <div className="flex flex-col gap-3">
          <p className="text-5xl">I'm Sanskar, a</p>
          <div className="flex gap-7">
            <p className="text-5xl">software developer</p>
            <Image
              src={computer}
              alt="computer"
              className="h-[50px] w-[74px] hidden lg:inline"
            />
          </div>
          <p className="text-5xl">based in Gurugram.</p>
        </div>
      </div>
    </section>
  );
}
