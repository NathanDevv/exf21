"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60">
          <div className="relative w-[90%] max-w-md">
            {/* Imagen de fondo difusa, sin interferir clics */}
            <div
              className="absolute inset-0 bg-center bg-cover rounded-lg"
              style={{
                backgroundImage: "url('/images/poster.jpg')",
                backgroundPosition: "top", // <-- Esto baja la imagen
                opacity: 0.1,
                zIndex: 11,
                pointerEvents: "none",
              }}
              
            ></div>

            {/* Contenido en primer plano */}
            <div className="relative z-10 p-6 text-center bg-gray-800 rounded-lg shadow-lg bg-opacity-80">
              <h2 className="mb-4 text-2xl font-bold text-white">¡EXF21 se acerca!</h2>
              <p className="mb-4 text-white">
                Acompáñanos en el evento de MMA más esperado del año.
              </p>
              <p className="mb-4 text-sm font-medium text-white">
                📍 Gimnasio Oscar &quot;Tigre&quot; Garcia<br />
                📅 Sábado 3 de Mayo<br />
                🕘 Puertas se abren a las 5:00 P.M.
              </p>
              <p className="mb-6 text-sm text-white"> 
                ¡No te lo pierdas! Luchadores de alto nivel, emoción y adrenalina en cada pelea.
              </p>
              <div className="space-y-4">
                <Link
                  href="https://eventbrite.com.mx/e/exf-21-a-decade-of-dominance-tickets-1274816824439?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 text-white transition duration-300 transform bg-gray-600 rounded-lg hover:bg-gray-500 hover:scale-105"
                >
                  Comprar Tickets
                </Link>
                <Button
                  className="w-full px-4 py-2 text-white transition duration-300 transform bg-gray-600 rounded-lg hover:bg-gray-500 hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
