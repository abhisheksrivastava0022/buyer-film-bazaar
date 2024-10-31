import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendContactForm } from '../store/actions/homeActions';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.home);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContactForm(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <button type="submit" disabled={loading}>Send</button>
      {error && <p>Error: {error}</p>}
    </form>
  );
};

export default ContactForm;
