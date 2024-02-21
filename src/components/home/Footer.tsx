import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="w-full rounded-3xl border p-6 text-center">
        <Link href="#" className="max-w-[380] hover:text-color-primary">
          <Image
            src="/sidbar.jpg"
            alt=""
            width={380}
            height={280}
            className="inline-block"
          />
          <div className="pt-4">
            ข่าวดี! เพื่อนๆ สามารถสร้างรายได้ พร้อมกับใช้งาน Pantip ได้แล้วนะ
          </div>
        </Link>
      </div>
      <div className="w-full p-6">
        <ul className="flex justify-center divide-x divide-solid text-color-light">
          <li>
            <Link
              href="#"
              className="px-2 hover:text-color-primary hover:underline"
            >
              กฎกติกา
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-2 hover:text-color-primary hover:underline"
            >
              ลงโฆษณา
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-2 hover:text-color-primary hover:underline"
            >
              สมัครงาน
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-2 hover:text-color-primary hover:underline"
            >
              ติดต่อทีมงาน
            </Link>
          </li>
        </ul>
        <ul className="mt-3 flex justify-center divide-x divide-solid  text-color-light">
          <li>
            <Link
              href="#"
              className="px-2 hover:text-color-primary hover:underline"
            >
              ความเป็นส่วนตัว{" "}
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-2 hover:text-color-primary hover:underline"
            >
              ข้อกำหนดและเงื่อนไข
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full p-6">
        <div className="mb-5 flex justify-center gap-2 text-center text-color-light">
          <Link href="#">
            <Image src="/apple.png" alt="" width={77} height={25} />
          </Link>
          <Link href="#">
            <Image src="/google.png" alt="" width={77} height={25} />
          </Link>
          <Link href="#">
            <Image src="/huawei.png" alt="" width={77} height={25} />
          </Link>
        </div>

        <div className="text-center text-[12px] text-color-light">
          © 2024 Internet Marketing co., ltd
        </div>
        <div className="mt-3 flex justify-center gap-2 text-center text-[20px] text-color-light">
          <Link href="#" className="opacity-50 hover:opacity-100">
            <FaFacebookSquare />
          </Link>
          <Link href="#" className="opacity-50 hover:opacity-100">
            <FaInstagramSquare />
          </Link>
          <Link href="#" className="opacity-50 hover:opacity-100">
            <FaTwitterSquare />
          </Link>
          <Link href="#" className="opacity-50 hover:opacity-100">
            <FaYoutubeSquare />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
