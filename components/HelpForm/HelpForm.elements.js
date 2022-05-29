import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.form`
  width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 3rem;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1), -4px 0px 10px rgba(0, 0, 0, 0.1),
    0px 4px 10px rgba(0, 0, 0, 0.1), 4px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 3rem;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const HelpLabel = styled.label`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  color: #666666;
  margin: 2rem 0;

  &:last-child {
    border-top: 3px solid rgba(0, 0, 0, 0.2);
    padding-top: 1rem;
  }

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;

export const HelpInput = styled.textarea`
  width: 100%;
  height: 150px;
  border: none;
  outline: none;
  background-color: #f8f8f8;
  text-align: top;
  font-size: 1rem;
  font-family: inherit;
  padding: 1rem;
  resize: none;

  &::placeholder {
    font-size: 1rem;
  }
`;

export const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 3rem;

  @media screen and (max-width: 960px) {
    gap: 1rem;
  }
`;

export const HelpRadio = styled.input`
  margin: 0 0.5rem;

  @media screen and (max-width: 960px) {
    margin: 0;
  }
`;

export const RadioLabel = styled.label`
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid #adacac;
  border-radius: 15px;
  background-color: #f8f8f8;
  padding: 0.5rem 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:visited {
    background-color: #0070b8;
  }
`;

export const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 350px;
  height: 50px;
  background-color: #0070b8;
  color: #ffff;
  font-size: 1rem;
  border: 2px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #ffff;
    border: 2px solid #0070b8;
    color: #0070b8;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 960px) {
    max-width: 200px;
    margin: 2rem 0;
  }
`;
