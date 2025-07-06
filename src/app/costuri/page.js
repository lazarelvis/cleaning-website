export default function Costuri() {
  return (
    <div className="text-center  font-[family-name:var(--font-poppins)]">
      <div className="bg-cultured ">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <h1 className="text-4xl py-8 font-semibold ">Costuri curatenie</h1>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 md:px-0 ">
        <div className="flex flex-col md:flex-row justify-evenly p-5 md:p-10">
          <div>
            <h3 className="font-semibold py-2">Curatenie generala de la</h3>
            <h4>Garsoniera = 500 lei</h4>
            <h4>Apartament 2 camere = 650 lei</h4>
            <h4>Apartament 3 camere = 800 lei</h4>
            <h4>Apartament 4 camere = 950 lei</h4>
          </div>
          <div>
            <h3 className="font-semibold py-2">
              Curatenie de intretinere de la
            </h3>
            <h4>Garsoniera = 400 lei</h4>
            <h4>Apartament 2 camere = 500 lei</h4>
            <h4>Apartament 3 camere = 650 lei</h4>
            <h4>Apartament 4 camere = 800 lei</h4>
          </div>
        </div>
        <h3 className="">
          Curatenie dupa constructor – de la 13 lei – 20 lei / mp
        </h3>
      </div>
    </div>
  );
}
