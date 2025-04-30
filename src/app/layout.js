import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ibrahim_educase",
  description: "My task for educase indai internship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased text-black`}>
        <main>{children}</main>
      </body>
    </html>
  );
}