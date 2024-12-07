"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Iceland } from "next/font/google";
import { createAchievement } from "@/lib/serverActions/achievementActions";

const iceland = Iceland({ weight: "400", subsets: ["latin"] });

const AchievementForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        variant={"outline"}
        className="my-3"
      >
        Add Achievement
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={`${iceland.className} text-red-500 p-8 space-y-4 rounded-lg border-none bg-transparent max-w-5xl`}
        >
          <DialogHeader>
            <DialogTitle className="text-white">Achievement Form</DialogTitle>
          </DialogHeader>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center max-w-5xl"
            action={createAchievement}
          >
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="imageUpload">Upload Image</Label>
              <Input
                type="file"
                id="imageUpload"
                name="image"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="type">Type</Label>
              <Input
                type="text"
                id="type"
                name="type"
                placeholder="Achievement Type"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Achievement Title"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                rows={3}
                placeholder="Describe the achievement"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="achievedDate">Achieved Date</Label>
              <Input
                type="date"
                id="achievedDate"
                name="achievedDate"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
              />
            </div>

            <div className="flex items-center space-x-2 md:col-span-2">
              <Checkbox
                id="ongoing"
                name="ongoing"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs"
              />
              <Label htmlFor="ongoing" className="text-gray-200">
                Ongoing
              </Label>
            </div>

            <div className="flex gap-4 md:col-span-2">
              <Button
                type="submit"
                className="flex-1 border-red-900/50 rounded-none text-sm bg-redprimary font-bold text-black hover:bg-black/40 hover:text-gray-200"
              >
                SUBMIT [ENTER]
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-red-900/50 text-red-500 bg-black font-bold hover:bg-black/40 hover:text-red-300 rounded-none"
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

export default AchievementForm;
