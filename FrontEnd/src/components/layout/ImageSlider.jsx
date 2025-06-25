import React, { useState, useEffect, useRef } from "react"; // Adicionado useRef
import Card from "../../components/common/CardPreviewHomePage";

// Dados estáticos dos eventos
const testimonials = [
  {
    title: "TechSummit Brasil",
    description: "Colocar em prática os conhecimentos adquiridos.",
    eventImage:
      "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/eventos_de_tecnologia_e_negocios-1-994x495.jpeg",
    enterpriseName: "TechCorp",
    enterpriseDescription: "Empresa focada em inovação tecnológica.",
    enterpriseLogo: "https://via.placeholder.com/50",
    dateLocation: "15 de Junho - São Paulo, SP",
    tags: ["prática", "conhecimento"],
  },
  {
    title: "InovaTech Conference",
    description: "Aprender com os melhores na área de tecnologia.",
    eventImage:
      "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/5f8159_2e08f10003074706bb1de62d55d0aebc~mv2.avif",
    enterpriseName: "CodeMasters",
    enterpriseDescription: "Especialistas em bootcamps.",
    enterpriseLogo: "https://via.placeholder.com/50",
    dateLocation: "20 de Julho - Recife, PE",
    tags: ["aprendizado", "mentoria"],
  },
  {
    title: "DevCon Brasil",
    description: "Conectar com pessoas que têm os mesmos interesses.",
    eventImage: "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/digital_evento_sitio-600x450.jpg",
    enterpriseName: "DevNetwork",
    enterpriseDescription: "Comunidade de desenvolvedores.",
    enterpriseLogo: "https://via.placeholder.com/50",
    dateLocation: "10 de Agosto - Curitiba, PR",
    tags: ["networking", "devs"],
  },
  {
    title: "FutureTech Expo",
    description: "Desenvolver-se profissional e pessoalmente.",
    eventImage:
      "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/267096-top-x-principais-eventos-de-marketing-digital-para-2019.webp",
    enterpriseName: "GrowthLab",
    enterpriseDescription: "Consultoria de carreira e tecnologia.",
    enterpriseLogo: "https://via.placeholder.com/50",
    dateLocation: "25 de Setembro - Fortaleza, CE",
    tags: ["carreira", "desenvolvimento"],
  },
  {
    title: "CodeFest",
    description: "Estar atualizado com as novas tecnologias.",
    eventImage:
      "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventsImage/Flux_Dev_Create_a_vibrant_image_that_captures_the_essence_of_i_1.webp",
    enterpriseName: "FutureTech",
    enterpriseDescription: "Tecnologias emergentes.",
    enterpriseLogo: "https://via.placeholder.com/50",
    dateLocation: "30 de Outubro - Porto Alegre, RS",
    tags: ["inovação", "tecnologia"],
  },
];

// Hook para detectar se a tela é grande (breakpoint 'lg' do Tailwind, 1024px por padrão)
function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    // Media Query para o breakpoint 'lg' do Tailwind CSS (1024px)
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // Alterado para 1024px
    setIsLarge(mediaQuery.matches);

    const handler = (e) => setIsLarge(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isLarge;
}

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(2);
  const isLarge = useIsLargeScreen();

  // Refs para controlar o toque (swipe)
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const getTransformStyle = (index) => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset); // absOffset definido aqui

    // Se a tela for grande (desktop), usa sua lógica original
    if (isLarge) {
      const x = offset * 237; // Seu valor original
      const z = absOffset * -30; // Seu valor original
      const y = absOffset * 15; // Seu valor original
      const zIndex = 5 - absOffset; // Seu valor original

      return {
        transform: `translateX(${x}px) translateZ(${z}px) translateY(${y}px)`,
        zIndex,
      };
    } else {
      // Lógica para telas pequenas (mobile) - cards sobrepostos com animação
      const mobileOffsetX = 0; // Centralizado horizontalmente
      const mobileOffsetY = absOffset * 15; // Move para baixo para criar o "stack"
      const mobileOffsetZ = absOffset * -40; // Move para trás para profundidade
      const mobileRotationY =
        offset * (absOffset === 0 ? 0 : offset > 0 ? -10 : 10); // Leve rotação lateral

      return {
        transform: `translateX(${mobileOffsetX}px) translateY(${mobileOffsetY}px) translateZ(${mobileOffsetZ}px) rotateY(${mobileRotationY}deg)`,
        opacity: absOffset > 2 ? 0 : 1, // Esconde cards muito distantes para não poluir
        pointerEvents: absOffset > 2 ? "none" : "auto", // Desabilita clique em cards escondidos
        zIndex: 5 - absOffset, // Garante que o ativo esteja na frente
      };
    }
  };

  // Funções de navegação para os botões (mantidas como estão)
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Lógica para swipe no mobile
  const handleTouchStart = (e) => {
    // Registra a posição inicial do toque
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    // Impede o scroll da página durante o arrasto horizontal
    // if (!isLarge) { // Apenas no mobile
    //   e.preventDefault();
    // }
  };

  const handleTouchEnd = (e) => {
    // Registra a posição final do toque
    touchEndX.current = e.changedTouches[0].clientX;

    // Calcula a diferença do arrasto
    const swipeDistance = touchEndX.current - touchStartX.current;

    // Define um limite mínimo para considerar um swipe válido
    const minSwipeDistance = 50; // Ajuste este valor se for muito sensível ou insensível

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Arrasta para a direita (anterior)
        goToPrevious();
      } else {
        // Arrasta para a esquerda (próximo)
        goToNext();
      }
    }
  };

  return (
    <div className="min-h-[385px] flex flex-col items-center justify-center relative mb-1 w-[80%]">
      <div
        className="mt-4 mb-4 flex items-center justify-center relative min-h-[377px] overflow-visible rounded-2xl"
        // A perspectiva agora é dinâmica, baseada em isLarge
        style={{ perspective: isLarge ? "6400px" : "1000px" }}
        // Adiciona os eventos de toque
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((t, index) => {
          // Calcula absOffset aqui para ser acessível no className do div
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              // A condição de esconder só se aplica no mobile e para cards muito distantes
              className={`absolute transition-transform duration-500 text-left cursor-pointer rounded-2xl ${
                !isLarge && absOffset > 2 ? "hidden" : ""
              }`}
              style={getTransformStyle(index)}
            >
              <Card
                enterpriseName={t.enterpriseName}
                enterpriseDescription={t.enterpriseDescription}
                enterpriseLogo={t.enterpriseLogo}
                eventImage={t.eventImage}
                dateLocation={t.dateLocation}
                tags={t.tags}
                title={t.title}
                description={t.description}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10 gap-3 rounded-2xl">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-[8px] w-[8px] rounded-full cursor-pointer transition-all duration-200 ${
              index === activeIndex
                ? "scale-150 bg-gradient-to-b from-purple-500 to-indigo-600"
                : "bg-white border opacity-55"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
