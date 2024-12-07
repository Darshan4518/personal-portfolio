import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAchievements } from "@/lib/serverActions/achievementActions";
import { getAllProjects } from "@/lib/serverActions/projectActions";
import { getSkills } from "@/lib/serverActions/skillActions";

const AdminDashboard = async () => {
  // Example data (Replace these with dynamic data as needed)
  const { data: totalProjects } = await getAllProjects();
  const { data: totalSkills } = await getSkills();
  const { data: totalAchievements } = await getAchievements();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-black text-green-500">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 tracking-widest animate-pulse">
          Admin Dashboard
        </h1>
        <p className="text-lg">
          Welcome to your portfolio admin panel. Use the sidebar to navigate to
          different sections.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {/* Total Projects Card */}
        <Card className="bg-black border border-green-500 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center text-green-400">
              Total Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold text-red-500">
              {totalProjects?.length}
            </p>
          </CardContent>
        </Card>

        {/* Total Skills Card */}
        <Card className="bg-black border border-green-500 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center text-green-400">
              Total Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold text-red-500">
              {totalSkills?.length}
            </p>
          </CardContent>
        </Card>

        {/* Total Achievements Card */}
        <Card className="bg-black border border-green-500 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center text-green-400">
              Total Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl font-bold  text-red-500">
              {totalAchievements?.length}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
