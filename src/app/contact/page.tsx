'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Component() {
  const router = useRouter()
  return (
    <section className="w-full py-12 lg:py-24">
      <div className="container flex flex-col items-center space-y-6 px-4 md:px-6 lg:space-y-10">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Want to get in touch? Send me a message.
        </p>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <GithubIcon className="w-6 h-6" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">GitHub</h2>
              <p className="text-sm leading-none">You can reach me on GitHub</p>
            </div>
            <Button
              className="ml-20"
              variant="outline"
              onClick={() => router.push('https://github.com/Abdullah-03')}
            >
              Message on GitHub
            </Button>
          </div>
          <div className="flex items-start space-x-4">
            <MailIcon className="w-6 h-6" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-sm leading-none">You can reach me via email</p>
            </div>
            <a
              className="ml-auto flex items-center underline"
              href="mailto:abdullahsaud03@gmail.com"
              target="_blank"
            >
              abdullahsaud03@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        width="20"
        height="16"
        x="2"
        y="4"
        rx="2"
      />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
