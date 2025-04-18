// Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 EXF - Elite Xtreme Fighting. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="https://facebook.com" className="text-white hover:text-yellow-500">Facebook</Link>
          <Link href="https://instagram.com" className="text-white hover:text-yellow-500">Instagram</Link>
          <Link href="https://twitter.com" className="text-white hover:text-yellow-500">Twitter</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
