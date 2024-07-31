"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import './globals.scss'
import Loader from "$/Preloader";
import Landing from "$/Landing";
import HomeDescription from "$/HomeDescription";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      
        setTimeout(() => {
          setisLoading(false);
          document.body.style.cursor = 'default';
        }, 2000)
      }
    )()
  }, [])

  return (
    <main>
      {/* <AnimatePresence mode='wait'>
        {isLoading && <Loader />}
      </AnimatePresence> */}

      <Landing />
      <HomeDescription />
    </main>
  );
}
