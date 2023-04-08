import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
   scroll-snap-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
`;

const Title = styled.h1`
    font-size: 5rem;
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.80rem;
`;

const Line = styled.img`
    height: 5px;
`;

const Subtitle = styled.h2`
    color: #ae2baa;
`;

const Desc = styled.p`
    font-size: 1.5rem;
    color: lightblue;
`;

const Button = styled.button`
    background-color: #ae2baa;
    color: white;
    font-weight: 500;
    width: 8rem;
    padding: 0.80rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;


const Right = styled.div`
    flex: 3;
    position: relative;
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
        transform: translateY(20px);
    }
  }
`;


export default function Hero() {
  return (
      <Section>
          <Navbar />
          <Container>
              <Left>
                  <Title>Think. Make. Solve.</Title>
                  <WhatWeDo>
                      <Line src="./img/line.png"/>
                      <Subtitle>What we Do</Subtitle>
                  </WhatWeDo>
                  <Desc>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facilis eos mollitia accusantium beatae quam tenetur neque pariatur, maiores totam.
                  </Desc>
                  <Button>Lear more</Button>
              </Left>
              <Right>
                  {/* {3d model} */}
                  <Img src="./img/moon.png" />
              </Right>
          </Container>
      </Section>
  )
}
