import React, {useState, useContext} from 'react';
import styled from 'styled-components/native';

import {ChatContext} from '~/Context/ChatContext';
import Button from '~/Components/Button';

const Container = styled.View`
  flex-direction: row;
  background-color: #ff0;
`;

const Input = styled.TextInput`
  flex: 3;
  height: 45px;
  background-color: #fff;
  padding: 0px 8px;
`;

interface Props {}

const AddChatBox = ({}: Props) => {
  const {addChatList, clearChatList} = useContext<IChatContext>(ChatContext);
  const [text, setText] = useState<string>('');

  const save = (data: string) => {
    if (data) {
      addChatList(data);
    }
    setText('');
  };

  return (
    <Container>
      <Button onPress={() => clearChatList()} version="clear" />
      <Input
        autoFocus={true}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="새로운 말을 적어주세요"
        returnKeyType="done"
        clearButtonMode="always"
        onChangeText={(text) => setText(text)}
        value={text}
        multiline={true}
      />
      <Button onPress={() => save(text)} version="add" />
    </Container>
  );
};

export default AddChatBox;
