import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Home_Story() {
  const {product} = useSelector(state => state.user);
  return (
    <View style={{flexDirection: 'row', paddingLeft: 10}}>
      <FlatList
        horizontal
        keyExtractor={(item, index) => index.toString()}
        data={product}
        ListHeaderComponent={
          <View style={{}}>
            <View
              style={{
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 50,
                marginRight: 10,
                width: 69,
                height: 69,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="cover"
                source={require('../../../../../assets/Images/1.jpg')}
                style={{width: 60, height: 60, borderRadius: 50}}
              />
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'rgb(2 132 199)',
                  borderRadius: 10,
                  right: 5,
                  bottom: 5,
                  borderWidth: 1,
                  borderColor: 'white',
                  width: 17,
                  height: 17,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="plus" size={14} color="white" />
              </View>
            </View>
            <Text
              style={{
                marginTop: 5,
                color: '#000',
                fontWeight: 400,
                fontSize: 12,
              }}>
              Your story
            </Text>
          </View>
        }
        renderItem={({item}) => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <View
              style={{
                marginRight: 10,
                borderWidth: 2,
                borderColor: 'red',
                borderRadius: 50,
                width: 69,
                height: 69,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="cover"
                source={{uri: item.Image}}
                style={{width: 60, height: 60, borderRadius: 50}}
              />
            </View>
            <Text
              numberOfLines={1}
              style={{
                width: 50,
                marginTop: 5,
                color: '#000',
                fontWeight: 400,
                fontSize: 12,
              }}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
