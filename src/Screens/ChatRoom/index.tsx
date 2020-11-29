import React from 'react';
import styled from 'styled-components/native';

import AddChatBox from './AddChatBox';
import ChatListView from './ChatListView';

const Contianer = styled.KeyboardAvoidingView`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: #aaa;
`;

interface Props {}

const ChatRoom = ({}: Props) => {
  return (
    <Contianer>
      <ChatListView />
      <AddChatBox />
    </Contianer>
  );
};

export default ChatRoom;
