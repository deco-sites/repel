import type { Image as ImageProps } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import NavItem, { NavItemProps } from "deco-sites/start/components/header/NavItem.tsx";
import Menu from "deco-sites/start/components/header/Menu.tsx";

export interface NavbarProps {
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

export default function Navbar({ logo, navItems }: NavbarProps) {
  return (
    <nav className="w-full flex items-center justify-between px-5 py-[15px]  max-w-[1336px] mx-auto">
      {logo?.src && (
        <Image src={logo.src} alt={logo.alt} height={21} width={94} />
      )}

      <Menu navItems={navItems} />
    </nav>
  );
}
