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

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/" },
  { title: "Stack", href: "/" },
  { title: "Contact", href: "/" },
];

export default function Navbar() {
  return (
    <nav className="flex fixed top-0 left-0 w-full justify-between py-2 px-10">
      <NavigationMenu className="">
        <NavigationMenuList className="">
          {links.map((items, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild  className="px-3 py-2">
                <Link href={items.href} >{items.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </nav>
  );
}
