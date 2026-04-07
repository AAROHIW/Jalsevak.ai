import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start gap-5 max-w-full text-left text-[11px] text-[#1e5fa8] font-[Roboto] mq1350:flex-wrap ${className}`}
    >
      <div className="h-[281px] w-[783px] shadow-[0px_2px_6px_rgba(26,_58,_92,_0.08)] rounded-xl bg-[#fff] border-[#e8edf2] border-solid border-[1px] box-border flex flex-col items-start py-[29px] px-8 gap-4 max-w-full mq1350:flex-1 mq1125:min-w-full mq800:h-auto">
        <div className="self-stretch relative tracking-[0.88px] leading-[16.5px] uppercase">{`CONNECTION STATUS & DEVICE INFO`}</div>
        <div className="self-stretch flex items-start [row-gap:20px] text-[17px] text-[#16a34a] font-[Inter] mq800:flex-wrap">
          <div className="self-stretch flex-1 shadow-[-1px_0px_0px_#e8edf2_inset] bg-[rgba(255,255,255,0.01)] flex flex-col items-start py-8 px-0 box-border gap-2 min-w-[233px]">
            <div className="w-[326px] flex items-center gap-3">
              <div className="h-[25.5px] w-5 shadow-[0px_0px_0px_10px_rgba(22,_163,_74,_0.07),_0px_0px_0px_5px_rgba(22,_163,_74,_0.18)] rounded-[10px] bg-[#16a34a] flex flex-col items-start py-[2.8px] px-0 box-border">
                <div className="w-5 h-5 relative shadow-[0px_0px_0px_10px_rgba(22,_163,_74,_0.07),_0px_0px_0px_5px_rgba(22,_163,_74,_0.18)] rounded-[10px] bg-[#16a34a] hidden" />
              </div>
              <b className="relative tracking-[-0.17px] leading-[25.5px]">
                HYDRA Device: Connected
              </b>
            </div>
            <div className="w-[280px] h-[39px] relative text-[13px] leading-[19.5px] text-[rgba(26,58,92,0.5)] inline-block">
              Real-time bidirectional link established. Ready to collect and
              transmit samples.
            </div>
          </div>
          <div className="flex-[0.9107] flex flex-col items-start justify-center py-0 pl-8 pr-0 box-border gap-2.5 min-w-[233px] text-[11px] text-[rgba(26,58,92,0.5)] mq450:flex-1">
            <div className="self-stretch flex items-center gap-2.5 mq450:flex-wrap">
              <img
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-[38.5px] w-8"
                alt=""
                src="/Margin5.svg"
              />
              <div className="flex flex-col items-start gap-px">
                <div className="relative tracking-[0.66px] leading-[16.5px] uppercase font-medium">
                  DEVICE ID
                </div>
                <div className="w-[61px] relative text-sm leading-[21px] font-medium font-['JetBrains_Mono'] text-[#1a3a5c] inline-block">
                  HYD-004
                </div>
              </div>
            </div>
            <div className="self-stretch flex items-center gap-2.5 mq450:flex-wrap">
              <img
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-[38.5px] w-8"
                alt=""
                src="/Margin6.svg"
              />
              <div className="flex flex-col items-start gap-px">
                <div className="relative tracking-[0.66px] leading-[16.5px] uppercase font-medium">
                  SAMPLES COLLECTED
                </div>
                <div className="w-[131px] relative text-sm leading-[21px] font-medium font-['JetBrains_Mono'] text-[#1a3a5c] inline-block">
                  12
                </div>
              </div>
            </div>
            <div className="self-stretch flex items-center gap-2.5 mq450:flex-wrap">
              <img
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-[38.5px] w-8"
                alt=""
                src="/Margin9.svg"
              />
              <div className="flex flex-col items-start gap-px">
                <div className="w-[120px] relative tracking-[0.66px] leading-[16.5px] uppercase font-medium inline-block">
                  LAST READING
                </div>
                <div className="relative text-sm leading-[21px] font-medium font-['JetBrains_Mono'] text-[#1a3a5c]">
                  Today, 14:30 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[509px] flex flex-col items-start pt-0 px-0 pb-1 box-border max-w-full font-[Inter] mq1350:flex-1 mq800:min-w-full">
        <div className="self-stretch shadow-[0px_2px_6px_rgba(26,_58,_92,_0.08)] rounded-xl bg-[#fff] border-[#e8edf2] border-solid border-[1px] flex flex-col items-start py-[27px] px-8 gap-4">
          <div className="self-stretch relative tracking-[0.88px] leading-[16.5px] uppercase font-[Roboto]">
            UPLOAD ACTION
          </div>
          <button className="cursor-pointer [border:none] pt-0 px-0 pb-0.5 bg-[transparent] self-stretch flex flex-col items-start">
            <button className="cursor-pointer [border:none] py-3.5 px-0 bg-[#2563eb] self-stretch h-[52px] shadow-[0px_2px_8px_rgba(37,_99,_235,_0.32)] rounded-lg flex items-center justify-center box-border gap-2.5 hover:bg-[#4d8aff]">
              <img
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-6 w-5"
                alt=""
                src="/Margin2.svg"
              />
              <div className="relative text-base tracking-[0.16px] leading-6 font-[Roboto] text-[#fff] text-center">
                Upload Data to Cloud
              </div>
            </button>
          </button>
          <div className="self-stretch flex flex-col items-start gap-1.5 text-xs text-[rgba(26,58,92,0.55)]">
            <div className="self-stretch flex items-center justify-between gap-5">
              <div className="relative leading-[18px] font-medium">
                Upload Progress
              </div>
              <div className="relative leading-[18px] font-medium font-['JetBrains_Mono'] text-[#2563eb]">
                100%
              </div>
            </div>
            <div className="self-stretch h-1.5 rounded-[3px] bg-[#2563eb] overflow-hidden shrink-0 flex flex-col items-start">
              <div className="self-stretch flex-1 relative rounded-[3px] bg-[#2563eb] hidden" />
            </div>
          </div>
          <div className="self-stretch rounded-[10px] bg-[#dcfce7] border-[#86efac] border-solid border-[1px] flex items-start py-[13px] pl-[19px] pr-[18px] gap-3 text-sm text-[#15803d]">
            <img
              className="cursor-pointer [border:none] p-0 bg-[transparent] h-[29px] w-7"
              alt=""
              src="/Margin4.svg"
            />
            <div className="flex flex-col items-start gap-[3px]">
              <b className="w-[356px] relative leading-[21px] inline-block">
                Upload Successful
              </b>
              <div className="relative text-[13px] leading-[19.5px] text-[#166534]">
                Data sent to cloud. HMPI report will be generated shortly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
