// import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./logoAndInfo.module.css";

export default function LogoAndInfo() {
  return (
    <div className="bg-white sm:px-6">
      <div className="mx-auto max-w-7xl relative isolate flex items-center justify-center gap-x-6 overflow-hidden p-4 md:p-6 ">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              width={200}
              height={0}
              alt="Katy Basarabia Cleaning Logo"
            />
          </Link>

          {/* <p className="text-sm/6 text-aqua">
            <strong className="font-semibold">Katy Basarabia Cleaning</strong>
          </p> */}
        </div>
        <div className="max-md:hidden flex flex-1 justify-end">
          <div className="flex flex-row items-center font-semibold px-4">
            <FaPhoneAlt className="text-3xl text-aqua mx-3" />
            <div>
              <h3 className="text-sm text-gray-500">Telefon:</h3>
              <h2>0744 243 987</h2>
            </div>
          </div>
          <div className="flex flex-row items-center font-semibold px-4">
            <MdEmail className="text-4xl text-aqua mx-3" />
            <div>
              <h3 className="text-sm text-gray-500">Contact:</h3>
              <h2>basarabiacleaning@gmail.com</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
