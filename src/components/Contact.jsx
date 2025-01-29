import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../style/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Slanje...");

    // Get environment variables using Vite's import.meta.env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check for missing environment variables
    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing environment variables!");
      setStatus("Error: Missing environment variables.");
      return;
    }

    try {
      const response = await emailjs.send(
        serviceId, // Service ID from .env
        templateId, // Template ID from .env
        {
          user_name: formData.fullName,
          user_email: formData.email,
          message: formData.message,
        },
        publicKey // Public Key from .env
      );

      if (response.status === 200) {
        setStatus("Poruka je poslana!");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        setStatus("Molimo pokušajte opet.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-form">
      <h2>Kontaktirajte nas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Ime i Prezime</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Adresa</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Poruka</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Pošalji poruku</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default Contact;
