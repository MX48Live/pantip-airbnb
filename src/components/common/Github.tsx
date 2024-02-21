"use client";

import cn from "@/utils/cn";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

function Github() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 1000);
  }, []);

  return (
    <Link
      href="https://github.com/MX48Live/pantip-airbnb"
      target="_blank"
      className={cn(
        `fixed bottom-[-100px] left-[50%] z-50 flex translate-x-[-50%] items-center gap-2 rounded-full bg-black px-4 py-3 text-white shadow-lg transition-all duration-700`,
        show && `bottom-10`,
      )}
    >
      <span>
        <FaGithub />
      </span>
      <span>Github</span>
    </Link>
  );
}

export default Github;
