"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      // Optional: Configure AOS settings here
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  return <>{children}</>;
}
