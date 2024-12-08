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
import { createProfile } from "@/lib/serverActions/profileActions";
import { toast } from "sonner";

const iceland = Iceland({ weight: "400", subsets: ["latin"] });

const ProfileForm = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    try {
      const { success } = await createProfile(formData);
      if (success) {
        toast("created successfully");
        setOpen(false);
      }
    } catch (error) {
      toast("somthing error occurd");
    }
  };
  return (
    <div className="">
      <Button
        onClick={() => setOpen(true)}
        variant={"outline"}
        className="my-3 text-black font-bold border-green-600 hover:bg-green-600 hover:text-gray-200"
      >
        Edit Profile
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={`${iceland.className} text-green-300 p-8 space-y-2 rounded-lg border-none bg-black/80`}
        >
          <DialogHeader>
            <DialogTitle className="text-white">Profile Form</DialogTitle>
          </DialogHeader>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center"
            action={handleSubmit}
          >
            <div className="space-y-2">
              <Label htmlFor="profilePhoto">Profile Photo</Label>
              <Input
                type="file"
                name="file"
                id="profilePhoto"
                className="bg-black/70 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                className="bg-black/70 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupation">Occupation</Label>
              <Input
                id="occupation"
                name="occupation"
                placeholder="Your occupation"
                className="bg-black/70 text-gray-200 placeholder:text-gray-400 placeholder:text-xs w-full"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="whoAmI">Who Am I</Label>
              <Textarea
                id="whoAmI"
                name="whoAmI"
                rows={3}
                placeholder="Tell us about yourself"
                className="bg-black/70 text-gray-200 placeholder:text-gray-400 placeholder:text-xs"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="myExperience">My Experience</Label>
              <Textarea
                id="myExperience"
                name="myExperience"
                rows={3}
                placeholder="Describe your experience"
                className="bg-black/70 text-gray-200 placeholder:text-gray-400 placeholder:text-xs"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="technologiesIUse">Technologies I Use</Label>
              <Input
                id="technologiesIUse"
                name="technologiesIUse"
                placeholder="e.g., React, Node.js, Tailwind"
                className="w-full bg-black/70 text-gray-200 placeholder:text-gray-400 placeholder:text-xs"
              />
              <p className="text-sm text-gray-500">
                Enter technologies separated by commas
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                className="flex-1 bg-green-600 text-black font-bold hover:bg-green-700 rounded-none border-green-600 hover:text-gray-200"
              >
                SEND MESSAGE [ENTER]
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-green-600 text-green-500 bg-black hover:bg-black/70 hover:text-green-400 font-bold rounded-none"
                onClick={() => setOpen(false)}
              >
                DISCARD [ESC]
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileForm;
