import React from "react";
import styled from "styled-components";
import Title from "./Title";
import placeholder from "assets/placeholder.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { portfolioAnimation } from "animations";
import Button from "./Button";

// images
import NorrisMulusa from "assets/Mulusa Norris on stage.jpg";
import NorrisMulusa1 from "assets/Mulusa Norris.jpg";
import NorrisMulusa2 from "assets/Norris Mulusa 2.jpg";
import NorrisMulusa3 from "assets/Norris Mulusa 3.jpg";
import NorrisMulusa4 from "assets/Norris Mulusa 4.jpeg";
import NorrisMulusa5 from "assets/Norris Mulusa 5.jpeg";
import NorrisMulusa6 from "assets/Norris Mulusa 6.jpeg";
import NorrisMulusa7 from "assets/Norris Mulusa 7.jpeg";

function Portfolio() {
  const [element, controls] = useScroll();

  return (
    <Section id="portfolio" ref={element}>
      <Title value="Gallery" />
      <div className="portfolio__title">
        <p>Gallery & pictorials</p>
        <h2>These are some of the highlights in my career</h2>
      </div>
      <div className="grid">
        <motion.div
          className="child-one grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          whileInView={{ opacity: 1 }}
        >
          <img src={NorrisMulusa} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-two grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <img src={NorrisMulusa2} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-three grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <img src={NorrisMulusa7} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-four grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <img src={NorrisMulusa5} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-five grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <img src={NorrisMulusa4} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-six grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <img src={NorrisMulusa2} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-seven grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <img src={NorrisMulusa6} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-eight grid-box"
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <img src={NorrisMulusa1} alt="placeholder" />
        </motion.div>
      </div>
      <div className="portfolio-more">
        <span>Interested? </span>
        <Button text="Let's Talk" link="#contact" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding: 2rem 0;
  background-color: var(--secondary-color);
  
  .sideTitle {
    z-index: 2;
    h1 {
      color: white;
    }
  }
  .portfolio__title {
    margin: 6rem 15rem;
    p {
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      font-weight: 500;
      font-size: 1.4rem;
    }
    h2 {
      color: white;
      font-size: 1.6rem;
    }
  }
  .grid {
    padding: 0 15rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "one one two two"
      "one one three four"
      "five six seven seven"
      "eight six seven seven";
    .grid-box {
      height: 13rem;
      width: 100%;
      cursor: pointer;
      overflow: hidden;
      img {
        transition: 0.4s ease-in-out;
        width: 100%;
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
      &:nth-of-type(1) {
        grid-area: one;
        height: 100%;
        z-index: 10;
      }
      &:nth-of-type(2) {
        z-index: 10;
        grid-area: two;
      }
      &:nth-of-type(3) {
        grid-area: three;
      }
      &:nth-of-type(4) {
        grid-area: four;
      }
      &:nth-of-type(5) {
        z-index: 10;
        grid-area: five;
      }
      &:nth-of-type(6) {
        grid-area: six;
        height: 100%;
      }
      &:nth-of-type(7) {
        grid-area: seven;
        height: 100%;
      }
      &:nth-of-type(8) {
        z-index: 10;
        grid-area: eight;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    .portfolio__title {
      margin: 0;
      padding: 0 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }
    .grid {
      padding: 2rem 4rem;
      grid-template-columns: 1fr;
      grid-template-areas:
        "one"
        "two"
        "three"
        "four"
        "five"
        "six"
        "seven"
        "eight";
      .grid-box {
        height: 15rem !important;
      }
    }
  }
  .portfolio-more {
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Portfolio;
