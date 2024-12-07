import { X } from "lucide-react";
import Link from "next/link";
import MusicController from "@/components/MusicController";
import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogFooter,
  DialogOverlay,
  DialogTitle,
} from "./ui/dialog";
import { Iceland } from "next/font/google";

interface Footer {
  title: string;
  description: string;
  href: string;
}

const iceland = Iceland({ weight: "400", subsets: ["latin"] });

const NavigationMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const footer: Footer[] = [
    {
      title: "Beginning",
      description:
        "Responsibility is to achieve nothing, to experience work often.",
      href: "/home",
    },
    {
      title: "Skills",
      description:
        "Skills are to sharpen the mind, to master the craft endlessly",
      href: "/home/skills",
    },
    {
      title: "Creations",
      description:
        "Creation is to build without limits, to experience effort repeatedly.",
      href: "/home/creations",
    },
    {
      title: "Achievements",
      description: "Development is to innovate without boundaries.",
      href: "/home/achievements",
    },
  ];

  return (
    <>
      {/* Mobile Navigation Menu */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay className="lg:hidden" />
        <DialogContent
          className={`${iceland.className} bg-black text-white w-full h-screen p-6 flex flex-col lg:hidden overflow-y-auto border-none`}
        >
          <DialogTitle>
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-lg uppercase tracking-widest">Navigation</h1>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close Navigation Menu"
                className="p-2 text-red-700 hover:text-red-500"
              >
                <X size={24} />
              </button>
            </div>
          </DialogTitle>
          <div className="flex flex-col gap-3 flex-grow">
            {footer.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="border-l border-red-700 w-full"
                onClick={() => setOpen(false)}
              >
                <h2 className="bg-red-700 p-1 text-white font-bold uppercase text-sm">
                  {item.title}
                </h2>
                <p className="text-gray-400 p-2 text-xs sm:text-sm">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
          <DialogFooter>
            <MusicController />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NavigationMenu;
