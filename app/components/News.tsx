"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const posts = [
  {
    id: 1,
    url: "https://www.facebook.com/EliteExtremeFighting/posts/pfbid02xrxqdWvTTquVwgmu3iKF4KBcYFSV1V2nTHUeZsvMmPE9enJSLP24cEmL16yVtRnSl",
  },
  {
    id: 2,
    url: "https://www.facebook.com/EliteExtremeFighting/posts/pfbid02SStjBpguWW586fSkqEDVKtCUXqgrTwvGkuCRtLy5okSx7fY8LVi53EHNBG7MPXazl",
  },
  {
    id: 3,
    url: "https://www.facebook.com/EliteExtremeFighting/posts/pfbid028TwDy7L7k4kmG1xS8DV1skaedBoFDSNaxj1a6Z4gx9sfAzxJMCoCW2jE8FcDsMRsl",
  },
  {
    id: 4,
    url: "https://www.facebook.com/EliteExtremeFighting/posts/pfbid02ey2jTMvQEmvTNgoUB8LpdTCjUw12V1A5PMaSRRBxLb1fQck1yRBRFGYVrsokFYQDl",
  },
];

const AUTOPLAY_TIME = 6000;

export default function News() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [vw, setVw] = useState(1200);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const isMobile = vw < 640;

  useEffect(() => {
    setVw(window.innerWidth);
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (paused || isMobile) return;

    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % posts.length);
    }, AUTOPLAY_TIME);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, isMobile]);

  const translateX = (offset: number) =>
    vw < 1024 ? offset * 340 : offset * 520;

  return (
    <section className="relative py-24 overflow-hidden bg-neutral-950">
      <h2 className="mb-12 text-4xl font-bold text-center text-white">
        Noticias & Actualizaciones
      </h2>

      <div
        className={`relative flex items-center justify-center ${
          isMobile ? "h-[420px]" : "h-[720px]"
        }`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {posts.map((post, index) => {
          if (isMobile && index !== active) return null;

          const offset = index - active;

          return (
            <div
              key={post.id}
              className={`${isMobile ? "relative" : "absolute"} transition-all`}
              style={
                !isMobile
                  ? {
                      transform: `translateX(${translateX(offset)}px) scale(${
                        index === active ? 1 : 0.92
                      })`,
                      zIndex: index === active ? 10 : 1,
                    }
                  : {}
              }
            >
              <div className="w-[90vw] max-w-[600px] h-[600px] rounded-xl overflow-hidden shadow-2xl bg-neutral-900 flex items-center justify-center">
                {!isMobile ? (
                  <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
                      post.url
                    )}&show_text=true&width=500`}
                    className="w-full h-full"
                    style={{ border: "none" }}
                    scrolling="no"
                  />
                ) : (
                  <div className="px-6 text-center">
                    <p className="mb-6 text-gray-300">
                      Mira la última actualización de{" "}
                      <b>Elite Xtreme Fighting</b>
                    </p>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      Ver publicación en Facebook →
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {!isMobile && (
          <>
            <button
              onClick={() =>
                setActive((p) => (p === 0 ? posts.length - 1 : p - 1))
              }
              className="absolute z-20 p-4 text-white bg-red-600 rounded-md left-6"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => setActive((p) => (p + 1) % posts.length)}
              className="absolute z-20 p-4 text-white bg-red-600 rounded-md right-6"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
