// src/components/Form2.js
import React from 'react';
import './Form2.css';

const Form2 = ({ formData, setFormData, errors, setErrors, nextStep, prevStep }) => {
  const validateName = (name) => /^[a-zA-Z]+$/.test(name);
  const validateAddress = (address) => address.length >= 10;

  const handleNext = () => {
    const newErrors = {};
    if (!validateName(formData.firstName) || formData.firstName.length < 2 || formData.firstName.length > 50) {
      newErrors.firstName = 'First name must be between 2 and 50 characters and contain only alphabets';
    }
    if (formData.lastName && !validateName(formData.lastName)) {
      newErrors.lastName = 'Last name must contain only alphabets';
    }
    if (!validateAddress(formData.address)) {
      newErrors.address = 'Address must be at least 10 characters long';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div className="form-container">
      <h2>Form 2</h2>
      <label>
        First Name:
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </label>
      <label>
        Address:
        <input
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        {errors.address && <p className="error">{errors.address}</p>}
      </label>
      <div className="navigation-buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleNext}>Save and Next</button>
      </div>
    </div>
  );
};

export default Form2;
