import React from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import {
  ChatBody,
  ChatButton,
  ChatContainer,
  ChatFooter,
  ChatHeader,
  ChatInput,
  ChatOnline,
  ChatTitle,
  ChatWrapper,
  HeaderTitle,
} from "./ChatSection.elements";
import { IoSend } from "react-icons/io5";
import LoginWarning from "../LoginWarning/LoginWarning";

const ChatSection = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated && <LoginWarning></LoginWarning>}
      {isAuthenticated && (
        <ChatWrapper>
          <ChatTitle>¿Cómo podemos ayudarte?</ChatTitle>
          <ChatContainer>
            <ChatHeader>
              <ChatOnline></ChatOnline>
              <HeaderTitle>Ayuda en línea</HeaderTitle>
            </ChatHeader>
            <ChatBody></ChatBody>
            <ChatFooter>
              <ChatInput
                type={"text"}
                placeholder={"Cuéntanos tu problema"}
              ></ChatInput>
              <ChatButton>
                <IoSend></IoSend>
              </ChatButton>
            </ChatFooter>
          </ChatContainer>
        </ChatWrapper>
      )}
    </>
  );
};

export default ChatSection;
