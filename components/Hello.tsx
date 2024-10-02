import Image from "next/image";
import computer from "@/images/computer.png";

export default function Hello() {
  return (
    <section className="container flex justify-start lg:justify-evenly border-b pb-16 pt-10 lg:pt-28 lg:pb-40 gap-10">
      <svg
        width="375"
        height="325"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 hidden lg:inline-block"
      >
        <circle r="45" cx="62.5" cy="155" fill="#ff5924" />
        <rect width="125" height="125" x="125" y="75" fill="#3e84fc" />
        <rect width="125" height="125" x="250" y="75" fill="#ff5924" />
        <rect width="125" height="125" x="0" y="200" fill="#5dda42" />
        <rect width="125" height="125" x="125" y="200" fill="#ff5924" />
        <rect width="125" height="125" x="250" y="200" fill="#3e84fc" />
        <polygon points="125,200 375,200 250,0" fill="#5dda42" />
      </svg>
      <div className="flex flex-col justify-end gap-5 py-4">
        <h1 className="text-7xl font-bold text-[#FF5925]">Hello!</h1>
        <div className="flex flex-col gap-3 sm:text-5xl text-4xl">
          <p>I'm Sanskar, a</p>
          <div className="flex gap-7">
            <p>software developer</p>
            <Image
              src={computer}
              alt="computer"
              className="h-[50px] w-[74px] hidden lg:inline"
            />
          </div>
          <p>based in Noida, India.</p>
        </div>
      </div>
    </section>
  );
}
