// src/components/Form3.js
import React from 'react';
import './Form3.css';

const Form3 = ({ formData, setFormData, errors, setErrors, prevStep, submitForm }) => {
  const validatePhoneNumber = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);

  const handleNext = () => {
    const newErrors = {};
    if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be exactly 10 digits';
    }
    if (!formData.acceptTermsAndCondition) {
      newErrors.acceptTermsAndCondition = 'You must accept the terms and conditions';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      submitForm();
    }
  };

  return (
    <div className="form-container">
      <h2>Form 3</h2>
      <label>
        Country Code:
        <select
          value={formData.countryCode}
          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
        >
          <option value="">Select Country Code</option>
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
        {errors.countryCode && <p className="error">{errors.countryCode}</p>}
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </label>
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={formData.acceptTermsAndCondition}
          onChange={(e) => setFormData({ ...formData, acceptTermsAndCondition: e.target.checked })}
        />
        <label>I accept the terms and conditions</label>
      </div>
      {errors.acceptTermsAndCondition && <p className="error">{errors.acceptTermsAndCondition}</p>}
      <div className="navigation-buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleNext}>Save and Submit</button>
      </div>
    </div>
  );
};

export default Form3;
