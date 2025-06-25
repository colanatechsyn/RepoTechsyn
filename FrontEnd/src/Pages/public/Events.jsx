import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/common/Card";

// Simulação de eventos
const eventosFake = [
  {
    id: 1,
    enterpriseName: "Microsoft Company",
    enterpriseDescription: "Líder global em tecnologia",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    eventImage: "https://source.unsplash.com/random/400x220?tech,sql",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["SQL", "Banco de Dados"],
    title: "MICROSOFT SQL",
    description: "Aprenda a usar SQL com a Microsoft.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  {
    id: 2,
    enterpriseName: "Google Cloud",
    enterpriseDescription: "Plataforma em nuvem do Google",
    enterpriseLogo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    eventImage: "https://source.unsplash.com/random/400x220?cloud,ai",
    dateLocation: "05/09/2025 - Curitiba, PR",
    tags: ["Cloud", "AI"],
    title: "Google Cloud Summit",
    description: "Inovação em IA com Google Cloud.",
  },
  // ...repita outros eventos se quiser
];

const CatalogoEventos = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";
  const [eventosFiltrados, setEventosFiltrados] = useState([]);

  useEffect(() => {
    const filtrados = eventosFake.filter((evento) =>
      `${evento.title} ${evento.description} ${evento.enterpriseName}`
        .toLowerCase()
        .includes(search)
    );
    setEventosFiltrados(filtrados);
  }, [search]);

  return (
    <div className="bg-[#11111175] min-h-screen text-white px-6 lg:px-16 py-20 ">
      {/* Título e filtros estilizados */}
      <div className="flex flex-wrap justify-between items-end gap-8 mb-10 px-15">
        {/* Título */}
        <div className="max-w-lg">
          <h1 className="text-[46px] font-light leading-snug">
            “<span className="font-normal">{search || "Eventos Tech"}</span>”
          </h1>
          <p className="text-sm text-[#999] mt-2 transform translate-x-5">
            Resultados da busca por...
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center gap-4 text-sm transform translate-y-[-23px]">
          {/* FILTRAR POR */}
          <div className="flex items-center gap-1">
            <span className="text-[#a855f7] font-medium">Filtrar</span>
            <span>por</span>
          </div>

          <select className="text-center translate-y-6 bg-[#1a1a1a] text-white px-4 py-2 rounded-md border-none">
            <option disabled selected>
              Modalidade
            </option>
            <option>Híbrido</option>
            <option>Presencial</option>
            <option>Online</option>
          </select>

          <select className="text-center translate-y-6 bg-[#1a1a1a] text-white px-4 py-2 rounded-md border-none">
            <option disabled selected>
              Acessibilidade
            </option>
            <option>Acessível para cadeirantes</option>
            <option>Intérprete de Libras</option>
            <option>Tradução simultânea</option>
          </select>

          <select className="text-center translate-y-6 bg-[#1a1a1a] text-white px-4 py-2 rounded-md border-none">
            <option disabled selected>
              Data
            </option>
            <option>Mais próximo</option>
            <option>Mais distante</option>
          </select>

          <select className="text-center translate-y-6 bg-[#1a1a1a] text-white px-4 py-2 rounded-md border-none">
            <option disabled selected>
              Preço
            </option>
            <option>Gratuito</option>
            <option>Pago</option>
          </select>

          {/* ORDENAR POR */}
          <div className="flex items-center gap-1 ml-6">
            <span className="text-[#a855f7] font-medium">Ordenar</span>
            <span>por</span>
          </div>
          <select className="text-center  translate-y-6 bg-[#1a1a1a] text-white px-4 py-2 rounded-md border-none">
            <option disabled selected>
              Ordem alfabética
            </option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>
      </div>

      {/* Lista de Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-20 mt-20">
        {eventosFiltrados.length > 0 ? (
          eventosFiltrados.map((evento) => (
            <Card key={evento.id + Math.random()} {...evento} />
          ))
        ) : (
          <p className="text-gray-400 text-lg col-span-full">
            Nenhum evento encontrado para “{search}”.
          </p>
        )}
      </div>
    </div>
  );
};

export default CatalogoEventos;
