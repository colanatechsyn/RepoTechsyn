const Level_Event = ({ description }) => {
  return (
    <>
      <div className="flex flex-col h-[100px] w-[150px] justify-between items-center -translate-y-[23px]">
        <div className="flex justify-center items-center bg-gradient-to-br from-[#2843B3] to-[#9C2EC4] h-[56px] w-[56px] rounded-full">
          <div className="flex justify-center items-center bg-white h-[48px] w-[48px] rounded-full">
            <div className="flex justify-center items-center bg-gradient-to-br from-[#102475] to-[#751b95] h-[42px] w-[42px] rounded-full">
              <div className="bg-gradient-to-br from-[#2843B3] to-[#9C2EC4] h-[40px] w-[40px] rounded-full">
                {/* Colocar a img aqui!! */}
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-[#6C6C6C] text-[13px]">{description}</h1>
      </div>
    </>
  );
};

export default Level_Event;
