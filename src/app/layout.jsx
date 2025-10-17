import Navbar from "@/components/navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Pratik Jha | Portfolio",
  description: "Portfolio of Pratik Jha who is a legend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <Navbar />
          <main className="my-21 mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
