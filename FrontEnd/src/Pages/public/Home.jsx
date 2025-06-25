import React from "react";
import Card from "../../components/common/Card";
import ImageSlider from "../../components/layout/ImageSlider";
import Banner from "../../components/layout/Banner";
import TopTechSyners from "../../components/layout/TechSyners";
import Plans from "../../components/layout/Plans";
import Maxine from "../../components/layout/Maxine";
import FriendsEnt from "../../components/layout/FriendEnt";
import Titulo from "../../components/common/Titulo";

const Randomizer = "https://assetstechsyn01.s3.sa-east-1.amazonaws.com/assets/imgs/HomeIamges/fa_random.png";

function Home() {
  return (
    <section className="Main flex flex-col w-full items-center mt-4 sm:mt-8 2xl:mt-11 lg:mt-3 gap-10 md:gap-20 lg:gap-30">
      {" "}
      {/* Adjusted initial margin-top and overall gap for responsiveness */}
      {/* Parte superior com slider de imagens e texto de introdução */}
      <div
        className="top_main_cont w-full px-4 text-center flex flex-col gap-4 md:gap-6 justify-center items-center mt-3 md:mt-0" // Adjusted width, added padding, and responsive gap
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        {/* Slider de imagens */}
        <ImageSlider data-aos="fade-up" />
        {/* Texto principal de apresentação */}
        <div className="text_content w-full max-w-[600px] flex flex-col gap-4 items-center">
          {" "}
          {/* Adjusted width to full and added max-w */}
          {/* Título customizado */}
          <Titulo />
          {/* Parágrafo explicativo com animação */}
          <p
            className="text-sm md:text-base px-2"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {" "}
            {/* Adjusted font size and added horizontal padding */}
            Os melhores eventos de tecnologia da TechSyn reúnem inovação,
            networking e aprendizado. Conheça palestras, workshops e painéis com
            especialistas do mercado que transformam conhecimento em
            oportunidades reais.
          </p>
        </div>
        {/* Botões principais: "Ver mais" e "Sobre" */}
        <div className="flex gap-2 justify-center cursor-pointer">
          <img
            src={Randomizer}
            className="w-10 md:w-12 transform translate-y-[0px] md:translate-y-[5px]"
            alt="Randomizer"
          />{" "}
          {/* Adjusted width and removed translateY for mobile */}
        </div>
      </div>
      {/* Banner central com animação de fade */}
      <div
        className="top_middle_banner w-full flex justify-center px-4" // Adjusted width to full and added padding
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Banner />
      </div>
      {/* Primeiro Catálogo de Eventos */}
      <div
        className="Preview_catalog_Events w-full lg:w-[80%] 2xl:w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 md:gap-10 lg:gap-0 2xl:gap-6 px-4" // Adjusted grid columns, max-w, and gaps for responsiveness
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Card
          enterpriseName="Inova Solutions"
          enterpriseDescription="Soluções digitais para o futuro."
          enterpriseLogo="/src/assets/imgs/Logos/Flux_Dev_Create_a_logo_featuring_a_futuristic_technological_el_2 (1).jpeg"
          eventImage="/src/assets/imgs/EventsImage/digital_evento_sitio-600x450.jpg"
          dateLocation="15/07/2025 - Rio de Janeiro, RJ"
          tags={["Soluções", "Transformação Digital"]}
          title="Inova Summit 2025"
          description="Evento focado em inovação e tecnologia."
        />
        <Card
          enterpriseName="NextGen Tech"
          enterpriseDescription="Revolucionando o mercado de software."
          enterpriseLogo="/src/assets/imgs/Logos/Flux_Dev_Create_a_modern_sleek_logo_for_a_cuttingedge_tech_com_0.jpg"
          eventImage="/src/assets/imgs/EventsImage/5f8159_2e08f10003074706bb1de62d55d0aebc~mv2.avif"
          dateLocation="10/08/2025 - São Paulo, SP"
          tags={["Software", "Startups"]}
          title="NextGen Innovation Day"
          description="Descubra as últimas tendências em startups de tecnologia."
        />
        <Card
          enterpriseName="GreenTech"
          enterpriseDescription="Tecnologia sustentável para o planeta."
          enterpriseLogo="/src/assets/imgs/Logos/Flux_Dev_Create_a_modern_sleek_logo_for_a_cuttingedge_tech_com_1.jpg"
          eventImage="/src/assets/imgs/EventsImage/AWE-Asia-Immersive-technology-event.jpg"
          dateLocation="05/09/2025 - Curitiba, PR"
          tags={["Sustentabilidade", "Inovação"]}
          title="GreenTech Expo 2025"
          description="Tecnologias verdes que estão mudando o mundo."
        />
        <Card
          enterpriseName="HealthWave"
          enterpriseDescription="Inovação em saúde digital."
          enterpriseLogo="/src/assets/imgs/Logos/Flux_Dev_Create_a_modern_sleek_logo_for_a_cuttingedge_tech_com_2.jpg"
          eventImage="/src/assets/imgs/EventsImage/5f8159_1a9a477d609742d09de9f3abe1750f41~mv2.avif"
          dateLocation="12/10/2025 - Belo Horizonte, MG"
          tags={["Saúde", "Tecnologia"]}
          title="HealthWave Conference"
          description="O futuro da saúde conectada e digital."
        />
        <Card
          enterpriseName="EduNext"
          enterpriseDescription="Educação do futuro em tecnologia."
          enterpriseLogo="/src/assets/imgs/Logos/Flux_Dev_Design_a_modern_sleek_and_minimalist_logo_for_a_cutti_1.jpg"
          eventImage="/src/assets/imgs/EventsImage/tecnologia-para-eventos.jpg"
          dateLocation="25/11/2025 - Florianópolis, SC"
          tags={["Educação", "Tecnologia"]}
          title="EduNext Summit"
          description="Transformando o ensino com inovação tecnológica."
        />
        <Card
          enterpriseName="Fintech Pulse"
          enterpriseDescription="Inovações financeiras e blockchain."
          enterpriseLogo="/src/assets/imgs/Logos/Flux_Dev_Design_a_modern_sleek_and_minimalist_logo_for_a_cutti_2.jpg"
          eventImage="/src/assets/imgs/EventsImage/projetor-para-eventos-em-sao-paulo-1.jpg"
          dateLocation="18/12/2025 - São Paulo, SP"
          tags={["Fintech", "Blockchain"]}
          title="Fintech Pulse 2025"
          description="Novas tecnologias para o mercado financeiro."
        />
        <Card
          enterpriseName="AutoDrive"
          enterpriseDescription="Mobilidade inteligente e autônoma."
          enterpriseLogo="/src/assets/imgs/Logos/Flux_Dev_Design_a_modern_sleek_logo_for_a_cuttingedge_technolo_0.jpg"
          eventImage="/src/assets/imgs/EventsImage/unnamed.png"
          dateLocation="08/01/2026 - Campinas, SP"
          tags={["Mobilidade", "Automação"]}
          title="AutoDrive Expo"
          description="O futuro dos carros autônomos com tecnologia IA."
        />
        <Card
          enterpriseName="AgroTech"
          enterpriseDescription="Tecnologia que revoluciona o campo."
          enterpriseLogo="/src/assets/imgs/Logos/Flux_Dev_Design_a_modern_sleek_logo_for_a_cuttingedge_technolo_1.jpg"
          eventImage="/src/assets/imgs/EventsImage/eventos_de_tecnologia_e_negocios-1-994x495.jpeg"
          dateLocation="30/03/2026 - Londrina, PR"
          tags={["Agricultura", "Inovação"]}
          title="AgroTech Conference"
          description="Soluções tecnológicas para a agricultura moderna."
        />
      </div>
      <div className="more">
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white mt-[-50px] md:mt-[-100px] rounded-sm text-sm hover:bg-purple-700">
          {" "}
          {/* Adjusted margin-top and padding */}
          Ver mais
        </button>
      </div>
      {/* Seção com ranking dos melhores TechSyners */}
      <div className="middle_techSyn_Ranking_Preview w-full ">
        {" "}
        {/* Added padding */}
        <TopTechSyners />
      </div>
      {/* Seção de planos, com animação */}
      <div
        className="middle_techSyn_Plans_Preview w-full " // Added padding
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Plans />
      </div>
      {/* Seção Maxine, com fundo fixo */}
      <div className="maxine_preview w-full bg-fixed ">
        {" "}
        <Maxine />
      </div>
      {/* Seção das empresas parceiras (FriendsEnt) - Movida para depois da Maxine */}
      {/* O nome da div `maxine_preview` estava aqui no código original, mas o componente é `FriendsEnt`.
          Mantenho o nome da div se for relevante para estilos CSS específicos, mas com o FriendsEnt dentro. */}
      <div
        className="Preview_catalog_Events w-full lg:w-[80%] 2xl:w-full  max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 md:gap-10 lg:gap-0 2xl:gap-6 px-4" // Adjusted grid columns, max-w, and gaps for responsiveness
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Card
          enterpriseName="CodeCraft"
          enterpriseDescription="Comunidade de desenvolvedores inovadores."
          enterpriseLogo="/src/assets/imgs/Logos/unnamed (1).png"
          eventImage="/src/assets/imgs/EventsImage/15_de_mai._de_2025_22_18_41.webp"
          dateLocation="25/11/2026 - São Paulo, SP"
          tags={["Desenvolvimento", "Comunidade"]}
          title="CodeCraft Conference"
          description="Encontre sua próxima oportunidade em dev."
        />
        <Card
          enterpriseName="QuantumLeap"
          enterpriseDescription="Tecnologia quântica para o futuro."
          enterpriseLogo="/src/assets/imgs/Logos/unnamed.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_a_photorealistic_image_of_a_cuttingedge_techno_3.webp"
          dateLocation="10/12/2026 - Rio de Janeiro, RJ"
          tags={["Tecnologia Quântica", "Inovação"]}
          title="QuantumLeap Expo"
          description="O salto da computação quântica com tecnologia IA."
        />
        <Card
          enterpriseName="MediaMix"
          enterpriseDescription="Tecnologia e mídia digital."
          enterpriseLogo="/src/assets/imgs/Logos/Gemini_Generated_Image_vx9xjrvx9xjrvx9x.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_a_vibrant_image_that_captures_the_essence_of_i_1.webp"
          dateLocation="15/01/2027 - Belo Horizonte, MG"
          tags={["Mídia Digital", "Inovação"]}
          title="MediaMix Festival"
          description="Com tecnologia IA Transformando o consumo de mídia ."
        />
        <Card
          enterpriseName="Robotics Lab"
          enterpriseDescription="Avanços em robótica e automação."
          enterpriseLogo="/src/assets/imgs/Logos/Gemini_Generated_Image_y9vzlsy9vzlsy9vz.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_that_evokes_a_sense_of_technology_and_2.webp"
          dateLocation="20/02/2027 - São José dos Campos, SP"
          tags={["Robótica", "Automação"]}
          title="Robotics Lab Expo"
          description="O futuro dos robôs industriais com tecnologia IA."
        />
        <Card
          enterpriseName="TechNova"
          enterpriseDescription="Inovação e tecnologia para o amanhã."
          enterpriseLogo="/src/assets/imgs/Logos/Gemini_Generated_Image_5xnvsk5xnvsk5xnv.png"
          eventImage="/src/assets/imgs/EventsImage/267096-top-x-principais-eventos-de-marketing-digital-para-2019.webp"
          dateLocation="05/03/2027 - Porto Alegre, RS"
          tags={["Inovação", "Futuro"]}
          title="TechNova Expo 2027"
          description="Explore as novas fronteiras da tecnologia."
        />
        <Card
          enterpriseName="Digital Frontier"
          enterpriseDescription="Pioneiros em soluções digitais."
          enterpriseLogo="/src/assets/imgs/Logos/Gemini_Generated_Image_8altw08altw08alt.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_highly_detailed_and_realistic_images_depicting_0.webp"
          dateLocation="18/04/2027 - Brasília, DF"
          tags={["Digital", "Transformação"]}
          title="Digital Frontier Summit"
          description="Transformando o mundo digitalmente."
        />
        <Card
          enterpriseName="HealthTech Global"
          enterpriseDescription="Inovação na área da saúde."
          enterpriseLogo="/src/assets/imgs/Logos/Gemini_Generated_Image_462d7l462d7l462d.png"
          eventImage="/src/assets/imgs/EventsImage/corporate-businessman-giving-presentation-large-audience.webp"
          dateLocation="20/06/2027 - Recife, PE"
          tags={["Saúde", "Tecnologia"]}
          title="HealthTech Global Forum"
          description="Tecnologia que salva vidas com tecnologia IA."
        />
        <Card
          enterpriseName="SmartAgro"
          enterpriseDescription="Agricultura inteligente e conectada."
          enterpriseLogo="/src/assets/imgs/Logos/Gemini_Generated_Image_e6sgq8e6sgq8e6sg.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_A_vibrant_and_bustling_scene_depicting_a_reallife_tec_2.webp"
          dateLocation="10/08/2027 - Londrina, PR"
          tags={["Agricultura", "IoT"]}
          title="SmartAgro Expo"
          description="Tecnologia para um campo mais produtivo."
        />
      </div>
      <div className="more">
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white mt-[-50px] md:mt-[-100px] rounded-sm text-sm hover:bg-purple-700">
          {" "}
          {/* Adjusted margin-top and padding */}
          Ver mais
        </button>
      </div>
      <div
        className="friends_ent_preview w-full " // Changed class name for clarity if it's for FriendsEnt, added padding
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <FriendsEnt />
      </div>
      {/* Segundo Catálogo de Eventos */}
      {/* Terceiro Catálogo de Eventos - Movido para depois de FriendsEnt */}
      <div
        className="Preview_catalog_Events w-full lg:w-[80%] 2xl:w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 md:gap-10 lg:gap-5 2xl:gap-6  px-4" // Adjusted grid columns, max-w, and gaps for responsiveness
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <Card
          enterpriseName="CloudSphere"
          enterpriseDescription="Soluções completas em nuvem."
          enterpriseLogo="/src/assets/imgs/Logos/Gemini_Generated_Image_fbeem9fbeem9fbee.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_that_evokes_a_sense_of_pioneering_inn_1.webp"
          dateLocation="05/10/2027 - Belo Horizonte, MG"
          tags={["Cloud", "Infraestrutura"]}
          title="CloudSphere Summit"
          description="A revolução da nuvem para negócios."
        />
        <Card
          enterpriseName="Robotech"
          enterpriseDescription="Avanços em robótica e automação industrial."
          enterpriseLogo="/src/assets/imgs/Logos/Gemini_Generated_Image_oqbupvoqbupvoqbu.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_create_an_image_of_a_cuttingedge_technology_event_sho_0.webp"
          dateLocation="20/12/2027 - Campinas, SP"
          tags={["Robótica", "Automação"]}
          title="Robotech Expo"
          description="Robôs que estão mudando a indústria."
        />
        <Card
          enterpriseName="CyberSecure"
          enterpriseDescription="Protegendo dados com tecnologia avançada."
          enterpriseLogo="/src/assets/imgs/Logos/Gemini_Generated_Image_ox7uq8ox7uq8ox7u.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_depicting_a_bustling_technology_event_3.webp"
          dateLocation="08/01/2028 - Fortaleza, CE"
          tags={["Segurança", "Cibersegurança"]}
          title="CyberSecure Summit"
          description="O futuro da proteção digital e tecnologia IA."
        />
        <Card
          enterpriseName="NextGen Energy"
          enterpriseDescription="Tecnologias para energia renovável."
          enterpriseLogo="/src/assets/imgs/Logos/Gemini_Generated_Image_nphdo4nphdo4nphd.png"
          eventImage="/src/assets/imgs/EventsImage/Flux_Dev_Create_an_image_of_a_bustling_technology_event_where__3.webp"
          dateLocation="18/02/2028 - Manaus, AM"
          tags={["Energia", "Sustentabilidade"]}
          title="NextGen Energy Expo"
          description="Inovações para um mundo mais verde."
        />
      </div>
      <div className="more mb-20 md:mb-0">
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white mt-[-50px] md:mt-[-100px] rounded-sm text-sm hover:bg-purple-700">
          {" "}
          {/* Adjusted margin-top and padding */}
          Ver mais
        </button>
      </div>
    </section>
  );
}
export default Home;
