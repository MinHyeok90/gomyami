interface IChatContext {
  chatList: Array<String>;
  addChatList: (chat: string) => void;
  clearChatList: () => void;
}
