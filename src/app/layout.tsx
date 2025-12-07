import DarkModeGetter from "@/hooks/DarkModeGetter";
import "./globals.css";
import Navbar from "@/comps/Navbar";

export const metadata = {
  title: "Vijendraverse: A blog by me, Vijendra (cool raw thoughts only)",
  description:
    "Vijendraverse is blog written by Vijendra mainly covering up tech, life and more.",
  keywords: [
    "Vijendra",
    "Vijendraverse",
    "Vijendra Vasre",
    "Vijendra Blog",
    "Vijendra Poojary",
    "Verse",
    "Vij",
    "Vijendra Vasre",
    "Vasre",
    "vijendra_gpitw",
    "Vijendra musings",
    "Musings",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Vijendra's blogs maybe poetic, idiotic or everything.</title>
      </head>
      <body className="dark:bg-darkModeBlack bg-white text-black dark:text-white  ">
        <script
          dangerouslySetInnerHTML={{
            __html: `
           (function() {
        try {
          const mode = localStorage.getItem("mode");
          if (mode === "dark") {
            document.documentElement.classList.add("dark");
          }
        } catch(e) {}
      })();
    `,
          }}
        ></script>
        <Navbar />
        <DarkModeGetter />
        {children}
      </body>
    </html>
  );
}
