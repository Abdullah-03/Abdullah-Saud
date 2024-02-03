import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <div className="flex flex-row backdrop-blur-lg max-w-full h-14 bg-white/75 sticky inset-x-0 top-0 z-30 justify-between px-12 border-b-2 border-zinc-300">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "default", size: "sm" }),
          "my-auto"
        )}
      >
        Abdullah Saud.
      </Link>
      <div className="flex flex-row w-1/3 justify-between my-auto">
        <Link
          href="about"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          About me
        </Link>
        <Link
          href="contact"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
