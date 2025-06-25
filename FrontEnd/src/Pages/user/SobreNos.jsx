const Background =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/SobreNosBackGround.png";
const BackgroundPhoto =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/equipe-bvwkx0fr8aw60l9y.jpg";
const BackgroundVideo =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/videos/7952139-uhd_3840_2160_30fps.mp4";

const Caio =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/Caio.png";
const Kauany =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/Kauany.png";
const Ferreira =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/Ferreira.png";
const Ana =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/Ana.png";
const Rose =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/Rectangle+83.png";
const Douglas =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/Douglas.png";
const Jose =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/Jose.png";
const Tome =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/Tom%C3%A9.png";

const linkedin_logo =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/icons8-linkedin.svg";
const instagram_logo =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/icons8-instagram.svg";

const missao =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/Goal.png";
const visao =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/Eye.png";
const valores =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/SobreNosImages/Morale.png";
const back =
  "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/MaxineImages/MaxineBack.png";

export default function SobreNos() {
  const equipe = [
    { nome: "Caio Garcia", cargo: "Scrum-Master", imagem: Caio },
    { nome: "Ana", cargo: "Product-Onwer", imagem: Ana },
    { nome: "Kauany", cargo: "Back-End", imagem: Kauany },
    { nome: "Ferreira", cargo: "Back-End", imagem: Ferreira },
    { nome: "Rose", cargo: "Back-End", imagem: Rose },
    { nome: "Douglas", cargo: "FullStack", imagem: Douglas },
    { nome: "José", cargo: "Front-End", imagem: Jose },
    { nome: "Tomé", cargo: "FullStack", imagem: Tome },
  ];

  return (
    <section className="flex flex-col items-center gap-10 md:gap-20 overflow-x-hidden">
      {/* Banner */}
      <div className="relative w-full h-screen overflow-hidden bg-center bannerHome z-0">
        <h1
          className="absolute left-1/2 top-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white font-BankGothic text-center px-4"
          style={{ textShadow: "4px 4px 7px #111111" }}
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1300"
        >
          SOBRE{" "}
          <span
            className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"
            style={{ textShadow: "none" }}
          >
            NÓS
          </span>
        </h1>
        <video
          className="h-screen lg:h-auto lg:min-h-full w-full object-cover"
          src={BackgroundVideo}
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Texto principal */}
      <div className="w-full flex flex-col gap-10 md:gap-18 items-center px-4">
        <div className="text_content w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-10 items-start mt-[-10px] mb-[-60px]">
          <div
            className="text-left mb-8 md:mb-12 w-full md:w-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="p-[2px] w-[160px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 mb-6">
              <button className="w-full text-purple-600 bg-[#fafafd] rounded-full text-sm hover:bg-purple-100">
                <span className="inline-block font-semibold px-4 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent ">
                  💜 SOBRE NÓS 💜
                </span>
              </button>
            </div>
            <h2 className="aboutus text-3xl md:text-4xl font-bold text-[#212121] leading-tight">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Eventos
              </span>{" "}
              tech que conectam pessoas.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 text-gray-600 translate-y-0 md:translate-y-[50px] w-full mb-20 md:mb-0">
            <p
              className="w-full md:w-1/2"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              A TechSyn conecta eventos incríveis com pessoas apaixonadas por
              tecnologia, inovação, empatia e conhecimento.
            </p>
            <p
              className="w-full md:w-1/2"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Participe de experiências únicas, aprenda, compartilhe e cresça
              com a comunidade TechSyn, a maior de eventos.
            </p>
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center mb-0 w-full max-w-6xl px-4">
          {[
            {
              img: missao,
              title: "Nossa Missão",
              resume: "Conectar jovens a empresas por meio de eventos tech.",
            },
            {
              img: visao,
              title: "Nossa Visão",
              resume:
                "Ser a principal plataforma de eventos tech na América Latina.",
            },
            {
              img: valores,
              title: "Nossos Valores",
              resume:
                "Personalização, Resiliência, Ousadia, Transparência e Protagonismo.",
            },
          ].map(({ img, title, resume }, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 w-full lg:w-1/3 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1400"
            >
              <div
                className={`w-20 h-20 sm:w-25 sm:h-20 rounded-full flex items-center justify-center flex-shrink-0 ${
                  i === 1
                    ? "bg-gray-700"
                    : "bg-gradient-to-r from-purple-500 to-indigo-600"
                }`}
              >
                <img
                  src={img}
                  alt={title}
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg !text-[#212121]">{title}</h3>
                <p className="!text-gray-500 text-sm">{resume}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Imagem + vídeo */}
        <div
          className="relative w-full hidden flex-col lg:flex-row justify-center items-center lg:items-start -translate-x-0 scale-100 lg:scale-85 m-auto px-4 mt-8 md:mt-0  md:flex"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <img
            src={BackgroundPhoto}
            alt="Equipe"
            className="rounded-[20px] md:rounded-[50px] w-full max-w-[1111px] h-auto lg:h-[757px] shadow-lg grayscale-50 "
          />
          <div className="videoAbout absolute top-[60%] lg:top-1/2 -translate-y-1/2 w-[90%] max-w-[700px] h-105 aspect-video border-[10px] md:border-[20px] border-[#f7f8fc] rounded-[20px] md:rounded-[70px] inset-shadow-2xs overflow-hidden translate-x-0 lg:translate-x-[400px] mt-4 lg:mt-0">
            <img
              src={Background}
              alt="Vídeo TechSyn"
              className="w-full h-full brightness-30 object-cover "
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <button className="w-16 h-16 md:w-20 md:h-20 text-2xl md:text-3xl text-white rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform">
                ▶
              </button>
            </div>
          </div>
        </div>

        {/* Equipe */}
        <section className="relative py-16 pb-40 bg-gradient-to-b w-[102%] from-violet-700 to-blue-500 text-white text-center flex justify-center overflow-hidden mt-10 md:mt-0">
          {/* Essas imagens de fundo estão ocultas em mobile para otimização */}
          <img
            src={back}
            alt=""
            className="absolute top-0 left-0 w-full h-auto rotate-0 invert animate-pulse opacity-50 z-[0] object-cover transform md:translate-y-304 translate-y-[-120px] md:rotate-180"
          />
          {/* Imagem de fundo na base da seção */}
          <img
            src={back}
            alt=""
            className="absolute bottom-0 left-0 w-full h-auto rotate-180 invert animate-pulse opacity-50 z-0 object-cover transform md:translate-y-[-1168px] translate-y-30 md:rotate-0"
          />
          <div className="w-full max-w-7xl px-4">
            <div
              className="flex flex-col gap-5 mb-10 md:mb-20"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wide border-2 border-white p-2 w-fit mx-auto rounded-full">
                💜 Nosso Time 💜
              </h2>
              <h1 className="text-2xl sm:text-3xl font-BankGothic font-bold">
                Membros do Time
              </h1>
              <p className="max-w-xl mx-auto text-sm">
                Nossas colaboradoras e companheira Inica TechSyn que nos
                ajudaram nessa jornada com muito trabalho e esforço da equipe.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 place-items-center">
              {equipe.map(({ nome, cargo, imagem }, idx) => (
                <div
                  key={idx}
                  className="shadow-2xl w-full max-w-[270px] h-[auto] relative rounded-[40px] mb-16 sm:mb-30 z-20"
                >
                  <div className="h-[auto] shadow-2xl z-20">
                    <img
                      src={imagem}
                      alt={nome}
                      className="rounded-[40px] h-auto w-full rounded-b-none z-20 object-cover"
                    />
                  </div>
                  <div className="w-[90%] max-w-[200px] h-[100px] absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[40px] flex flex-col justify-center bg-gradient-to-r from-purple-500 to-indigo-600 opacity-90 z-10 text-center">
                    <h1 className="font-bold text-lg sm:text-xl">{nome}</h1>
                    <h4 className="text-xs sm:text-sm">{cargo}</h4>
                  </div>
                  <div className="flex border h-[150px] mt-[-1px] rounded-[40px] rounded-t-none bg-white justify-evenly items-center pt-5">
                    <div
                      className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-center bg-no-repeat bg-cover rounded-full cursor-pointer shadow-lg hover:scale-105 transition-transform flex overflow-hidden filter p-2"
                      title="LinkedIn"
                    >
                      <img
                        src={linkedin_logo}
                        alt=""
                        className="rounded-full brightness-50"
                      />
                    </div>
                    <div
                      className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-center bg-no-repeat bg-cover rounded-full cursor-pointer shadow-lg hover:scale-105 transition-transform flex overflow-hidden filter p-2"
                      title="Instagram"
                    >
                      {" "}
                      <img
                        src={instagram_logo}
                        alt=""
                        className="rounded-full brightness-50"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
