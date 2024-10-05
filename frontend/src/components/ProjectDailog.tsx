import { Code, Eye } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";
import { Badge } from "./ui/badge";

interface Project {
  projectName: string;
  description: string;
  livePreviewLink: string;
  codeLink: string;
  imageUrl: string;
  techStack: string;
}

const ProjectDetailPage = ({
  selectedProject,
  open,
  setOpen,
}: {
  selectedProject: Project | null;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-5xl bg-gray-900 my-3 h-full sm:rounded-lg rounded-none overflow-y-auto">
        <Card className="bg-transparent border-none">
          <CardHeader className="relative">
            {selectedProject?.imageUrl ? (
              <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-t-lg overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.projectName}
                  className="object-center object-contain w-full h-full"
                />
              </div>
            ) : (
              <div className="relative w-full h-48 sm:h-64 md:h-80 flex items-center justify-center bg-gray-800">
                <p className="text-gray-400">No Image Available</p>
              </div>
            )}
          </CardHeader>

          <CardContent className="p-4 sm:p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-white">
                {selectedProject?.projectName || "Project Title"}
              </CardTitle>
              <div className="flex flex-col sm:flex-row gap-2">
                {selectedProject?.livePreviewLink ? (
                  <Button
                    asChild
                    variant="ghost"
                    className="flex items-center gap-2 border text-white border-gray-600"
                  >
                    <a
                      href={selectedProject.livePreviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Eye size={18} />
                      Live Preview
                    </a>
                  </Button>
                ) : (
                  <Button disabled className="text-gray-400 border-gray-600">
                    No Preview Available
                  </Button>
                )}
                {selectedProject?.codeLink ? (
                  <Button
                    asChild
                    variant="ghost"
                    className="flex items-center text-white gap-2 border border-gray-600"
                  >
                    <a
                      href={selectedProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Code size={18} />
                      View Code
                    </a>
                  </Button>
                ) : (
                  <Button disabled className="text-gray-400 border-gray-600">
                    No Code Available
                  </Button>
                )}
              </div>
            </div>

            {/* Project Description */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Description
              </h3>
              <p className="text-gray-300 mt-2 max-w-full break-words">
                {selectedProject?.description || "No description available."}
              </p>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject?.techStack
                  ? selectedProject.techStack
                      .split(",")
                      .map((tech: string, index: number) => (
                        <Badge
                          key={index}
                          className="bg-gray-800 border-gray-700 text-gray-300 px-2 py-1"
                        >
                          {tech.trim()}
                        </Badge>
                      ))
                  : "No technologies listed."}
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailPage;
