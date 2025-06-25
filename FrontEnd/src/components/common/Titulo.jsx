import { TypeAnimation } from "react-type-animation";

export default function Titulo() {
  return (
    // Adicione 'relative' ao div pai se o h1 for absoluto no mobile
    <div className="overflow-x-hidden sm:overflow-x-visible relative">
      {" "}
      {/* só no mobile overflow escondido */}
      <h1
        className="
          text-4xl sm:text-5xl font-bold text-[#212121] font-BankGothic 
          px-4 sm:px-0 
          whitespace-normal sm:whitespace-nowrap 
          h-[120px] sm:h-auto 
          overflow-hidden sm:overflow-visible
        "
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        {/*
          Esta TypeAnimation só será visível no mobile. Ela digitará a primeira parte
          e, em seguida, "Eventos" em uma nova linha com o gradiente e a animação suave.
        */}
        <div className="sm:hidden inline">
          {" "}
          {/* Este div esconde a TypeAnimation no desktop */}
          <TypeAnimation
            sequence={[
              "Melhores ",
              100,
              "Melhores Momentos com", // Primeira parte da frase
              1000,
              // Função para digitar "Eventos" em nova linha com gradiente e ANIMAÇÃO
              (el) => {
                // Remove qualquer conteúdo anterior que possa ter ficado
                el.innerHTML = el.textContent + "<br/>"; // Mantém o texto existente e adiciona a quebra de linha

                // Cria um novo span para "Eventos" e aplica os estilos
                const eventosSpan = document.createElement("span");
                eventosSpan.textContent = "Eventos";
                eventosSpan.classList.add(
                  "bg-gradient-to-r",
                  "from-purple-500",
                  "to-indigo-600",
                  "bg-clip-text",
                  "text-transparent",
                  "animate-fade-in-scale" // APLICA A CLASSE DA ANIMAÇÃO AQUI!
                );
                el.appendChild(eventosSpan);
              },
              1000,
              // Adiciona uma pequena pausa antes de apagar tudo
              500, // Tempo para "Eventos" ficar visível antes de apagar
              (el) => {
                // Função para limpar o texto e classes antes da próxima frase
                el.textContent = "";
                el.className = "inline"; // Reseta classes se necessário
              },
              // Repete para a segunda frase
              "Melhores Experiências e",
              1000,
              (el) => {
                el.innerHTML = el.textContent + "<br/>"; // Mantém o texto existente e adiciona a quebra de linha

                const eventosSpan = document.createElement("span");
                eventosSpan.textContent = "Eventos";
                eventosSpan.classList.add(
                  "bg-gradient-to-r",
                  "from-purple-500",
                  "to-indigo-600",
                  "bg-clip-text",
                  "text-transparent",
                  "animate-fade-in-scale" // APLICA A CLASSE DA ANIMAÇÃO AQUI!
                );
                el.appendChild(eventosSpan);
              },
              1000,
              500,
              (el) => {
                el.textContent = "";
                el.className = "inline";
              },
            ]}
            wrapper="span"
            speed={230}
            repeat={Infinity}
            className="inline" // O span wrapper principal permanece inline
          />
        </div>

        {/*
          Este <span> com "Eventos" só será visível em telas maiores (desktop).
          No mobile, ele estará oculto.
        */}
        <div className="hidden sm:inline">
          {" "}
          {/* Este div esconde o span no mobile */}
          <TypeAnimation
            sequence={[
              "Melhores ",
              100,
              "Melhores Momentos com ", // Termina aqui para o <span> fixo
              1000,
              "", // Apaga a primeira parte
              500,
              "Melhores Experiências e ", // Termina aqui para o <span> fixo
              1000,
              "", // Apaga a primeira parte
              500,
            ]}
            wrapper="span"
            speed={230}
            repeat={Infinity}
            className="inline"
          />
          <span
            data-aos="fade-up" // Mantenha data-aos aqui se quiser a animação AOS no desktop
            data-aos-delay="200"
            data-aos-duration="1000"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"
          >
            Eventos
          </span>
        </div>
      </h1>
    </div>
  );
}
