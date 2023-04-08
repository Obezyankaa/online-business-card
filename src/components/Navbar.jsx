import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.95rem 0rem;
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`
const Logo = styled.img`
    height: 3rem;
`
const List = styled.ul`
    display: flex;
    gap: 1.2rem;
    list-style: none;
`;
const ListItem = styled.li`
    cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
`;

const Icon = styled.img`
    width: 1.1rem;
    cursor: pointer;
`;

const Button = styled.button`
    width: 8rem;
    padding: 0.80rem;
    background-color: #a041ad;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer; 
`;

export default function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Stydio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
                  <Icon src="./img/search.png" />
                  <Button>Click</Button>
        </Icons>
      </Container>
    </Section>
  );
}
