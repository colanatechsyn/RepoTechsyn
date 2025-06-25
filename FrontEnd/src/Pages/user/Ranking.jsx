import Cards from "../../components/common/Cards";
const Woman =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/UsuarioPagina/woman.png"; // imagem padrão temporária
const arrow =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/Materiais/icon.png";
import "../../components/ComponentesCss/Ranking.css";

const Ranking = () => {
  const podium = [
    {
      rank: "2#",
      nome: "Lucas",
      score: "130.000 Techmoneys",
      imagem: "https://i.pravatar.cc/150?img=7",
    },
    {
      rank: "1#",
      nome: "Douglas",
      score: "350.000 Techmoneys",
      destaque: true,
      imagem: "https://i.pravatar.cc/150?img=48",
    },
    {
      rank: "3#",
      nome: "Caio",
      score: "90.000 Techmoneys",
      imagem: "https://i.pravatar.cc/150?img=68",
    },
  ];

  return (
    // Adicionado padding horizontal para mobile. No desktop, w-full já se ajusta.
    <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 mb-10 md:mb-0">
      {/* Cabeçalho */}
      {/* Para mobile: flex-col, width total, removido translate-y fixo.
          Desktop: mantém w-[81%] e transform translate-y-[20px]. */}
      <div className="headerpos flex flex-col sm:flex-row w-full sm:w-[81%] transform sm:translate-y-[20px] justify-between items-start sm:items-end mt-4 sm:mt-0">
        <div className="header flex flex-col sm:flex-row items-start sm:items-end w-full sm:w-[73.5%] justify-between mb-4 sm:mb-0">
          <div className="flex flex-col items-center mt-1 mb-1">
            <h1 className="text-[48px] font-bold !bg-gradient-to-r from-[#9C2EC4] to-[#0055FF] !bg-clip-text !text-transparent">
              TechSyners
            </h1>
            <p className="text-center text-[#555] transform translate-x-[-23px]">
              Ranking geral dos usuários
            </p>
          </div>

          {/* Filtros */}
          {/* Adicionado flex-wrap para mobile para quebrar linha se necessário.
              Gap reduzido para mobile. */}
          <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-6 md:gap-4 text-[#767676] mt-10 md:mt-4 sm:mt-0 sm:mb-4 sm:translate-y-[15px]">
            {["Global", "Semanal", "Mensal", "Anual"].map((item, i) => (
              <button
                key={i}
                className="cursor-pointer flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
              >
                {item}
                <img
                  src={arrow}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                  alt="arrow icon"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Área principal */}
      {/* Para mobile: flex-col e width total.
          Desktop: mantém flex-row, gap-8, w-[81%] e mt-10. */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full lg:w-[81%] justify-center mt-0 lg:mt-10">
        {/* Podium e lista principal */}
        {/* Padding reduzido para mobile. Width full para mobile. */}
        <div className="flex flex-col bg-gradient-to-br from-[#5F54D7] to-[#972FDB] rounded-[15px] p-4 sm:p-6 lg:p-10 w-full">
          {/* Top 3 */}
          {/* Gap reduzido para mobile. Flex-wrap para acomodar itens. */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 mb-6">
            {podium.map((user, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-1 text-center ${
                  !user.destaque ? "mt-4 sm:mt-6" : ""
                }`}
              >
                <h1 className="text-white text-base sm:text-lg">{user.rank}</h1>
                <div
                  className={`rounded-full shadow-md flex items-center justify-center ${
                    user.destaque
                      ? "bg-gradient-to-br from-[#9C2EC4] to-[#0055FF] h-[100px] w-[100px] sm:h-[150px] lg:h-[200px] sm:w-[150px] lg:w-[200px]"
                      : "bg-[#9C2EC4] h-[80px] w-[80px] sm:h-[120px] lg:h-[150px] sm:w-[120px] lg:w-[150px]"
                  }`}
                >
                  <div
                    className={`rounded-full bg-center bg-cover bg-no-repeat ${
                      user.destaque
                        ? "h-[94px] w-[94px] sm:h-[144px] lg:h-[194px] sm:w-[144px] lg:w-[194px]"
                        : "h-[74px] w-[74px] sm:h-[114px] lg:h-[144px] sm:w-[114px] lg:w-[144px]"
                    }`}
                    style={{
                      backgroundImage: `url(${user.imagem || Woman})`,
                    }}
                  ></div>
                </div>
                <p className="text-white text-sm sm:text-base">{user.nome}</p>
                <p className="text-white text-xs sm:text-sm">{user.score}</p>
              </div>
            ))}
          </div>

          {/* Lista de usuários principais */}
          {/* Altura máxima ajustada para mobile e padding/gap menor. */}
          <div className="scroll-white flex flex-col gap-3 sm:gap-5 items-center overflow-y-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[800px] pr-2 p-3 sm:p-5">
            {Array.from({ length: 36 }).map((_, index) => (
              <Cards key={index} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        {/* Para mobile: width total e margem superior.
            Desktop: mantém w-[500px] e mt-0 (se a área principal já tiver mt). */}
        <div className="flex flex-col gap-4 sm:gap-5 w-full lg:w-[500px] overflow-y-auto mt-6 lg:mt-0">
          {/* Rank atual */}
          {/* Padding e font size ajustados para mobile. */}
          <div className="bg-gradient-to-r from-[#5F54D7] to-[#972FDB] rounded-[15px] p-2 sm:p-3 mb-10 md:mb-0  ">
            <div className="userStatus bg-white rounded-[15px] p-3 sm:p-4 text-center">
              <p className="text-[11px] sm:text-[12px] !text-black dark:!text-white/80">
                <span className="bg-gradient-to-r from-[#8F2EC4] to-[#9C2EC4] bg-clip-text text-transparent">
                  Rank
                </span>{" "}
                Atual
              </p>
              <p className="!text-[#515151] dark:!text-[#B0B0B0] text-base sm:text-lg">
                #200.723
              </p>
              <div className="flex justify-center my-2 sm:my-3 ">
                {/* Tamanho do círculo ajustado para mobile. */}
                <div className="bg-gradient-to-br from-[#9C2EC4] to-[#2843B3] h-[100px] w-[100px] sm:h-[125px] sm:w-[125px] rounded-full flex items-center justify-center">
                  <div
                    className="h-[94px] w-[94px] sm:h-[117px] sm:w-[117px] rounded-full bg-center bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${Woman})`,
                    }}
                  ></div>
                </div>
              </div>
              <h1 className="!text-[#5B5B5B] dark:!text-[#B0B0B0] text-base sm:text-lg">
                Ana Santos
              </h1>
              {/* Fundo da barra de progresso muda no modo escuro */}
              <div className="statusBar w-full bg-white shadow-md h-[5px] sm:h-[6px] rounded-full mt-1.5 sm:mt-2">
                <div className="bg-gradient-to-r from-[#9C2EC4] to-[#0055FF] h-[5px] sm:h-[6px] w-[50%] rounded-full"></div>
              </div>
              <p className="text-[10px] sm:text-[11px] !text-[#5B5B5B] dark:!text-[#B0B0B0] mt-1.5 sm:mt-2">
                6 more events to level up
              </p>
            </div>
          </div>

          {/* Lista complementar */}
          {/* Altura ajustada para mobile e padding/gap menor. */}
          <div className="bg-gradient-to-r from-[#5F54D7] to-[#972FDB] rounded-[15px] py-3 px-1 sm:py-4 sm:px-2 flex flex-col items-center gap-3 sm:gap-4 overflow-y-auto h-[400px] sm:h-[500px] lg:h-[855px] scroll-white">
            {Array.from({ length: 30 }).map((_, index) => (
              <Cards key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
