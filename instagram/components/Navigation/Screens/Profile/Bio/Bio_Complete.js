import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Bio_Complete({Card}) {
  return (
    <View style={{paddingLeft: 10, paddingTop: 20}}>
      {Card &&
        Card.map((item, index) => (
          <View
            key={index}
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'rgb(212 212 212)',
              width: 200,
              padding: 20,
              height: 180,
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
              <Image style={{width: 20, height: 20}} source={item[0]} />
              <View
                style={{position: 'absolute', right: -5, bottom: 0, zIndex: 1}}>
                <AntDesign
                  name="checkcircle"
                  size={18}
                  color={'rgb(21 128 61)'}
                />
              </View>
            </View>
            <Text style={{color: 'black', fontWeight: 700, marginTop: 5}}>
              {item[1]}
            </Text>
            <Text
              style={{
                fontSize: 13,
                textAlign: 'center',
              }}>
              {item[2]}
            </Text>
            <TouchableOpacity
              style={{
                padding: 5,
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: 'rgb(212 212 212)',
                borderRadius: 5,
                marginTop: 10,
              }}>
              <Text style={{color: '#000', fontWeight: 400}}>{item[3]}</Text>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({});
