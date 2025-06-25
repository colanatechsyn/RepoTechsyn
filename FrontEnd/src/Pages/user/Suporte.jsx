import React from "react";
import Cards from "../../components/common/SupCards"; // Componente de cards de suporte

const BackgroundVideo =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/videos/vecteezy_white-color-complex-and-elegant-multiple-shapes-geometrical_45708154.mp4";
const Slider =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/AjudaImages/slider_bl.png"; // Imagem para card "Começando"
const Card =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/AjudaImages/cards_bl.png"; // Imagem para card "Conta e Cobrança"
const Engrenagem =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/AjudaImages/engrenagem_bl.png"; // Imagem para card "Solução de Problemas"
const Seta =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/AjudaImages/seta_direita.png"; // Ícone de seta para links
const Lupa =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/AjudaImages/Search_icon.png"; // Ícone de lupa para busca

const Suporte = () => {
  return (
    <>
      {/* Container principal da seção Suporte */}
      <div id="Suporte" className="text-center mb-27">
        {/* Cabeçalho com título e descrição */}
        <video
          className="videoBack h-screen lg:h-auto lg:min-h-full w-full absolute transform translate-y-[-150px] object-cover" // Added object-cover
          src={BackgroundVideo}
          autoPlay
          loop
          muted
        ></video>
        <div className="header_content h-100 md:h-120 flex flex-col justify-center items-center transform translate-y-20 px-4 md:pb-0 pb-60">
          {" "}
          {/* Added px-4 for mobile padding */}
          <div id="P_and_H" className="flex flex-col items-center gap-0 ">
            {/* Título com destaque em gradiente */}
            <h1
              id="First_text"
              className="text-[40px] md:text-[55px] lg:text-[70px] text-[#5B5B5B] select-none font-BankGothic leading-tight" // Adjusted font size and line-height for responsiveness
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1400"
            >
              <span className="font-BankGothic bg-gradient-to-r from-[#AD3FE9] to-[#0055FF] bg-clip-text text-transparent font-bold">
                Como Podemos{" "}
              </span>
              te ajudar?
            </h1>

            {/* Descrição abaixo do título */}
            <p
              className="select-none w-full max-w-[680px] text-[#414141] text-sm md:text-base px-4" // Adjusted width, font size, and added padding
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1400"
            >
              Encontre conselhos e respostas da nossa equipe de suporte
              rapidamente ou entre em contato.
            </p>
          </div>
          {/* Caixa de busca com ícone de lupa */}
          <div
            className="input relative w-full max-w-[550px] px-4" // Adjusted width and added padding
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              id="Lupa_icon"
              src={Lupa}
              alt="Search"
              className="absolute top-1/2 translate-y-1/2 left-8 h-[20px] filter invert" // Centered vertically
            />
            <input
              type="search"
              id="input_resposta"
              placeholder="Buscar por Respostas...."
              className="h-12 w-full focus:outline-none pl-11 bg-gradient-to-br from-white to-[#FBFBFB] shadow-sm shadow-gray-600 mt-10 rounded-[2px] text-[#414141]" // Ensure w-full
            />
          </div>
        </div>
        {/* Seção de navegação por tópicos com fundo gradiente */}
        <div
          id="Card_superior"
          className="flex flex-col items-center justify-around gap-[80px] bg-gradient-to-tr from-[#AD3FE9] to-[#0055FF] h-auto py-4 md:h-[720px] mt-[10%] bg-fixed transform translate-y-[-30px] pt-1" // Adjusted height to auto for mobile, added padding
        >
          {/* Título da seção */}
          <h1
            id="navega"
            className="text-[30px] md:text-[40px] text-[#ffffff] select-none font-sans px-4 md:mb-0 md:mt-0 mb-20 mt-10" // Adjusted font size and added padding
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <span className="text-white font-bold">Navegue</span> por todos os
            Tópicos
          </h1>

          {/* Container dos cards */}
          <div
            id="cards"
            className="flex flex-col md:flex-row transform translate-y-[-120px] items-center justify-center gap-6 md:gap-10 w-full md:w-[80%] max-w-[1350px] px-4 md:px-0 brightness-120" // Changed to flex-col for mobile, flex-row for md+, adjusted gaps and widths
          >
            {/* Card 1 - Começando */}
            <Cards
              imgs={Slider}
              h1={"Começando"}
              pr={"Configure sua conta e comece em poucos passos simples."}
            />
            {/* Card 2 - Conta e Cobrança */}
            <Cards
              imgs={Card}
              h1={"Conta e Cobrança"}
              pr={
                "Gerencie sua conta, adicione novos usuários e exporte dados."
              }
            />
            {/* Card 3 - Solução de Problemas */}
            <Cards
              imgs={Engrenagem}
              h1={"Solução de Problemas"}
              pr={"Encontre respostas para problemas de configuração."}
            />
          </div>
        </div>
        {/* Seção de Perguntas Frequentes */}
        <div
          id="texto"
          className="hidden flex-col gap-[60px] mt-[0%] md:mt-[5%] h-[320px]  md:flex   items-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {/* Título das perguntas */}
          <h1
            id="p_r"
            className="text-[20px] font-BankGothic bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text !text-transparent flex flex-col w-full transform translate-x-[-300px] font-bold "
          >
            Perguntas Recorrentes
          </h1>

          {/* Lista de perguntas com links */}
          <div
            id="perguntas"
            className="flex flex-col text-start text-[#5B5B5B] gap-[50px] w-[750px]  h-[260px] m-5"
          >
            <a href="#" className="flex items-center gap-2 font-bold">
              Promover Eventos de Tecnologia
              <img
                src={Seta}
                alt=""
                className="w-5 font-extrabold ml-auto -mt-1 filter grayscale-100"
              />
            </a>
            <a href="#" className="flex items-center gap-2 font-bold">
              Carreira com Eventos de Tecnologia
              <img
                src={Seta}
                alt=""
                className="w-5 font-extrabold ml-auto -mt-1 filter grayscale-100"
              />
            </a>
            <a href="#" className="flex items-center gap-2 font-bold">
              Ranking de Participantes
              <img
                src={Seta}
                alt=""
                className="w-5 font-extrabold ml-auto -mt-1 filter grayscale-100"
              />
            </a>
            <a href="#" className="flex items-center gap-2 font-bold">
              Desenvolvimento de Software para Eventos
              <img
                src={Seta}
                alt=""
                className="w-5 font-extrabold ml-auto -mt-1 filter grayscale-100"
              />
            </a>
            <a href="#" className="flex items-center gap-2 font-bold">
              Executar um Evento de Tecnologia Online
              <img
                src={Seta}
                alt=""
                className="w-5 font-extrabold ml-auto -mt-1 filter grayscale-100"
              />
            </a>
          </div>
        </div>
        {/* Linha horizontal separadora */}
        <hr className="text-[#5b5b5b6c] mx-[10%] md:mx-[18%] mt-[11%]" />{" "}
        {/* Adjusted mx for responsiveness */}
        {/* Seção final de contato caso não encontre resposta */}
        <div
          id="last"
          className="flex flex-col items-center gap-[20px] md:gap-[30px] mt-[4%] px-4 pb-8" // Adjusted gap and added padding
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h1 className="text-[20px] md:text-[25px] text-[#5B5B5B] text-center">
            {" "}
            {/* Adjusted font size and alignment */}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Não consegue
            </span>{" "}
            achar a resposta para sua pergunta?
          </h1>

          {/* Texto explicativo */}
          <p className="select-none w-full max-w-[520px] text-[12px] md:text-[14px] text-[#414141] px-4">
            {" "}
            {/* Adjusted width, font size and added padding */}
            Encontre conselhos e respostas da nossa equipe de suporte
            rapidamente ou entre em contato.
          </p>

          {/* Botão para contato */}
          <a
            href="#"
            className="flex bg-gradient-to-r from-[#8F2EC4] to-[#0055FF] text-white h-[33px] w-[110px] items-center justify-center rounded-[2px] text-[14px]"
          >
            Contate-nos
          </a>
        </div>
      </div>
    </>
  );
};

export default Suporte;
