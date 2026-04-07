import { useState } from "react";
import SensorColumns from "./SensorColumns";
import PropTypes from "prop-types";

const KpiLayout = ({ className = "" }) => {
  const [sensorColumnsItems] = useState([
    {
      sensorBackgroundsBackgroundColor: "#1a3a6b",
      sensorInfoBackgroundColor: "rgba(26, 58, 107, 0.08)",
      prop: "📡",
      emptyContent: "1,240",
      emptyContentWidth: "84px",
      emptyContentColor: "#0f2044",
      aCTIVESENSORS: "ACTIVE SENSORS",
      acrossAllMonitoredSites: "Across all monitored sites",
    },
    {
      sensorBackgroundsBackgroundColor: "#16a34a",
      sensorInfoBackgroundColor: "rgba(22, 163, 74, 0.08)",
      prop: "✅",
      emptyContent: "42",
      emptyContentWidth: "40px",
      emptyContentColor: "#16a34a",
      aCTIVESENSORS: "AVG HMPI SCORE",
      acrossAllMonitoredSites: "Safe range · Below threshold",
    },
    {
      sensorBackgroundsBackgroundColor: "#dc2626",
      sensorInfoBackgroundColor: "rgba(220, 38, 38, 0.08)",
      prop: "🚨",
      emptyContent: "3",
      emptyContentWidth: "21px",
      emptyContentColor: "#dc2626",
      aCTIVESENSORS: "ALERTS TODAY",
      acrossAllMonitoredSites: "Requires immediate review",
    },
  ]);
  return (
    <section
      className={`self-stretch flex flex-col items-start gap-3 text-left text-[10px] text-[#fff] font-[Inter] ${className}`}
    >
      <b className="self-stretch relative tracking-[1px] leading-[15px] uppercase">
        KEY PERFORMANCE INDICATORS
      </b>
      <div className="self-stretch flex items-start justify-center flex-wrap content-start gap-4 text-[15px] text-[#0f2044] font-[Roboto]">
        {sensorColumnsItems.map((item, index) => (
          <SensorColumns
            key={index}
            sensorBackgroundsBackgroundColor={
              item.sensorBackgroundsBackgroundColor
            }
            sensorInfoBackgroundColor={item.sensorInfoBackgroundColor}
            prop={item.prop}
            emptyContent={item.emptyContent}
            emptyContentWidth={item.emptyContentWidth}
            emptyContentColor={item.emptyContentColor}
            aCTIVESENSORS={item.aCTIVESENSORS}
            acrossAllMonitoredSites={item.acrossAllMonitoredSites}
          />
        ))}
        <div className="h-[126px] flex-1 shadow-[0px_4px_12px_rgba(15,_32,_68,_0.06),_0px_1px_3px_rgba(15,_32,_68,_0.05)] rounded-[10px] bg-[#fff] border-[#e8edf3] border-solid border-[1px] box-border overflow-hidden flex items-start py-0 px-px relative isolate min-w-[293px] max-w-[318px] [row-gap:20px] text-[10px] mq450:h-auto mq450:flex-wrap">
          <div className="flex items-start gap-[18px] shrink-0 text-[rgba(15,32,68,0.5)] font-[Inter]">
            <div className="h-[124px] w-1 relative rounded-tl-[10px] rounded-tr-none rounded-br-none rounded-bl-[10px] bg-[#2563eb]" />
            <div className="flex flex-col items-start pt-5 px-0 pb-0">
              <div className="flex flex-col items-start gap-[52px] mq450:gap-[26px]">
                <b className="w-[272px] h-[15px] relative tracking-[1px] leading-[15px] uppercase inline-block">
                  REPORTS PENDING
                </b>
                <div className="w-[272px] h-[17px] relative text-[11px] leading-[16.5px] font-medium text-[rgba(15,32,68,0.45)] inline-block">
                  Awaiting analyst approval
                </div>
              </div>
            </div>
          </div>
          <div className="w-[calc(100%_-_46px)] !!m-[0 important] absolute top-[46px] right-[23px] left-[23px] flex items-start z-[1] text-4xl">
            <h2 className="m-0 h-9 w-[21px] relative text-[length:inherit] tracking-[-1.08px] leading-9 font-normal font-[inherit] inline-block mq900:text-[29px] mq900:leading-[29px] mq450:text-[22px] mq450:leading-[22px]">
              7
            </h2>
          </div>
          <div className="flex flex-col items-start pt-[18px] px-0 pb-0 ml-[-28px] relative text-[15px] mq450:ml-0">
            <div className="w-8 h-8 rounded-lg bg-[rgba(37,99,235,0.08)] flex flex-col items-center justify-center shrink-0">
              <div className="relative leading-[22.5px]">📋</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

KpiLayout.propTypes = {
  className: PropTypes.string,
};

export default KpiLayout;
