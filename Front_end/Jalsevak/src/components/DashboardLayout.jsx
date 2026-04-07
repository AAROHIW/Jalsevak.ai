import PropTypes from "prop-types";

const DashboardLayout = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-[rgba(15,32,68,0.78)] flex flex-col items-start pt-7 px-10 pb-0 top-[0] z-[99] sticky text-left text-[26px] text-[#fff] font-[Roboto] ${className}`}
    >
      <div className="w-[1360px] flex flex-col items-start gap-5 mq450:w-0">
        <div className="self-stretch flex items-start gap-3.5">
          <img
            className="h-12 w-12 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-[10px]"
            alt=""
            src="/Frame.svg"
          />
          <div className="flex flex-col items-start gap-[3px]">
            <div className="w-[292px] h-[30px] flex items-start">
              <h2 className="m-0 h-[30px] w-[210px] relative text-[length:inherit] tracking-[-0.52px] leading-[29.9px] font-normal font-[inherit] inline-block [text-shadow:0px_1px_3px_rgba(0,_0,_0,_0.2),_0px_1px_3px_rgba(0,_0,_0,_0.2)]">
                Analyst Dashboard
              </h2>
            </div>
            <div className="relative text-[13px] tracking-[0.13px] leading-[19.5px] font-[Inter] text-[rgba(255,255,255,0.8)] mq1350:hidden">
              Overview of all sites  •  Validate and act on data
            </div>
          </div>
        </div>
        <nav className="m-0 self-stretch flex items-start text-left text-[13px] text-[rgba(255,255,255,0.75)] font-[Inter] mq450:hidden">
          <div className="border-[#fff] border-solid border-b-[3px] flex flex-col items-start justify-center pt-2.5 px-5 pb-1.5 text-[#fff]">
            <b className="relative tracking-[0.13px] leading-[19.5px]">
              Overview
            </b>
          </div>
          <div className="shadow-[0px_-3px_0px_rgba(0,_0,_0,_0)_inset] bg-[rgba(255,255,255,0.01)] flex flex-col items-start justify-center py-2.5 px-5">
            <div className="relative tracking-[0.13px] leading-[19.5px] font-medium">
              Site Map
            </div>
          </div>
          <div className="shadow-[0px_-3px_0px_rgba(0,_0,_0,_0)_inset] bg-[rgba(255,255,255,0.01)] flex flex-col items-start justify-center py-2.5 px-5">
            <div className="relative tracking-[0.13px] leading-[19.5px] font-medium">
              Trends
            </div>
          </div>
          <div className="shadow-[0px_-3px_0px_rgba(0,_0,_0,_0)_inset] bg-[rgba(255,255,255,0.01)] flex flex-col items-start justify-center py-2.5 px-5">
            <div className="relative tracking-[0.13px] leading-[19.5px] font-medium">
              Reports
            </div>
          </div>
          <div className="shadow-[0px_-3px_0px_rgba(0,_0,_0,_0)_inset] bg-[rgba(255,255,255,0.01)] flex flex-col items-start justify-center py-2.5 px-5">
            <div className="relative tracking-[0.13px] leading-[19.5px] font-medium">
              Validate Data
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

DashboardLayout.propTypes = {
  className: PropTypes.string,
};

export default DashboardLayout;
