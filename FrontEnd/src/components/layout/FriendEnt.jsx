import React from "react";
// Importação das imagens dos logos dos parceiros
const Vivo = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/ParceiriasImages/vivo.png";
const Samsung = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/ParceiriasImages/samsung.png";
const Loud = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/ParceiriasImages/loud.png";
const Itau = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/ParceiriasImages/itau.png";
const Microsoft = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/ParceiriasImages/microsoft.png";
const ClaroEmpresas = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/ParceiriasImages/claro.png";
const Amazon = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/ParceiriasImages/amazon.png";
const VivoKeyd = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/ParceiriasImages/vivokeyd.png";

// Imagem de fundo com padrão gráfico
const image = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/ParceiriasImages/%E2%80%94Pngtree%E2%80%94modern+halftone+triangular+pattern+design_9004244.png";

// Array com objetos contendo as imagens e nomes dos parceiros
const logos = [
  { src: Vivo, alt: "Vivo" },
  { src: Samsung, alt: "Samsung" },
  { src: Loud, alt: "Loud" },
  { src: Itau, alt: "Itaú" },
  { src: Microsoft, alt: "Microsoft" },
  { src: ClaroEmpresas, alt: "Claro Empresas" },
  { src: Amazon, alt: "Amazon" },
  { src: VivoKeyd, alt: "Vivo Keyd" },
];

const FriendsEnt = () => {
  return (
    // Seção que engloba tudo, com gradiente de fundo e padding, overflow hidden para controlar o conteúdo
    <section className="relative bg-gradient-to-b from-purple-600 to-blue-400 text-white overflow-hidden py-30 px-4 bg-fixed">
      {/* Imagem de background com posição absoluta para ficar por trás dos logos */}
      <img
        src={image}
        alt=""
        className="absolute invert top-190 left-0 md:left-0 md:top-77 w-full"
      />
      {/* Container centralizado para o conteúdo com z-index para ficar acima da imagem */}
      <div className="relative z-10 max-w-7xl mx-auto font-BankGothic">
        {/* Título da seção com animação AOS (fade-right) */}
        <h2
          className="text-white text-3xl mb-10"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          Nossos Parceiros
        </h2>
        {/* Grid para disposição dos logos, responsivo: 2 colunas no mobile e 4 colunas em telas médias */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {/* Mapeia o array de logos para renderizar cada um */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="p-[4px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 bg-fixed"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {/* Container branco com sombra para destacar o logo, redondo */}
              <div className="bg-white p-6 rounded-full shadow-md w-36 h-36 flex items-center justify-center">
                {/* Imagem do logo ajustada para caber bem dentro do container */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendsEnt;
