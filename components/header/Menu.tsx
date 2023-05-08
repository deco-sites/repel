import NavItem, {
  NavItemProps,
} from "deco-sites/start/components/header/NavItem.tsx";
import { signal } from "@preact/signals";
import Button from "deco-sites/start/components/ui/Button.tsx";

export interface MenuProps {
  navItems?: NavItemProps[];
  button?: NavItemProps;
}

const displayMenu = signal(false);

export default function Menu({ navItems, button }: MenuProps) {
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
            {button?.label && button.href && (
              <li className="mt-[15px]">
                <Button href={button?.href} full>
                  {button?.label}
                </Button>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="hidden lg:(block)">
        <ul className="w-full flex bg-white items-center">
          {navItems?.map((item) => (
            <NavItem item={item} />
          ))}
          {button?.label && button.href && (
            <li className="lg:(pl-5 ml-1)">
              <Button href="/" full>
                Contact us
              </Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
