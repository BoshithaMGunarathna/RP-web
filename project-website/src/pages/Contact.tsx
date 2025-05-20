import React from 'react';

const Contact: React.FC = () => {
    return (
        <div>
      <h1>Contact Us</h1>
      <p>Email: teamresearch@example.com</p>
      <p>Phone: +94 77 123 4567</p>
      <form>
        <input type="text" placeholder="Your Name" required /><br />
        <input type="email" placeholder="Your Email" required /><br />
        <textarea placeholder="Your Message" required></textarea><br />
        <button type="submit">Send</button>
      </form>
    </div>
    );
};

export default Contact;