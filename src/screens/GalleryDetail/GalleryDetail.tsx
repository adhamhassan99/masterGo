import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

type Props = {
  route: any;
};

const GalleryDetail = (props: Props) => {
  console.log(props.route.params.url);
  return (
    <View style={{}}>
      <ImageBackground
        source={props.route.params.url}
        style={{height: '100%', width: '100%', marginTop: 'auto'}}
        resizeMode="contain"
      />
    </View>
  );
};

export default GalleryDetail;
