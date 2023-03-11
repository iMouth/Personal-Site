import React from "react";
import "./Contact.scss";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="contact-container">
        <div className="contact-title">Want to contact me?</div>
        <div className="contact-item">
          <a href="mailto:kelvin.8.kast@gmail.com">kelvin.8.kast@gmail.com</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
