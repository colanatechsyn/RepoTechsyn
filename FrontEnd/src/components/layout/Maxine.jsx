import React from "react";
const MaxineImg = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/MaxineImages/Maxine.png"; // Imagem principal central
const image = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/MaxineImages/MaxineBack.png"; // Fundo com efeito rotacionado
const caract = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/MaxineImages/pngegg+(6).png"; // Imagem decorativa para os textos

const Maxine = () => {
  return (
    <section className="w-[100%] overflow-hidden bg-gradient-to-b from-purple-600 to-blue-500 text-white py-2 px-4 transform bg-fixed relative hidden md:flex">
      {/* Imagem de fundo com rotação, invertida e animação */}
      <img
        src={image}
        alt=""
        className=" lg:mb-0 lg:h-auto md:translate-y-20 absolute rotate-180 top-140 invert animate-pulse w-full"
      />

      {/* Container centralizado */}
      <div className="max-w-7xl mx-auto text-center transform translate-y-[-50px]">
        {/* Título principal */}
        <h1
          data-aos="fmd:text-2xl md:translate-y-5 md:translate-x-15 ade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          style={{ textShadow: "2px 2px 4px 6px #414141" }}
          className="text-6xl md:text-[200px] font-extrabold mb-10 font-BankGothic transform translate-y-35 z-0 font-arial"
        >
          MAXINE
        </h1>

        {/* Conteúdo dividido em três colunas: esquerda, centro e direita */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Coluna esquerda com duas imagens decorativas e textos */}
          <div
            className="md:w-1/3"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              src={caract}
              alt=""
              className="md:h-20 md:mb-5 lg:mb-0 lg:h-auto  md:translate-y-20 transform 2xl:translate-y-[-15px] filter opacity-50"
            />
            <h1
              className="md:text-2xl md:translate-y-5 md:translate-x-15 text-4xl absolute transform 2xl:translate-y-[-70px] 2xl:translate-x-[100px] font-BankGothic lg:translate-y-7 lg:translate-x-20 lg:text-3xl 2xl:text-4xl"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Carismática
            </h1>
            <img
              src={caract}
              alt=""
              className="md:h-20 md:mb-5 lg:mb-0 lg:h-auto md:translate-y-20 transform 2xl:translate-y-[84px] 2xl:translate-x-[-120px] opacity-50 lg:mt-10"
            />
            <h1
              className="md:text-2xl md:translate-y-5 md:translate-x-15 text-4xl absolute 2xl:translate-y-8 font-BankGothic lg:translate-y-7 lg:translate-x-20 lg:text-3xl 2xl:text-4xl 2xl:translate-x-[-20px]"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Inspiradora
            </h1>
          </div>

          {/* Coluna central com a imagem principal */}
          <div className="md:w-1/3 flex justify-center">
            <img src={MaxineImg} alt="Maxine" className="w-70 md:w-120 z-20" />
          </div>

          {/* Coluna diremd:h-20 md:mb-5 lg:mb-0 lg:h-auto md:translate-y-20 ita com imagens decorativas e textos */}
          <div
            className="md:w-1/3"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              src={caract}
              alt=""
              className="md:h-20 md:mb-5 lg:mb-0 lg:h-auto md:translate-y-20 transform 2xl:translate-y-[-15px] 2xl:rotate-y-180 opacity-50"
            />
            <h1
              className="md:text-2xl md:translate-y-5 md:translate-x-15 text-4xl absolute 2xl:translate-y-[-70px] 2xl:translate-x-[115px] font-BankGothic lg:translate-y-7 lg:translate-x-20 lg:text-3xl 2xl:text-4xl "
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Criativa
            </h1>
            <img
              src={caract}
              alt=""
              className="md:h-20 md:mb-5 lg:mb-0 lg:h-auto md:translate-y-20 transform 2xl:translate-y-[84px] rotate-y-180 2xl:translate-x-[120px] opacity-50 lg:rotate-y-360 lg:mt-10 2xl:rotate-y-180 md:rotate-y-360 "
            />
            <h1
              className="md:text-2xl md:translate-y-5 md:translate-x-15 text-4xl absolute 2xl:translate-y-8 2xl:translate-x-[205px] font-BankGothic lg:translate-y-7 lg:translate-x-20 lg:text-3xl 2xl:text-4xl "
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Autêntica
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maxine;
