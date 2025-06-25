import Level_Event from "../../components/layout/Level_event";
import Card_level from "../../components/common/Card_level";

const PaginaImpulsionamento = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col h-[550px] w-full bg-gradient-to-br from-[#4F5FD7] to-[#982FDC] justify-end items-center gap-[100px] relative">
        <h1 className="text-white text-[75px] w-[80%] mt-[5%] text-center">
          Impulsione esse evento e desbloqueie vantagens
        </h1>
        <div className="flex justify-center items-center h-[60px] w-[300px] -translate-y-[110px] rounded border-2 border-transparent shadow-md bg-gradient-to-br from-[#F0F0F0] to-white absolute z-[19]">
          <button className="font-bold text-[19px] bg-gradient-to-r from-[#a833dd] to-[#2f5dff] bg-clip-text !text-transparent">
            Impulsionar esse evento
          </button>
        </div>
        <div className="curv bg-[#fafbfe] h-[350px] w-full [clip-path:ellipse(51%_80%_at_50%_89%)]" />
      </div>

      <div className="mt-[1%]">
        <div className="flex h-[7px] w-[1100px] bg-gradient-to-br from-[#9C2EC4] to-[#2843B3] justify-between px-[3%]">
          <Level_Event description={"Sem Nível - Padrão"} />
          <Level_Event description={"Nivel 1 - Starter"} />
          <Level_Event description={"Nivel 2 - MainTech"} />
          <Level_Event description={"Nivel 3 - TechSyn"} />
        </div>
      </div>

      <div className="flex flex-row justify-between mt-[14%] h-[300px] w-[70%]">
        <Card_level
          title="Nível 1"
          posTitle="-2 impulsos"
          level="padrão"
          txt1="Encontre conselhos e respostas"
          txt2="Suporte personalizado"
          txt3="Acesso limitado ao conteúdo"
          txt4="Atualizações mensais"
          txt5="Sem prioridade"
        />

        <Card_level
          title="Nível 1"
          posTitle="-2 impulsos"
          level="padrão"
          txt1="Encontre conselhos e respostas"
          txt2="Suporte personalizado"
          txt3="Acesso limitado ao conteúdo"
          txt4="Atualizações mensais"
          txt5="Sem prioridade"
        />

        <Card_level
          title="Nível 1"
          posTitle="-2 impulsos"
          level="padrão"
          txt1="Encontre conselhos e respostas"
          txt2="Suporte personalizado"
          txt3="Acesso limitado ao conteúdo"
          txt4="Atualizações mensais"
          txt5="Sem prioridade"
        />
      </div>

      <div className="flex flex-col w-[80%] h-[500px] gap-[50px] ml-[20%] mt-[9%]">
        <h1 className="text-[22px] text-[#8F2EC4]">
          Perguntas Recorrentes sobre impulsos
        </h1>
        <p className="text-[#5B5B5B] ml-[8%] cursor-pointer">
          O que são impulsos de um evento?
        </p>
        <p className="text-[#5B5B5B] ml-[8%] cursor-pointer">
          Como impulsionar o meu Evento?
        </p>
        <p className="text-[#5B5B5B] ml-[8%] cursor-pointer">
          Posso impulsionar um evento varias vezes?
        </p>
        <p className="text-[#5B5B5B] ml-[8%] cursor-pointer">
          Posso impulsionar mais de um evento meu?
        </p>
        <p className="text-[#5B5B5B] ml-[8%] cursor-pointer">
          Posso impulsionar até mais do nível maximo?
        </p>
      </div>

      <div className="h-[2px] w-[80%] bg-[#99989891]" />

      <div className="flex flex-col text-center items-center gap-[20px] mt-[5%]">
        <h1 className="text-[23px] text-[#5B5B5B]">
          <span className="bg-gradient-to-br from-[#2843B3] to-[#9C2EC4] bg-clip-text text-transparent">
            Não consegue
          </span>{" "}
          achar a resposta para a sua pergunta?
        </h1>
        <p className="w-[80%] text-[#737272]">
          Entre em contato conosco para saber mais sobre serviços adicionais e
          preços personalizados.
        </p>
        <button className="h-[40px] w-[130px] bg-gradient-to-r from-[#8F2EC4] to-[#0055FF] text-white rounded-[7px] cursor-pointer">
          Contate-nos
        </button>
      </div>
    </div>
  );
};

export default PaginaImpulsionamento;
