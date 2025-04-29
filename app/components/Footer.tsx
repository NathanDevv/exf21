// Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 mt-12 text-white bg-blue-900">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 EXF - Elite Xtreme Fighting. Todos los derechos reservados.</p>
        <div className="flex justify-center mt-4 space-x-6">
          <Link href="https://www.facebook.com/EliteExtremeFighting/" className="text-white hover:text-yellow-500">Facebook</Link>
          <Link href="https://www.instagram.com/exf_mexico/" className="text-white hover:text-yellow-500">Instagram</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
