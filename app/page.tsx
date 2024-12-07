import Image from "next/image";
import hi from "@/assets/Hi.png";
import gradient from "@/assets/gradient.png";

import { Iceland } from "next/font/google";
import Link from "next/link";

const iceland = Iceland({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`${iceland.className} flex flex-col md:flex-row  justify-center items-center gap-6 w-full h-screen relative`}
    >
      <Image
        src={gradient}
        alt=" gradient"
        className=" absolute top-0 right-0"
      />
      <Image src={hi} alt="hi" className="md:w-[12vw] w-[20vw]" />
      <div className="max-w-md mx-4 space-y-4 flex flex-col items-center md:items-start">
        <h3 className="text-xl">Welcome to my personal website.</h3>
        <p>
          I have created this website to feel like a game/sci-fi interface. All
          text inside tries to reflect this.
        </p>
        <p>
          You will find ‘achievements’ or ‘quests’ that show the progress in my
          professional life and are related to what I am working on.
        </p>
        <Link href={"/home"}>
          <button className="uppercase text-red-500 border-red-500 border p-2 text-sm">
            Enter the system
          </button>
        </Link>
      </div>
    </div>
  );
}
