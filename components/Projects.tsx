import Image from "next/image";
import Link from "next/link";
import zerodha from "@/images/zerodha.png";
import starbucks from "@/images/starbucks.png";
import abacus from "@/images/abacus.png";

export default function Projects() {
  return (
    <section className="container flex flex-col py-20 border-b gap-5">
      <div className="flex items-center gap-3">
        <svg width="30" height="30">
          <polygon points="0,30 30,30 15,0" fill="#5dda42" />
        </svg>
        <h1 className="font-semibold sm:text-5xl text-4xl">Projects</h1>
      </div>
      <div className="flex flex-wrap gap-5">
        <Link href="https://zerodhaclone-7yosxrk8m-mindspirexs-projects.vercel.app/">
          <div className="flex flex-col rounded-lg border items-center justify-center">
            <Image src={zerodha} alt="zerodha" className="border-b w-[500px]" />
            <h3 className="py-5 text-xl">Zerodha Clone</h3>
          </div>
        </Link>
        <Link href="https://starbucksclone-r8rqv0jr7-mindspirexs-projects.vercel.app/">
          <div className="flex flex-col rounded-lg border items-center justify-center">
            <Image
              src={starbucks}
              alt="zerodha"
              className="border-b w-[500px]"
            />
            <h3 className="py-5 text-xl">Starbucks Clone</h3>
          </div>
        </Link>
        <Link href="https://abacus-oc1enlmpt-mindspirexs-projects.vercel.app/">
          <div className="flex flex-col rounded-lg border items-center justify-center">
            <Image src={abacus} alt="zerodha" className="border-b w-[500px]" />
            <h3 className="py-5 text-xl">Abacus Practice</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}
