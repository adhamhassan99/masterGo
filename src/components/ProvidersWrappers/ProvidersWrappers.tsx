import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

type Props = {
  children: ReactNode;
};

const ProvidersWrappers = ({children}: Props) => {
  return (
    // <Provider store={null}>
    <NavigationContainer>{children}</NavigationContainer>
    // </Provider>
  );
};

export default ProvidersWrappers;
