'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SigninForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = form;

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    localStorage.setItem('userData', JSON.stringify(form));
    router.push('/account');
  };

  return (
    <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
      {[
        { label: 'Email Address', name: 'email', type: 'email', required: true },
        { label: 'Password', name: 'password', type: 'password', required: true },
      ].map((field) => (
        <div key={field.name} className="relative z-0 w-full group">
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={form[field.name]}
            onChange={handleChange}
            placeholder=" "
            required={field.required}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor={field.name}
            className="absolute text-sm text-[#6C25FF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#ffffff] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
          >
            {field.label} <span className="text-red-500">*</span>
          </label>
        </div>
      ))}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="bg-[#6C25FF] hover:bg-[#5b1de0] text-white font-medium py-2 px-4 rounded-md w-full"
      >
        Continue
      </button>
    </form>
  );
};

export default SigninForm;
