import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "Firma de curatenie Brasov - Curatenie impecabila pentru locuinta in Brasov",
  description:
    "Firma Curățenie Brașov - Servicii profesionale de curățenie pentru locuințe, birouri și spații comerciale. Curățenie impecabilă cu echipamente moderne și soluții ecologice. Programări rapide, prețuri avantajoase și echipă de încredere.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
