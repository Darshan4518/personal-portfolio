import SkillsBox from "./SkillsBox";
import Meteors from "./ui/meteors";

const SkillsSection = () => {
  return (
    <div
      className="  relative h-auto z-50 py-5 w-full overflow-hidden"
      id="skills"
    >
      <Meteors number={60} />
      <SkillsBox />
    </div>
  );
};

export default SkillsSection;
