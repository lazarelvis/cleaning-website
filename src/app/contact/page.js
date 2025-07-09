import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="text-center font-semibold  font-[family-name:var(--font-poppins)]">
      <div className="bg-cultured ">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <h1 className="text-4xl py-8">Contact</h1>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 md:px-0">
        <h2 className="text-2xl py-6 md:text-2xl">
          Contactați-ne astăzi pentru oferte personalizate!
        </h2>
        <div className="flex flex-col items-center pb-7">
          <FaLocationDot className="text-4xl text-aqua mb-4" />
          <h3 className="text-xl text-bermuda pb-2">Adresa:</h3>
          <h4 className="text-base font-normal text-gray-600">
            Strada Dobrogeabu Ghere nr. 40
          </h4>
        </div>
        <div className="flex flex-col items-center pb-7">
          <FaPhoneAlt className="text-4xl  text-aqua mb-4" />
          <h3 className="text-xl text-bermuda pb-2">Telefon:</h3>
          <h4 className="text-base font-normal text-gray-600">0744 243 987</h4>
        </div>
        <div className="flex flex-col items-center pb-7">
          <MdEmail className="text-4xl  text-aqua mb-4" />
          <h3 className="text-xl text-bermuda pb-2">Email:</h3>
          <h4 className="text-base font-normal text-gray-600">
            basarabiacleaning@gmail.com
          </h4>
        </div>
      </div>
    </div>
  );
}
