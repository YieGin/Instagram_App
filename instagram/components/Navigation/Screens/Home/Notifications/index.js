import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Requests from './Requests';
import Navbar from './Navbar';
import Add_List from './Add/Add_List';
import Earilier_List from './Earilier/Earilier_List';
export default function Notifications({navigation}) {
  return (
    <View style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 150}}>
      <Navbar navigation={navigation} />
      <ScrollView>
        <Requests />
        <Text style={styles.Text}>This Month</Text>
        <Add_List />
        <Text style={styles.Text}>Earlier</Text>
        <Earilier_List />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 700,
    color: '#000',
  },
});
