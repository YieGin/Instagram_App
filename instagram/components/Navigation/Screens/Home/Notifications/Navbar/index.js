import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Navbar({navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        columnGap: 20,
        paddingTop: 10,
        paddingBottom: 20,
      }}>
      <Pressable onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} color="black" />
      </Pressable>
      <Text style={{fontWeight: 700, color: '#000', fontSize: 18}}>
        Notifications
      </Text>
    </View>
  );
}
