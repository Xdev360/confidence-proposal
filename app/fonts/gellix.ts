import localFont from "next/font/local";

export const gellix = localFont({
  src: [
    {
      path: "./Gellix-TRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Gellix-TRIAL-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Gellix-TRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gellix",
  display: "swap",
});
