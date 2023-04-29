import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Edit from './Edit';
import Heghlights from './Highlights';
import Pfp_Navbar from './Pfp_Navbar';
import Posts from './Post/Posts';
import Bio_Text from './Bio/Bio_Text';
import Bio_List from './Bio/Bio_List';
export default function Profile() {
  return (
    <View style={{flex: 1}}>
      <Pfp_Navbar />
      <ScrollView>
        <Edit />
        <Heghlights />
        <View style={{marginTop: 20, paddingBottom: 100}}>
          <Posts />
          <Bio_List />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
