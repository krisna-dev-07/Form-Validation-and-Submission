import React from 'react';
import { useLocation } from 'react-router-dom';

const Submission = () => {
  const location = useLocation();
  const { state } = location;
  const { formData } = state || {};

  if (!formData) {
    return <div>No submission data found</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Submission Successful</h1>
      <div className="space-y-2">
        <p><strong>First Name :</strong> {formData.firstName}</p>
        <p><strong>Last Name :</strong> {formData.lastName}</p>
        <p><strong>Username :</strong> {formData.username}</p>
        <p><strong>Email :</strong> {formData.email}</p>
        <p><strong>Phone No :</strong> {formData.countryCode} {formData.phoneNo}</p>
        <p><strong>Country :</strong> {formData.country}</p>
        <p><strong>City :</strong> {formData.city}</p>
        <p><strong>PAN No :</strong> {formData.panNo}</p>
        <p><strong>Aadhar No :</strong> {formData.aadharNo}</p>
      </div>
    </div>
  );
};

export default Submission;
