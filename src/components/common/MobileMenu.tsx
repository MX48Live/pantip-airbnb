import { IoMdClose } from "react-icons/io";
import MenuItem from "./MenuItem";
import cn from "@/utils/cn";
import { useEffect, useState } from "react";

function MobileMenu({ isOpen, close }: { isOpen: boolean; close: Function }) {
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlaying(isOpen);
    }, 75);
  }, [isOpen]);

  return (
    <div
      className={cn(
        `absolute left-[50%] top-[90px] z-[99999999] w-[95%] max-w-[500px] translate-x-[-50%] rounded-lg border border-[#f2f2f2] bg-white p-5 opacity-0  shadow-xl transition-all md:hidden`,
        isPlaying && `top-[70px] opacity-100`,
      )}
    >
      <nav className="mr-10">
        <ul>
          <li>
            <MenuItem
              title={`หน้าแรก`}
              href={`#`}
              active={true}
              className="inline-block"
            />
          </li>
          <li>
            <MenuItem title={`My Feed`} href={`#`} className="inline-block" />
          </li>
          <li>
            <MenuItem
              title={`Pantip Pick`}
              href={`#`}
              className="inline-block"
            />
          </li>
          <li>
            <MenuItem
              title={`Pantip Hitz`}
              href={`#`}
              className="inline-block"
            />
          </li>
          <li>
            <MenuItem title={`Explore`} href={`#`} className="inline-block" />
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          close(!true);
          document.body.style.overflow = "auto";
        }}
        aria-label="Close Mobile Menu"
        className="absolute right-2 top-2 rounded-full px-4 py-4 transition-all hover:bg-button-hover"
      >
        <IoMdClose />
        <span className="sr-only">Close Mobile Menu</span>
      </button>
    </div>
  );
}

export default MobileMenu;
