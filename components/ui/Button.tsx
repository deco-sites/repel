import { JSX } from "preact";

interface LinkProps {
  href?: string;
  children: string | JSX.Element;
  full?: boolean;
  arrow?: boolean;
}

export default function Link({ href, full, children, arrow }: LinkProps) {
  return (
    <a
      href={href}
      class={`block border-1 cursor-pointer font-medium leading-[150%] border-black rounded-[48px] px-[30px] py-2.5 flex justify-center text-center text-sm font-medium tracking-[0.25px] leading-[170%] transition-colors duration-300 ease hover:(bg-black text-white) lg:(px-[34px] py-[12px])
      ${full ? "w-full" : "w-[fit-content] "}`}
    >
      {children}

      {arrow && (
        <img
          src="https://assets.website-files.com/63dff3904fd49bed9c9c3c19/63f57bc9e975d1faa93be82a_ic-arrow.svg"
          alt="Arrow Right"
        />
      )}
    </a>
  );
}
