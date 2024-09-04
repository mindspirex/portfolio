export default function Home() {
  return (
    <section className="container pt-10 flex flex-col gap-3">
      <h3 className="font-semibold text-2xl border-b py-3">Education</h3>
      <div className="flex flex-col">
        <h5 className="font-semibold">Cambridge School, Noida</h5>
        <p className="text-sm">
          Class 10th, Central Board of Secondary Education
        </p>
      </div>
      <div className="flex flex-col">
        <h5 className="font-semibold">The Vivekanand School, Delhi</h5>
        <p className="text-sm">
          Class 12th, Central Board of Secondary Education
        </p>
      </div>
      <div className="flex flex-col">
        <h5 className="font-semibold">
          Indian Institute of Information Technology, Kota
        </h5>
        <p className="text-sm">
          Btech, Artificial Intelligence and Data Engineering
        </p>
      </div>

      <h3 className="font-semibold text-2xl border-b py-3">Technologies</h3>
      <div className="flex flex-col">
        <h5 className="font-semibold">Languages</h5>
        <p className="text-sm">Python, C, C++, Javascript, Typescript</p>
      </div>
      <div className="flex flex-col">
        <h5 className="font-semibold">Frameworks and Libraries</h5>
        <p className="text-sm">React, Next, Tailwind</p>
      </div>
      <div className="flex flex-col">
        <h5 className="font-semibold">Other</h5>
        <p className="text-sm">LaTeX, HTML, CSS</p>
      </div>

      <h3 className="font-semibold text-2xl border-b py-3">Projects</h3>
      <div className="flex flex-col">
        <h5 className="font-semibold">Abacus Practice Website</h5>
        <p className="text-sm">HTML, CSS, Tailwind, Javascript, React, Next</p>
      </div>
      <div className="flex flex-col">
        <h5 className="font-semibold">Starbucks Clone</h5>
        <p className="text-sm">HTML, CSS, Tailwind, Javascript, React, Next</p>
      </div>
      <div className="flex flex-col">
        <h5 className="font-semibold">Zerodha Clone</h5>
        <p className="text-sm">HTML, CSS, Tailwind, Javascript, React, Next</p>
      </div>

      <h3 className="font-semibold text-2xl border-b py-3">My Qualities</h3>
      <p className="font-semibold">Idealist</p>
      <p className="font-semibold">Striving for perfection</p>
      <p className="font-semibold">Multitasker</p>
      <p className="font-semibold">Quick learner</p>

      <div className="border-b"></div>
    </section>
  );
}
