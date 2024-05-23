import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cityOptions = {
  India: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"],
  USA: ["New York", "Los Angeles", "Chicago", "Houston", "San Francisco"],
  UK: ["London", "Manchester", "Birmingham", "Leeds", "Glasgow"],
  Japan: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya"],
  Australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  France: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
  Canada: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  UAE: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah"],
  Singapore: ["Singapore"],
  Brazil: ["São Paulo", "Rio de Janeiro", "Salvador", "Brasília", "Fortaleza"]
};

const countryCodes = {
  India: "+91",
  USA: "+1",
  UK: "+44",
  Japan: "+81",
  Australia: "+61",
  France: "+33",
  Canada: "+1",
  UAE: "+971",
  Singapore: "+65",
  Brazil: "+55"
};

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
    countryCode: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.phoneNo) errors.phoneNo = 'Phone No. is required';
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.panNo) errors.panNo = 'Pan No. is required';
    if (!formData.aadharNo) errors.aadharNo = 'Aadhar No. is required';
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate('/submission', { state: { formData } });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password:</label>
          <div className="relative mt-1">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 px-3 py-2 text-gray-500"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone No.:</label>
          <div className="flex">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="mt-1 block w-1/4 px-3 py-2 border border-gray-300 bg-white rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Code</option>
              {Object.entries(countryCodes).map(([country, code]) => (
                <option key={country} value={code}>{`${country} (${code})`}</option>
              ))}
            </select>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="mt-1 block w-3/4 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {errors.phoneNo && <span className="text-red-500 text-sm">{errors.phoneNo}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Country</option>
            {Object.keys(cityOptions).map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && <span className="text-red-500 text-sm">{errors.country}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">City:</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select City</option>
            {formData.country && cityOptions[formData.country].map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">PAN No.:</label>
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.panNo && <span className="text-red-500 text-sm">{errors.panNo}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Aadhar No.:</label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.aadharNo && <span className="text-red-500 text-sm">{errors.aadharNo}</span>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
