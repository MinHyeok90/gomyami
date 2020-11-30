import React from 'react';
import {ChatContextProvider} from './Context/ChatContext';
import Navigator from '~/Screens/Navigator';

const App = () => {
  return (
    <ChatContextProvider>
      <Navigator />
    </ChatContextProvider>
  );
};

export default App;
