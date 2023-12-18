import React, { useState } from 'react';
import './YogaClassForm.css'; 

const YogaClassForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPaymentInfo(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleSubmit = async (event) => {
    // console.log('hi');
    event.preventDefault();

    
    if (age < 18 || age > 65) {
      alert('Age must be between 18 to 65');
      return;
    }

    try {
      console.log(paymentInfo);
      // console.log('hi');
      const aa = JSON.stringify({
        name,
        age,
        email,
        selectedBatch,
        paymentInfo,
        selectedMonth,
      })

      console.log(aa);
      const response = await fetch('http://localhost:3001/api/make-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: aa,
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Yoga Class Enrollment</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="batch">Select Batch:</label>
          <select
            id="batch"
            value={selectedBatch}
            onChange={handleBatchChange}
            required
          >
            <option value="">Select a batch</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="payment">Registration Fee:</label>
          <input
            type="number"
            id="payment"
            value={paymentInfo}
            onChange={handlePaymentChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="month">Select Month:</label>
          <input
            type="month"
            id="month"
            value={selectedMonth}
            onChange={handleMonthChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">Enroll</button>
      </form>
    </div>
  );
};

export default YogaClassForm;
