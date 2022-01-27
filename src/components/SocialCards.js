import bannerweb from "./banner-web.png";
import bannerredes from "./banner-redes.png";
import logo from './logo-emege.svg'

const SocialCards = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="w-full grid justify-items-center">
        <img src={logo} alt="logo" className="w-1/3 md:w-1/5"/>
      </div>
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-600 py-32 px-10 relative mb-4">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src={bannerweb}
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-white font-medium title-font mb-2">
                Conocé nuestros productos
              </h2>
              <p className="leading-relaxed text-white">
                En nuestra web encontrarás toda la información de producto que necesitás y el contacto al servicio técnico.
              </p>
              <div class="mt-12">
            <a href="https://emege.com.ar/" rel="noreferrer" target="_blank" className="bg-transparent border text-white px-8 py-3 font-medium rounded-md hover:bg-yellow-600 hover:text-primary hover:border-transparent transition">ir a la web</a>
        </div>
              {/* <a
                href="https://emege.com.ar/"
                target="_blank"
                className="mt-3 text-yellow-500 inline-flex items-center"
              >
                ir a la web de Emegé
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 mx-auto">
              <div className="flex flex-wrap w-full bg-gray-600 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src={bannerredes}
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-2xl text-white font-medium title-font mb-2">
                    Seguinos en las redes
                  </h2>
                  <p className="leading-relaxed text-white">
                    Para que estés al tanto de las novedades, información de los
                    productos, tips de mantenimiento, recetas y participar de
                    sorteos.
                  </p>
                  <div>
                    <a
                      href="https://www.instagram.com/emegearg/"
                      rel="noreferrer"
                      target="_blank"
                      className="mt-3 text-yellow-500 inline-flex items-center"
                    >
                      Instagram
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/Emeg%C3%A9-Calefacci%C3%B3n-296892737661764/"
                      rel="noreferrer"
                      target="_blank"
                      className="mt-3 text-yellow-500 inline-flex items-center"
                    >
                      Facebook
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="px-2 md:w-1/2 w-full">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="https://dummyimage.com/542x420"
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                    Shooting Stars
                  </h2>
                  <p className="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialCards;
