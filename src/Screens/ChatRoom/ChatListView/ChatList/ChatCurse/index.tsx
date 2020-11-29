import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding-bottom: 8px;
  padding-left: 5px
  align-items: flex-start;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  background-color: #a00;
  border-radius: 3px;
`;

const ContentsContainer = styled.View`
  max-width: 60%;
`;

const Name = styled.Text`
  font-size: 15px;
  margin-left: 10px;
  margin-top: -4px;
  padding-bottom: 3px;
`;

const BracketContainer = styled.View`
  flex-direction: row;
`;

const Bracket = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: -7px;
`;

const Bubble = styled.View`
  background-color: #fff;
  min-height: 40px;
  padding: 8px 12px;  
`;

const Label = styled.Text`
`;

const Time = styled.Text`
  font-size: 10px;
  align-self: flex-end;
  margin-left: 7px;
`;

interface Props {
  text: string;
}

const ChatCurse = ({text}: Props) => {
  return (
    <Container>
      <ProfileImage source={require('~/Assets/Images/sqaure_cat.jpg')} />
      <ContentsContainer>
        <Name>고먐미</Name>
        <BracketContainer>
          <Bracket source={require('~/Assets/Images/cat_say.png')} />
          <Bubble>
            <Label selectable={true}>{text}</Label>
          </Bubble>
          <Time>오후 3:52</Time>
        </BracketContainer>
      </ContentsContainer>
    </Container>
  );
};

export default ChatCurse;
