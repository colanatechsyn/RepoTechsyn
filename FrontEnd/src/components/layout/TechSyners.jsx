const Caio = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/TechSynersImage/young-businessman-3d-cartoon-avatar-portrait_839035-194591.avif";
const User2 ="https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/TechSynersImage/male-artist-3d-cartoon-avatar-portrait_839035-198537.avif";
const Vitor = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/TechSynersImage/images.jpg";
import "../../css/TechSyners.css";
const techsyner = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/ParceiriasImages/%E2%80%94Pngtree%E2%80%94modern+halftone+triangular+pattern+design_9004244.png";
const Ground = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/TechSynersImage/pngwing.com+(2).png";

function TopTechSyners() {
  const users = [
    { name: "#4 João Almeida", image: Caio },
    { name: "#5 Miguel Torres", image: User2 },
    { name: "#6 Matheus Dantas", image: Vitor },
    { name: "#7 Lucas Henrique", image: User2 },
    { name: "#8 José Freitas", image: Vitor },
    { name: "#9 Guilherme Prado", image: User2 },
    { name: "#10 Nicolas Martins", image: Vitor },
    { name: "#11 Rodrigo Oliveira", image: User2 },
    { name: "#12 Pedro Caires", image: Vitor },
    { name: "#13 Lucas Martins", image: User2 },
    { name: "#14 Bruno Lopes", image: Vitor },
    { name: "#15 Daniel Lima", image: Vitor },
    { name: "#16 Robson Ferreira", image: User2 },
    { name: "#17 Ricardo Soares", image: Vitor },
    { name: "#18 Gustavo Gouveia", image: Vitor },
    { name: "#19 Thiago Monteiro", image: Vitor },
    { name: "#20 Rafael Cardoso", image: User2 },
    { name: "#21 André Souza", image: Vitor },
    { name: "#22 Felipe Martins", image: Vitor },
    { name: "#23 Leonardo Rocha", image: User2 },
    { name: "#24 Marcelo Tavares", image: Vitor },
    { name: "#25 Bruno Cavalcante", image: User2 },
    { name: "#26 Diego Santana", image: Vitor },
    { name: "#27 Igor Almeida", image: User2 },
    { name: "#28 Fernando Lima", image: Vitor },
    { name: "#29 Alexandre Nogueira", image: User2 },
    { name: "#30 Wellington Pires", image: Vitor },
    { name: "#31 Eduardo Ramos", image: User2 },
    { name: "#32 Caíque Silva", image: Vitor },
    { name: "#33 Henrique Moraes", image: User2 },
    { name: "#34 Paulo Viana", image: Vitor },
    { name: "#35 Vinícius Ribeiro", image: User2 },
    { name: "#36 Jefferson Costa", image: Vitor },
    { name: "#37 Raul Batista", image: User2 },
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-t from-purple-600 to-blue-500 text-white py-35 md:py-60 px-4 md:px-9 relative z-10 bg-fixed">
      <img
        src={techsyner}
        alt=""
        className="absolute z-0 filter invert animate-pulse top-[500px] w-full grayscale opacity-20 pointer-events-none hidden md:flex"
      />

      <div className="w-full mx-auto relative -translate-y-10 ">
        <h1 className="lg:translate-x-15  text-3xl sm:text-4xl font-bold text-center mb-15 font-BankGothic">
          Top TechSyners
        </h1>

        <div
          className="custom-scrollbox 2xl:w-90 lg:w-70 bg-none md:bg-white/10 sm:backdrop-blur-sm p-5 sm:p-8 rounded-lg text-sm text-white border border-white/20 max-h-[610px] overflow-y-auto md:drop-shadow-2xl mb-10 sm:mb-0 sm:absolute sm:top-[-57px] sm:left-20 sm:w-[350px]"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h2 className="font-semibold mb-4 font-BankGothic text-center ">
            TechSyners
          </h2>
          <ul className="space-y-2 w-full ">
            {users.map((user, index) => (
              <li
                key={index}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/20 rounded-md px-4 py-3 text-white/90 shadow-sm cursor-pointer"
              >
                {user.image && (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                )}
                <div>
                  <p className="font-semibold lg:text-[12px]">{user.name}</p>
                  <p className="2xl:text-sm lg:text-[12px]">Acessar Perfil</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="block mt-4 text-xs underline text-white/70 text-center"
          >
            ver mais
          </a>
        </div>

        <div
          className="mt-6 sm:mt-0 sm:absolute sm:top-10 sm:right-10  bg-none md:bg-white/10 md:backdrop-blur-sm p-4 rounded-lg text-sm text-white border border-white/20 w-full sm:w-auto"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="flex justify-between text-xs mb-2">
            <span>Posição Atual</span>
            <span className="font-bold">#???</span>
          </div>
          <div className="bg-white/20 rounded px-3 py-2 mt-2 drop-shadow-2xl">
            <p className="text-xs font-semibold">Faça Login para visualizar!</p>
            <p className="text-[11px] text-white/70">Venha ser um TechSyner</p>
          </div>
        </div>

        <div className="lg:translate-x-15 2xl:tranlate-x-0 flex flex-col-reverse sm:flex-row justify-center items-center gap-10 mt-14">
          {/* #3 Vitor */}
          <div
            className="text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <span className="text-lg font-bold">#3</span>
            <img
              src={Vitor}
              alt="Vitor"
              className="w-24 h-24 sm:w-40 sm:h-40 rounded-full border-4 border-[#ffffff83] mx-auto mt-2 drop-shadow-2xl"
            />
            <h3 className="mt-3 font-bold text-white">Vitor</h3>
            <p className="text-sm text-white/70">102.345 techmoney</p>
          </div>

          {/* #1 Caio */}
          <div
            className="text-center scale-110 sm:scale-100"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <span className="text-lg font-bold animate-pulse">#1</span>
            <div className="relative w-36 h-36 sm:w-56 sm:h-56 rounded-full bg-gradient-to-r from-white to-pink mx-auto mt-2 drop-shadow-2xl">
              <img
                src={Caio}
                alt="Caio"
                className="w-full h-full rounded-full object-cover absolute z-20"
              />
              <div className="spinner_animation absolute top-0 left-[-4px] w-[104%] h-full rounded-full bg-gradient-to-r via-[#dededeb0] from-[#dededeb0] to-transparent animate-spin drop-shadow-2xl" />
              <img
                src={Ground}
                className="opacity-100 w-full h-full absolute top-0 left-0 rounded-full"
              />
            </div>
            <h3 className="mt-3 font-bold text-white">Caio</h3>
            <p className="text-sm text-white/70">102.345 techmoney</p>
          </div>

          {/* #2 Robson */}
          <div
            className="text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <span className="text-lg font-bold">#2</span>
            <img
              src={User2}
              alt="Robson"
              className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 border-[#ffffff83] mx-auto mt-2 drop-shadow-2xl"
            />
            <h3 className="mt-3 font-bold text-white">Robson</h3>
            <p className="text-sm text-white/70">102.345 techmoney</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTechSyners;
