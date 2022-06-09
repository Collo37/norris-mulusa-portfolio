import React, { useState } from "react";
import placeholder from "assets/placeholder.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { testimonialsAnimation } from "animations";
import styled from "styled-components";
export default function Testimonials() {
  const [element, controls] = useScroll();

  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      role: "Full stack web developer",
      name: "Collins Oduor",
      review:
        "A very interesting colleague to have around. Ready to help and even more ready to guide.",
    },
    {
      role: "Communication Expert",
      name: "Bushra Anne",
      review:
        "One of the greatest comedians I've ever met",
    },
    {
      role: "Student",
      name: "Maryanne",
      review:
        "An amazing teacher. Always went the extra mile with us. He went out of his way to ensure that we had the best instruction possible",
    },
  ];
  return (
    <Section ref={element}>
      <div className="container">
        <motion.div
          className="testimonials"
          variants={testimonialsAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          whileInView={{ opacity: 1 }}
        >
          {testimonials.map((testimonial, index) => {
            return (
              <div
                className={`testimonial ${
                  selected === index ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className="image">
                  <div className="circle1"></div>
                  <div className="circle2">
                    <img src={placeholder} alt="placeholder" />
                  </div>
                </div>
                <div className="title-container">
                  <span className="role">{testimonial.role}</span>
                  <h3 className="title">{testimonial.name}</h3>
                </div>
                <p className="description">{testimonial.review}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          className="controls"
          variants={testimonialsAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          <button
            className={selected === 0 ? "active" : ""}
            onClick={() => {
              setSelected(0);
            }}
          ></button>
          <button
            className={selected === 1 ? "active" : ""}
            onClick={() => setSelected(1)}
          ></button>
          <button
            className={selected === 2 ? "active" : ""}
            onClick={() => setSelected(2)}
          ></button>
        </motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;
  .container {
    min-height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .testimonials {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 30%;

      .testimonial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        .image {
          position: relative;
          .circle1 {
            position: absolute;
            left: -0.7rem;
            top: -0.7rem;
            height: 10rem;
            width: 10rem;
            border: 0.2rem solid white;
            border-radius: 10rem;
          }
          .circle2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10rem;
            width: 10rem;
            border-radius: 10rem;
            background-color: #8860e6b0;
          }
        }
      }
      .hidden {
        display: none;
      }
      color: white;
      .role {
        color: var(--secondary-color);
      }
      .description {
        height: 8rem;
      }
    }
    .controls {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: var(--secondary-color);
        border: 0.1rem solid transparent;
        cursor: pointer;
      }
      .active {
        background-color: transparent;
        border: 0.1rem solid var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    .container {
      padding: 4rem 0;
      .testimonials {
        width: 80%;
        .testimonial {
          .description {
            height: 18rem;
          }
        }
      }
    }
  }
`;
