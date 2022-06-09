import styled from "styled-components";
import { Typewriter } from 'react-simple-typewriter'

import Navbar from "./Navbar";
import Button from "./Button";


import home from "assets/red-bg-1.jpg";
import profileImage from "assets/Norris.png";

export default function Home() {

  return (
    <Section id="home">
      <Navbar />
      <div className="home_info_container">
      <div
        className="home"
      >
        <div className="content">
          <div className="title">
            <h1>Norris Mulusa</h1>
          </div>
          <div className="subTitle">
            <Typewriter words={["Lecturer", "Stand-up-comedian", "Media presenter", "Communication strategist", "FIFA agent"]} loop />
          </div>
            <Button text="Let's talk" link="#contact" />
        </div>
      </div>
      <div
        className="info"
      >
        <div className="profile-image-container">
          <img className="profile-image" src={profileImage} alt="Norris Mulusa" />
        </div>
      </div>

      </div>
    </Section>
  );
}

const Section = styled.section`
  background-image: url(${home});
  bacground-color: "#b42727";
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  .home_info_container {
    padding: 2rem;
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-between;
  }
  .home {
    height: 100%;
    width: 50%;
    .content {
      height: 100%;
      width: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      margin-top: 8rem;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        height: 100px;
        font-size: 1.2rem;
        font-weith: 700;
      }
    }
  }
  .info {
    width: 40%;
    min-width: 250px;
    height: 500px;
    border-radius: 50%;
    background-color: var(--secondary-color);
    overflow: hidden;
    padding: 4rem;
    .profile-image-container {
      background-size: contain;
      .profile-image {
        object-fit: cover;
        object-position: left;
        width: 110%;
        height: 110%;
        transform: scale(1.4);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      z-index: 3;
      width: 100%;
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--secondary-color);
      width: 300px;
      height: 300px;
      .profile-image-container {
        .profile-image{
          object-fit: cover;
          transform: scale(1.6);
          object-position: center;
        }
      }
    }
  }
`;
