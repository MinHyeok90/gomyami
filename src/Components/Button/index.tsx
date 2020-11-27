import React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  flex: 2;
  height: 30%;
  border-radius: 4px;
  justify-content: center;
  border: 1px;
  border-color: #000000;
  background-color: #d36eec;
`;

const Lable = styled.Text`
  color: #ffffff;
  text-align: center;
`;

interface Props {
  label: string;
  style?: Object;
  onPress?: () => void;
}

const Button = ({label, style, onPress}: Props) => {
  return (
    <StyledButton style={style} onPress={onPress}>
      <Lable>{label}</Lable>
    </StyledButton>
  );
};

export default Button;
