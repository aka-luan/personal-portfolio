import "./globals.css";  
import { Nunito } from "next/font/google"

const nunito = Nunito({
  weight: ["400", '700'],
  subsets: ["latin"],
  variable: "--font-nunito"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <nav>
          <div>
            <ul>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Experience</a>
              </li>
            </ul>
          </div>
          <h1>logo</h1>
          <div>Contact me</div>
        </nav>
        {children}
      </body>
    </html>
  );
}
