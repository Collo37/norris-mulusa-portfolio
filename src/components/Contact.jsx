import { useRef } from "react";
import styled from "styled-components";
import Title from "components/Title";
import { contactAnimations } from "animations";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"
import { useScroll } from "./useScroll";

function Contact() {
  const [element, controls] = useScroll();
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm("service_zg6qjyw", "template_dqq6gya", form.current, "-FlNSO4CoqkrATKya")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Message has been sent");
    };

  return (
    <Section id="contact" ref={element} onSubmit={(event) => handleSubmit(event)}>
      <Title value="contact" />
      <motion.div
        className="contact"
        animate={controls}
        variants={contactAnimations}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <div className="contact__title">
          <p>Contact me</p>
          <h2>I'll get back to you as soon as I can</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Do you need my services?</h4>
            <div>
              <p>
                <strong>Email:</strong> mulusanorris123@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +254798658801
              </p>
            </div>
          </div>
          <form className="contact__data__form" ref={form} >
            <input type="text" placeholder="name" ref={name} name="from_name" />
            <input type="email" placeholder="email" ref={email} name="from_email"  />
            <textarea placeholder="message" ref={message} name="message" ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </motion.div>
    </Section>
  );
}

const Section= styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 23rem;
    &__title {
      margin: 6rem 0;
      p {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);
      }
      h2 {
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          letter-spacing: 0.1rem;
          text-align: justify;
        }
      }

      &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--primary-color);
          width: 100%;
          color: var(--primary-color);
          letter-spacing: 0.2rem;
          padding-bottom: 0.7rem;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: var(--primary-color);
            letter-spacing: 0.4rem;
          }
        }
        textarea {
          width: 100% !important;
          height: 50%;

          resize: none;
        }
        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 4rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background-color: var(--secondary-color);
            color: var(--primary-color);
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      margin: 1rem;
      padding: 0 1rem;
      &__title {
        margin: 0;
        text-align: center;
        p {
          font-size: 2rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &__data {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
        &__form {
          input {
          }
          button {
            height: 6rem;
          }
        }
      }
    }
  }
`;

export default Contact;
