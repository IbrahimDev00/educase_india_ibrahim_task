import { Rubik } from 'next/font/google';
import Signup from '@/components/signup';
import Signin from '@/components/signin';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-rubik',
});

export default function Home() {
  return (
    <main className={`${rubik.variable} text-blue-400 flex flex-col min-h-screen justify-end items-center p-6 gap-2.5`}>
      <div className="w-full max-w-md">
        <h1 className="text-[#1D2226] text-[28px] font-medium">Welcome to PopX</h1>
        <h3 className="text-[#777a7e] text-[16px]">
          Lorem ipsum dolor sit amet,<br/>Consectetur adipiscing elit.
        </h3>
      </div>
      <Signup />
      <Signin />
    </main>
  );
}