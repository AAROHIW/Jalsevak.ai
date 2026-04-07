import PropTypes from "prop-types";

const Frame1 = ({ className = "" }) => {
  return (
    <main
      className={`self-stretch shadow-[0px_2px_6px_rgba(26,_58,_92,_0.08)] rounded-xl bg-[#fff] border-[#e8edf2] border-solid border-[1px] flex flex-col items-start py-[27px] px-0 gap-4 text-left text-[11px] text-[#1e5fa8] font-[Roboto] mq800:pt-5 mq800:pb-5 mq800:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start py-0 px-8">
        <div className="self-stretch relative tracking-[0.88px] leading-[16.5px] uppercase">
          READINGS PREVIEW — HEAVY METAL DETECTION
        </div>
      </div>
      <section className="self-stretch flex flex-col items-start pt-0 px-0 pb-1 text-left text-xs text-[rgba(26,58,92,0.6)] font-[Roboto]">
        <div className="self-stretch flex flex-col items-start">
          <div className="self-stretch shadow-[0px_-1px_0px_#e8edf2_inset] bg-[#f4f6f9] overflow-x-auto flex items-start">
            <div className="w-64 shrink-0 flex flex-col items-start justify-center py-3 pl-[31px] pr-3.5 box-border">
              <div className="relative tracking-[0.72px] leading-[18px] uppercase">
                METAL
              </div>
            </div>
            <div className="w-[243px] shrink-0 flex flex-col items-start justify-center py-3 pl-[15px] pr-3.5 box-border">
              <div className="relative tracking-[0.72px] leading-[18px] uppercase">
                DETECTED VALUE
              </div>
            </div>
            <div className="w-[183px] shrink-0 flex flex-col items-start justify-center py-3 pl-[15px] pr-3.5 box-border">
              <div className="relative tracking-[0.72px] leading-[18px] uppercase">
                SAFE LIMIT
              </div>
            </div>
            <div className="w-[213px] shrink-0 flex flex-col items-center justify-center py-3 pl-[15px] pr-[31px] box-border text-center">
              <div className="relative tracking-[0.72px] leading-[18px] uppercase">
                STATUS
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start text-[13px] text-[#dc2626]">
          <div className="self-stretch shadow-[0px_-1px_0px_#e8edf2_inset] bg-[rgba(255,255,255,0.01)] flex items-start [row-gap:20px] text-[#1a3a5c] mq1125:flex-wrap">
            <div className="h-[55px] w-64 flex flex-col items-start py-3.5 pl-8 pr-4 box-border text-sm">
              <div className="self-stretch relative">
                <span className="leading-[21px]">Iron</span>
                <span className="text-xs leading-[18px] font-['JetBrains_Mono'] text-[rgba(26,58,92,0.5)]">
                  (Fe)
                </span>
              </div>
            </div>
            <div className="h-[55px] w-[243px] flex flex-col items-start justify-center py-3.5 px-4 box-border font-['JetBrains_Mono']">
              <div className="relative leading-[19.5px] font-medium">
                0.28 mg/L
              </div>
            </div>
            <div className="h-[55px] w-[183px] flex flex-col items-start justify-center py-3.5 px-4 box-border text-[rgba(26,58,92,0.5)] font-['JetBrains_Mono']">
              <div className="relative leading-[19.5px] font-medium">
                0.30 mg/L
              </div>
            </div>
            <div className="w-[213px] flex flex-col items-center justify-center py-[14.5px] pl-4 pr-8 box-border text-center text-xs text-[#16a34a]">
              <div className="rounded-[999px] bg-[#dcfce7] flex items-center pt-[3.5px] px-3 pb-[4.5px] gap-1">
                <img
                  className="h-[18px] w-2.5"
                  loading="lazy"
                  alt=""
                  src="/Margin8.svg"
                />
                <div className="relative tracking-[0.24px] leading-[18px]">
                  Safe
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_-1px_0px_#e8edf2_inset] bg-[rgba(255,255,255,0.01)] flex items-start [row-gap:20px] mq1125:flex-wrap">
            <div className="h-[55px] w-64 flex flex-col items-start py-3.5 pl-8 pr-4 box-border text-sm text-[#1a3a5c]">
              <div className="self-stretch relative">
                <span className="leading-[21px]">Lead</span>
                <span className="text-xs leading-[18px] font-['JetBrains_Mono'] text-[rgba(26,58,92,0.5)]">
                  (Pb)
                </span>
              </div>
            </div>
            <div className="h-[55px] w-[243px] flex flex-col items-start justify-center py-3.5 px-4 box-border">
              <div className="relative leading-[19.5px]">0.018 mg/L</div>
            </div>
            <div className="h-[55px] w-[183px] flex flex-col items-start justify-center py-3.5 px-4 box-border text-[rgba(26,58,92,0.5)] font-['JetBrains_Mono']">
              <div className="relative leading-[19.5px] font-medium">
                0.010 mg/L
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-[14.5px] pl-[57px] pr-[73px] text-center text-xs">
              <div className="rounded-[999px] bg-[#fee2e2] flex items-center pt-[3.5px] px-3 pb-[4.5px] gap-[5px]">
                <img
                  className="h-[18px] w-2.5"
                  loading="lazy"
                  alt=""
                  src="/Margin7.svg"
                />
                <div className="relative tracking-[0.24px] leading-[18px]">
                  Unsafe
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_-1px_0px_#e8edf2_inset] bg-[rgba(255,255,255,0.01)] flex items-start [row-gap:20px] mq1125:flex-wrap">
            <div className="h-[55px] w-64 flex flex-col items-start py-3.5 pl-8 pr-4 box-border text-sm text-[#1a3a5c]">
              <div className="self-stretch relative">
                <span className="leading-[21px]">Arsenic</span>
                <span className="text-xs leading-[18px] font-['JetBrains_Mono'] text-[rgba(26,58,92,0.5)]">
                  (As)
                </span>
              </div>
            </div>
            <div className="h-[55px] w-[243px] flex flex-col items-start justify-center py-3.5 px-4 box-border">
              <div className="relative leading-[19.5px]">0.014 mg/L</div>
            </div>
            <div className="h-[55px] w-[183px] flex flex-col items-start justify-center py-3.5 px-4 box-border text-[rgba(26,58,92,0.5)] font-['JetBrains_Mono']">
              <div className="relative leading-[19.5px] font-medium">
                0.010 mg/L
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-[14.5px] pl-[57px] pr-[73px] text-center text-xs">
              <div className="rounded-[999px] bg-[#fee2e2] flex items-center pt-[3.5px] px-3 pb-[4.5px] gap-[5px]">
                <img
                  className="h-[18px] w-2.5"
                  loading="lazy"
                  alt=""
                  src="/Margin7.svg"
                />
                <div className="relative tracking-[0.24px] leading-[18px]">
                  Unsafe
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_-1px_0px_#e8edf2_inset] bg-[rgba(255,255,255,0.01)] flex items-start [row-gap:20px] text-[#1a3a5c] mq1125:flex-wrap">
            <div className="h-[55px] w-64 flex flex-col items-start py-3.5 pl-8 pr-4 box-border text-sm">
              <div className="self-stretch relative">
                <span className="leading-[21px]">Chromium</span>
                <span className="text-xs leading-[18px] font-['JetBrains_Mono'] text-[rgba(26,58,92,0.5)]">
                  (Cr)
                </span>
              </div>
            </div>
            <div className="h-[55px] w-[243px] flex flex-col items-start justify-center py-3.5 px-4 box-border font-['JetBrains_Mono']">
              <div className="relative leading-[19.5px] font-medium">
                0.042 mg/L
              </div>
            </div>
            <div className="h-[55px] w-[183px] flex flex-col items-start justify-center py-3.5 px-4 box-border text-[rgba(26,58,92,0.5)] font-['JetBrains_Mono']">
              <div className="relative leading-[19.5px] font-medium">
                0.050 mg/L
              </div>
            </div>
            <div className="w-[213px] flex flex-col items-center justify-center py-[14.5px] pl-4 pr-8 box-border text-center text-xs text-[#16a34a]">
              <div className="rounded-[999px] bg-[#dcfce7] flex items-center pt-[3.5px] px-3 pb-[4.5px] gap-1">
                <img
                  className="h-[18px] w-2.5"
                  loading="lazy"
                  alt=""
                  src="/Margin8.svg"
                />
                <div className="relative tracking-[0.24px] leading-[18px]">
                  Safe
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex items-start [row-gap:20px] mq1125:flex-wrap">
            <div className="w-64 flex flex-col items-start py-3.5 pl-8 pr-4 box-border text-sm text-[#1a3a5c]">
              <div className="self-stretch relative">
                <span className="leading-[21px]">Mercury</span>
                <span className="text-xs leading-[18px] font-['JetBrains_Mono'] text-[rgba(26,58,92,0.5)]">
                  (Hg)
                </span>
              </div>
            </div>
            <div className="h-[55px] w-[243px] flex flex-col items-start justify-center py-3.5 px-4 box-border">
              <div className="relative leading-[19.5px]">0.003 mg/L</div>
            </div>
            <div className="h-[55px] w-[183px] flex flex-col items-start justify-center py-3.5 px-4 box-border text-[rgba(26,58,92,0.5)] font-['JetBrains_Mono']">
              <div className="relative leading-[19.5px] font-medium">
                0.001 mg/L
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-[14.5px] pb-3.5 pl-[57px] pr-[73px] text-center text-xs">
              <div className="rounded-[999px] bg-[#fee2e2] flex items-center pt-[3.5px] px-3 pb-[4.5px] gap-[5px]">
                <img
                  className="h-[18px] w-2.5"
                  loading="lazy"
                  alt=""
                  src="/Margin7.svg"
                />
                <div className="relative tracking-[0.24px] leading-[18px]">
                  Unsafe
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-col items-start py-0 px-8 text-[13px] text-[#92400e] font-[Inter]">
        <div className="self-stretch rounded-lg bg-[#fef9f0] border-[#fcd34d] border-solid border-[1px] flex items-center py-[11px] pl-[17px] pr-4 gap-[9px]">
          <img
            className="h-[19.5px] w-4"
            loading="lazy"
            alt=""
            src="/Margin1.svg"
          />
          <div className="relative leading-[19.5px] font-medium">
            3 of 5 parameters exceed WHO/BIS safe limits. Review before
            uploading.
          </div>
        </div>
      </div>
    </main>
  );
};

Frame1.propTypes = {
  className: PropTypes.string,
};

export default Frame1;
