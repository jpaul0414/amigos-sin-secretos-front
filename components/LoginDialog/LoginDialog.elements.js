import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const LoginTitle = styled.h2`
  width: 100%;
  font-weight: 700;
  font-size: 62px;
  color: #393939;
  margin: 0;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const FormTitle = styled.h4`
  width: 100%;
  font-weight: 700;
  font-size: 30px;
  color: #393939;
  margin: 0;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 5px;
  background: rgba(248, 248, 248, 0.61);
  margin: 20px 0;
  padding: 0 1rem;

  &::placeholder {
    color: #203060;
    font-weight: 400;
    font-size: 15px;
  }

  &:focus {
    border: 1px solid #203060;
  }
`;

export const InputCheckbox = styled.input`
  margin: 0 0.5rem;
  align-self: flex-start;
`;

export const CheckboxLabel = styled.label`
  font-weight: 300;
  font-size: 14px;
  margin: 0;
  align-self: flex-start;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #0070b8;
  color: #ffff;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-top: 40px;

  &:hover {
    background-color: #ffff;
    border: 2px solid #0070b8;
    color: #0070b8;
    transition: all 0.5s ease;
  }
`;
