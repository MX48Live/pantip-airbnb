import cn from "@/utils/cn";
import Link from "next/link";

type NavItemType = {
  icon?: React.ReactNode;
  title: string;
  href: string;
  className?: string;
  attribute?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
};
function NavItem({ title, href, className, attribute, icon }: NavItemType) {
  return (
    <Link
      href={href}
      aria-label={title}
      className={cn(
        `bg-white hover:bg-button-hover px-4 py-3 rounded-full flex items-center`,
        className
      )}
      {...attribute}
    >
      {icon ? <span className="lg:mr-1 text-xl">{icon}</span> : null}
      <span className="hidden lg:inline-flex">{title}</span>
    </Link>
  );
}

export default NavItem;
