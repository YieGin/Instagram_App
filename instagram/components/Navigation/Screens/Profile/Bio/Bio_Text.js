import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Message from '../../../../../assets/svgs/message';
export default function Bio_Text() {
  return (
    <View style={{paddingLeft: 10, paddingTop: 20}}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: 'rgb(212 212 212)',
          width: 200,
          height: 180,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'rgb(163 163 163)',
          }}>
          <AntDesign name="message1" size={25} color={'rgb(163 163 163)'} />
        </View>
        <Text style={{color: 'black', fontWeight: 700, marginTop: 5}}>
          Add bio
        </Text>
        <Text
          style={{
            fontSize: 13,
            textAlign: 'center',
          }}>
          Tell your followers a little bit about yourself
        </Text>
        <TouchableOpacity
          style={{
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: 'rgb(3 105 161)',
            borderRadius: 5,
            marginTop: 10,
          }}>
          <Text style={{color: '#fff', fontWeight: 700}}>Add bio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
