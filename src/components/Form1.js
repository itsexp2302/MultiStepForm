// src/components/Form1.js
import React from 'react';
import './Form1.css';

const Form1 = ({ formData, setFormData, errors, setErrors, nextStep }) => {
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const capitalLetters = /[A-Z]/g;
    const smallLetters = /[a-z]/g;
    const numbers = /[0-9]/g;
    const specialChars = /[^A-Za-z0-9]/g;
    return (
      password.match(capitalLetters)?.length >= 2 &&
      password.match(smallLetters)?.length >= 2 &&
      password.match(numbers)?.length >= 2 &&
      password.match(specialChars)?.length >= 2
    );
  };

  const handleNext = () => {
    const newErrors = {};
    if (!validateEmail(formData.emailId)) {
      newErrors.emailId = 'Invalid email';
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must contain at least 2 capital letters, 2 small letters, 2 numbers, and 2 special characters';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div className="form-container">
      <h2>Form 1</h2>
      <label>
        Email:
        <input
          type="email"
          value={formData.emailId}
          onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
        />
        {errors.emailId && <p className="error">{errors.emailId}</p>}
      </label>
      <label>
        Password:
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </label>
      <div className="navigation-buttons">
        <button onClick={handleNext}>Save and Next</button>
      </div>
    </div>
  );
};

export default Form1;
