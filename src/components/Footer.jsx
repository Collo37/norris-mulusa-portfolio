import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { useScroll } from "./useScroll";
import { footerLogoAnimations } from "animations";
import { motion } from "framer-motion";

import Icon from "./Icon";

function Footer() {
  const [element, controls] = useScroll();

  const visitUrl = (link) => {
    window.open(link);
  }

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
        <Icon clicked={() => visitUrl("https://twitter.com/norris_comedian")}><BsTwitter /></Icon>
        <Icon clicked={() => visitUrl("http://facebook.com")}><BsFacebook /></Icon>
        <Icon clicked={() => visitUrl("https://www.youtube.com/channel/UCPgdUA6RvP8Yx1VpypJzCgg")}><BsYoutube /></Icon>
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
