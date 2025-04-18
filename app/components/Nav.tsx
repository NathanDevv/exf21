// app/components/Nav.tsx
import Link from 'next/link';

interface NavProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ isOpen, setIsOpen }: NavProps) => {
  return (
    <nav>
      {/* Menú para pantallas grandes */}
      <ul className="hidden lg:flex space-x-8">
        <li>
          <Link href="/" className="text-white hover:text-yellow-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-yellow-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-yellow-500">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/events" className="text-white hover:text-yellow-500">
            Events
          </Link>
        </li>
      </ul>

      {/* Botón de menú hamburguesa - solo visible en móviles */}
      <div className="lg:hidden flex items-center">
        <button
          className="flex flex-col justify-between w-8 h-6 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`h-1 bg-white rounded transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-1 bg-white rounded ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-1 bg-white rounded transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Menú hamburguesa - solo visible cuando el estado isOpen es true */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-6 pt-24">
          {/* Botón para cerrar el menú */}
          <button
            className="absolute top-4 right-4 text-white text-3xl"
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
    </nav>
  );
};

export default Nav;
