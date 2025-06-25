import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardMeusEventos from "../common/CardMeusEventos"; // seu componente de evento

import "../../css/slider.css"; // supondo que tenha o css acima aqui

const eventosFalsos = [
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
];

export default function SliderMeusEventos() {
  return (
    <div className="w-300 py-8 text-white relative overflow-visible">
      {" "}
      {/* <- aqui */}
      <div className="relative overflow-visible">
        {" "}
        {/* envoltório extra */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={4}
          className="pb-10"
          style={{ paddingBottom: "70px" }}
        >
          {eventosFalsos.map((evento, idx) => (
            <SwiperSlide key={idx}>
              <CardMeusEventos {...evento} />
            </SwiperSlide>
          ))}

          <div
            className="swiper-pagination"
            style={{
              position: "absolute",
              bottom: "20px",
              width: "100%",
              textAlign: "center",
              color: "white",
            }}
          />
        </Swiper>
      </div>
    </div>
  );
}
