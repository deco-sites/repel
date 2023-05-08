import type { Image as ImageProps } from "deco-sites/std/components/types.ts";
import { NavItemProps } from "deco-sites/start/components/header/NavItem.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Menu from "deco-sites/start/components/header/Menu.tsx";

export interface Props {
  // @title Logo
  logo?: {
    src?: ImageProps;
    alt?: string;
  };
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItemProps[];

  /**
   * @title Highlight Link
   * @description Last link in header with highlight
   */
  button?: NavItemProps;
}

export default function Header({ logo, navItems, button }: Props) {
  return (
    <header className="w-full h-[80px] flex items-center bg-white border-b-1 border-black">
      <nav className="w-full flex items-center justify-between px-5 py-[15px]  max-w-[1336px] mx-auto">
        {logo?.src && (
          <Image src={logo.src} alt={logo.alt} height={21} width={94} />
        )}

        <Menu navItems={navItems} button={button} />
      </nav>
    </header>
  );
}
