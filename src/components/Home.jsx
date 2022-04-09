import React from "react";
import styled from "styled-components";
import background from "../assets/background.png";
import image from "../assets/home.png";
import Button from "./Button";
import { RiGroupLine } from "react-icons/ri";
export default function Home() {
  return (
    <Section id="home">
      <div className="text">
        <h1>
          <span className="highlight">Milk</span>cat is the next big cat on the chain
        </h1>
        <p>
        With exciting rewards, roadmap and resources it is on track to be the pumped rocket on  milkomeda.
        <span className="highlight"> Milkomeda </span> will scream milk cat until it reaches heaven and beyond c

        </p>
        {/* <Button text="Join Our Discord" icon={<RiGroupLine />} /> */}
      </div>
      <div className="image">
        {/* <img src={image} alt="Home Image" /> */}
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80vh;
  align-items: center;
  .text {
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .highlight {
      color: var(--primary-color);
    }
    h1 {
      font-size: 4.8vw;
    }
    p {
      font-size: 1.5vw;
    }
  }
  .image {
    img {
      width: 80%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
    text-align: center;
    margin: 0 1rem;
    .image {
      img {
        width: 100%;
      }
    }
    .text {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 8vw;
      }
      p {
        font-size: 5vw;
      }
    }
  }
`;
