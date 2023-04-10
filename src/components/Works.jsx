import React, { useState } from 'react'
import styled from 'styled-components';
import Development from './Development';
import ProductDesign from './ProductDesign';
import WebDesing from './WebDesing';

const data = [
  "Web Design",
  "Development",
  "Photochoper",
  "Product",
  "Social Media",
];


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;


export default function Works() {

  const [work, setWork] = useState("Web Design");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((el) => (
              <ListItem key={el} text={el} onClick={()=>setWork(el)}>
                {el}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>{work === "Web Design" ? (<WebDesing />) : work === "Development" ? ( <Development />) : (<ProductDesign/>)}</Right>
      </Container>
    </Section>
  );
}
