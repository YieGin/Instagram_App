import {StyleSheet, Text, Image, View, Pressable} from 'react-native';
import React from 'react';
import Logo from '../../../../../assets/svgs/logo.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Messenger from '../../../../../assets/svgs/messenger.svg';
export default function Home_Navbar({navigation}) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          height: 45,
          paddingLeft: 10,
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <Logo size={30} color={'#000'} />
        <MaterialIcons name="keyboard-arrow-down" size={20} color="#000" />
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 'auto',
            columnGap: 20,
            justifyContent: 'center',
          }}>
          <Pressable onPress={() => navigation.navigate('Notifications')}>
            <AntDesign
              style={{marginTop: 3}}
              name="hearto"
              size={23}
              color="#000"
            />
          </Pressable>
          <Messenger />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
