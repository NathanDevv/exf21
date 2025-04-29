// app/page.tsx
import Link from 'next/link';
import React from 'react';
import Popup from './components/Popup';
import About from './components/About';

export default function HomePage() {
  return (
    <div>
      {/* Popup de promoción */}
      <Popup />

      {/* Sección Hero con video de fondo */}
      <section className="relative h-screen">
      <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./exf.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
      </video>

        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">Bienvenido a EXF</h1>
          <p className="mb-6 text-lg md:text-2xl">
            Elite Xtreme Fighting — Donde nacen las leyendas del MMA
          </p>
          <Link
            href="/contact"
            className="px-6 py-2 text-black transition-all bg-yellow-500 rounded-lg hover:bg-yellow-400"
          >
            Contáctanos
          </Link>
        </div>
      </section>

      {/* Sección de información adicional */}
      <About />
    </div>
  );
}
