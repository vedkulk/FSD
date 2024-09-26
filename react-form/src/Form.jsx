import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    fatherFirstName: '',
    fatherLastName: '',
    motherFirstName: '',
    motherLastName: '',
    gender: 'male',
    nationality: '',
    streetAddress: '',
    city: '',
    country: '',
    mobileNumber: '',
    whyJoin: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="main">
      <h1>College Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Name: </p>
        <input
          type="text"
          name="firstName"
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <p>Date of Birth</p>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
        />
        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <p>Father's Name: </p>
        <input
          type="text"
          name="fatherFirstName"
          placeholder='First Name'
          value={formData.fatherFirstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fatherLastName"
          placeholder='Last Name'
          value={formData.fatherLastName}
          onChange={handleInputChange}
        />
        <p>Mother's Name: </p>
        <input
          type="text"
          name="motherFirstName"
          placeholder='First Name'
          value={formData.motherFirstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="motherLastName"
          placeholder='Last Name'
          value={formData.motherLastName}
          onChange={handleInputChange}
        />
        <p>Gender: </p>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <p>Nationality: </p>
        <input
          type="text"
          name="nationality"
          placeholder='Nationality'
          value={formData.nationality}
          onChange={handleInputChange}
        />
        <p>Home Address: </p>
        <input
          type="text"
          name="streetAddress"
          placeholder='Street Address'
          value={formData.streetAddress}
          onChange={handleInputChange}
        />
        <br/>
        <input
          type="text"
          name="city"
          placeholder='City'
          value={formData.city}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="country"
          placeholder='Country'
          value={formData.country}
          onChange={handleInputChange}
        />
        <p>Mobile Number</p>
        <input
          type="tel"
          name="mobileNumber"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={formData.mobileNumber}
          onChange={handleInputChange}
        />
        <p>In a few sentences, write down why you want to become a student of our College.</p>
        <textarea
          name="whyJoin"
          rows={4}
          cols={40}
          value={formData.whyJoin}
          onChange={handleInputChange}
        />
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;