import React from 'react';

import {ChatContextProvider} from './Context/ChatContext';
import ChatRoom from '~/Screens/ChatRoom';

const App = () => {
  return (
    <ChatContextProvider>
      <ChatRoom />
    </ChatContextProvider>
  );
};

export default App;
