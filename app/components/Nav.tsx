// app/components/Nav.tsx
import Link from "next/link";

interface NavProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ isOpen, setIsOpen }: NavProps) => {
  return (
    <nav>
      {/* Menú para pantallas grandes */}
      <ul className="hidden space-x-8 lg:flex">
        <li>
          <Link href="/" className="text-white hover:text-yellow-500">
            Princpal
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-yellow-500">
            Acerca de
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-yellow-500">
            Contacto
          </Link>
        </li>
        <li>
          <Link href="/events" className="text-white hover:text-yellow-500">
            Eventos
          </Link>
        </li>
      </ul>

      {/* Botón de menú hamburguesa - solo visible en móviles */}
      <div className="flex items-center lg:hidden">
        <button
          className="flex flex-col justify-between w-8 h-6 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`h-1 bg-white rounded transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-1 bg-white rounded ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`h-1 bg-white rounded transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menú hamburguesa - solo visible cuando el estado isOpen es true */}
      {isOpen && (
        <div className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-full pt-24 space-y-6 bg-black lg:hidden bg-opacity-90">
          {/* Botón para cerrar el menú */}
          <button
            className="absolute text-3xl text-white top-4 right-4"
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
                Principal
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Acerca de
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="text-white hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Eventos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
