import { ImageIcon, X } from "lucide-react";
import Image from "next/image";

export default function FileExplorer() {
  const files = [
    { name: "HOMEPAGE.JPG", size: "23KB" },
    { name: "ARCHIVE_VIEW.JPG", size: "23KB" },
    { name: "USER-FACING_PART.JPG", size: "23KB" },
    { name: "DASHBOARD_HOME_VIEW.JPG", size: "23KB" },
  ];

  return (
    <div className="  flex items-center justify-center">
      <div className="w-full max-w-4xl bg-black border border-red-900/50">
        <div className="flex items-center justify-between p-2 bg-red-900/30 border-b border-red-900/50">
          <div className="text-xs text-gray-400">file xplorer</div>
          <button className="text-red-500 hover:text-red-400 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="text-xs text-gray-400 p-2">
          LOCATION: /PROJECTS/THE-NAME
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          {files.map((file) => (
            <div
              key={file.name}
              className="flex items-center space-x-3 p-2 border border-red-900/20 bg-red-900/5"
            >
              <div className="h-12 w-12 bg-red-900/20 flex items-center justify-center">
                {/* <Image
                  src="/placeholder.svg"
                  alt={file.name}
                  width={32}
                  height={32}
                  className="opacity-50"
                /> */}
                <ImageIcon />
              </div>
              <div>
                <div className="text-sm text-gray-300 hidden sm:block">
                  {file.name}
                </div>
                <div className="text-xs text-gray-500 hidden sm:block">
                  {file.size}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
