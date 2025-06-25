const backgroundBanner = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/HomeIamges/computador-de-alta-performance.jpg";

function Banner() {
  return (
    <section
      className="relative w-full md:w-[80%] lg:w-[80%] h-[400px] md:h-[500px] lg:h-[670px] rounded-2xl md:rounded-[77px] flex flex-col md:flex-row bg-cover bg-center overflow-hidden px-4 py-8 md:p-0"
      style={{
        backgroundImage: `url(${backgroundBanner})`,
      }}
    >
      {/* Overlay para desfoque e opacidade APENAS no mobile */}
      <div className="absolute inset-0 block md:hidden bg-black/50 backdrop-blur-sm z-0" />

      {/* Conteúdo sobre o banner */}
      <div className="relative z-10 p-4 md:p-18 pb-8 md:pb-12 w-full md:w-[61%] gap-4 md:gap-8 flex justify-end flex-col rounded-2xl md:rounded-[77px_0_0_77px] text-center md:text-left">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ffffff] font-BankGothic leading-tight"
          style={{ textShadow: "4px 4px 7px #111111" }}
        >
          Registre seu{" "}
          <span
            className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"
            style={{ textShadow: "none" }}
          >
            Evento
          </span>
        </h1>
        <p
          className="text-sm md:text-base !text-white mx-auto md:mx-0 max-w-md"
          style={{ textShadow: "4px 4px 7px #111111" }}
        >
          Tem interesse em fazer parte da TechSyn? Se sim, venha criar um evento
          conosco. É simples, fácil e rápido! Só precisamos que você entre com a
          sua empresa.
        </p>
        <div className="buttons_Enterprise_banner flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="px-6 py-2 md:px-4 md:py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg text-sm hover:bg-purple-700">
            Inscrever-se
          </button>
          <div className="p-[2px] rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600">
            <button className="w-full px-6 py-2 md:px-4 md:py-2 text-purple-600 bg-[#c5cacc] rounded-[6px] text-sm hover:bg-purple-100">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent font-semibold">
                Ver mais
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
