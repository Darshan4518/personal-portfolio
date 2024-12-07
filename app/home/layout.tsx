import Footer, { MobileFooter } from "@/components/Footer";
import LeftSidebar from "@/components/LeftSideBar";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";
import { Iceland } from "next/font/google";
import Image from "next/image";
import gradient from "@/assets/gradient.png";

const iceland = Iceland({ weight: "400", subsets: ["latin"] });

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${iceland.className} min-h-screen flex flex-col relative`}>
      {/* Background Gradient */}
      <Image
        src={gradient}
        alt="gradient"
        className="absolute top-0 right-0 w-full max-w-lg opacity-50 pointer-events-none"
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex flex-1 lg:flex-row flex-col gap-4 mt-4 px-5 xl:px-8 relative">
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:w-1/4 max-w-[12vw]">
          <LeftSidebar />
        </div>

        {/* Main Children Content */}
        <div
          className="flex-1 overflow-y-auto h-auto relative"
          style={{
            backgroundImage: "url('/achivebg.png')",
          }}
        >
          {/* Top-left corner border */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-4 md:w-8  h-4 md:h-8 border-t-2 border-l-2 border-red-600" />
            <div className="absolute top-0 right-0 w-4 md:w-8  h-4 md:h-8 border-t-2 border-r-2 border-red-600" />
            <div className="absolute bottom-0 left-0 w-4 md:w-8  h-4 md:h-8 border-b-2 border-l-2 border-red-600" />
            <div className="absolute bottom-0 right-0 w-4 md:w-8  h-4 md:h-8 border-b-2 border-r-2 border-red-600" />
          </div>

          {/* Main content */}
          {children}
        </div>

        {/* Right Sidebar */}
        <div className="hidden xl:block lg:w-1/4 max-w-[14vw]">
          <RightSideBar />
        </div>
      </div>

      <div className="lg:hidden w-full">
        <LeftSidebar />
      </div>
      {/* Footer */}
      <Footer />
      <MobileFooter />
    </div>
  );
}
