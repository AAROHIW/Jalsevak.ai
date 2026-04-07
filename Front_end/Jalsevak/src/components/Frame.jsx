import PropTypes from "prop-types";

const Frame = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch shadow-[0px_2px_6px_rgba(26,_58,_92,_0.08)] rounded-xl bg-[#fff] border-[#e8edf2] border-solid border-[1px] flex flex-col items-start py-[27px] px-8 gap-4 text-left text-[11px] text-[#1e5fa8] font-[Roboto] ${className}`}
    >
      <div className="self-stretch relative tracking-[0.88px] leading-[16.5px] uppercase">
        LOCATION INPUT
      </div>
      <div className="self-stretch flex flex-col items-start gap-2 text-[13px] text-[#1a3a5c]">
        <div className="self-stretch h-5 flex items-start pt-0 px-0 pb-px box-border gap-[13px] mq450:h-auto mq450:flex-wrap">
          <div className="mt-[-1px] h-5 w-[93px] relative leading-[19.5px] inline-block">
            Site Name Input
          </div>
          <div className="rounded-[999px] bg-[#fee2e2] flex flex-col items-start py-0.5 px-[7px] text-[10px] text-[#dc2626] font-[Inter]">
            <b className="relative tracking-[0.5px] leading-[15px] uppercase">
              REQUIRED
            </b>
          </div>
        </div>
        <div className="self-stretch h-11 flex items-start">
          <div className="h-11 w-[1246px] shadow-[0px_0px_0px_3px_rgba(37,_99,_235,_0.1)] rounded-lg bg-[#fff] border-[#2563eb] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-center py-0 px-3.5 z-[1]">
            <input
              className="w-full [border:none] [outline:none] font-medium font-[Inter] text-[15px] bg-[transparent] h-[23px] relative leading-[22.5px] text-[#1a3a5c] text-left inline-block min-w-[250px] p-0"
              placeholder="Khadki Well 4"
              type="text"
            />
          </div>
          <button className="cursor-pointer [border:none] pt-[13px] px-0 pb-0 bg-[transparent] flex flex-col items-start ml-[-32px] relative">
            <img
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[18px] h-[18px] relative shrink-0 z-[1]"
              alt=""
              src="/Frame1.svg"
            />
          </button>
        </div>
        <div className="self-stretch relative text-xs leading-[18px] font-[Inter] text-[rgba(26,58,92,0.45)]">
          Enter the exact name of the water source site being sampled.
        </div>
      </div>
    </section>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
};

export default Frame;
