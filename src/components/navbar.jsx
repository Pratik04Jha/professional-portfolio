import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ui/mode-toggle-btn";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  { title: "Home", href: "/" },
  { title: "Blogs", href: "/blogs" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="flex fixed top-0 left-0 z-100 w-full justify-between py-6 px-5 md:px-20 bg-background/6 0 backdrop-blur-2xl">
      <NavigationMenu className="">
        <NavigationMenuList className="">
          {links.map((items, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild className="px-3 py-2">
                <Link href={items.href}>{items.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-5">
        <ModeToggle />
        <Button className="font-semibold">Resume</Button>
      </div>
    </nav>
  );
}
