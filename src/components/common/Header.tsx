import Image from "next/image";
import NavItem from "./NavItem";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdPeopleOutline } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import MenuItem from "./MenuItem";
import MenuToggle from "./MenuToggle";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="border-border border-b">
        <div className="container mx-auto px-4">
          <header className="flex items-center justify-between py-2 md:py-4">
            <div className="flex items-center">
              <div className="flex items-center gap-6">
                <div className="flex items-center text-2xl md:hidden">
                  <MenuToggle />
                </div>
                <div className="mr-10">
                  <Link
                    href="/"
                    aria-label="Pantip Logo, click to go to home page"
                  >
                    <Image
                      src="/pantip-logo.png"
                      alt="Pantip Logo"
                      width={60}
                      height={34}
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <nav>
                  <ul className="flex">
                    <li>
                      <MenuItem title={`หน้าแรก`} href={`#`} active={true} />
                    </li>
                    <li>
                      <MenuItem title={`My Feed`} href={`#`} />
                    </li>
                    <li>
                      <MenuItem title={`Pantip Pick`} href={`#`} />
                    </li>
                    <li>
                      <MenuItem title={`Pantip Hitz`} href={`#`} />
                    </li>
                    <li>
                      <MenuItem title={`Explore`} href={`#`} />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div>
              <div className="text-color-base">
                <ul className="flex">
                  <li>
                    <NavItem
                      icon={<IoIosAddCircleOutline />}
                      title={`ตั้งกระทู้`}
                      href={`#`}
                    />
                  </li>
                  <li>
                    <NavItem
                      icon={<MdPeopleOutline />}
                      title={`คอมมูนิตี้`}
                      href={`#`}
                    />
                  </li>
                  <li>
                    <NavItem
                      icon={<CiLogin />}
                      title={`เข้าสู่ระบบ / สมัครสมาชิก`}
                      href={`#`}
                      className=" text-primary bg-color-primary/10 text-color-primary"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
        {/* .container */}
      </div>
      {/* .border-bottom */}
      <div id="menu-mobile"></div>
    </>
  );
}

export default Header;
