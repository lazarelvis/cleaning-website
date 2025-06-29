import Image from "next/image";

export default function Services() {
  const content = [
    {
      title: "Curățenie generală",
      description:
        "Oferim servicii complete de curățenie generală pentru locuințe și birouri, asigurând igienizarea și întreținerea regulată a spațiilor.",
      alt: "Curatenie generala",
      img: "/curatenie-generala-aspirator.png",
    },
    {
      title: "Curățenie de întreținere",
      description:
        "Curățenia de întreținere este esențială pentru a păstra un spațiu curat și ordonat pe termen lung.",
      alt: "Curatenie de intretinere",
      img: "/curatenie-de-intretinere.png",
    },
    {
      title: "Curățenie după constructor",
      description:
        "După finalizarea lucrărilor de construcție sau renovare, curățenia este o sarcină esențială.",
      alt: "Curatenie dupa constructie",
      img: "/curatenie-dupa-constructie.jpg",
    },
  ];

  return (
    <div className="mt-16 from-gray-100 pb-14">
      <div className="px-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-5xl font-semibold text-aqua">
            Serviciile noastre
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {content.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col rounded-3xl p-2 "
              >
                <img
                  alt={item.alt}
                  src={item.img}
                  class="w-full rounded-full object-cover border-8 border-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                ></img>
                <div className="flex flex-1 flex-col p-4">
                  <div className="mt-2 text-base/7 font-medium text-center">
                    <h2 className="text-aqua font-semibold text-xl ">
                      {item.title}
                    </h2>
                    <h3 className="pt-5 text-gray-600">{item.description}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
