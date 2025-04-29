// app/page.tsx
import Link from 'next/link';
import React from 'react';
import Popup from './components/Popup';

export default function HomePage() {
  return (
    <div>
      {/* Sección Hero (Imagen de fondo + Texto) */}
      <Popup />
      <section className="relative h-screen bg-center bg-cover" style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 mx-auto text-center text-white py-36">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">Bienvenido a EXF</h1>
          <p className="mb-6 text-lg md:text-2xl">Elite Xtreme Fighting es el lugar donde la acción nunca se detiene</p>
          <Link href="/contact" className="px-6 py-2 text-black transition-all bg-yellow-500 rounded-lg hover:bg-yellow-400">Contáctanos</Link>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Lo que ofrecemos</h2>
          <p className="mb-12 text-lg">En EXF nos especializamos en entrenamientos de MMA de alto nivel, con entrenadores expertos en la disciplina.</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Entrenamientos Personales</h3>
              <p className="text-gray-700">Entrena con nuestros expertos en MMA y lleva tus habilidades al siguiente nivel.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Cursos Grupales</h3>
              <p className="text-gray-700">Participa en nuestras clases grupales, ideales para mejorar tu técnica y resistencia.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-xl font-bold">Eventos y Torneos</h3>
              <p className="text-gray-700">Únete a nuestros eventos y demuestra tu habilidad en competencias de MMA.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
