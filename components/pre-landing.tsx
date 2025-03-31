"use client"

import { useEffect } from "react";

export default function PreLanding() {
  useEffect(() => {
    // Immediately signal that intro is complete
    window.dispatchEvent(new Event("introComplete"));
    sessionStorage.setItem("hasSeenIntro", "true");
  }, []);

  return null;
}