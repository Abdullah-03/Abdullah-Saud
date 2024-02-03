import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col max-w-5xl mt-32 mx-auto items-center">
      <div className="flex flex-col text-center">
        <div className="font-bold text-8xl">
          <span className="text-blue-500 tracking-wider">Fullstack</span>{" "}
          Engineer
        </div>
        <div className="mt-12 text-lg">
          I'm an undergrad senior studying computer science at FAST NUCES. I
          love building fullstack applications using Next.js, React, Express and
          a SQL or NoSQL database depending on project requirements. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Veritatis, at. Quod qui
          aperiam veritatis dolor vero sequi sapiente, pariatur, tempora
          consequatur aliquid eligendi quisquam perferendis quam unde, impedit
          labore magnam.
        </div>
      </div>

      <div className="mt-14 bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 rounded-full p-2">
        <Image
          src="/me.png"
          alt="its a me"
          quality={100}
          width={977}
          height={977}
          className="rounded-full aspect-square w-64 shadow-2xl ring-1 ring-gray-900/10"
        />
      </div>

      <div className="my-14 border-y rounded-xl h-32 w-1 bg-zinc-400/75"></div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-60 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-96 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
