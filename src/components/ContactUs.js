import React from "react";
import "./Contact.css";
const ContactUs = () => {
  return (
    <div id="contact">
      <h1 className="headd">Contact Me</h1>
      <div className="line">
        <div className="u-line"></div>
      </div>

      <div className="contactme">
        <div className="c-left">
          <div className="email">
            <i class="fa-solid fa-envelope"></i>
            <p>Email</p>
            <p>varshiiniiv@gmail.com</p>
            <a href="mailto: pitamdas462@gmail.com" target="_blank">
              Send a Message
            </a>
          </div>
        </div>
        <div className="c-right">
          <form action="https://formspree.io/f/xvonrjag" method="POST">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Full Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <textarea
              name="massage"
              id="text-massage"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <input className="sub" type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
