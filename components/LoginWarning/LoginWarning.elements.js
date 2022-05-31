import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
`;

export const WarningTitle = styled.h3`
  width: 100%;
  color: #666666;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 1rem;

  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`;
export const WarningButton = styled.button`
  width: 100%;
  max-width: 160px;
  height: 50px;
  background-color: #0070b8;
  color: #ffff;
  font-size: 1rem;
  border: 2px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #ffff;
    border: 2px solid #0070b8;
    color: #0070b8;
    transition: all 0.5s ease;
  }
`;
