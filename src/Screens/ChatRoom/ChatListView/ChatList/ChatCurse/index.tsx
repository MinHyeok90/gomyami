import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  align-items: center;
`;

const Bubble = styled.View`
  flex-direction: row;
  background-color: #fff;
  max-width: 66%;
  padding: 8px 16px;
  border-radius: 8px;
  align-items: center;
`;

const Label = styled.Text`
`;

interface Props {
  text: string;
}

const ChatCurse = ({text}: Props) => {
  return (
    <Container>
      <Bubble>
        <Label selectable={true}>{text}</Label>
      </Bubble>
    </Container>
  );
};

export default ChatCurse;
