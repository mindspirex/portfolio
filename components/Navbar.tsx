import Link from "next/link";

export default function Navbar() {
  return (
    <section className="container flex h-20 items-center justify-between border-white font-bold">
      <h1 className="text-2xl font-semibold">Sanskar Kumar</h1>
      <div className="flex text-lg">
        <Link href="#" className="px-5 hover:text-blue-500">
          Home
        </Link>
        <Link href="#" className="px-5 hover:text-blue-500">
          Projects
        </Link>
        <Link href="#" className="px-5 hover:text-blue-500">
          Resume
        </Link>
        <Link href="#" className="px-5 hover:text-blue-500">
          Contact
        </Link>
      </div>
    </section>
  );
}