import { JSX } from "preact";

interface LinkProps {
  href?: string;
  children: string | JSX.Element;
  full?: boolean;
}

export default function Link({ href, full, children }: LinkProps) {
  return (
    <a
      href={href}
      class={`w-full block border-1 border-black rounded-[48px] px-[30px] py-2.5 flex justify-center text-center text-sm font-medium tracking-[0.25px] leading-[170%] transition-colors duration-300 ease hover:(bg-black text-white) lg:(px-[34px] py-[12px])
      ${full && "w-full"}`}
    >
      {children}
    </a>
  );
}
