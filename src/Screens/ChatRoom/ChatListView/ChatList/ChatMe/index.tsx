import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row-reverse;
  width: 100%;
  padding-bottom: 8px;
  padding-right: 8px;
  border-radius: 8px;
  align-items: flex-start;
`;

const Bracket = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: -7px;
  margin-top: 10px;
`;

const Bubble = styled.View`
  background-color: #ff0;
  max-width: 66%;
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 8px;
`;

const Label = styled.Text`
`;

const Time = styled.Text`
  font-size: 10px;
  align-self: flex-end;
  margin-right: 7px;
`;

interface Props {
  text: string;
}

const ChatMe = ({text}: Props) => {
  return (
    <Container>
      <Bracket source={require('~/Assets/Images/i_say.png')} />
      <Bubble>
        <Label selectable={true}>{text}</Label>
      </Bubble>
      <Time>오후 3:53</Time>
    </Container>
  );
};

export default ChatMe;
