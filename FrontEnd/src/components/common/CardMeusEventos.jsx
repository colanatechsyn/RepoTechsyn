import { MapPin, CalendarDays, Clock } from "lucide-react";

export default function CardMeusEventos({
  titulo,
  descricao,
  data,
  hora,
  local,
  imagem,
  encerrado,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md w-72 h-95 flex flex-col justify-between">
      <div>
        <div className="relative">
          <img
            src={imagem || "https://via.placeholder.com/300x200"}
            alt={`Imagem do evento ${titulo}`}
            className={`rounded-t-xl w-full h-48 object-cover ${
              encerrado ? "grayscale" : ""
            }`}
          />

          <span
            className={`absolute top-2 left-2 text-sm font-semibold ${
              encerrado ? "text-red-500" : "text-green-600"
            }`}
          >
            {encerrado ? "🔴 Encerrado" : "🟢 Aberto"}
          </span>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg !text-black">{titulo}</h3>
          <p className="text-sm !text-gray-500 mt-1">{descricao}</p>

          <div className="flex items-center text-sm !text-gray-600 mt-3 space-x-3">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{data}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{hora}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{local}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botões na parte inferior */}
      <div className="px-4 pb-4 flex gap-2">
        {/* Mostrar botão "Cancelar" apenas se o evento não estiver encerrado */}
        {!encerrado && (
          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
            Cancelar
          </button>
        )}

        {/* Botão "Organizador" com gradiente no texto e na borda */}
        <button className="flex-1 bg-white border-0 border-transparent bg-gradient-to-tr from-purple-500 to-indigo-500 p-[2px] rounded-lg">
          <div className="bg-white rounded-md py-2 px-2 text-center">
            <span className="bg-gradient-to-tr from-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold">
              Organizador
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
