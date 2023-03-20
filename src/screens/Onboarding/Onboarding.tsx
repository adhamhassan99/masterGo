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
  // {
  //   id: 3,
  //   text1: 'Proven',
  //   text2: 'specialists',
  //   imagePath: require('../../../assets/landing1.png'),
  //   subText: `We check each specialist before he ${'\n'} starts work`,
  // },
  // {
  //   id: 4,
  //   text1: 'Proven',
  //   text2: 'specialists',
  //   imagePath: require('../../../assets/landing1.png'),
  //   subText: `We check each specialist before he ${'\n'} starts work`,
  // },
];

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const scrollRef = useRef<ScrollView | null>(null);

  const handlePress = () => {
    console.log('first', scrollRef);
    scrollRef.current.scrollTo({
      x: -300,
      y: 10,
      animated: true,
    });
  };

  return (
    <View style={{backgroundColor: 'red', width: '100%'}}>
      {/* <FlatList
        ref={scrollRef}
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
      /> */}

      <ScrollView
        ref={scrollRef}
        // pagingEnabled
        horizontal
        contentContainerStyle={{flexGrow: 1}}>
        {stepsIndex.map(item => {
          return (
            <LandingScreen1
              key={item.id}
              text1={item.text1}
              text2={item.text2}
              imagePath={item.imagePath}
              subText={item.subText}
            />
          );
        })}
      </ScrollView>
      <Button title="changeStep" onPress={handlePress} />
    </View>
  );
};

export default Onboarding;
