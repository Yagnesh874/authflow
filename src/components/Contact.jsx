import React from "react";
import "../style/contact.css";

const Contact = () => {
  return (
    <>
      <section id="contact" class="section contact">
        <div class="container">
          <h2>Contact Us</h2>
          <div class="contact-content">
            <div class="contact-info">
              <h3>Get in Touch</h3>
              <p>
                <strong>Address:</strong>
                <br />
                123 Business Street
                <br />
                City, State 12345
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                +1 (555) 123-4567
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                hello@modernweb.com
              </p>
              <p>
                <strong>Business Hours:</strong>
                <br />
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>
            <div class="contact-form">
              <form>
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
