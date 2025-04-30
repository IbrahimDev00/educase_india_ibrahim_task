'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Camera from '@/../public/Group 1585.svg';

export default function Account() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('userData');
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <header className="bg-[#FFFFFF] w-full text-[#1D2226] text-[18px] pb-8 pt-4 pl-3 mt-2">
        Account Settings
      </header>

      <main className="bg-[#F7F8F9] w-full p-5 flex flex-col items-center">
        <div className="flex flex-row items-center p-2 gap-x-4 gap-y-2">
          <div className="relative w-[76px] h-[76px]">
            <Image
              src="/pf-1.png"
              alt="Profile"
              width={76}
              height={76}
              className="rounded-4xl"
            />
            <Image
              src={Camera}
              alt="Camera Icon"
              width={24}
              height={24}
              className="absolute bottom-0 right-0 translate-x-1 translate-y-1 mb-1 mr-1"
            />
          </div>

          <div className="flex flex-col justify-start text-left">
            <h2 className="text-black font-semibold text-[15px]">
              {userData?.name ? userData.name : 'John Doe'}
            </h2>
            <h2 className="text-black text-[14px]">
              {userData?.email ? userData.email : 'johndoe@example.com'}
            </h2>
          </div>
        </div>

        <p className="text-[14px] text-[#1D2226] text-left p-3">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

      </main>
    </>
  );
}
