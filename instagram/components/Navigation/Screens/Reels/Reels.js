import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from './ReelsComponent';
export default function Reels() {
  const windowwidth = Dimensions.get('window').width;
  const windowheight = Dimensions.get('window').height;
  return (
    <View
      style={{
        width: windowwidth,
        height: windowheight,
        backgroundColor: '#000',
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Reels
        </Text>
        <Feather name="camera" style={{fontSize: 25, color: '#fff'}} />
      </View>
      <ReelsComponent />
    </View>
  );
}

const styles = StyleSheet.create({});
