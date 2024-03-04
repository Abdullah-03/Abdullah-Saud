import Image from "next/image";
import TypingEffect from "@/components/typingEffect";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col max-w-full md:max-w-5xl mt-32 mx-auto items-center">
      {/* Hero section */}
      <>
        <div className="flex flex-col text-center">
          <div className="font-bold text-6xl md:text-8xl">
            <span className="text-blue-500 tracking-wider">Fullstack</span>{" "}
            Engineer
          </div>
          <div className="-ml-24 text-xl md:text-4xl mt-5 md:-ml-24">
            Powered by coffee and{" "}
            <span className="-mt-3 md:-mt-0 absolute ml-2 md:ml-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              <TypingEffect />
            </span>
          </div>

          <div className="mt-12 text-base md:text-lg px-4 italic">
            I&apos;m an undergrad senior studying computer science at FAST
            NUCES. I love building fullstack applications using Next.js, React,
            and Express. When I&apos;m not on the lookout for the next best JS{" "}
            <a
              href="https://dayssincelastjavascriptframework.com/"
              className="underline text-blue-500"
            >
              framework
            </a>{" "}
            I spend my time learning Go and building side projects using Python.
            Currently working on a production android app using React Native.
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
      </>

      {/* Project section */}

      <div className="flex flex-col mt-14 w-full items-center">
        <div className="font-bold text-6xl mb-14 underline">Projects</div>
        <div className="flex flex-col max-w-[90%] md:flex-row justify-between mb-14">
          <div className="font-semibold flex flex-col mt-10 md:w-[50%]">
            <div className="text-blue-500 text-4xl relative">LiTa<Badge variant="outline" className="absolute left-14 bottom-8 bg-purple-200">Active Development</Badge></div>
            <div className="my-4">LiTa is a <span className="text-blue-600">Li</span>fe <span className="text-blue-600">T</span>r<span className="text-blue-600">a</span>cking app with a privacy first approach.
            Life tracking involves tracking elements of your life ranging from habits such as reading to 
            biodata such as steps taken and quality of sleep. In addition we also track user mood and in tandem
            the aim of this app will be to use machine learning to figure out trends between collected data and
             your well being. All data remains on your device with no online comunication with a server
             so you can be sure your data is safe. Oh, and did I mention the best part? Its open source!</div>
            <ul className="ml-2">
              <li className="border-l-2 border-zinc-400 pl-2 my-2">
                Frontend: React Native, Framer motion
              </li>
              <li className="border-l-2 border-zinc-400 pl-2 my-2">
                Backend: SQLite
              </li>
            </ul>
          </div>
          <div className=" bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 rounded-md p-2 aspect-auto">
            <Image
              src="/phone-mockup.png"
              alt="its a me"
              quality={100}
              width={1480}
              height={2740}
              className="rounded-md w-[300px] shadow-2xl ring-1 ring-gray-900/10 m-auto"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse max-w-[90%] md:flex-row justify-between mb-14">
          <div className=" bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 rounded-md p-2">
            <Image
              src="/bookstore.png"
              alt="its a me"
              quality={100}
              width={1920}
              height={1080}
              className="rounded-md aspect-video w-[720px] shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
          <div className="font-semibold flex flex-col mt-10 text-right">
            <div className="text-blue-500 text-4xl">Bookstore</div>
            <ul className="ml-2">
              <li className="border-r-2 border-zinc-400 pr-2 my-2">
                Frontend: Alpine.js, HTMX
              </li>
              <li className="border-r-2 border-zinc-400 pr-2 my-2">
                Backend: Django, PostgreSQL
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col max-w-[90%] md:flex-row justify-between mb-14">
          <div className="font-semibold flex flex-col mt-10">
            <div className="text-blue-500 text-4xl">Compiler</div>
            <ul className="ml-2">
              <li className="border-l-2 border-zinc-400 pl-2 my-2">
                Roman Urdu Compiler
              </li>
              <li className="border-l-2 border-zinc-400 pl-2 my-2">
                Written in C++
              </li>
            </ul>
          </div>
          <div className=" bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 rounded-md p-2">
            <Image
              src="/compiler.png"
              alt="its a me"
              quality={100}
              width={1741}
              height={805}
              className="rounded-md aspect-video w-[720px] shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
