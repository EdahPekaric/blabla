import * as React from 'react';
import { Image, Text, View } from 'react-native';

export default function DetailsScreen({route}) {

  const { item } = route.params;

  return(
          <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
            <Image source={{uri: item.Image}} style={{width: 100, height: 100, padding: 10}}/>
            <Text style={{padding: 10, fontSize: 17}}>
              FullName: {item.FullName}
            </Text>
            <Text style={{padding: 10, fontSize: 17}}>
              ShortDescription: {item.ShortDescription}
            </Text>
            <Text style={{padding: 10, fontSize: 17}}>
              Gender: {item.Gender}
            </Text>
            <Text style={{padding: 10, fontSize: 17}}>
              Age: {item.Age}
            </Text>
          </View>
  )
}
