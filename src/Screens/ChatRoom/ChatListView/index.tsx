import React from 'react';
import Styled from 'styled-components/native';

import ChatList from './ChatList';

const Container = Styled.KeyboardAvoidingView`
    flex: 1;    
`;

interface Props {}

const ChatListView = ({}: Props) => {
  return (
    <Container>
      <ChatList />
    </Container>
  );
};

export default ChatListView;
