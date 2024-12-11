import Image from "next/image";
import { getAchievements } from "@/lib/serverActions/achievementActions";
import { IAchievement } from "@/models/achievement";

const typeStyles: Record<
  string,
  {
    borderColor?: string;
    titleColor?: string;
    typeColor?: string;
    dateColor?: string;
  }
> = {
  lagedary: {
    borderColor: "border-yellow-500",
    titleColor: "text-yellow-500",
    typeColor: "bg-yellow-500",
    dateColor: "bg-yellow-700/20",
  },
  epic: {
    borderColor: "border-red-500",
    titleColor: "text-red-500",
    typeColor: "bg-red-500",
    dateColor: "bg-red-800/20",
  },
  rare: {
    borderColor: "border-blue-500",
    titleColor: "text-blue-500",
    typeColor: "bg-blue-500",
    dateColor: "bg-blue-900/20",
  },
  uncommon: {
    borderColor: "border-green-500",
    titleColor: "text-green-500",
    typeColor: "bg-green-500",
    dateColor: "bg-green-600/10",
  },
  default: {
    borderColor: "border-gray-500",
    titleColor: "text-gray-500",
    typeColor: "bg-gray-500",
    dateColor: "bg-gray-600/10",
  },
};

const Achievements = async () => {
  const { data: achievements } = await getAchievements();

  return (
    <div className="w-full h-full text-white relative p-3">
      {/* Title */}
      <div className="text-center my-2">
        <h1 className=" font-bold text-lg">Achievements</h1>
      </div>

      <div className="flex flex-col md:flex-row w-full flex-wrap  gap-4 items-center justify-between  h-auto">
        {achievements?.map((achievement: IAchievement) => {
          const typeKey = achievement?.type?.toLowerCase() || "default";
          const styles = typeStyles[typeKey] || typeStyles.default;
          return (
            <div
              className={`border ${
                styles.borderColor
              } bg-black/30 rounded-md p-2 flex items-center md:max-w-sm w-auto h-auto md:h-[12vh] md:w-[20vw] ${
                achievement.ongoing === "on" ? "opacity-50" : "opacity-100"
              }`}
              key={achievement.id}
            >
              <div className="flex-shrink-0 w-16 h-16">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  width={30}
                  height={30}
                  className="w-12 h-12 mx-auto"
                />
                <div className={`${styles.typeColor} text-center text-xs mt-1`}>
                  {achievement.type}
                </div>
              </div>
              <div className="ml-3">
                <h4
                  className={`text-sm font-bold ${styles.titleColor} uppercase`}
                >
                  {achievement.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  {achievement.description}
                </p>
                <div className={`${styles.dateColor} rounded-md mt-1`}>
                  {achievement.achievedDate && (
                    <p className="px-2 py-0.5 text-xs uppercase">
                      Achieved:{" "}
                      {achievement.achievedDate.toString().slice(0, 10)}
                    </p>
                  )}
                  {achievement.ongoing === "on" && (
                    <p className="uppercase px-2 py-0.5 text-xs">- ongoing</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
