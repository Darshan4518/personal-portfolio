import { Loader } from "lucide-react";
import Meteors from "./ui/meteors";
import { lazy, Suspense } from "react";

const SkillsBox = lazy(() => import("./SkillsBox"));

const SkillsSection = () => {
  return (
    <Suspense fallback={<Loader className=" animate-spin" />}>
      <div
        className="  relative h-auto z-50 py-5 w-full overflow-hidden"
        id="skills"
      >
        <Meteors number={60} />
        <SkillsBox />
      </div>
    </Suspense>
  );
};

export default SkillsSection;
