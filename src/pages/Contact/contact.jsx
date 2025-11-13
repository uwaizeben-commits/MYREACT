import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Get in touch with us!</p>

        <form action="">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
export default Contact