import Image from "next/image";
import Link from "next/link";
import green_triangle from "@/images/green_triangle.png";
import zerodha from "@/images/zerodha.png";
import starbucks from "@/images/starbucks.png";
import abacus from "@/images/abacus.png";

export default function Projects() {
  return (
    <section className="container flex flex-col py-20 border-b gap-5">
      <div className="flex items-censter gap-3">
        <Image
          src={green_triangle}
          alt="green triangle"
          className="h-[40px] w-[40px]"
        />
        <h1 className="font-semibold text-5xl">Projects</h1>
      </div>
      <div className="flex flex-wrap gap-5">
        <Link href="www.zerodha.sanskar.dev">
          <div className="flex flex-col rounded-lg border items-center justify-center">
            <Image src={zerodha} alt="zerodha" className="border-b w-[500px]" />
            <h3 className="py-5 text-xl">Zerodha Clone</h3>
          </div>
        </Link>
        <Link href="www.starbucks.sanskar.dev">
          <div className="flex flex-col rounded-lg border items-center justify-center">
            <Image
              src={starbucks}
              alt="zerodha"
              className="border-b w-[500px]"
            />
            <h3 className="py-5 text-xl">Starbucks Clone</h3>
          </div>
        </Link>
        <Link href="www.abacus.sanskar.dev">
          <div className="flex flex-col rounded-lg border items-center justify-center">
            <Image src={abacus} alt="zerodha" className="border-b w-[500px]" />
            <h3 className="py-5 text-xl">Abacus Practice</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}
