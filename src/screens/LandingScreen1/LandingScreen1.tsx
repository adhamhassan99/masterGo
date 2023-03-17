import {View, Text, Image, ImageProps} from 'react-native';
import React from 'react';
import {styles} from './LandingScreen1.styles';

type props = {
  text1: string;
  text2: string;
  imagePath: ImageProps;
  subText: string;
};

const LandingScreen1 = ({text1, text2, imagePath, subText}: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>{text1}</Text>
        <Text style={styles.mainText}>{text2}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={imagePath} />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>{subText}</Text>
      </View>
    </View>
  );
};

export default LandingScreen1;
