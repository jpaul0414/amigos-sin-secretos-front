import styled from "styled-components";
import Image from "next/image";

export const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
  padding: 2rem 0;
  margin-top: 36px;
  box-shadow: ${({ hasShadow }) =>
    hasShadow ? "0px 5px 5px 0px rgba(0, 0, 0, 0.3)" : "none"};

  @media screen and (max-width: 960px) {
    margin-top: 0;
  }
`;

export const LandingMain = styled.main`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    margin: 1rem auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const LandingTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  order: ${({ orderInLine }) => (orderInLine ? orderInLine : "0")};

  @media screen and (max-width: 960px) {
    align-items: center;
  }
`;

export const LandingImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;

  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`;

export const LandingImage = styled(Image)`
  width: 100%;
  height: 700px;
`;

export const LandingTitle = styled.h1`
  font-size: 80px;
  margin: 0;
  color: #393939;

  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const LandingText = styled.p`
  font-size: 1.5rem;
  margin: 2rem 0;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const LandingButton = styled.button`
  width: 100%;
  max-width: 160px;
  height: 50px;
  background-color: #0070b8;
  color: #ffff;
  font-size: 1rem;
  border: 2px solid transparent;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #ffff;
    border: 2px solid #0070b8;
    color: #0070b8;
    transition: all 0.5s ease;
  }
`;
