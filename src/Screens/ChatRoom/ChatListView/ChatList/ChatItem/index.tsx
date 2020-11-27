import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  background-color: #fff;
  margin: 4px 16px;
  padding: 8px 16px;
  border-radius: 8px;
  align-items: center;
`;

const Label = styled.Text`
  flex: 1;
`;

interface Props {
  text: string;
}

const ChatItem = ({text}: Props) => {
  return (
    <Container>
      <Label>{text}</Label>
    </Container>
  );
};

export default ChatItem;
