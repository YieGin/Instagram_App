import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default function Search({navigation}) {
  const {SearchData} = useSelector(state => state.user);
  const DURATION = 400;
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          height: 50,
        }}>
        <View style={{position: 'absolute', zIndex: 1, top: 14, left: 20}}>
          <EvilIcons name="search" size={24} color="#000" />
        </View>
        <TextInput
          style={{
            width: '90%',
            backgroundColor: 'rgb(228 228 231)',
            paddingLeft: 40,
            borderRadius: 8,
            padding: 2,
          }}
          placeholder="Search"
        />
        <View style={{marginLeft: 'auto'}}>
          <Feather name="map-pin" size={24} color="#000" />
        </View>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={SearchData}
        numColumns={3}
        ListFooterComponent={
          <View style={{backgroundColor: '#fff', height: 50}}></View>
        }
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search_open', {trip: item});
            }}
            style={{marginRight: 2, flex: 1}}>
            <Animatable.Image
              animation="fadeInUp"
              delay={DURATION + 100 * index}
              style={{width: 130, height: 150}}
              source={{uri: item.Image}}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
