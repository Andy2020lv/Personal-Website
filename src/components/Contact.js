import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_it0s3e8",
        "template_yhtj8ss",
        form.current,
        "3vjEkd_uJ8fXscV-z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <input
            name="user_name"
            id="name"
            className="form-input"
            type="text"
            placeHolder="Name"
          ></input>
          <input
            id="email"
            name="user_email"
            className="form-input"
            type="email"
            placeHolder="Email"
          ></input>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="form-input"
            placeholder="Message"
          ></textarea>
          <button className="button btn-contact" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
