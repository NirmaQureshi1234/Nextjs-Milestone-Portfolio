"use client";

import Nav from "../components/Navbar";
import Foot from "../components/Footer"; 
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData); 
    setSubmitted(true);
  };

  return (
    <div>
      <Nav />
      <section className="section">
        <div id="contact">
          <h1>Contact Me</h1>
          {submitted ? (
            <p>Thank you! Your message has been sent.</p>
          ) : (
            <div className="form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name:</label>
                <br />
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <br />
                <label htmlFor="message">Message:</label>
                <br />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Feedback.."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <br />
                <button id="button" type="submit">Send Message</button>
              </form>
            </div>
          )}
        </div>
      </section>
      <Foot /> 
    </div>
  );
};

export default Contact;
