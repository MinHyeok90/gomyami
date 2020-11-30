import React from 'react';
import styled from 'styled-components/native';

const Contianer = styled.KeyboardAvoidingView`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: #aaa;
`;

const Room = styled.View`
  flex: 1;
`;

const RoomTitle = styled.Text`
  font-size: 20px;
`;

interface Props {}

const RoomList = ({navigation}) => {
  return (
    <Contianer>
      <Room>
        <RoomTitle onPress={() => navigation.navigate('ChatRoom')}>고먐미방</RoomTitle>
      </Room>
    </Contianer>
  );
};

export default RoomList;
