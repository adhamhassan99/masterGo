import {View, Text, Button, ScrollView, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import LandingScreen1 from '../LandingScreen1/LandingScreen1';

const stepsIndex = [
  {
    id: 1,
    text1: 'Proven',
    text2: 'specialists',
    imagePath: require('../../../assets/landing1.png'),
    subText: `We check each specialist before he ${'\n'} starts work`,
  },
  {
    id: 2,
    text1: 'Proven',
    text2: 'specialists',
    imagePath: require('../../../assets/landing1.png'),
    subText: `We check each specialist before he ${'\n'} starts work`,
  },
  {
    id: 3,
    text1: 'Proven',
    text2: 'specialists',
    imagePath: require('../../../assets/landing1.png'),
    subText: `We check each specialist before he ${'\n'} starts work`,
  },
  {
    id: 4,
    text1: 'Proven',
    text2: 'specialists',
    imagePath: require('../../../assets/landing1.png'),
    subText: `We check each specialist before he ${'\n'} starts work`,
  },
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
        horizontal
        data={stepsIndex}
        renderItem={({item}) => (
          <LandingScreen1
            text1={item.text1}
            text2={item.text2}
            imagePath={item.imagePath}
            subText={item.subText}
          />
        )}
        pagingEnabled
        bounces={false}
        scrollEventThrottle={32}
      />
      <Button title="changeStep" onPress={handlePress} />
    </View>
  );
};

export default Onboarding;
