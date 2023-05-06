import type { Image as ImageProps } from "deco-sites/std/components/types.ts";
import { NavItemProps } from "deco-sites/start/components/header/NavItem.tsx";
import Navbar from "deco-sites/start/components/header/Navbar.tsx";

export interface Props {
  logo?: {
    src?: ImageProps;
    alt?: string;
  };

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItemProps[];
}

export default function Header({ logo, navItems }: Props) {
  return (
    <header className="w-full h-[80px] flex items-center bg-white border-b-1 border-black">
      <Navbar logo={logo} navItems={navItems} />
    </header>
  );
}
