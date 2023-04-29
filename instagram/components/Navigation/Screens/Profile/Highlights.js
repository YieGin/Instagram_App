import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Heghlights() {
  return (
    <View>
      <View
        style={{
          paddingTop: 20,
          paddingLeft: 10,
          paddingRight: 10,
          flexDirection: 'row',
          columnGap: 20,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 65,
              height: 65,
              borderColor: 'rgb(115 115 115)',
              borderWidth: 1,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../../assets/Images/22.jpg')}
              style={{width: 60, height: 60, borderRadius: 100}}
            />
          </View>
          <Text
            style={{
              color: '#000',
              fontWeight: 400,
              marginTop: 5,
              fontSize: 12,
            }}>
            Ä la une
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 65,
              height: 65,
              borderColor: 'rgb(115 115 115)',
              borderWidth: 1,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../../assets/Images/24.jpg')}
              style={{width: 60, height: 60, borderRadius: 100}}
            />
          </View>
          <Text
            style={{
              color: '#000',
              fontWeight: 400,
              marginTop: 5,
              fontSize: 12,
            }}>
            Highlights
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 65,
              height: 65,
              borderColor: '#000',
              borderWidth: 1,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="plus" size={24} color="#000" />
          </View>
          <Text
            style={{
              color: '#000',
              fontWeight: 400,
              marginTop: 5,
              fontSize: 12,
            }}>
            New
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
