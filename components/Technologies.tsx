import Image from "next/image";
import react from "@/images/technologies/react.svg";
import tailwind from "@/images/technologies/tailwind.svg";
import git from "@/images/technologies/git.svg";
import html from "@/images/technologies/html.svg";
import node_js from "@/images/technologies/node_js.svg";
import javascript from "@/images/technologies/javascript.svg";
import typescript from "@/images/technologies/typescript.svg";
import css from "@/images/technologies/css.svg";
import python from "@/images/technologies/python.svg";
import numpy from "@/images/technologies/numpy.svg";
import matplotlib from "@/images/technologies/matplotlib.svg";
import latex from "@/images/technologies/latex.svg";
import c from "@/images/technologies/c.svg";
import cpp from "@/images/technologies/cpp.svg";

export default function Technologies() {
  return (
    <section className="container flex flex-col py-24 border-b gap-10">
      <div className="flex items-center gap-3">
        <svg width="30" height="30">
          <polygon points="0,30 30,30 15,0" fill="#5dda42" />
        </svg>
        <h1 className="font-semibold sm:text-5xl text-4xl">Technologies</h1>
      </div>
      <div className="flex flex-wrap gap-5 md:gap-10 text-xs md:text-lg">
        <div className="flex h-14 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image src={react} alt="react" className="w-[48px] h-[48px]" />
          <p className="">React</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image src={tailwind} alt="tailwind" className="w-[48px] h-[48px]" />
          <p>Tailwind</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image src={git} alt="git" className="w-[48px] h-[48px]" />
          <p>Git</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image src={css} alt="css" className="w-[48px] h-[48px]" />
          <p>CSS</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image
            src={javascript}
            alt="javascript"
            className="w-[48px] h-[48px]"
          />
          <p>Javascript</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image
            src={typescript}
            alt="typescript"
            className="w-[48px] h-[48px]"
          />
          <p>Typescript</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image src={html} alt="html" className="w-[48px] h-[48px]" />
          <p>HTML</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image src={node_js} alt="node js" className="w-[48px] h-[48px]" />
          <p>Node.js</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image src={latex} alt="latex" className="w-[48px] h-[48px]" />
          <p>Latex</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image src={python} alt="python" className="w-[48px] h-[48px]" />
          <p>Python</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image src={numpy} alt="numpy" className="w-[48px] h-[48px]" />
          <p>Numpy</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image
            src={matplotlib}
            alt="matplotlib"
            className="w-[48px] h-[48px]"
          />
          <p>Matplotlib</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image src={c} alt="C" className="w-[48px] h-[48px]" />
          <p>C</p>
        </div>
        <div className="flex h-16 w-36 rounded-lg bg-[#f9fafb] items-center pl-3 gap-4 md:w-44">
          <Image src={cpp} alt="C++" className="w-[48px] h-[48px]" />
          <p>C++</p>
        </div>
      </div>
    </section>
  );
}
