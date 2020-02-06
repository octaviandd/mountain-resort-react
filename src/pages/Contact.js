/** @format */

import React from "react";
import Bounce from "react-reveal/Bounce";

export default function Contact() {
  return (
    <div className="contact-background">
      <section className="contact">
        <Bounce left>
          <div>
            <h3>Contact Us</h3>
            <form className="contact-form">
              <div className="contact-form-center">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" placeholder="Bob"></input>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" placeholder="Ross"></input>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="
            user@dns.com"
                ></input>
                <label htmlFor="textarea">Message</label>
                <textarea rows="7" cols="40"></textarea>
                <input type="submit" value="Submit"></input>
              </div>
            </form>
          </div>
        </Bounce>
      </section>
    </div>
  );
}
