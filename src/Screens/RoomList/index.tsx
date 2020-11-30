import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Contianer = styled.KeyboardAvoidingView`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #aaa;
`;

const RoomContainer = styled.TouchableOpacity`
  flex-direction: row;
  height: 80px;
  background-color: #faa;
`;

const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
  margin: 8px 8px;
  background-color: #a00;
  border-radius: 3px;
`;

const RoomTitle = styled.Text`
  font-size: 20px;
  margin: 8px;
`;

interface Props {}

const RoomList = ({}) => {
  const navigation = useNavigation();
  return (
    <Contianer>
      <RoomContainer onPress={() => navigation.navigate('ChatRoom')}>
        <ProfileImage source={require('~/Assets/Images/sqaure_cat.jpg')} />
        <RoomTitle>고먐미방</RoomTitle>
      </RoomContainer>
    </Contianer>
  );
};

export default RoomList;
