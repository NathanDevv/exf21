// app/layout.tsx
import './globals.css'; 
import React from 'react';
import Header from './components/Header';  // Asegúrate de tener un componente Header
import Footer from './components/Footer';  // Asegúrate de tener un componente Footer

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>EXF - Elite Xtreme Fighting</title>
        {/* Aquí puedes agregar más metaetiquetas, enlaces a hojas de estilo, fuentes, etc. */}
      </head>
      <body>
        <Header /> {/* Incluye el componente Header */}
        <main>{children}</main> {/* Contenido de las páginas que se renderiza aquí */}
        <Footer /> {/* Incluye el componente Footer */}
      </body>
    </html>
  );
}
