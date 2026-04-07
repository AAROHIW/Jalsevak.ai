import PropTypes from "prop-types";

const Frame2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch shadow-[0px_4px_20px_rgba(15,_32,_68,_0.25)] rounded-xl bg-[#0f2044] flex items-center justify-between py-6 px-7 box-border gap-5 max-w-full text-left text-[11px] text-[#2563eb] font-[Inter] mq1350:flex-wrap mq1350:gap-5 ${className}`}
    >
      <div className="flex flex-col items-start gap-1.5 max-w-full">
        <b className="w-[815px] relative tracking-[1.1px] leading-[16.5px] uppercase inline-block">
          VALIDATE DATA: ACTION REQUIRED
        </b>
        <div className="w-[815px] flex flex-col items-start pt-0 px-0 pb-0.5 box-border text-[17px] text-[#fff] font-[Roboto]">
          <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.17px] leading-[25.5px] font-normal font-[inherit]">
            Recent Upload — Khadki Well 4 (HYD-004)
          </h3>
        </div>
        <div className="flex items-start gap-4 text-xs text-[rgba(255,255,255,0.6)] mq1275:flex-wrap">
          <div className="flex items-center gap-1.5">
            <div className="relative leading-[18px] font-medium">Samples:</div>
            <b className="relative leading-[18px] text-[#fff]">12 collected</b>
          </div>
          <div className="h-[18px] w-1.5 flex flex-col items-start pt-0 px-0 pb-3 box-border">
            <div className="self-stretch flex-1 relative rounded-[3px] bg-[rgba(255,255,255,0.25)]" />
          </div>
          <div className="flex items-center gap-[5px]">
            <div className="relative leading-[18px] font-medium">Worker:</div>
            <b className="relative leading-[18px] text-[#fff]">FW-007</b>
          </div>
          <div className="h-[18px] w-1.5 flex flex-col items-start pt-0 px-0 pb-3 box-border">
            <div className="self-stretch flex-1 relative rounded-[3px] bg-[rgba(255,255,255,0.25)]" />
          </div>
          <div className="flex items-center gap-[5px]">
            <div className="relative leading-[18px] font-medium">Device:</div>
            <b className="relative leading-[18px] text-[#fff]">HYD-004</b>
          </div>
          <div className="h-[18px] w-1.5 flex flex-col items-start pt-0 px-0 pb-3 box-border">
            <div className="self-stretch flex-1 relative rounded-[3px] bg-[rgba(255,255,255,0.25)]" />
          </div>
          <div className="flex items-center gap-[5px]">
            <div className="relative leading-[18px] font-medium">Uploaded:</div>
            <b className="relative leading-[18px] text-[#fff]">Today, 14:30</b>
          </div>
          <div className="h-[18px] w-1.5 flex flex-col items-start pt-0 px-0 pb-3 box-border">
            <div className="self-stretch flex-1 relative rounded-[3px] bg-[rgba(255,255,255,0.25)]" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="relative leading-[18px] font-medium">Flags:</div>
            <b className="relative leading-[18px] text-[#f87171]">
              3 exceedances detected
            </b>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start py-[16.3px] px-0 box-border max-w-full">
        <div className="flex items-center gap-3 mq900:flex-wrap">
          <button className="cursor-pointer [border:none] pt-[10.3px] px-[22px] pb-[11.8px] bg-[#2563eb] h-[42px] shadow-[0px_2px_8px_rgba(37,_99,_235,_0.4)] rounded-lg flex items-center box-border gap-2 hover:bg-[#4d8aff]">
            <img className="h-[19.5px] w-3.5" alt="" src="/Margin.svg" />
            <b className="relative text-[13px] tracking-[0.13px] leading-[19.5px] font-[Inter] text-[#fff] text-center">{`Approve & Generate Report`}</b>
          </button>
          <button className="cursor-pointer border-[rgba(255,255,255,0.3)] border-solid border-[1px] py-[9px] px-5 bg-[transparent] h-[42px] rounded-lg box-border flex flex-col items-center justify-center hover:bg-[rgba(230,230,230,0.09)] hover:border-[rgba(230,230,230,0.3)] hover:border-solid hover:hover:border-[1px] hover:box-border">
            <div className="relative text-[13px] tracking-[0.13px] leading-[19.5px] font-[Roboto] text-[rgba(255,255,255,0.8)] text-center">
              Reject Data
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

Frame2.propTypes = {
  className: PropTypes.string,
};

export default Frame2;
