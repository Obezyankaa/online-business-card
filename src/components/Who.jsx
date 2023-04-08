import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
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
  gap: 0.8rem;
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
  width: 9rem;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Who() {
  return (
    <Section>
      <Container>
        <Left>
          {/* {3d model} */}
        </Left>
        <Right>
          <Title>Lorem ipsum dolor sit amet.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, quaerat?
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
}
