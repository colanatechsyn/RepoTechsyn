const plusImg = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/EventIndvidualPage/plus.png";
import Card from "../../components/common/Card";

const eventAdd = () => {
  const tags = [
    "#Tech",
    "#SQL",
    "#Network",
    "#Tech",
    "#Learning",
    "#IA",
    "#AWS",
    "#Google",
    "#MySql",
    "#Database",
    "#Html",
    "#Css",
    "#JS",
  ];

  return (
    <>
      <div>
        <div
          id="doug_faixa"
          className="flex flex-row justify-center items-center h-[400px] w-full gap-[75px] mt-20 mb-30"
        >
          <div
            id="blocoAdd"
            className="flex justify-center items-center h-[450px] w-[770px] rounded-[30px] cursor-pointer shadow-[0px_0px_15px_2px_rgb(103,103,103)] bg-gradient-to-br from-white via-[#EDEDED] to-[#DADADA]"
          ></div>
          <div
            id="blocoAdd2"
            className="flex flex-col gap-[10px] h-[350px] w-[300px] scale-110"
          >
            <h1
              id="h1_first"
              className="text-[40px] text-white drop-shadow-[0px_5px_4px_rgba(0,0,0,0.1)]"
            >
              <span className="font-bold bg-gradient-to-r from-[#5F54D7] to-[#972FDB] bg-clip-text text-transparent">
                WorkShop
              </span>{" "}
              Amazon AWS
            </h1>
            <div className="first_line h-[1px] mr-[20%] bg-[#99989869]"></div>
            <div id="infos" className="text-[#6F6F6F] text-[12px]">
              <p>23 Abr, 18h</p>
              <p>São Paulo - SP</p>
              <p>Participantes - 1500</p>
              <p>Organizado por - AMAZON ENT </p>
              <p>Acessibilidade PCD - Inclusa</p>
            </div>
            <div className="first_line h-[1px] mr-[20%] bg-[#99989869]"></div>
            <div
              id="taggs"
              className="flex flex-wrap items-center h-[90px] w-[110%] gap-[10px]"
            >
              {Array.isArray(tags) &&
                tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-light px-2 py-0.5 h-[20px] text-[10px] rounded-full flex justify-center"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div>
          <div
            id="line1"
            className="h-[1px] w-full bg-[#99989869] mt-[3%]"
          ></div>
          <div
            id="posline_A"
            className="flex flex-row gap-[50px] pl-[16%] items-center h-[50px] text-[#5B5B5B]"
          >
            <a href="#">Sobre</a>
            <a href="#">Eventos</a>
            <a href="#">Membros</a>
            <a href="#">Organizador</a>
          </div>
        </div>
        <div
          id="maxSecond_faixa"
          className="flex flex-col items-center bg-gradient-to-l from-[#9232DA] to-[#5F54D7] w-full py-10"
        >
          <div
            id="twoBlocos"
            className="flex flex-row justify-center items-start gap-40 w-full max-w-[1400px] mt-20 flex-wrap"
          >
            {/* Bloco da esquerda */}
            <div
              id="block1"
              className="flex flex-col items-center text-center gap-8 w-[550px] max-w-full"
            >
              <h1 className="text-[#F4F4F4] text-[35px]  text-lef">
                WorkShop Amazon AWS
              </h1>
              <p className="text-[#F4F4F4] w-[91%] text-justify">
                Encontre conselhos e respostas da nossa equipe de suporte
                rapidamente ou entre em contato. Encontre conselhos e respostas
                da nossa equipe de suporte rapidamente ou entre em contato.
                Encontre conselhos e respostas da nossa equipe de suporte
                temperament ou entquipe de suporte rapidamente ou entre em
                contato. Encontre conselhos e respostas da nossa equipe de
                suporte rapidamente ou entre em contato.
              </p>
              <div
                id="block_plus2"
                className="flex justify-center items-center rounded-[27px] h-[300px] w-full max-w-[500px] cursor-pointer bg-gradient-to-br from-white via-[#EDEDED] to-[#DADADA]"
              ></div>
            </div>

            {/* Linha vertical (só mostra em telas maiores) */}
            <div className="hidden lg:flex bg-[#ffffff6d] w-[2px] h-[600px]" />

            {/* Bloco da direita */}
            <div
              id="block2"
              className="flex flex-col items-start text-left gap-8 w-[440px] max-w-full"
            >
              <h1 className="text-white text-[30px]">Organizador</h1>
              <div
                id="squarezinho"
                className="flex flex-row gap-4 items-center"
              >
                <div className="h-[60px] w-[60px] bg-white rounded-full"></div>
                <div className="flex flex-col items-start gap-1">
                  <h3 className="text-white text-sm font-semibold">
                    AMAZON ENTERPRISE - COLLINS
                  </h3>
                  <p className="text-xs text-white">
                    AmazonEnterpise1234@gmail.com
                  </p>
                  <a
                    href="#"
                    className="text-xs text-white border-b border-[#5B5B5B] hover:opacity-70"
                  >
                    Acessar Perfil
                  </a>
                </div>
              </div>

              <div className="w-full mt-15">
                <h1 className="text-white text-[30px]  mb-6">
                  Visualizar Inscritos
                </h1>
                <div
                  id="square_circlee"
                  className="w-full flex flex-wrap gap-4"
                >
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-gradient-to-br from-[#0055FF] to-[#9C2EC4]"
                    >
                      <div className="h-[54px] w-[54px] bg-white rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text flex w-[73%] justify-start mt-40">
            <h1 className="text-3xl text-white font-extrabold ">
              Eventos parecidos nas proximidades
            </h1>
          </div>
          <div className="flex w-[80%] justify-evenly mt-20 mb-20">
            <Card
              enterpriseName="Inova Solutions"
              enterpriseDescription="Soluções digitais para o futuro."
              enterpriseLogo="/images/inova-logo.png"
              eventImage="/src/assets/imgs/EventsImage/digital_evento_sitio-600x450.jpg"
              dateLocation="15/07/2025 - Rio de Janeiro, RJ"
              tags={["Soluções", "Transformação Digital"]}
              title="Inova Summit 2025"
              description="Evento focado em inovação e tecnologia."
            />
            <Card
              enterpriseName="NextGen Tech"
              enterpriseDescription="Revolucionando o mercado de software."
              enterpriseLogo="/images/nextgen-logo.png"
              eventImage="/src/assets/imgs/EventsImage/5f8159_2e08f10003074706bb1de62d55d0aebc~mv2.avif"
              dateLocation="10/08/2025 - São Paulo, SP"
              tags={["Software", "Startups"]}
              title="NextGen Innovation Day"
              description="Descubra as últimas tendências em startups de tecnologia."
            />
            <Card
              enterpriseName="GreenTech"
              enterpriseDescription="Tecnologia sustentável para o planeta."
              enterpriseLogo="/images/greentech-logo.png"
              eventImage="/src/assets/imgs/EventsImage/AWE-Asia-Immersive-technology-event.jpg"
              dateLocation="05/09/2025 - Curitiba, PR"
              tags={["Sustentabilidade", "Inovação"]}
              title="GreenTech Expo 2025"
              description="Tecnologias verdes que estão mudando o mundo."
            />
            <Card
              enterpriseName="HealthWave"
              enterpriseDescription="Inovação em saúde digital."
              enterpriseLogo="/images/healthwave-logo.png"
              eventImage="/src/assets/imgs/EventsImage/5f8159_1a9a477d609742d09de9f3abe1750f41~mv2.avif"
              dateLocation="12/10/2025 - Belo Horizonte, MG"
              tags={["Saúde", "Tecnologia"]}
              title="HealthWave Conference"
              description="O futuro da saúde conectada e digital."
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default eventAdd;
