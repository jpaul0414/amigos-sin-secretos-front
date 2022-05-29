import styled from "styled-components";

export const ChatWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChatTitle = styled.h2`
  width: 100%;
  color: #666666;
  font-size: 50px;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 960px) {
    font-size: 30px;
    margin-top: 2rem;
    padding: 0;
  }
`;

export const ChatContainer = styled.form`
  width: 1000px;
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

export const ChatHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

export const ChatOnline = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #5aee41;
  margin: 0 1rem;

  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ChatBody = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ChatFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChatInput = styled.input`
  width: 85%;
  height: 50px;
  background-color: #f8f8f8;
  border: none;
  outline: none;
  padding: 0 1rem;
  font-size: 1.5rem;

  &::placeholder {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 960px) {
    &::placeholder {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    &::placeholder {
      font-size: 0.6rem;
      width: 75%;
    }
  }
`;

export const ChatButton = styled.button`
  width: 10%;
  height: 50px;
  background-color: #f8f8f8;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  color: #7c7c7c;

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    width: 20%;
  }
`;
