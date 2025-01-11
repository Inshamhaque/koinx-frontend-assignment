"use client";
/* eslint-disable */

import { useEffect } from "react";
import gsap from "gsap";

export default function ErrorPage() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".error-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    tl.fromTo(
      ".error-code",
      { scale: 0.8 },
      { scale: 1, duration: 0.5, ease: "bounce.out" },
      "<"
    );
    gsap.fromTo(
      ".error-button",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="error-container text-center space-y-6">
        <div>
          <h1 className="error-code text-9xl font-extrabold text-red-500">
            404
          </h1>
          <p className="text-2xl font-semibold">Oops! Page not found</p>
          <p className="text-gray-400 mt-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </div>
    </div>
  );
}
