import { useState } from "react";
import LocationColumns from "./LocationColumns";
import PropTypes from "prop-types";

const ExceedanceLayout = ({ className = "" }) => {
  const [locationColumnsItems] = useState([
    {
      locationColumnsBoxShadow: "0px -1px 0px #f5f7fa inset",
      locationColumnsBackgroundColor: "rgba(255, 255, 255, 0.01)",
      locationColumnsOverflowX: "auto",
      locationColumnsPadding: "14px 20px 15px",
      locationNamesMinWidth: "",
      khadkiWell4: "Khadki Well 4",
      metalLeadPbDetectedExcee: "Metal: Lead (Pb)  ·  Detected exceedance",
      outerFramePadding: "0px 311px 0px 0px",
      mgLVsLimit001MgL: "0.05 mg/L  vs limit  0.01 mg/L",
    },
    {
      locationColumnsBoxShadow: "",
      locationColumnsBackgroundColor: "",
      locationColumnsOverflowX: "",
      locationColumnsPadding: "",
      locationNamesMinWidth: "",
      khadkiWell4: "Bhosari MIDC Node 7",
      metalLeadPbDetectedExcee: "Metal: Arsenic (As)  ·  Limit breached",
      outerFramePadding: "0px 295px 0px 0px",
      mgLVsLimit001MgL: "0.014 mg/L  vs limit  0.010 mg/L",
    },
    {
      locationColumnsBoxShadow: "unset",
      locationColumnsBackgroundColor: "unset",
      locationColumnsOverflowX: "unset",
      locationColumnsPadding: "14px 20px",
      locationNamesMinWidth: "329px",
      khadkiWell4: "Hadapsar Well 2",
      metalLeadPbDetectedExcee: "Metal: Mercury (Hg)  ·  Critical level",
      outerFramePadding: "0px 295px 0px 0px",
      mgLVsLimit001MgL: "0.003 mg/L  vs limit  0.001 mg/L",
    },
  ]);
  return (
    <section
      className={`flex-1 shadow-[0px_4px_12px_rgba(15,_32,_68,_0.06),_0px_1px_3px_rgba(15,_32,_68,_0.05)] rounded-[10px] bg-[#fff] border-[#e8edf3] border-solid border-[1px] box-border flex flex-col items-start min-w-[422px] text-left text-[13px] text-[rgba(15,32,68,0.5)] font-[Inter] mq900:min-w-full ${className}`}
    >
      <div className="self-stretch shadow-[0px_-1px_0px_#e8edf3_inset] bg-[rgba(255,255,255,0.01)] flex items-center justify-between pt-4 px-5 pb-[13px] gap-5 text-[10px] mq450:flex-wrap mq450:gap-5">
        <div className="flex flex-col items-start py-[2.8px] px-0">
          <b className="relative tracking-[1px] leading-[15px] uppercase">
            ACTIVE ALERTS
          </b>
        </div>
        <div className="rounded bg-[rgba(220,38,38,0.08)] flex flex-col items-start py-0.5 px-2 text-[11px] text-[#dc2626] font-[Roboto]">
          <div className="relative leading-[16.5px]">3 Critical</div>
        </div>
      </div>
      {locationColumnsItems.map((item, index) => (
        <LocationColumns
          key={index}
          locationColumnsBoxShadow={item.locationColumnsBoxShadow}
          locationColumnsBackgroundColor={item.locationColumnsBackgroundColor}
          locationColumnsOverflowX={item.locationColumnsOverflowX}
          locationColumnsPadding={item.locationColumnsPadding}
          locationNamesMinWidth={item.locationNamesMinWidth}
          khadkiWell4={item.khadkiWell4}
          metalLeadPbDetectedExcee={item.metalLeadPbDetectedExcee}
          outerFramePadding={item.outerFramePadding}
          mgLVsLimit001MgL={item.mgLVsLimit001MgL}
        />
      ))}
      <div className="self-stretch shadow-[0px_1px_0px_rgba(220,_38,_38,_0.1)_inset] rounded-t-none rounded-b-[10px] bg-[rgba(220,38,38,0.04)] flex items-center pt-[11px] px-5 pb-2.5 gap-2.5 text-[#dc2626] font-[Roboto]">
        <div className="relative leading-[19.5px]">⚠</div>
        <div className="flex flex-col items-start py-[1.5px] px-0 text-[11px] text-[rgba(220,38,38,0.8)]">
          <div className="relative leading-[16.5px]">
            3 of 5 parameters exceed WHO/BIS safe limits. Review before
            approving.
          </div>
        </div>
      </div>
    </section>
  );
};

ExceedanceLayout.propTypes = {
  className: PropTypes.string,
};

export default ExceedanceLayout;
