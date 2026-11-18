"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60">
          <div className="relative w-[90%] max-w-md overflow-hidden rounded-lg">
            {/* Imagen de fondo adaptada al popup */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat rounded-lg"
              style={{
                backgroundImage: "url('/images/poster.webp')",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                opacity: 0.15,
                pointerEvents: "none",
              }}
            />

            {/* Contenido en primer plano */}
            <div className="relative z-10 p-6 text-center rounded-lg shadow-lg bg-gray-800/80">
              <Image
                className="m-auto scale-155"
                src="/images/exf.png"
                alt="Logo EXF"
                width={200}
                height={200}
              />

              <p className="mb-4 text-white">
                Adquiere tus entradas para{" "}
                <span className="font-bold">EXF 24: MEXICO VS ECUADOR</span>
              </p>

              <p className="mb-4 text-sm font-medium text-white">
                📍 Gimnasio Oscar &quot;Tigre&quot; Garcia
                <br />
                📅 Sábado 28 de Noviembre
                <br />
                🕘 Puertas se abren a las 5:00 P.M.
              </p>

              <p className="mb-6 text-sm text-white">
                ¡No te lo pierdas! Peleadores que han estado en las ligas mas
                grandes, emoción y adrenalina en cada pelea.
              </p>

              <div className="space-y-4">
                <Link
                  href="https://www.eventbrite.com.mx/e/exf-24-tickets-2004041912307?aff=oddtdtcreator"
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
