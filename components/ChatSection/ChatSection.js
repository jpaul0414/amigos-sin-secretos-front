import React from "react";
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

const ChatSection = () => {
  return (
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
  );
};

export default ChatSection;
