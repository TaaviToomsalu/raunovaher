import React from "react";

const ContactForm = ({ onSubmit, formData, onChange, status }) => {
    return (
      <div className='kontakt'>
        <form id="contact-form" onSubmit={onSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
          />
  
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
          />
  
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onChange}
            rows="4"
            required
          />
  
          <button type="submit">Send</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    );
  };


  export default ContactForm