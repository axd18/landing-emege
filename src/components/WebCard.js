import bannerWeb from "./banner-web.png";

const WebCard = () => {
  return (
    <a href="https://emege.com.ar" target="_blank" rel="noopener noreferrer">
      <div className="flex flex-wrap w-full bg-gray-600 py-32 px-10 relative mb-4">
        <img
          alt="gallery"
          className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
          src={bannerWeb}
        />
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-white font-medium title-font mb-2">
            Conocé nuestros productos
          </h2>
          {/* <p className="leading-relaxed text-white">De calefacción y agua caliente.</p> */}
          <p className="mt-3 text-yellow-500 inline-flex items-center">
            Ir a la web de Emegé
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
          </p>
        </div>
      </div>
    </a>
  );
};

export default WebCard;
