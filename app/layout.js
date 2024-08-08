import './globals.scss'
import { Montserrat } from "next/font/google";
import dynamic from 'next/dynamic';
import Header from "$/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Michael Li • Software Developer & Mechanical Engineer",
  description: "Student @ UC Berkeley. Experienced at Algorithm, Web Dev, and Hardware Engineering. KiDrone full-stack engineer, Formula Electric at Berkeley battery engineer. Coded by Michael Li.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
          <Header />
          {children}
      </body>
    </html>
  );
}
