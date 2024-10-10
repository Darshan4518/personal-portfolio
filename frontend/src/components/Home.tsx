import { DockBar } from "./DockBar";
import Navbar from "./Navbar";
import GradualSpacing from "./ui/gradual-spacing";
import Particles from "./ui/particles";
import { RainbowButton } from "./ui/rainbow-button";
import TypingAnimation from "./ui/typing-animation";
import ProfileImg from "../assets/profile.png";

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen w-full z-50 overflow-hidden"
      id="home"
    >
      <Navbar />
      <div className="max-w-7xl mx-auto md:p-10 p-4 flex flex-col h-[80%] justify-between ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-6 md:mt-10 w-full">
          {/* Text Section */}
          <div className="w-full md:w-[50%] flex flex-col gap-3 justify-center items-center md:items-start">
            <div className="flex flex-col md:flex-row items-center gap-x-3">
              <GradualSpacing
                className="font-display text-center md:text-start text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.1em] text-white"
                text="Hi, I am"
              />
              <GradualSpacing
                className="font-display text-center md:text-start text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.1em] text-purple-500"
                text="Darshan"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-3">
              <GradualSpacing
                className="font-display text-center md:text-start text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.1em] text-white"
                text="I am a"
              />
              <TypingAnimation
                className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-500"
                text="Full Stack Developer"
              />
            </div>
            <p className="font-bold my-3 text-slate-300 text-center md:text-start p-2 md:p-0 max-w-lg">
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning, I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </p>
            <a
              href="https://drive.google.com/file/d/1DO541tW8wfMCwRcx2QCHdyj62TIAQHlM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="z-50"
            >
              <RainbowButton>Check Resume</RainbowButton>
            </a>
          </div>

          {/* Image Section */}
          <div className="w-full flex justify-center md:w-auto mb-6 md:mb-0">
            <img
              src={ProfileImg}
              width={800}
              height={800}
              alt="photo"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover"
            />
          </div>
        </div>
        <DockBar />
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
    </div>
  );
};

export default HeroSection;
