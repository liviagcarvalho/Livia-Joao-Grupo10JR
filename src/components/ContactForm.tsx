import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5rem 1rem;
  background-color: white;
`;

const Container = styled.div`
  width: 1018px;
  height: 580px;
  background-color: rgba(29, 49, 31, 0.1);
  border: 1px solid #1d311f;
  border-radius: 30px;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h2`
  color: #1d311f;
  font-family: 'Spectral', serif;
  font-weight: 700;
  font-size: 48px;
`;

const Input = styled.input`
  width: 100%;
  background-color: white;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  background-color: white;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  outline: none;
  resize: none;
`;

const ContactSupportForm = () => {
  return (
    <Section>
      <Container>
        <Title>Central de Apoio ao Cliente</Title>
        <Input type="text" placeholder="Digite seu Nome e Sobrenome" />
        <Input type="email" placeholder="Digite seu Email" />
        <TextArea rows={6} placeholder="Nos conte seu problema aqui" />
      </Container>
    </Section>
  );
};

export default ContactSupportForm;
