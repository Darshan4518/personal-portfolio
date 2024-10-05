"use client";
import React from "react";

import {
  CalendarIcon,
  HomeIcon,
  MailIcon,
  PencilIcon,
  GithubIcon,
  TwitterIcon,
  YoutubeIcon,
  Linkedin,
} from "lucide-react";

import { cn } from "../lib/utils";
import { Dock, DockIcon } from "./ui/dock";
import { buttonVariants } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Separator } from "./ui/separator";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  calendar: (props: IconProps) => <CalendarIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  x: (props: IconProps) => <TwitterIcon {...props} />,
  youtube: (props: IconProps) => <YoutubeIcon {...props} />,
  github: (props: IconProps) => <GithubIcon {...props} />,
  linkedIn: (props: IconProps) => <Linkedin {...props} />,
};

const DATA = {
  navbar: [
    { href: "#", icon: HomeIcon, label: "Home" },
    { href: "#", icon: PencilIcon, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Darshan4518",
        icon: Icons.github,
      },
      X: {
        name: "X (Twitter)",
        url: "https://x.com/codewithdarshu",
        icon: Icons.x,
      },
      email: {
        name: "Send Email",
        url: "mailto:codewithdarshan45@gmail.com",
        icon: Icons.email,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/darshan-s-172350331/",
        icon: Icons.linkedIn,
      },
    },
  },
};

export function DockBar() {
  return (
    <div className="hidden md:block relative z-50 my-20">
      <TooltipProvider>
        <Dock direction="bottom" className="text-white z-30">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    target="_blank" // Changed "_bank" to "_blank"
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
