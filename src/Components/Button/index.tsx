import React from 'react';
import styled from 'styled-components/native';

const Container = styled.KeyboardAvoidingView`
  bottom: 0px;
  justify-content: flex-end;
  padding-left: 10px;
`;

const ButtonContainer = styled.TouchableOpacity`
  box-shadow: 4px 4px 8px #999;
`;

const Icon = styled.Image``;

interface Props {
  onPress?: () => void;
  version: string;
}

const AddButton = ({onPress, version}: Props) => {
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <Icon
          source={
            version === 'add'
              ? require('~/Assets/Images/send.png')
              : require('~/Assets/Images/clear.png')
          }
        />
      </ButtonContainer>
    </Container>
  );
};

export default AddButton;
