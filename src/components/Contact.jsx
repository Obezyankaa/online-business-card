import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

export default function Contact() {

  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const handlerSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cy5tc04",
        "template_xba0kfp",
        ref.current,
        "AeP92vlqKaHdYj9Ua"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          ref.current[0].value = '';
          ref.current[1].value = '';
          ref.current[2].value = '';
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
    );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handlerSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name"></Input>
            <Input placeholder="Email" name="email"></Input>
            <TextArea placeholder="Write your message" name="message" rows={10}></TextArea>
            <Button type="submit">Send</Button>
            {success && 
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, architecto :)"
            }
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
}
