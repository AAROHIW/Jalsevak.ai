import PropTypes from "prop-types";

const Frame4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start gap-3 text-left text-[10px] text-[#2563eb] font-[Inter] ${className}`}
    >
      <b className="self-stretch relative tracking-[1px] leading-[15px] uppercase">
        ALL SITES HMPI GRID
      </b>
      <div className="self-stretch flex items-start flex-wrap content-start gap-3.5 text-[13px] text-[#0f2044]">
        <div className="flex-1 shadow-[0px_-1px_0px_#e8edf3_inset,_0px_1px_0px_#e8edf3_inset,_-1px_0px_0px_#e8edf3_inset,_5px_0px_0px_#16a34a_inset,_0px_4px_10px_rgba(15,_32,_68,_0.05),_0px_1px_3px_rgba(15,_32,_68,_0.04)] rounded-[10px] bg-[#fff] flex items-center justify-between py-[19px] pl-[25px] pr-[21px] box-border gap-5 min-w-[207px] mq450:flex-wrap mq450:gap-5">
          <div className="flex flex-col items-start pt-0 px-0 pb-1 gap-1">
            <b className="relative leading-[19.5px]">Wakad Reservoir</b>
            <div className="w-[109px] flex flex-col items-start pt-0 px-0 pb-3 box-border text-[11px] text-[rgba(15,32,68,0.45)]">
              <div className="self-stretch relative leading-[16.5px]">
                Pune West Zone
              </div>
            </div>
            <div className="w-[109px] h-3 flex flex-col items-start text-[10px] text-[#16a34a] font-[Roboto]">
              <div className="h-3 flex items-start">
                <div className="mt-[-1px] h-[15px] w-10 relative tracking-[0.8px] leading-[15px] uppercase inline-block shrink-0">
                  ● SAFE
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-[9.3px] px-0 gap-0.5 text-right text-[38px] text-[#16a34a] font-[Roboto]">
            <div className="w-[63px] h-[38px] flex items-start justify-end">
              <h1 className="m-0 h-[38px] w-[42px] relative text-[length:inherit] tracking-[-1.52px] leading-[38px] font-normal font-[inherit] inline-block mq900:text-3xl mq900:leading-[30px] mq450:text-[23px] mq450:leading-[23px]">
                30
              </h1>
            </div>
            <div className="relative text-[9px] tracking-[0.72px] leading-[13.5px] uppercase text-[rgba(15,32,68,0.35)]">
              HMPI SCORE
            </div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_-1px_0px_#e8edf3_inset,_0px_1px_0px_#e8edf3_inset,_-1px_0px_0px_#e8edf3_inset,_5px_0px_0px_#d97706_inset,_0px_4px_10px_rgba(15,_32,_68,_0.05),_0px_1px_3px_rgba(15,_32,_68,_0.04)] rounded-[10px] bg-[#fff] flex items-center justify-between py-[19px] pl-[25px] pr-[21px] box-border gap-5 min-w-[207px] mq450:flex-wrap mq450:gap-5">
          <div className="flex flex-col items-start pt-0 px-0 pb-1 gap-1">
            <b className="relative leading-[19.5px]">Pune Industrial Node 2</b>
            <div className="w-36 flex flex-col items-start pt-0 px-0 pb-3 box-border text-[11px] text-[rgba(15,32,68,0.45)]">
              <div className="self-stretch relative leading-[16.5px]">
                MIDC East Corridor
              </div>
            </div>
            <div className="w-36 h-3 flex flex-col items-start text-[10px] text-[#d97706] font-[Roboto]">
              <div className="h-3 flex items-start">
                <div className="mt-[-1px] h-[15px] w-[51px] relative tracking-[0.8px] leading-[15px] uppercase inline-block shrink-0">
                  ● WATCH
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-[9.3px] px-0 gap-0.5 text-right text-[38px] text-[#d97706] font-[Roboto]">
            <div className="w-[63px] h-[38px] flex items-start justify-end">
              <h2 className="m-0 h-[38px] w-[42px] relative text-[length:inherit] tracking-[-1.52px] leading-[38px] font-normal font-[inherit] inline-block mq900:text-3xl mq900:leading-[30px] mq450:text-[23px] mq450:leading-[23px]">
                65
              </h2>
            </div>
            <div className="relative text-[9px] tracking-[0.72px] leading-[13.5px] uppercase text-[rgba(15,32,68,0.35)]">
              HMPI SCORE
            </div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_-1px_0px_#e8edf3_inset,_0px_1px_0px_#e8edf3_inset,_-1px_0px_0px_#e8edf3_inset,_5px_0px_0px_#dc2626_inset,_0px_4px_10px_rgba(15,_32,_68,_0.05),_0px_1px_3px_rgba(15,_32,_68,_0.04)] rounded-[10px] bg-[#fff] flex items-center justify-between py-[19px] pl-[25px] pr-[21px] box-border gap-5 min-w-[207px] mq450:flex-wrap mq450:gap-5">
          <div className="flex flex-col items-start pt-0 px-0 pb-1 gap-1">
            <b className="w-[107px] relative leading-[19.5px] inline-block">
              Khadki Well 4
            </b>
            <div className="flex flex-col items-start pt-0 px-0 pb-3 text-[11px] text-[rgba(15,32,68,0.45)]">
              <div className="relative leading-[16.5px]">
                Cantonment District
              </div>
            </div>
            <div className="w-[107px] h-3 flex flex-col items-start text-[10px] text-[#dc2626] font-[Roboto]">
              <div className="w-[51px] h-3 flex items-start">
                <div className="mt-[-1px] h-[15px] w-[46px] relative tracking-[0.8px] leading-[15px] uppercase inline-block shrink-0">
                  ● ALERT
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start py-[9.3px] px-0 gap-0.5 text-right text-[38px] text-[#dc2626] font-[Roboto]">
            <div className="w-[70px] h-[38px] flex items-start py-0 pl-2 pr-0 box-border">
              <h2 className="m-0 h-[38px] w-[62px] relative text-[length:inherit] tracking-[-1.52px] leading-[38px] font-normal font-[inherit] inline-block mq900:text-3xl mq900:leading-[30px] mq450:text-[23px] mq450:leading-[23px]">
                110
              </h2>
            </div>
            <div className="w-[70px] relative text-[9px] tracking-[0.72px] leading-[13.5px] uppercase text-[rgba(15,32,68,0.35)] inline-block">
              HMPI SCORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Frame4.propTypes = {
  className: PropTypes.string,
};

export default Frame4;
