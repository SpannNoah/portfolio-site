import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Noah Spann - Portfolio",
  description: "Game Developer Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <SmoothScroll />
        <nav className="navbar">
          <div className="navbar-container">
            <a href="/" className="navbar-brand">Noah Spann</a>
            <div className="navbar-links">
              <a href="/">Home</a>
              <a href="/#about">About</a>
              <a href="/games">Games</a>
              <a href="/projects">Projects</a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-external"
              >
                <span>Resume</span>
                <span className="navbar-external-iconWrap" aria-hidden="true">
                  <img
                    src="/images/externallink.png"
                    alt=""
                    className="navbar-external-icon navbar-external-iconDefault"
                  />
                  <img
                    src="/images/externallink-highlighted.png"
                    alt=""
                    className="navbar-external-icon navbar-external-iconHover"
                  />
                </span>
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>

        <footer>
          ©{new Date().getFullYear()} Noah Spann
        </footer>
      </body>
    </html>
  );
}
