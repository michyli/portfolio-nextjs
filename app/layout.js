import './globals.scss'
import { Montserrat } from "next/font/google";
import { Suspense } from 'react'
import Preloader from '@/Preloader'

//import components
import Header from "@/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Michael Li • Software Developer & Mechanical Engineer",
  description: "Student @ UC Berkeley. Experienced at Algorithm, Web Dev, and Hardware Engineering. KiDrone full-stack engineer, Formula Electric at Berkeley battery engineer. Coded by Michael Li.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Suspense fallback={<Preloader/>}>
          <Header />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
