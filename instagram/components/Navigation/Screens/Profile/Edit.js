import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Edit() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 20,
        }}>
        <View>
          <Image
            source={require('../../../../assets/Images/1.jpg')}
            style={{width: 70, height: 70, borderRadius: 100}}
          />
          <Text
            style={{
              color: '#000',
              fontWeight: 400,
              marginTop: 5,
              fontSize: 14,
            }}>
            Belamri Islame
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            columnGap: 40,
            marginLeft: 10,
            marginTop: 20,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#000', fontWeight: 800}}>6</Text>
            <Text style={{color: '#000'}}>Posts</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#000', fontWeight: 800}}>98</Text>
            <Text style={{color: '#000'}}>Followers</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#000', fontWeight: 800}}>56</Text>
            <Text style={{color: '#000'}}>Following</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 30,
          paddingTop: 20,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <View
          style={{
            backgroundColor: 'rgb(212 212 212)',
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 5,
          }}>
          <Text style={{color: '#000', fontWeight: 500}}>Edit profile</Text>
        </View>
        <View
          style={{
            backgroundColor: 'rgb(212 212 212)',
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 5,
          }}>
          <Text style={{color: '#000', fontWeight: 500}}>Share profile</Text>
        </View>
        <View
          style={{
            backgroundColor: 'rgb(212 212 212)',
            padding: 7,
            borderRadius: 5,
          }}>
          <Ionicons name="person-add-outline" color="#000" size={15} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
