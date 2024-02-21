"use client";

import cn from "@/utils/cn";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { createPortal } from "react-dom";
import MobileMenu from "./MobileMenu";

function MenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "auto";
    } else {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <>
      <button
        aria-label="Menu Toggle"
        className={cn(
          `px-3 py-3 rounded-full transition-all`,
          !isOpen && `hover:bg-button-hover `,
          isOpen && `bg-color-primary text-white shadow-lg `
        )}
        onClick={handleToggleMenu}
      >
        <RiMenu2Line />
      </button>
      {isOpen &&
        createPortal(
          <MobileMenu isOpen={isOpen} close={setIsOpen} />,
          document.getElementById("menu-mobile")!
        )}
    </>
  );
}

export default MenuToggle;
