// import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function LogoAndInfo() {
  const information = [
    { title: "Telefon", data: "0744221795", icon: "PhoneIcon" },
    { title: "Contact", data: "contact@basarabiacleaning.ro", icon: "-" },
  ];

  return (
    <div className="bg-white sm:px-6">
      <div className="max-md:hidden mx-auto max-w-7xl relative isolate flex items-center gap-x-6 overflow-hidden  p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </Link>

          {/* <p className="text-sm/6 text-aqua">
            <strong className="font-semibold">Katy Basarabia Cleaning</strong>
          </p> */}
        </div>
        <div className="flex flex-1 justify-end">
          <div className="flex flex-row items-center font-semibold px-4">
            <FaPhoneAlt className="text-3xl text-aqua mx-3" />
            <div>
              <h3 className="text-sm text-gray-500">Telefon:</h3>
              <h2>0744 221 795</h2>
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
