import {
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {galleryImages} from '../../../assets';
import {NavigationProp} from '@react-navigation/native';

type Props = {
  navigation: any;
};
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const GalleryHome = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {galleryImages.map((item, index) => (
          <TouchableOpacity
            style={{
              margin: 4,
            }}
            onPress={() => {
              props.navigation.navigate('GalleryDetail', {url: item.url});
            }}>
            <Image
              key={index}
              source={item.url}
              style={{width: width / 3 - 12, height: height / 3}}
              //   resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default GalleryHome;
