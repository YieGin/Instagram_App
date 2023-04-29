import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Share from '../../../../assets/svgs/Share.svg';
import Save from '../../../../assets/svgs/Save.svg';
const {width, height} = Dimensions.get('screen');

export default function Search_open({navigation, route}) {
  const {trip} = route.params;
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 35,
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          flexDirection: 'row',
          paddingTop: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={25} color="#000" />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 'auto',
            color: 'rgb(2 132 199)',
            fontWeight: 600,
          }}>
          Follow
        </Text>
      </View>
      <ScrollView style={{marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              borderRadius: 50,
              marginRight: 10,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={{uri: trip.Profile}}
              style={{width: 35, height: 35, borderRadius: 50}}
            />
          </View>
          <Text style={{color: '#000', fontWeight: 400}}>{trip.name}</Text>
          <Text>{trip.date}</Text>
          <View style={{marginLeft: 'auto'}}>
            <Entypo name="dots-three-vertical" size={14} color="black" />
          </View>
        </View>
        <View style={{marginTop: 5}}>
          <Image
            resizeMode="cover"
            source={{uri: trip.Image}}
            style={{width, height: 500}}
          />
        </View>
        <View style={{paddingLeft: 10, paddingRight: 10, rowGap: 5}}>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 15,
              marginTop: 10,
            }}>
            <AntDesign name="hearto" size={25} color="#000" />
            <Share size={30} color={'#000'} />
            <View style={{marginLeft: 'auto'}}>
              <Save size={30} color={'#000'} />
            </View>
          </View>
          <Text style={{color: '#000', fontWeight: 700}}>{trip.likes}</Text>
          <Text style={{color: '#000', fontWeight: 400, paddingBottom: 100}}>
            {trip.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
