// import { XMarkIcon } from "@heroicons/react/20/solid";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function LogoAndInfo() {
  const information = [
    { title: "Telefon", data: "0744221795", icon: "PhoneIcon" },
    { title: "Contact", data: "contact@basarabiacleaning.ro", icon: "-" },
  ];

  return (
    <div className="bg-white sm:px-6">
      <div className="max-md:hidden mx-auto max-w-7xl relative isolate flex items-center gap-x-6 overflow-hidden  p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          {/* <p className="text-sm/6 text-aqua">
            <strong className="font-semibold">Katy Basarabia Cleaning</strong>
          </p> */}
        </div>
        <div className="flex flex-1 justify-end">
          <div className="font-semibold px-4">
            <h3 className="text-sm text-gray-500">Telefon:</h3>
            <h2>0744221795</h2>
          </div>
          <div className="font-semibold px-4">
            <h3 className="text-sm text-gray-500">Contact:</h3>
            <h2>contact@basarabiacleaning.ro</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
