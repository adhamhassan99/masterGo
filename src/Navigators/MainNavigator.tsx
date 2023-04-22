import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding/Onboarding';
import GalleryHome from '../screens/GalleryHome/GalleryHome';
import GalleryDetail from '../screens/GalleryDetail/GalleryDetail';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen
        options={{headerShown: true, title: 'Gallery Example'}}
        name="galleryDemo"
        component={GalleryHome}
      />
      <MainStack.Screen
        name="GalleryDetail"
        component={GalleryDetail}
        options={{headerShown: true, title: 'Back to Gallery'}}
      />
      <MainStack.Screen name="landing1" component={Onboarding} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
