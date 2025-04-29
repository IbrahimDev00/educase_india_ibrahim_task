'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateAccount = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    companyname: '',
    isAgency: 'no',
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, password, isAgency } = form;
    if (!name || !phone || !email || !password || !isAgency) {
      setError('Please fill all required fields.');
      return;
    }

    localStorage.setItem('userData', JSON.stringify(form));
    router.push('/account');
  };

  return (
    <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
      {[
        { label: 'Full Name', name: 'name', type: 'text', required: true },
        { label: 'Phone Number', name: 'phone', type: 'tel', required: true },
        { label: 'Email Address', name: 'email', type: 'email', required: true },
        { label: 'Password', name: 'password', type: 'password', required: true },
        { label: 'Company Name', name: 'companyname', type: 'text', required: false },
      ].map((field) => (
        <div key={field.name} className="relative">
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            required={field.required}
            value={form[field.name]}
            onChange={handleChange}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor={field.name}
            className="absolute text-sm text-[#6C25FF] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#ffffff] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
          >
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        </div>
      ))}

      <div className="flex flex-col space-y-2">
        <label className="text-gray-700 font-medium">
          Are you an agency? <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4">
          {['yes', 'no'].map((option) => (
            <label key={option} className="flex items-center space-x-2 text-gray-600">
              <input
                type="radio"
                name="isAgency"
                value={option}
                checked={form.isAgency === option}
                onChange={handleChange}
                className="form-radio text-blue-600"
                required
              />
              <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div>
        <button
          type="submit"
          className="bg-[#6C25FF] hover:bg-[#5b1de0] text-white font-medium py-2 px-4 rounded-md w-full"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default CreateAccount;
