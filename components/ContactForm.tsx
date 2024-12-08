"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Iceland } from "next/font/google";
import { useState } from "react";
import { Bluetooth } from "lucide-react";
import { sendEmail } from "@/lib/serverActions/contactAction";
import { toast } from "sonner";

const iceland = Iceland({ weight: "400", subsets: ["latin"] });

const ContactForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleSubmit = async (formData: FormData) => {
    try {
      const response = await sendEmail(formData);
      if (response.success) {
        toast(response.message || "Message sent successfully!");
        setOpen(false);
      } else {
        toast(response.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast("Something went wrong. Please try again later.");
    }
  };
  return (
    <div>
      <button
        className="uppercase text-red-500 w-full md:w-auto border-red-500 border p-2 text-xs mt-2 flex items-center gap-2 font-bold hover:bg-red-500 hover:text-white transition-all rounded z-50"
        onClick={() => setOpen(true)}
      >
        <span>Open Connection</span> <Bluetooth size={15} />
      </button>
      <Dialog open={open}>
        <DialogContent
          className={`${iceland.className}  text-red-500 p-8 space-y-2 rounded-lg border-none bg-transparent`}
        >
          <DialogTitle>
            <div>
              <h2 className="text-sm text-white font-light">CONNECT WITH ME</h2>
              <h3 className="text-gray-400 text-xs font-extralight">
                WANNA CHAT? OR JUST SHARE SOMETHING COOL?
              </h3>
            </div>
          </DialogTitle>

          <form
            className="space-y-6 bg-red-950/20 p-6 rounded-tl-md border border-gray-600"
            action={handleSubmit}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm tracking-wider">
                HOW SHOULD I CALL YOU?
              </label>
              <Input
                id="name"
                name="name"
                className="bg-black text-gray-200 placeholder:text-gray-400 placeholder:text-xs"
                placeholder="YOUR NAME"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm tracking-wider">
                SENDING FROM
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs"
                placeholder="YOUR.NAME@EXAMPLE.COM"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm tracking-wider">
                TRANSMITTED DATA
              </label>
              <Textarea
                id="message"
                name="message"
                className="bg-black/50 text-gray-200 placeholder:text-gray-400 placeholder:text-xs min-h-[200px]"
                placeholder="HI, I WRITE TO YOU ABOUT ..."
                required
              />
            </div>
            <div className="flex gap-4">
              <Button
                type="submit"
                className="flex-1 border-red-900/50 rounded-none  text-sm bg-redprimary font-bold  text-black hover:bg-black/40 hover:text-gray-200"
              >
                SEND MESSAGE [ENTER]
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-red-900/50 text-red-500 bg-black font-bold  hover:bg-black/40 hover:text-red-300 rounded-none"
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
export default ContactForm;
