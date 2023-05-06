export interface NavItemProps {
  label: string;
  href: string;
}

export default function NavItem({ item }: { item: NavItemProps }) {
  const { href, label } = item;

  return (
    <li className="block">
      <a
        href={href}
        className="block p-2.5 text-sm font-medium tracking-[0.25px] lg:(py-[5px] px-[20px] mx-[5px])"
      >
        {label}
      </a>
    </li>
  );
}
