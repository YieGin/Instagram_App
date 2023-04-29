import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
export default function Pfp_Navbar() {
  return (
    <View
      style={{
        flexDirection: 'row',
        columnGap: 5,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderBottomColor: 'rgb(212 212 216)',
      }}>
      <Ionicons name="ios-lock-closed-outline" color="#000" size={20} />
      <Text style={{color: '#000', fontWeight: 700, fontSize: 18}}>
        belamri_yie
      </Text>
      <MaterialIcons name="keyboard-arrow-down" size={24} />
      <View
        style={{
          marginLeft: 'auto',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 10,
        }}>
        <AntDesign name="plussquareo" size={24} color="#000" />
        <Entypo name="menu" color="#000" size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
