import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Posts_Navbar from './Posts_Navbar';
import {useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';

export default function Posts() {
  const {PostsData} = useSelector(state => state.user);
  const DURATION = 400;
  return (
    <View>
      <Posts_Navbar />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 10,
        }}>
        {PostsData &&
          PostsData.map((item, index) => (
            <Animatable.View
              animation="fadeInUp"
              delay={DURATION + 100 * index}
              key={index}>
              <Image
                resizeMode="cover"
                style={{width: 130.9, height: 200}}
                source={{uri: item.Image}}
              />
            </Animatable.View>
          ))}
        <View style={{marginTop: 20, paddingLeft: 10, paddingRight: 10}}>
          <Text style={{color: '#000', fontWeight: 500}}>
            Complete your profile
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'green', fontSize: 13}}>3 of</Text>
            <Text style={{color: 'green', fontSize: 13}}> 4 </Text>
            <Text>Complete</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
