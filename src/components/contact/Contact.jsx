import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Fade, Slide } from "@mui/material";

const Contact = ({ innerRef }) => {
  const form = useRef();


  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <Slide
              direction="right"
              in={innerRef.contactVisible}
              style={{ transformOrigin: "0 0 0" }}
              {...(innerRef.contactVisible ? { timeout: 500 } : {})}
            >
              <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>

                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">
                  r.rizky.sy@gmail.com
                </span>

                <a
                  href="mailto:r.rizky.sy@gmail.com"
                  className="contact__button"
                >
                  Write me <i className="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </Slide>

            <Slide
              direction="right"
              in={innerRef.contactVisible}
              style={{ transformOrigin: "0 0 0" }}
              {...(innerRef.contactVisible ? { timeout: 1000 } : {})}
            >
              <div className="contact__card">
                <i className="bx bxl-whatsapp contact__card-icon"></i>

                <h3 className="contact__card-title">Whatsapp</h3>
                <span className="contact__card-data">089693621456</span>

                <a
                  href="https://api.whatsapp.com/send?phone=6289693621456"
                  className="contact__button"
                >
                  Write me <i className="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </Slide>
          </div>
        </div>

        <div ref={innerRef.contactRef} className="contact__content">
        </div>
      </div>
    </section>
  );
};

export default Contact;
