import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export default function About() {
  return (
    <section className="w-full py-12 lg:py-24">
      <div className="container flex flex-col items-center space-y-6 px-4 md:px-6 lg:space-y-10">
        <div className="space-y-2 text-center">
          <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-800">
            About Me
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Hi, I&apos;m Abdullah Saud
          </h2>
        </div>
        <div className="grid max-w-[700px] items-center gap-4 text-center lg:grid-cols-2">
          <div className="mx-auto w-full max-w-[400px] lg:max-w-none lg:h-[400px]">
                <Image
                  src="/me.png"
                  alt="Profile Picture"
                  className="w-full h-full object-cover rounded-full"
                  height="400"
                  width="400"
                />
              </div>
          <div className="space-y-4">
            <p className="text-gray-500 dark:text-gray-400">
              I&apos;m a cross platform developer, with a penchant for
              minimalist design. I love crafting dynamic user experiences and
              solving problems with algorithms and code. Currently an associate software engineer at
              <a href="https://yavr.io" className="text-[#069b63]"> Yavrio</a>.
            </p>
            <ul className="grid grid-cols-1 gap-2 text-center md:grid-cols-2 md:gap-4">
              <Badge variant="outline" className="inline-flex items-center justify-center py-3 md:py-2">Cross Platform Development</Badge>
              <Badge variant="outline" className="inline-flex items-center justify-center py-3 md:py-2">React / React Native</Badge>
              <Badge variant="outline" className="inline-flex items-center justify-center py-3 md:py-2">Typescript {'>'} JavaScript</Badge>
              <Badge variant="outline" className="inline-flex items-center justify-center py-3 md:py-2">Express / Flask</Badge>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
