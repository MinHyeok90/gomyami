import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as Hangul from 'hangul-js';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const ChatContext = createContext<IChatContext>({
  chatList: [],
  addChatList: (chat: string): void => {},
  clearChatList: (): void => {},
});

const ChatContextProvider = ({children}: Props) => {
  const [chatList, setChatList] = useState<Array<String>>([]);

  const curse = (originText: string) => {
    if (originText === undefined) {
      return '';
    }
    let disAssembledHangul = Hangul.disassemble(originText);
    disAssembledHangul.forEach((item, i) => {
      if (item === 'ㅇ') {
        disAssembledHangul[i] = 'ㅁ';
      }
    });
    return Hangul.assemble(disAssembledHangul);
  };

  const addChatList = (chat: string): void => {
    const list = [...chatList, chat, curse(chat)];
    setChatList(list);
    console.log(chatList);
    console.log(list);
    AsyncStorage.setItem('chatList', JSON.stringify(list));
  };

  const clearChatList = (): void => {
    setChatList([]);
    // console.log(chatList);
    AsyncStorage.clear();
  };

  const initData = async () => {
    try {
      const list = await AsyncStorage.getItem('chatList');
      if (list !== null) {
        setChatList(JSON.parse(list));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <ChatContext.Provider
      value={{
        chatList,
        addChatList,
        clearChatList,
      }}>
      {children}
    </ChatContext.Provider>
  );
};

export {ChatContextProvider, ChatContext};
