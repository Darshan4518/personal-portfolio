"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Iceland } from "next/font/google";
import { createProject } from "@/lib/serverActions/projectActions";

const iceland = Iceland({ weight: "400", subsets: ["latin"] });

const ProjectForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        variant={"outline"}
        className="my-3"
      >
        Add Project
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={`${iceland.className} text-green-400 p-8 space-y-4 rounded-lg  bg-transparent border-none`}
        >
          <DialogHeader>
            <DialogTitle className="text-white">Project Form</DialogTitle>
          </DialogHeader>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center  b"
            action={createProject}
          >
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Project Name"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="imageUpload">Upload Images</Label>
              <Input
                type="file"
                id="images"
                name="images"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
                multiple
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                rows={3}
                name="description"
                placeholder="Project description"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="brief">Brief</Label>
              <Input
                type="text"
                id="brief"
                name="brief"
                placeholder="Project brief"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="technologies">Technologies</Label>
              <Input
                type="text"
                id="technologies"
                name="technologies"
                placeholder="Technologies used"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="githubLink">GitHub Link</Label>
              <Input
                type="text"
                id="githubLink"
                name="githubLink"
                placeholder="GitHub repository link"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="demoLink">Demo Link</Label>
              <Input
                type="text"
                id="demoLink"
                name="demoLink"
                placeholder="Live demo link"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
              />
            </div>

            <div className="flex gap-4 md:col-span-2">
              <Button
                type="submit"
                className="flex-1 border-green-900/50 rounded-none text-sm bg-greenprimary font-bold text-green-500 hover:bg-black/40 hover:text-gray-200"
              >
                SUBMIT [ENTER]
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-green-900/50 text-red-500 bg-black font-bold hover:bg-black/40 hover:text-red-300 rounded-none"
                onClick={() => setOpen(false)}
              >
                CANCEL [ESC]
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectForm;
