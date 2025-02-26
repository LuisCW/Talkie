import { RiInstagramLine } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="w-full bg-gray-100 font-sans">
      <div className="w-full bg-tblue-700 p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center lg:items-start rounded-t-xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sección de logo y redes sociales */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-4">
              <img
                src="/logo/logo_talkie.png"
                alt="Logo fractal"
                className="w-20 md:w-32"
              />
              <p className="font-semibold text-2xl md:text-3xl text-black">Talkie</p>
            </div>
            <div className="flex gap-6 mt-4">
              <a href="#" className="text-3xl text-black hover:text-gray-300 transition duration-300">
                <RiInstagramLine />
              </a>
              <a href="#" className="text-3xl text-black hover:text-gray-300 transition duration-300">
                <RiYoutubeFill />
              </a>
              <a href="#" className="text-3xl text-black hover:text-gray-300 transition duration-300">
                <RiFacebookCircleFill />
              </a>
            </div>
          </div>

          {/* Sección de enlaces */}
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex flex-col items-center lg:items-start text-white">
              <h4 className="text-xl font-semibold mb-2">Sobre nosotros</h4>
              <a href="#" className="text-lg hover:text-gray-200 transition duration-300">
                Nuestra misión
              </a>
              <a href="#" className="text-lg hover:text-gray-200 transition duration-300">
                Equipo
              </a>
              <a href="#" className="text-lg hover:text-gray-200 transition duration-300">
                Newsletter
              </a>
            </div>
            <div className="flex flex-col items-center lg:items-start text-white">
              <h4 className="text-xl font-semibold mb-2">Legal</h4>
              <a href="#" className="text-lg hover:text-gray-200 transition duration-300">
                Términos y condiciones
              </a>
              <a href="#" className="text-lg hover:text-gray-200 transition duration-300">
                Política de privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Pie de página adicional */}
      <div className="w-full bg-gray-200 text-center py-4">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Talkie. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;