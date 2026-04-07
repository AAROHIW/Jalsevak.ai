import PropTypes from "prop-types";

const Frame3 = ({ className = "" }) => {
  return (
    <section
      className={`h-[388px] flex-1 shadow-[0px_4px_12px_rgba(15,_32,_68,_0.06),_0px_1px_3px_rgba(15,_32,_68,_0.05)] rounded-[10px] bg-[#fff] border-[#e8edf3] border-solid border-[1px] box-border flex flex-col items-start pt-0 px-0 pb-[62px] min-w-[422px] text-left text-xs text-[#0f2044] font-[Inter] mq900:min-w-full mq450:h-auto mq450:pb-10 mq450:box-border ${className}`}
    >
      <div className="self-stretch shadow-[0px_-1px_0px_#e8edf3_inset] bg-[rgba(255,255,255,0.01)] flex items-center justify-between pt-4 px-5 pb-[13px] gap-5 text-[10px] text-[rgba(15,32,68,0.5)] mq450:flex-wrap mq450:gap-5">
        <div className="flex flex-col items-start py-[2.8px] px-0">
          <b className="relative tracking-[1px] leading-[15px] uppercase">
            RECENT FIELD UPLOADS
          </b>
        </div>
        <div className="rounded bg-[rgba(37,99,235,0.08)] flex flex-col items-start py-0.5 px-2 text-[11px] text-[#2563eb] font-[Roboto]">
          <div className="relative leading-[16.5px]">4 Synced</div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_-1px_0px_#e8edf3_inset] bg-[#f8fafc] overflow-x-auto flex items-start pt-2 px-5 pb-[9px] text-[9px] text-[rgba(15,32,68,0.4)]">
        <b className="flex-1 relative tracking-[0.9px] leading-[13.5px] uppercase">
          SITE
        </b>
        <div className="flex-1 flex items-start [row-gap:20px] mq450:flex-wrap">
          <b className="self-stretch flex-1 relative tracking-[0.9px] leading-[13.5px] uppercase inline-block min-w-[86px]">
            SAMPLES
          </b>
          <b className="self-stretch flex-1 relative tracking-[0.9px] leading-[13.5px] uppercase inline-block min-w-[86px]">
            SYNCED
          </b>
        </div>
        <b className="w-20 relative tracking-[0.9px] leading-[13.5px] uppercase inline-block shrink-0">
          STATUS
        </b>
      </div>
      <div className="self-stretch shadow-[0px_-1px_0px_#f5f7fa_inset] bg-[rgba(255,255,255,0.01)] overflow-x-auto flex items-center pt-[13px] px-5 pb-3.5">
        <div className="flex-1 flex flex-col items-start gap-px">
          <b className="self-stretch relative leading-[18px]">
            Pune Industrial Node 2
          </b>
          <div className="self-stretch relative text-[10px] leading-[15px] text-[rgba(15,32,68,0.4)]">
            Worker ID: FW-019
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start py-2 px-0">
          <div className="self-stretch flex-1 flex items-start [row-gap:20px] mq450:flex-wrap">
            <div className="self-stretch flex-1 relative leading-[18px] font-medium inline-block min-w-[86px]">
              12 samples
            </div>
            <div className="self-stretch flex-1 relative leading-[18px] font-medium text-[rgba(15,32,68,0.5)] inline-block min-w-[86px]">
              10 mins ago
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start py-[5px] px-0 text-[10px] text-[#b45309]">
          <div className="w-20 h-6 flex flex-col items-start pt-1 pb-0 pl-0 pr-[18px] box-border">
            <div className="h-5 rounded-[100px] bg-[rgba(217,119,6,0.1)] border-[rgba(217,119,6,0.25)] border-solid border-[1px] box-border flex flex-col items-start py-0.5 pl-2.5 pr-[9px]">
              <b className="relative tracking-[0.6px] leading-[15px] uppercase">
                WATCH
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_-1px_0px_#f5f7fa_inset] bg-[rgba(255,255,255,0.01)] overflow-x-auto flex items-center pt-[13px] px-5 pb-3.5">
        <div className="flex-1 flex flex-col items-start gap-px">
          <b className="self-stretch relative leading-[18px]">Khadki Well 4</b>
          <div className="self-stretch relative text-[10px] leading-[15px] text-[rgba(15,32,68,0.4)]">
            Worker ID: FW-007
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start py-2 px-0">
          <div className="self-stretch flex-1 flex items-start [row-gap:20px] mq450:flex-wrap">
            <div className="self-stretch flex-1 relative leading-[18px] font-medium inline-block min-w-[86px]">
              8 samples
            </div>
            <div className="self-stretch flex-1 relative leading-[18px] font-medium text-[rgba(15,32,68,0.5)] inline-block min-w-[86px]">
              32 mins ago
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start py-[5px] px-0 text-[10px] text-[#b91c1c]">
          <div className="w-20 h-6 flex flex-col items-start pt-1 pb-0 pl-0 pr-[22px] box-border">
            <div className="h-5 rounded-[100px] bg-[rgba(220,38,38,0.09)] border-[rgba(220,38,38,0.2)] border-solid border-[1px] box-border flex flex-col items-start py-0.5 pl-2.5 pr-[9px]">
              <b className="relative tracking-[0.6px] leading-[15px] uppercase">
                ALERT
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_-1px_0px_#f5f7fa_inset] bg-[rgba(255,255,255,0.01)] overflow-x-auto flex items-center pt-[13px] px-5 pb-3.5">
        <div className="flex-1 flex flex-col items-start gap-px">
          <b className="self-stretch relative leading-[18px]">
            Wakad Reservoir
          </b>
          <div className="self-stretch relative text-[10px] leading-[15px] text-[rgba(15,32,68,0.4)]">
            Worker ID: FW-024
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start py-2 px-0">
          <div className="self-stretch flex-1 flex items-start [row-gap:20px] mq450:flex-wrap">
            <div className="self-stretch flex-1 relative leading-[18px] font-medium inline-block min-w-[86px]">
              15 samples
            </div>
            <div className="self-stretch flex-1 relative leading-[18px] font-medium text-[rgba(15,32,68,0.5)] inline-block min-w-[86px]">
              1 hr ago
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start py-[5px] px-0 text-[10px] text-[#15803d]">
          <div className="w-20 h-6 flex flex-col items-start pt-1 pb-0 pl-0 pr-[29px] box-border">
            <div className="h-5 rounded-[100px] bg-[rgba(22,163,74,0.09)] border-[rgba(22,163,74,0.2)] border-solid border-[1px] box-border flex flex-col items-start py-0.5 pl-2.5 pr-[9px]">
              <b className="relative tracking-[0.6px] leading-[15px] uppercase">
                SAFE
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex items-center py-[13px] px-5 [row-gap:20px] mq900:flex-wrap">
        <div className="flex-1 flex flex-col items-start gap-px min-w-[172px]">
          <b className="self-stretch relative leading-[18px]">
            Bhosari MIDC Node 7
          </b>
          <div className="self-stretch relative text-[10px] leading-[15px] text-[rgba(15,32,68,0.4)]">
            Worker ID: FW-031
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start py-2 px-0 box-border min-w-[172px]">
          <div className="self-stretch flex-1 flex items-start [row-gap:20px] mq450:flex-wrap">
            <div className="self-stretch flex-1 relative leading-[18px] font-medium inline-block min-w-[86px]">
              10 samples
            </div>
            <div className="self-stretch flex-1 relative leading-[18px] font-medium text-[rgba(15,32,68,0.5)] inline-block min-w-[86px]">
              2 hrs ago
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start py-[5px] px-0 text-[10px] text-[#b91c1c]">
          <div className="w-20 h-6 flex flex-col items-start pt-1 pb-0 pl-0 pr-[22px] box-border">
            <div className="h-5 rounded-[100px] bg-[rgba(220,38,38,0.09)] border-[rgba(220,38,38,0.2)] border-solid border-[1px] box-border flex flex-col items-start py-0.5 pl-2.5 pr-[9px]">
              <b className="relative tracking-[0.6px] leading-[15px] uppercase">
                ALERT
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Frame3.propTypes = {
  className: PropTypes.string,
};

export default Frame3;
