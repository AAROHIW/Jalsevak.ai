import { useMemo } from "react";
import PropTypes from "prop-types";

const SensorColumns = ({
  className = "",
  sensorBackgroundsBackgroundColor,
  sensorInfoBackgroundColor,
  prop,
  emptyContent,
  emptyContentWidth,
  emptyContentColor,
  aCTIVESENSORS,
  acrossAllMonitoredSites,
}) => {
  const sensorBackgroundsStyle = useMemo(() => {
    return {
      backgroundColor: sensorBackgroundsBackgroundColor,
    };
  }, [sensorBackgroundsBackgroundColor]);

  const sensorInfoStyle = useMemo(() => {
    return {
      backgroundColor: sensorInfoBackgroundColor,
    };
  }, [sensorInfoBackgroundColor]);

  const emptyContentStyle = useMemo(() => {
    return {
      width: emptyContentWidth,
      color: emptyContentColor,
    };
  }, [emptyContentWidth, emptyContentColor]);

  return (
    <div
      className={`h-[126px] flex-1 shadow-[0px_4px_12px_rgba(15,_32,_68,_0.06),_0px_1px_3px_rgba(15,_32,_68,_0.05)] rounded-[10px] bg-[#fff] border-[#e8edf3] border-solid border-[1px] box-border overflow-hidden flex items-start py-0 px-px relative isolate min-w-[293px] max-w-[318px] text-left text-[15px] text-[#0f2044] font-[Roboto] ${className}`}
    >
      <div className="w-[298px] flex items-start justify-between gap-5 shrink-0">
        <div
          className="h-[124px] w-1 relative rounded-tl-[10px] rounded-tr-none rounded-br-none rounded-bl-[10px] bg-[#1a3a6b]"
          style={sensorBackgroundsStyle}
        />
        <div className="flex flex-col items-start pt-[18px] px-0 pb-0">
          <div
            className="w-8 h-8 rounded-lg bg-[rgba(26,58,107,0.08)] flex flex-col items-center justify-center"
            style={sensorInfoStyle}
          >
            <div className="relative leading-[22.5px]">{prop}</div>
          </div>
        </div>
      </div>
      <div className="w-[calc(100%_-_46px)] !!m-[0 important] absolute top-[46px] right-[23px] left-[23px] flex items-start z-[1] text-4xl">
        <h2
          className="m-0 h-9 w-[84px] relative text-[length:inherit] tracking-[-1.08px] leading-9 font-normal font-[inherit] inline-block mq900:text-[29px] mq900:leading-[29px] mq450:text-[22px] mq450:leading-[22px]"
          style={emptyContentStyle}
        >
          {emptyContent}
        </h2>
      </div>
      <div className="flex flex-col items-start pt-5 px-0 pb-0 ml-[-276px] relative text-[10px] text-[rgba(15,32,68,0.5)] font-[Inter]">
        <div className="flex flex-col items-start gap-[52px] shrink-0 mq450:gap-[26px]">
          <b className="w-[272px] h-[15px] relative tracking-[1px] leading-[15px] uppercase inline-block">
            {aCTIVESENSORS}
          </b>
          <div className="w-[272px] h-[17px] relative text-[11px] leading-[16.5px] font-medium text-[rgba(15,32,68,0.45)] inline-block">
            {acrossAllMonitoredSites}
          </div>
        </div>
      </div>
    </div>
  );
};

SensorColumns.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  emptyContent: PropTypes.string,
  aCTIVESENSORS: PropTypes.string,
  acrossAllMonitoredSites: PropTypes.string,

  /** Style props */
  sensorBackgroundsBackgroundColor: PropTypes.string,
  sensorInfoBackgroundColor: PropTypes.string,
  emptyContentWidth: PropTypes.string,
  emptyContentColor: PropTypes.string,
};

export default SensorColumns;
