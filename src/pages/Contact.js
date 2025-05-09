import React, { useState } from 'react';
import './css/Contact.css'; // Optional: style it if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can send the formData to a backend or an email API here
    alert('Thank you! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      message: '',
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name (if any)"
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="projectType"
          placeholder="Type of Project (e.g., Website, Mobile App)"
          value={formData.projectType}
          onChange={handleChange}
        />

        <input
          type="text"
          name="budget"
          placeholder="Estimated Budget"
          value={formData.budget}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Describe your requirements..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
