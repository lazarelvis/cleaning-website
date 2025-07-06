import TiktokFrame from "../TiktokFrame";
export default function Hero() {
  return (
    <div className="bg-cultured">
      <div className="relative isolate p-6 lg:px-74">
        <div className="mx-auto max-w-5xl flex flex-col lg:flex-row">
          <div className=" py-32 sm:py-48 lg:py-40">
            <div className="hidden sm:mb-8 sm:flex sm:justify-left">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Asiguram servicii de calitate si profesionalism
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-aqua sm:text-7xl">
                Curatenie impecabila
              </h1>
              <h2 className="mt-8 text-lg font-medium text-pretty text-aqua sm:text-xl/8 ">
                Curatenie impecabila pentru locuita si biroul dumneavoasta
              </h2>
              <h2 className="mt-4 text-lg font-medium text-pretty text-aqua sm:text-xl/8">
                Primeste <b>10% reducere</b> pentru prima curatenie
              </h2>
              <div className="mt-10 flex items-left justify-left gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-bermuda px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-bermuda focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Despre noi
                </a>
                <div className="flex flex-col">
                  <p className="text-sm/6 font-semibold text-gray-900">
                    Ai intrebari?
                  </p>
                  <p className="text-medium font-bold text-gray-900">
                    0744 221 795
                  </p>
                </div>
              </div>
            </div>
          </div>
          <TiktokFrame />
        </div>
      </div>
    </div>
  );
}
