import {View, Text, Button, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import LandingScreen1 from '../LandingScreen1/LandingScreen1';

const stepsIndex = [
  <LandingScreen1 />,
  <LandingScreen1 />,
  <LandingScreen1 />,
  <LandingScreen1 />,
];

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const scrollRef = useRef();

  const handlePress = () => {
    scrollRef?.current?.scrollToIndex(step + 1);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        // ref={scrollRef}
        initialScrollIndex={step}
        contentContainerStyle={{width: '100%'}}
        horizontal
        data={stepsIndex}
        renderItem={(_item, index) => (
          <Text style={{width: '100%', backgroundColor: 'red'}}>
            a 2{index}
          </Text>
        )}
      />
      <Button title="changeStep" onPress={handlePress} />
    </View>
  );
};

export default Onboarding;
