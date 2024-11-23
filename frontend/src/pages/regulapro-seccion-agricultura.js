import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SeccionAgricultura from "@/components/SeccionAgricultura";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const geistHussar = localFont({
  src: "./fonts/HussarBoldWeb-bf92.woff",
  variable: "--font-geist-hussar",
  weight: "100 900",
});

export default function RegulaPRO() {
    return (
      <div
        className={`${geistSans.variable} ${geistMono.variable} ${geistHussar.variable} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
      >
        <Header />
        <main className="row-start-2 w-full flex flex-row gap-8 items-center bg-transparent justify-center p-4">
          <div className="w-6/12 gap-4 items-center flex-col sm:flex-row justify-center">
          <p className="text-3xl">
            Notas explicativas de todas las actividades económicas - Sección{" "}
          </p>
            <SeccionAgricultura/>

          </div>
        </main>
        <Footer />
      </div>
    );
  }
