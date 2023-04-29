import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';
import Home_Navbar from './Home_Navbar.js/Home_Navbar';
import Home_Story from './Home_Story';
import Home_text from './Home_List/Home_text';

export default function Home({navigation}) {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <Home_Navbar navigation={navigation} />
      <ScrollView>
        <Home_Story />
        <Home_text />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
