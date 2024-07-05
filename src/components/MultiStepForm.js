// src/components/MultiStepForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
    acceptTermsAndCondition: false,
  });
  const [errors, setErrors] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = async () => {
    const { acceptTermsAndCondition, ...dataToSubmit } = formData;
    try {
      const response = await axios.post('https://codebuddy.review/submit', dataToSubmit);
      console.log(response.data);
      // Redirect to /posts
      window.location.href = '/posts';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      {step === 1 && (
        <Form1
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Form2
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Form3
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
