import FrameComponent from "../components/FrameComponent";
import Frame from "../components/Frame";
import Frame1 from "../components/Frame1";

const JalSevakAIFieldWorkerDashboard = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-center py-0 px-8 box-border bg-[url('/public/JalSevak-AI-Field-Worker-Dashboard@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <main className="w-full flex flex-col items-start py-10 px-8 box-border gap-5 max-w-full mq1350:pt-[26px] mq1350:pb-[26px] mq1350:box-border mq800:pt-5 mq800:pb-5 mq800:box-border">
        <header className="self-stretch flex flex-col items-start pt-0 px-0 pb-4 text-left text-[26px] text-[#fff] font-[Inter]">
          <div className="self-stretch flex items-center gap-3">
            <img
              className="h-[53.6px] w-[42px]"
              loading="lazy"
              alt=""
              src="/Margin3.svg"
            />
            <div className="flex flex-col items-start gap-1">
              <div className="w-[409px] h-[29px] flex items-start pt-0 px-0 pb-px box-border">
                <h1 className="mt-[-1px] m-0 h-[29px] w-[300px] relative text-[length:inherit] tracking-[-0.26px] leading-[28.6px] font-bold font-[inherit] inline-block">
                  Field Worker Dashboard
                </h1>
              </div>
              <div className="relative text-sm tracking-[0.14px] leading-[21px] text-[rgba(255,255,255,0.55)] mq450:hidden">
                Laptop connected to HYDRA device  •  Upload data to cloud
              </div>
            </div>
          </div>
        </header>
        <FrameComponent />
        <Frame />
        <Frame1 />
        <footer className="self-stretch shadow-[0px_1px_0px_#e8edf2_inset] bg-[rgba(255,255,255,0)] flex items-center justify-between pt-[17px] px-1 pb-4 gap-5 text-left text-xs text-[#fff] font-[Inter] mq800:flex-wrap mq800:gap-5">
          <div className="relative leading-[18px]">
            © 2025 JalSevak.AI — Water Quality Intelligence
          </div>
          <div className="flex flex-col items-start py-[0.8px] px-0 text-[11px] font-['JetBrains_Mono']">
            <div className="relative leading-[16.5px]">
              v2.4.1 · HYDRA Protocol 3.0
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default JalSevakAIFieldWorkerDashboard;
