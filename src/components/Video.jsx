import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { videoAnimations } from "animations";
import ReactPlayer from "react-player";

function Video() {
  return (
    <Section>
      <motion.div
        className="video"
        variants={videoAnimations}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        whileInView={{ opacity: 1 }}
      >
        <ReactPlayer url="https://youtu.be/nmmI8uLXVJk" />
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background-color: #fc7a1e;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .video {
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    height: 100%;
    padding: 6rem 2rem;
  }
`;

export default Video;
