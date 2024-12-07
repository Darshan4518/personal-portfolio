"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Iceland } from "next/font/google";
import { createSkill } from "@/lib/serverActions/skillActions";

const iceland = Iceland({ weight: "400", subsets: ["latin"] });

const SkillForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        variant={"outline"}
        className=" text-black border-green-500 hover:text-black hover:border-green-300 transition-all duration-300"
      >
        Add Skill
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={`${iceland.className} text-green-400 p-8 space-y-6 rounded-lg border border-green-500 bg-black/90 shadow-lg max-w-2xl`}
        >
          <DialogHeader>
            <DialogTitle className="text-xl text-green-300">
              Skill Form
            </DialogTitle>
          </DialogHeader>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-5xl"
            action={createSkill}
          >
            {/* Skill Name */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="name" className="text-green-300">
                Skill Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter skill name"
                className="bg-black/60 text-green-300 placeholder:text-green-600 w-full border border-green-500 focus:border-green-400 focus:ring focus:ring-green-300/20"
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="imageUpload" className="text-green-300">
                Upload Image
              </Label>
              <Input
                type="file"
                id="imageUpload"
                name="image"
                className="bg-black/60 text-green-300 placeholder:text-green-600 w-full border border-green-500 focus:border-green-400 focus:ring focus:ring-green-300/20"
              />
            </div>

            {/* Skill Type */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="type" className="text-green-300">
                Skill Type
              </Label>
              <Select name="type">
                <SelectTrigger className="w-full border border-green-500 bg-black/60 text-green-300 hover:border-green-400 focus:ring focus:ring-green-300/20">
                  <SelectValue placeholder="Select Skill Type" />
                </SelectTrigger>
                <SelectContent className="bg-black border border-green-500">
                  <SelectItem
                    value="frontend"
                    className="text-green-300 hover:bg-green-900"
                  >
                    Frontend
                  </SelectItem>
                  <SelectItem
                    value="backend"
                    className="text-green-300 hover:bg-green-900"
                  >
                    Backend
                  </SelectItem>
                  <SelectItem
                    value="android"
                    className="text-green-300 hover:bg-green-900"
                  >
                    Android
                  </SelectItem>
                  <SelectItem
                    value="others"
                    className="text-green-300 hover:bg-green-900"
                  >
                    Others
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Pin to Top */}
            <div className="flex items-center gap-3 md:col-span-2">
              <Checkbox
                id="pinned"
                name="pinned"
                className="border border-green-500 checked:bg-green-500 focus:ring-green-300/20"
              />
              <Label htmlFor="pinned" className="text-green-300">
                Pin to Top
              </Label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 md:col-span-2">
              <Button
                type="submit"
                className="flex-1 bg-green-500 text-black font-bold hover:bg-green-400 transition-all duration-300"
              >
                SUBMIT [ENTER]
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-green-500 text-green-500 hover:bg-black/50 hover:text-green-300 transition-all duration-300"
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

export default SkillForm;
