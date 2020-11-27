import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 5;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  background-color: #333333;
`;

const InputField = styled.TextInput`
  flex: 1px;
  color: #ffffff;
`;

interface Props {
  placeholder: string;
  keyboardType?: 'default';
  secureTextEntry?: boolean;
  style?: Object;
  clearMode?: boolean;
  onChangeText?: (text: string) => void;
}

const Input = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  clearMode,
  onChangeText,
}: Props) => {
  return (
    <Container>
      <InputField
        selectionColor="#aa0000"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType ? keyboardType : 'default'}
        autoCapitalize="none"
        autoCorrect={false}
        multiline={true}
        allowFontScaling={false}
        placeholderTextColor="#aaaaaa"
        placeholder={placeholder}
        clearButtonMode={clearMode ? 'while-editing' : 'never'}
        onChangeText={onChangeText} />
    </Container>
  );
};

export default Input;
