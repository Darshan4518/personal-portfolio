import Link from "next/link";
import { Iceland } from "next/font/google";

const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${iceland.className} flex h-screen bg-black text-green-500`}
    >
      {/* Sidebar */}
      <aside className="w-64 bg-black shadow-md md:block hidden border-r border-green-500">
        <h1 className="text-center text-2xl font-bold mt-6 tracking-wider">
          Admin Panel
        </h1>
        <nav className="mt-10 space-y-4">
          <Link
            href="/admin"
            className="block py-2 px-4 text-green-400 hover:bg-green-500 hover:text-black transition duration-200 rounded-md"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/profile"
            className="block py-2 px-4 text-green-400 hover:bg-green-500 hover:text-black transition duration-200 rounded-md"
          >
            Profile
          </Link>
          <Link
            href="/admin/skills"
            className="block py-2 px-4 text-green-400 hover:bg-green-500 hover:text-black transition duration-200 rounded-md"
          >
            Skills
          </Link>
          <Link
            href="/admin/projects"
            className="block py-2 px-4 text-green-400 hover:bg-green-500 hover:text-black transition duration-200 rounded-md"
          >
            Projects
          </Link>
          <Link
            href="/admin/achievements"
            className="block py-2 px-4 text-green-400 hover:bg-green-500 hover:text-black transition duration-200 rounded-md"
          >
            Achievements
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-2">
        <div className="w-full max-h-screen h-full overflow-y-auto bg-black bg-opacity-75 rounded-lg border border-green-500 shadow-lg">
          {children}
        </div>
      </main>
    </div>
  );
}
