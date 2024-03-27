// Landing page. Includes component <LogoApp>, some text for company introduction
// and link button to access main menu if logged in (otherwise redirects to login route)
// Offers a link for Contact or Support that refers to /contact route ** TODO **

import LogoApp from "./components/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <LogoApp />
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Itswell.com</h1>
      <p className="text-2xl mb-8 px-4 md:px-0">Acceso a base de datos componentes de alimentos.</p>
      <p className="text-xl mb-8 px-4 md:px-0">Para poder acceder, necesita estar registrado en el sistema. Si no lo está, contacte con nosotros.</p>
      <div className="flex justify-center items-center space-x-8">
        <Link
          href="/panel"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          <span>Acceder</span>
        </Link>
        <a href="/contact" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Contactar</a>
      </div>
      <div className="flex justify-center items-center mt-8">
        <p className="text-lg mb-8 px-4 md:px-0">
          Puede volver a la web de itswell.com pulsando <Link
            className="p-1 underline decoration-neutral-800 decoration-2 underline-offset-2 hover:text-white hover:decoration-black hover:decoration-3 hover:bg-black hover:rounded"
            href="https://www.itswell.com">aquí
          </Link>
        </p>
          
      </div>
  </div>
  </div>
  );
}
