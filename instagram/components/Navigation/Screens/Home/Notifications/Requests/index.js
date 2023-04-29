import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Requests() {
  return (
    <View style={{flexDirection: 'row', columnGap: 10}}>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          width: 40,
          height: 40,
          borderRadius: 100,
        }}>
        <Ionicons name="person-add-outline" size={25} />
      </View>
      <View>
        <Text style={{color: '#000', fontWeight: 600}}>Follow requests</Text>
        <Text>Approve or ignore requests</Text>
      </View>
    </View>
  );
}
