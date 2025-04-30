import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ibrahim_educase",
  description: "My task for educase India internship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased text-black bg-[#F7F8F9] flex items-center justify-center min-h-screen`}>
        {/* Mobile container */}
        <main className="w-[375px] h-[812px] bg-[#F7F8F9] overflow-y-auto shadow-lg rounded-md min-h-screen m-2">
          {children}
        </main>
      </body>
    </html>
  );
}
