'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
      <header className="bg-[#FFFFFF] w-full text-[#1D2226] text-[18px]">
        Account Settings
      </header>
      <main className="bg-[#F7F8F9] w-full p-5 flex flex-col items-center">
        <div className="flex flex-row items-center p-3 gap-x-4">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={150}
            height={100}
            className="rounded-full"
          />
          <h2 className="text-black">
            {userData?.email ? userData.email.split('@')[0] : 'John Doe'}
          </h2>
        </div>

        <p className="text-[14px] text-[#1D2226] text-center">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </main>
    </>
  );
}
