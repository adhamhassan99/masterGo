import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './LandingScreen2.styles';

const LandingScreen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Proven</Text>
        <Text style={styles.mainText}>specialists</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={require('../../../assets/landing1.png')} />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          We check each specialist before {'\n'} he starts work
        </Text>
      </View>
    </View>
  );
};

export default LandingScreen1;
