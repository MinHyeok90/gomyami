import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  background-color: #fff;
  width: 50%;
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

const ChatCurse = ({text}: Props) => {
  return (
    <Container>
      <Label selectable={true}>{text}</Label>
    </Container>
  );
};

export default ChatCurse;
