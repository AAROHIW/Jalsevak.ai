import { useMemo } from "react";
import PropTypes from "prop-types";

const LocationColumns = ({
  className = "",
  locationColumnsBoxShadow,
  locationColumnsBackgroundColor,
  locationColumnsOverflowX,
  locationColumnsPadding,
  locationNamesMinWidth,
  khadkiWell4,
  metalLeadPbDetectedExcee,
  outerFramePadding,
  mgLVsLimit001MgL,
}) => {
  const locationColumnsStyle = useMemo(() => {
    return {
      boxShadow: locationColumnsBoxShadow,
      backgroundColor: locationColumnsBackgroundColor,
      overflowX: locationColumnsOverflowX,
      padding: locationColumnsPadding,
    };
  }, [
    locationColumnsBoxShadow,
    locationColumnsBackgroundColor,
    locationColumnsOverflowX,
    locationColumnsPadding,
  ]);

  const locationNamesStyle = useMemo(() => {
    return {
      minWidth: locationNamesMinWidth,
    };
  }, [locationNamesMinWidth]);

  const outerFrameStyle = useMemo(() => {
    return {
      padding: outerFramePadding,
    };
  }, [outerFramePadding]);

  return (
    <div
      className={`self-stretch shadow-[0px_-1px_0px_#f5f7fa_inset] bg-[rgba(255,255,255,0.01)] overflow-x-auto flex items-start pt-3.5 px-5 pb-[15px] gap-3 text-left text-[13px] text-[#0f2044] font-[Inter] ${className}`}
      style={locationColumnsStyle}
    >
      <div className="h-[13px] w-2 shrink-0 flex flex-col items-start pt-[5px] px-0 pb-0 box-border">
        <div className="self-stretch flex-1 relative shadow-[0px_0px_0px_3px_rgba(220,_38,_38,_0.15)] rounded bg-[#dc2626]" />
      </div>
      <div
        className="flex-1 flex flex-col items-start gap-0.5"
        style={locationNamesStyle}
      >
        <b className="self-stretch relative leading-[19.5px]">{khadkiWell4}</b>
        <div className="self-stretch flex flex-col items-start pt-0 px-0 pb-1.5 text-[11px] text-[rgba(15,32,68,0.55)]">
          <div className="self-stretch relative leading-[16.5px]">
            {metalLeadPbDetectedExcee}
          </div>
        </div>
        <div
          className="self-stretch flex flex-col items-start py-0 pl-0 pr-[311px] text-xs text-[#dc2626] font-[Roboto] mq900:pr-[155px] mq900:box-border"
          style={outerFrameStyle}
        >
          <div className="rounded bg-[rgba(220,38,38,0.06)] border-[rgba(220,38,38,0.15)] border-solid border-[1px] flex flex-col items-start py-px px-2">
            <div className="relative leading-[18px]">{mgLVsLimit001MgL}</div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer border-[rgba(37,99,235,0.2)] border-solid border-[1px] py-[5px] px-[13px] bg-[rgba(37,99,235,0.07)] h-[31px] rounded-md box-border flex flex-col items-center justify-center hover:bg-[rgba(77,138,255,0.07)] hover:border-[rgba(77,138,255,0.2)] hover:border-solid hover:hover:border-[1px] hover:box-border">
        <b className="relative text-[11px] tracking-[0.22px] leading-[16.5px] font-[Inter] text-[#2563eb] text-center">
          Review
        </b>
      </button>
    </div>
  );
};

LocationColumns.propTypes = {
  className: PropTypes.string,
  khadkiWell4: PropTypes.string,
  metalLeadPbDetectedExcee: PropTypes.string,
  mgLVsLimit001MgL: PropTypes.string,

  /** Style props */
  locationColumnsBoxShadow: PropTypes.string,
  locationColumnsBackgroundColor: PropTypes.string,
  locationColumnsOverflowX: PropTypes.string,
  locationColumnsPadding: PropTypes.string,
  locationNamesMinWidth: PropTypes.string,
  outerFramePadding: PropTypes.string,
};

export default LocationColumns;
