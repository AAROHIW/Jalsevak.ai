import DashboardLayout from "../components/DashboardLayout";
import KpiLayout from "../components/KpiLayout";
import ExceedanceLayout from "../components/ExceedanceLayout";
import Frame3 from "../components/Frame3";
import Frame4 from "../components/Frame4";
import Frame2 from "../components/Frame2";

const JalSevakAiAnalystDashboard = () => {
  return (
    <div className="w-full relative flex flex-col items-start bg-[url('/public/JalSevak-Ai-Analyst-Dashboard@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <DashboardLayout />
      <main className="w-[1400px] flex flex-col items-start pt-7 px-10 pb-10 box-border gap-6 max-w-full mq1275:pt-5 mq1275:pb-[26px] mq1275:box-border mq900:pb-5 mq900:box-border">
        <KpiLayout />
        <section className="self-stretch flex items-start flex-wrap content-start gap-5">
          <ExceedanceLayout />
          <Frame3 />
        </section>
        <Frame4 />
        <Frame2 />
      </main>
      <footer className="self-stretch shadow-[0px_1px_0px_rgba(255,_255,_255,_0.08)_inset] bg-[rgba(255,255,255,0)] flex items-center justify-between pt-[17px] px-10 pb-4 gap-5 text-left text-xs text-[rgba(255,255,255,0.45)] font-[Inter] mq900:flex-wrap mq900:gap-5">
        <div className="relative leading-[18px] font-medium">
          © 2025 JalSevak.AI — Water Quality Intelligence
        </div>
        <div className="flex flex-col items-start py-[0.8px] px-0 text-[11px] text-[rgba(255,255,255,0.35)]">
          <div className="relative tracking-[0.66px] leading-[16.5px] font-medium">
            v2.4.1  ·  HYDRA Protocol 3.0  ·  Analyst Mode
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JalSevakAiAnalystDashboard;
