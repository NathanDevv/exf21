'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/exf.png" // Asegúrate de tener este archivo en public/images
            alt="Logo"
            width={140}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Botón de menú hamburguesa (solo en móvil) */}
        <button
                  className="lg:hidden flex flex-col justify-between items-center w-8 h-8 focus:outline-none z-50 absolute right-4" // Añadí "absolute right-4" para moverlo al costado derecho
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle Menu"
                >
                  <span
                    className={`h-1 w-6 bg-white rounded transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                    style={{ transitionDuration: '300ms' }}
                  ></span>
                  <span
                    className={`h-1 w-6 bg-white rounded ${isOpen ? 'opacity-0' : ''}`}
                    style={{ transitionDuration: '300ms' }}
                  ></span>
                  <span
                    className={`h-1 w-6 bg-white rounded transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                    style={{ transitionDuration: '300ms' }}
                  ></span>
        </button>





        {/* Navegación */}
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-6 pt-24">
          {/* Botón para cerrar el menú */}
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            &times;
          </button>

          {/* Links de navegación */}
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                href="/"
                className="text-white hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="text-white hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
