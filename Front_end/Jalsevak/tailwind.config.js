/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq800: {
        raw: "screen and (min-width: 451px) and (max-width: 800px)",
      },
      mq900: {
        raw: "screen and (min-width: 801px) and (max-width: 900px)",
      },
      mq1125: {
        raw: "screen and (min-width: 901px) and (max-width: 1125px)",
      },
      mq1275: {
        raw: "screen and (min-width: 1126px) and (max-width: 1275px)",
      },
      mq1350: {
        raw: "screen and (min-width: 1276px) and (max-width: 1350px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
