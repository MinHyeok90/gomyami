import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

import {ChatContext} from '~/Context/ChatContext';

import EmptyItem from './EmptyItem';
import ChatItem from './ChatItem';

const Container = styled(FlatList)``;

interface Props {}

const ChatList = ({}: Props) => {
  const {chatList} = useContext<IChatContext>(ChatContext);

  return (
    <Container
      data={chatList}
      keyExtractor={(item, index) => {
        return `chat-${index}`;
      }}
      ListEmptyComponent={<EmptyItem />}
      renderItem={({item, index}) => <ChatItem text={item as string} />}
      contentContainerStyle={chatList.length === 0 && {flex: 1}}
    />
  );
};

export default ChatList;
