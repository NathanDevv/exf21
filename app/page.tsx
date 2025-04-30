"use client";

// app/page.tsx
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // Importamos motion
import Popup from './components/Popup';
import About from './components/About';

export default function HomePage() {
  return (
    <div>
      <Popup />

      <section className="relative h-screen">
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/exf.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>

        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          {/* Animación del título */}
          <motion.h1
            className="mb-4 text-4xl font-bold md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Bienvenido a EXF
          </motion.h1>

          {/* Animación del subtítulo */}
          <motion.p
            className="mb-6 text-lg md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            Elite Xtreme Fighting — Donde nacen las leyendas del MMA
          </motion.p>

          {/* Botón sin animación (o se puede agregar también) */}
          <Link
            href="/contact"
            className="px-6 py-2 text-black transition-all bg-yellow-500 rounded-lg hover:bg-yellow-400"
          >
            Contáctanos
          </Link>
        </div>
      </section>

      <About />
    </div>
  );
}
