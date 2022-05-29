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
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const SectionTtitle = styled.h3`
  width: 100%;
  color: #666666;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 6px solid #0070b8;

  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`;

export const QuestionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #adacac;
  padding: 2rem 0;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const QuestionLabel = styled.label`
  max-width: 800px;
  font-size: 1.5rem;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;

export const QuestionSelect = styled.select`
  width: 400px;
  height: 40px;
  border: none;
  font-size: 1.5rem;
  border-bottom: 3px solid #adacac;
  outline: none;
  cursor: pointer;

  &:focus {
    border-bottom: 3px solid #0070b8;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const QuestionOption = styled.option`
  font-size: 1.5rem;
  padding: 2px;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;

export const TextInput = styled.input`
  width: 400px;
  height: 40px;
  border: none;
  font-size: 1.5rem;
  border-bottom: 3px solid #adacac;
  outline: none;

  &:focus {
    border-bottom: 3px solid #0070b8;
  }

  &::placeholder {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }
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
  margin: 2rem;

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
