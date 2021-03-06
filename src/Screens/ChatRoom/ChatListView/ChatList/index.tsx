import React, {useContext, useRef} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

import {ChatContext} from '~/Context/ChatContext';

import EmptyItem from './EmptyItem';
import ChatMe from './ChatMe';
import ChatCurse from './ChatCurse';

interface Props {}

const ChatList = ({}: Props) => {
  const {chatList} = useContext<IChatContext>(ChatContext);
  const refContainer = useRef(null);
  return (
    <FlatList
      scrollsToTop={true}
      snapToAlignment="start"
      data={chatList}
      keyExtractor={(item, index) => {
        return `chat-${index}`;
      }}
      ListEmptyComponent={<EmptyItem />}
      renderItem={({item, index}) => {
        if (index % 2 === 0) {
          return <ChatMe text={item as string} />;
        } else {
          return <ChatCurse text={item as string} />;
        }}}
      ref={refContainer}
      onContentSizeChange={() => refContainer.current.scrollToEnd()}
      contentContainerStyle={chatList.length === 0 && {flex: 1}}
    />
  );
};

export default ChatList;
