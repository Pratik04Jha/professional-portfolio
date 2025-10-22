import { Github } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";

const socials = [
  {
    icon: <Github />,
    href: "https://github.com/pratik04jha",
    tooltipText: "Github",
  },
  {
    icon: <Linkedin />,
    href: "https://linkedin.com/in/pratikthejha",
    tooltipText: "Linkedin",
  },
  {
    icon: <Twitter />,
    href: "https://x.com/gravitonion",
    tooltipText: "Twitter",
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex justify-between py-6 px-5 md:px-20 items-center ">
      <p>MIT licensed • Copyright 2025</p>
      <div className="gap-5 flex">
        {socials.map((items, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              <Link href={items.href} target="_blank">
                {items.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{items.tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </footer>
  );
}
