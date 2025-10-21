import Navbar from "@/components/navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import Footer from "@/components/footer";

export const metadata = {
  title: "Pratik Jha | Portfolio",
  description: "Portfolio of Pratik Jha who is a legend",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="my-21 mx-auto">
            {children}
            {modal}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
