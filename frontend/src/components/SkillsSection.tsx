import Meteors from "./ui/meteors";
import SkillsBox from "./SkillsBox";

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
