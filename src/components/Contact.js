import React from "react";

export default function Contact() {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      id="contact"
      className="contact"
    >
      <h1 className="title">Contact</h1>
      <div className="inputs">
        <input
          name="name"
          className="form-input"
          type="text"
          placeHolder="Name"
        ></input>
        <input
          name="email"
          className="form-input"
          type="email"
          placeHolder="Email"
        ></input>
        <textarea
          name="message"
          rows="6"
          className="form-input"
          placeholder="Message"
        ></textarea>
        <button className="button btn-contact" type="submit">
          Send
        </button>
      </div>
    </div>
  );
}
