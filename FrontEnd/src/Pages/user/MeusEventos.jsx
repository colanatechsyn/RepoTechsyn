import React, { useEffect, useState } from "react";
import CardMeusEventos from "../../components/common/CardMeusEventos";
const Imageback =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/Materiais/Microsoft.png";
import SliderMeusEventos from "../../components/layout/SliderMeusEventos";
const arrowLeft = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/MeusEventos/Arrow+left-circle.png";
const arrowRight = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/MeusEventos/Arrow+right-circle.png";

const MeusEventos = () => {
  const [eventos, setEventos] = useState([]);

  // Simulando chamada para back-end
  useEffect(() => {
    const eventosFake = [
      {
        id: 1,
        titulo: "MICROSOFT AZURE",
        descricao: "Introdução ao Azure para iniciantes.",
        data: "01 Mai",
        hora: "10h",
        local: "São Paulo - SP",
        imagem:
          "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/Flux_Dev_Create_an_image_that_evokes_a_sense_of_pioneering_inn_1.webp",
        encerrado: false,
      },
      {
        id: 2,
        titulo: "GOOGLE CLOUD",
        descricao: "Workshop prático de Cloud.",
        data: "03 Mai",
        hora: "14h",
        local: "Online",
        imagem:
          "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/Flux_Dev_create_an_image_of_a_cuttingedge_technology_event_sho_0.webp",
        encerrado: false,
      },
      {
        id: 3,
        titulo: "AWS EXPERIENCE",
        descricao: "Evento completo sobre serviços AWS.",
        data: "05 Mai",
        hora: "16h",
        local: "Rio de Janeiro",
        imagem:
          "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/Flux_Dev_Create_an_image_depicting_a_bustling_technology_event_3.webp",
        encerrado: true,
      },
      {
        id: 4,
        titulo: "META HACKATHON",
        descricao: "Hackathon com prêmios em dinheiro.",
        data: "10 Mai",
        hora: "08h",
        local: "Online",
        imagem:
          "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/Flux_Dev_Create_an_image_of_a_bustling_technology_event_where__3.webp",
        encerrado: true,
      },
      {
        id: 5,
        titulo: "ORACLE TECH DAY",
        descricao: "Dia inteiro com tecnologia Oracle.",
        data: "12 Mai",
        hora: "13h",
        local: "Curitiba - PR",
        imagem: "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/digital_evento_sitio-600x450.jpg",
        encerrado: true,
      },
      {
        id: 6,
        titulo: "IBM FUTURE TECH",
        descricao: "O futuro da tecnologia segundo a IBM.",
        data: "15 Mai",
        hora: "09h",
        local: "Online",
        imagem:
          "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/5f8159_2e08f10003074706bb1de62d55d0aebc~mv2.avif",
        encerrado: false,
      },
      {
        id: 7,
        titulo: "TESLA TECH TOUR",
        descricao: "Tecnologias sustentáveis e inovação.",
        data: "18 Mai",
        hora: "11h",
        local: "Belo Horizonte",
        imagem:
          "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/AWE-Asia-Immersive-technology-event.jpg",
        encerrado: true,
      },
      {
        id: 8,
        titulo: "INTEL INOVA",
        descricao: "Novas gerações de processadores.",
        data: "20 Mai",
        hora: "15h",
        local: "Online",
        imagem:
          "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/5f8159_1a9a477d609742d09de9f3abe1750f41~mv2.avif",
        encerrado: false,
      },
      {
        id: 9,
        titulo: "DELL SUMMIT",
        descricao: "Discussões sobre futuro do hardware.",
        data: "22 Mai",
        hora: "12h",
        local: "Fortaleza - CE",
        imagem: "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/tecnologia-para-eventos.jpg",
        encerrado: false,
      },
      {
        id: 10,
        titulo: "ADOBE CREATIVE WEEK",
        descricao: "Semana com foco em design e vídeo.",
        data: "25 Mai",
        hora: "17h",
        local: "Online",
        imagem:
          "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/projetor-para-eventos-em-sao-paulo-1.jpg",
        encerrado: true,
      },
      {
        id: 11,
        titulo: "SAP SOLUTIONS",
        descricao: "Como aplicar SAP nas empresas.",
        data: "28 Mai",
        hora: "14h",
        local: "Recife - PE",
        imagem: "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/unnamed.png",
        encerrado: true,
      },
      {
        id: 12,
        titulo: "RED HAT OPEN SOURCE",
        descricao: "Open source para empresas.",
        data: "30 Mai",
        hora: "10h",
        local: "Online",
        imagem:
          "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/Flux_Dev_Create_an_image_that_evokes_a_sense_of_pioneering_inn_1.webp",
        encerrado: true,
      },
      {
        id: 13,
        titulo: "CISCO CONNECT",
        descricao: "Conectividade e segurança digital.",
        data: "01 Jun",
        hora: "16h",
        local: "Florianópolis",
        imagem:
          "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/Flux_Dev_create_an_image_of_a_cuttingedge_technology_event_sho_0.webp",
        encerrado: false,
      },
      {
        id: 14,
        titulo: "NVIDIA RTX TECH",
        descricao: "Avanços em IA e gráficos RTX.",
        data: "03 Jun",
        hora: "13h",
        local: "Online",
        imagem:
          "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/Flux_Dev_Create_an_image_depicting_a_bustling_technology_event_3.webpp",
        encerrado: false,
      },
    ];
    setEventos(eventosFake);
  }, []);

  return (
    <div className="w-full">
      {/* Cabeçalho */}
      <div className="hidden md:flex header-content bg-gradient-to-l from-purple-600 to-indigo-600 flex-col h-auto lg:h-190 items-center px-4">
        <div className="top_headerContent w-full flex justify-center mb-7 mt-10">
          <h1
            className="text-white font-BankGothic text-[50px] sm:text-[70px] lg:text-[110px] text-center"
            style={{ textShadow: "4px 4px 6px 4px" }}
          >
            Meus Eventos
          </h1>
        </div>
        <div className="slider flex justify-end ml-20 gap-10">
          <div className="flex flex-col w-90 transform ">
            <div>
              <h1 className="text-[45px] !text-[#e51cd7] font-extrabold mb-[-15px]">
                Eventos
              </h1>
              <h1 className="text-[45px] text-[#ffffff] font-extrabold">
                Proximos
              </h1>
              <div className=" bg-gradient-to-tr from-purple-500 to-indigo-500 h-[3px] w-[44%]" />
            </div>
            <p className="text-[#ffffff] mt-[10%] w-80">
              Acessado recentemente esses são seus ultimos eventos idos{" "}
            </p>
            <div className="arrows flex items-center gap-2 mt-30">
              <img src={arrowLeft} alt="" />
              <h1 className="text-white tracking-[2px] text-center">1/6</h1>
              <img src={arrowRight} alt="" />
            </div>
          </div>
          <SliderMeusEventos />
        </div>
      </div>

      {/* Conteúdo abaixo */}
      <div
        id="sessao_abaixo"
        className="flex flex-col lg:flex-row mt-[-50px] mb-50 px-4"
      >
        {/* Filtros */}
        <div className="flex flex-col h-auto lg:h-[550px] w-full lg:w-[16%] lg:ml-[7%] mt-[10%] md:mt-[10%] gap-[10%] md:gap-[0%]">
          <div className="flex flex-col text-center lg:text-left mb-10 mt-5 md:mt-0">
            <div>
              <h1 className="text-[30px] sm:text-[35px] lg:text-[45px] font-extrabold mb-[-15px] !bg-gradient-to-tr from-purple-500 to-indigo-600 bg-clip-text !text-transparent">
                Meus
              </h1>
              <h1 className="text-[30px] sm:text-[35px] lg:text-[45px] text-[#5B5B5B]">
                Eventos
              </h1>
              <div className="mx-auto lg:mx-0 bg-gradient-to-tr from-purple-500 to-indigo-500 h-[3px] w-[44%]" />
            </div>
            <p className="text-[#5B5B5B] mt-6 md:mt-4">
              Esses são os seus últimos eventos acessados
            </p>
          </div>

          <div className="border-b-2 border-[#852db4] mb-10 md:mb-6">
            <input
              type="search"
              placeholder="Procurar eventos"
              className="w-full p-1 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-[20px] sm:text-[22px] lg:text-[25px] text-[#5b5b5b]">
              <span className="bg-gradient-to-tr from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Filtrar
              </span>{" "}
              por:
            </h1>
            <div className="flex flex-row gap-2 items-center">
              <input type="checkbox" />
              <p>Abertos</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <input type="checkbox" />
              <p>Encerrados</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <input type="checkbox" />
              <p>Data</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <input type="checkbox" />
              <p>Alfabética</p>
            </div>
          </div>
        </div>

        {/* Lista de eventos */}
        <div className="w-full lg:w-[1200px] lg:ml-[5%] mt-[10%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {eventos.map((evento) => (
            <CardMeusEventos key={evento.id} {...evento} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeusEventos;
