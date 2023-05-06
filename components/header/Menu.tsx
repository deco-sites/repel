import NavItem, {
  NavItemProps,
} from "deco-sites/start/components/header/NavItem.tsx";
import { signal } from "@preact/signals";
import Link from "deco-sites/start/components/ui/Link.tsx";

export interface MenuProps {
  navItems?: NavItemProps[];
}

const displayMenu = signal(false);

export default function Menu({ navItems }: MenuProps) {
  function toggleMenu() {
    displayMenu.value = !displayMenu.value;
  }

  const checkDisplayMenu = (okClasses: string, failClasses = "") => {
    if (displayMenu.value) {
      return okClasses;
    }
    return failClasses;
  };

  return (
    <div>
      <div className="lg:(hidden)">
        <div
          onClick={() => {
            toggleMenu();
          }}
          className="border-0"
        >
          <div>
            <span className="block w-[24px] h-[1px] bg-black mb-[6px]"></span>
            <span className="block w-[24px] h-[0.9px] bg-black"></span>
            <span className="block w-[24px] h-[1px] bg-black mt-[6px]"></span>
          </div>
        </div>

        <div className="w-full z-[-1] absolute left-0 top-[67px]">
          <ul
            className={` bg-white px-2.5 py-5 ${checkDisplayMenu(
              "translate-y-[0px] duration-[400ms] ease",
              "translate-y-[-400px] duration-[400ms] ease"
            )}`}
          >
            {navItems?.map((item) => (
              <NavItem item={item} />
            ))}
            <li className="mt-[15px]">
              <Link href="/" full>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:(block)">
        <ul className="w-full flex bg-white items-center">
          {navItems?.map((item) => (
            <NavItem item={item} />
          ))}
          <li className="lg:(pl-5 ml-1)">
            <Link href="/" full>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
