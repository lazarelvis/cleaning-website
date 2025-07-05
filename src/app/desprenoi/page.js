import styles from "./desprenoi.module.css";

export default function DespreNoi() {
  return (
    <div className="font-[family-name:var(--font-poppins)] ">
      <div className="bg-cultured">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <h1 className="text-4xl py-8">Despre noi</h1>
        </div>
      </div>
      <div
        className={`${styles.descriere} mx-auto max-w-6xl mt-10 px-4 lg:px-0`}
      >
        <p className="font-semibold text-xl">
          Katy Basarabia Cleaning – Curățenie cu suflet, din inimă pentru
          Brașov! 🧼✨
        </p>
        <p>
          Suntem două surori harnice și dedicate, născute cu simțul curățeniei
          și al detaliului, iar împreună am pornit cu inima deschisă această
          afacere de familie: Katy Basarabia Cleaning. Oferim servicii de
          curățenie generală și de întreținere în apartamente din Brașov, cu
          accent pe calitate, seriozitate și respect pentru spațiul fiecăruia.
        </p>
        <p>🌿 Ne ocupăm cu grijă de fiecare colțișor din casa ta</p>
        <p>🧹 Folosim produse sigure și eficiente</p>
        <p>🕒 Suntem punctuale, flexibile și de încredere</p>
        <p>💬 Comunicare clară și atentă la nevoile clientului</p>
        <p>
          Fie că ai nevoie de o curățenie temeinică de sezon sau de o
          întreținere săptămânală, noi suntem aici să te ajutăm! Lasă grijile și
          mopul în seama noastră – tu bucură-te de un apartament curat și
          primitor! 🏡
        </p>
        <p className="font-medium">📍 Disponibile în tot Brașovul</p>
        <p className="font-medium">
          📞 Contactează-ne pentru o ofertă personalizată!
        </p>
      </div>
    </div>
  );
}
