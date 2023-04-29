import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Post from '../../../../../assets/svgs/post.svg';
export default function Posts_Navbar() {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#fff',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          borderWidth: 1,
          borderTopColor: '#fff',
          borderLeftColor: '#fff',
          borderRightColor: '#fff',
          borderBottomColor: 'rgb(212 212 212)',
        }}>
        <View>
          <Post style={{width: 50, height: 50}} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
