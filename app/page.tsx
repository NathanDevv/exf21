// app/page.tsx
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      {/* Sección Hero (Imagen de fondo + Texto) */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10 py-36">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a EXF</h1>
          <p className="text-lg md:text-2xl mb-6">Elite Xtreme Fighting es el lugar donde la acción nunca se detiene</p>
          <Link href="/contact" className="bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-400 transition-all">Contáctanos</Link>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Lo que ofrecemos</h2>
          <p className="text-lg mb-12">En EXF nos especializamos en entrenamientos de MMA de alto nivel, con entrenadores expertos en la disciplina.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Entrenamientos Personales</h3>
              <p className="text-gray-700">Entrena con nuestros expertos en MMA y lleva tus habilidades al siguiente nivel.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Cursos Grupales</h3>
              <p className="text-gray-700">Participa en nuestras clases grupales, ideales para mejorar tu técnica y resistencia.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Eventos y Torneos</h3>
              <p className="text-gray-700">Únete a nuestros eventos y demuestra tu habilidad en competencias de MMA.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
