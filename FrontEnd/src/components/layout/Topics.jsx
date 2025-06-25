import React from "react";
// Importação das imagens dos logos dos parceiros
const Vivo ="https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/Topicos/carbon_concept.png";
const Samsung = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/Topicos/nonicons_c-sharp-16.png";
const Loud = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/Topicos/nonicons_c-sharp-16.png";
const Itau ="https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/Topicos/Vector.png";
const Microsoft = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/Topicos/Vector-1.png";
const ClaroEmpresas = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/Topicos/cib_dot-net.png";
const VivoKeyd = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/Topicos/fluent_code-js-16-regular.png";

// Array com objetos contendo as imagens e nomes dos parceiros
const logos = [
  { src: Vivo, alt: "Vivo", label: "Conectividade" },
  { src: Samsung, alt: "Samsung", label: "C#" },
  { src: Itau, alt: "Itaú", label: "Games" },
  { src: Microsoft, alt: "Microsoft", label: "Tecnologia" },
  { src: ClaroEmpresas, alt: "Claro Empresas", label: ".NET" },
  { src: VivoKeyd, alt: "Vivo Keyd", label: "JavaScript" },
  { src: Loud, alt: "Vivo Keyd", label: "Java" },
];

const Topics = () => {
  return (
    <section className="relative text-white overflow-hidden py-10 md:py-16 lg:py-20 px-4 w-full transform md:translate-y-[-100px]">
      <div className="relative z-10 max-w-7xl mx-auto font-BankGothic">
        {/*
          Ajustes para telas intermediárias (md:):
          - grid-cols-2 (mobile) -> md:grid-cols-4 (intermediário) -> lg:grid-cols-7 (desktop)
          - gap-y-16 gap-x-8 (mobile) -> md:gap-x-16 md:gap-y-20 (intermediário) -> lg:gap-40 (desktop)
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-16 gap-x-8 md:gap-x-16 md:gap-y-20 lg:gap-40 place-items-center cursor-pointer">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="p-1 sm:p-[4px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 bg-fixed flex relative"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {/*
                Tamanhos do círculo:
                - w-24 h-24 (mobile)
                - sm:w-36 sm:h-36 (já era um ajuste para telas um pouco maiores)
                - md:w-36 md:h-36 (mantém o mesmo tamanho do sm para telas md)
              */}
              <div className="bg-gradient-to-tr from-white via-gray-100 to-gray-200 p-4 sm:p-6 rounded-full shadow-md w-24 h-24 sm:w-36 sm:h-36 flex items-center justify-center">
                <img src={logo.src} alt={logo.alt} className="" />
              </div>
              {/*
                Tamanho do texto do label:
                - text-base (mobile)
                - sm:text-xl (já era um ajuste para telas um pouco maiores)
                - md:text-xl (mantém o mesmo tamanho do sm para telas md)
              */}
              <h4 className="absolute font-bold text-base sm:text-xl bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent bottom-[-25%] left-1/2 transform translate-x-[-50%] text-nowrap">
                {logo.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
