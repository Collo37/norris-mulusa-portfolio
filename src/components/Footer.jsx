import React from "react";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { footerLogoAnimations } from "animations";
import { motion } from "framer-motion";


function Footer() {
  const [element, controls] = useScroll();

  return (
    <Foot ref={element}>
      <motion.div
        className="footer__social__icons"
        animate={controls}
        variants={footerLogoAnimations}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        <a href="https://twitter.com/norris_comedian">Twitter</a>
        <a href="https://www.facebook.com/norriskenya">Facebook</a>
        <a href="https://www.youtube.com/channel/UCPgdUA6RvP8Yx1VpypJzCgg">YouTube</a>
      </motion.div>
    </Foot>
  );
}

const Foot = styled.footer`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  .footer__social__icons {
    display: flex;
    gap: 2rem;
    a {
      color: white;
      text-decoration: none;
    }
    svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

export default Footer;
