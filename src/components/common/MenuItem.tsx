import cn from "@/utils/cn";
import Link from "next/link";

type MenuItemType = {
  icon?: React.ReactNode;
  title: string;
  href: string;
  className?: string;
  attribute?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  active?: boolean;
};
function MenuItem({
  title,
  href,
  className,
  attribute,
  icon,
  active,
}: MenuItemType) {
  return (
    <Link
      href={href}
      aria-label={title}
      className={cn(
        `bg-white hover:bg-button-hover px-4 py-3 rounded-full flex items-center text-color-light hover:text-color-base`,
        className,
        active && `text-color-primary font-semibold`
      )}
      {...attribute}
    >
      {icon ? <span className="mr-1 text-xl">{icon}</span> : null}
      <span>{title}</span>
    </Link>
  );
}

export default MenuItem;
