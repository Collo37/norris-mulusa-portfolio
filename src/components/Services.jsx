import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Title from "components/Title";
import { useScroll } from "./useScroll";
import { servicesAnimations } from "animations";
import Button from "./Button";
function Services() {
  const [element, controls] = useScroll();
  const data = [
    {
      id: 1,
      type: "Lecturer",
      text: "Journalism and Mass communication lecturer at Fleming Technical Instutute.",
    },
    {
      id: 2,
      type: "Stand-Up comedian",
      text: "MC and stand-up comedian at pwani laughs comedy show. Comedian of the year 2018 University of Nairobi Mombasa campus open week.",
    },
    {
      id: 3,
      type: "Media Presenter",
      text: "Swahili presenter at VBN Radio and TV, Radio Salaam Mombasa, Bibilia Husema Radio",
    },
  ];

  return (
    <Section id="services" ref={element}>
      <Title value="Work" position="top" />
      <div className="services">
        {data.map((service, index) => {
          return (
            <motion.div
              className="services__service"
              key={service.id}
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >

              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{service.type}</h2>
              </div>
              <p className="services__service__description">{service.text}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="button-container">
      <Button text="Let's Talk" link="#contact" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-item: center;
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 75%;
    margin: 0 4rem;
    margin-top: 10rem;
    gap: 5rem;
    &__service {
      padding: 2rem;
      &:nth-of-type(2) {
        background-color: var(--primary-color);
        .services__service__title {
          span {
            color: white;
          }
        }
        .services__service__description {
          color: white;
        }
      }
      &__image {
        margin-bottom: 3rem;
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--secondary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
  }
  .button-container {
    width: 100%;
    height: 20%;
    max-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
`;

export default Services;
