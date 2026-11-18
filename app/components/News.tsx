"use client";

import { useEffect, useState } from "react";
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

  const isMobile = vw < 640;

  // Ancho del iframe de Facebook
  const embedWidth = Math.min(Math.max(vw - 48, 350), 750);

  // Separación entre publicaciones
  const translateX = (offset: number) =>
    vw < 1024 ? offset * 850 : offset * 950;

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);

    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused || isMobile) return;

    const interval = setInterval(() => {
      setActive((p) => (p + 1) % posts.length);
    }, AUTOPLAY_TIME);

    return () => clearInterval(interval);
  }, [paused, isMobile]);

  return (
    <section className="relative py-24 overflow-hidden bg-neutral-950">
      {/* Encabezado */}
      <div className="text-center mb-14">
        <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-red-500 uppercase">
          Elite Xtreme Fighting
        </p>

        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Noticias & Actualizaciones
        </h2>

        <p className="mt-4 text-sm text-neutral-400 md:text-base">
          Mantente al día con todo lo que sucede en EXF.
        </p>
      </div>

      {/* Carrusel */}
      <div
        className={`relative flex items-center justify-center overflow-hidden ${
          isMobile ? "min-h-[500px]" : "h-[650px]"
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
              className={isMobile ? "relative" : "absolute left-1/2 top-1/2"}
              style={
                !isMobile
                  ? {
                      transform: `translate(-50%, -50%) translateX(${translateX(
                        offset,
                      )}px) scale(${index === active ? 1 : 0.82})`,
                      zIndex: index === active ? 10 : 1,
                      opacity: index === active ? 1 : 0.45,
                      pointerEvents: index === active ? "auto" : "none",
                      transition: "transform 700ms ease, opacity 700ms ease",
                    }
                  : {}
              }
            >
              {/* Tarjeta de Facebook */}
              <div
                className="relative mx-auto overflow-hidden shadow-2xl rounded-xl bg-neutral-900 shadow-black/50"
                style={{
                  width: isMobile ? "90vw" : "min(90vw, 750px)",
                  height: isMobile ? "450px" : "570px",
                  maxWidth: "750px",
                }}
              >
                {!isMobile ? (
                  <iframe
                    src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
                      post.url,
                    )}&show_text=true&width=${embedWidth}`}
                    className="absolute top-0 left-0 block w-full h-full"
                    style={{
                      border: "none",
                    }}
                    scrolling="no"
                    allow="encrypted-media"
                    loading="lazy"
                    title={`Publicación EXF ${post.id}`}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-5 bg-blue-600 rounded-full">
                      <span className="text-3xl font-bold text-white">f</span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-white">
                      Elite Xtreme Fighting
                    </h3>

                    <p className="mb-6 text-sm text-neutral-400">
                      Consulta nuestras últimas noticias, resultados,
                      fotografías y actualizaciones.
                    </p>

                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      Ver publicación →
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Flecha izquierda */}
        {!isMobile && (
          <button
            onClick={() =>
              setActive((p) => (p === 0 ? posts.length - 1 : p - 1))
            }
            className="absolute z-20 p-4 text-white transition border rounded-full left-4 border-white/10 bg-neutral-800/90 backdrop-blur hover:bg-red-600 md:left-8"
            aria-label="Noticia anterior"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Flecha derecha */}
        {!isMobile && (
          <button
            onClick={() => setActive((p) => (p + 1) % posts.length)}
            className="absolute z-20 p-4 text-white transition border rounded-full right-4 border-white/10 bg-neutral-800/90 backdrop-blur hover:bg-red-600 md:right-8"
            aria-label="Siguiente noticia"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-3 mt-8">
        {posts.map((post, index) => (
          <button
            key={post.id}
            onClick={() => setActive(index)}
            aria-label={`Ir a noticia ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === index
                ? "w-10 bg-red-600"
                : "w-2 bg-neutral-600 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
