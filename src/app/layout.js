import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
  title: "Katy Basarabia Cleaning - Firma de curatenie Brasov",
  description:
    "Katy Basarabia Cleaning Firma Curățenie Brașov - Servicii profesionale de curățenie pentru locuințe, birouri și spații comerciale. Curățenie impecabilă cu echipamente moderne și soluții ecologice. Programări rapide, prețuri avantajoase și echipă de încredere.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
