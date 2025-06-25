const Card_level = ({ title, posTitle, level, txt1, txt2, txt3, txt4, txt5 }) => {
  const imgCheck = "https://img.icons8.com/?size=100&id=11658&format=png&color=000000";

  return (
    <div className="flex flex-col h-[300px] w-[250px] rounded-[15px] bg-gradient-to-br from-[#2843B3] to-[#9C2EC4] items-start pl-[2%] pt-[2%]">
      <div className="flex flex-row items-baseline gap-2">
        <h1 className="text-white text-[24px]">{title}</h1>
        <p className="text-[9px] text-white/60">{posTitle}</p>
      </div>

      <div className="flex flex-col gap-2.5 text-white mt-[10%]">
        <h3>{level}</h3>
        {[txt1, txt2, txt3, txt4, txt5].map((text, i) => (
          <p key={i} className="flex flex-row items-center gap-1 text-[11px]">
            <img src={imgCheck} alt="check" className="h-[17px] w-auto" />
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card_level;
