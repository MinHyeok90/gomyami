import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ChatRoom from '~/Screens/ChatRoom';
import RoomList from './RoomList';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RoomList">
        <Stack.Screen
          name="RoomList"
          component={RoomList}
          options={{
            title: '대화방 목록',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={{
            title: '고먐미',
            headerTintColor: '#faa',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
