import DarkModeGetter from "@/hooks/DarkModeGetter";
import "./globals.css";
import Navbar from "@/comps/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
