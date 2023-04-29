import {StyleSheet, Text, Image, View, Dimensions} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Share from '../../../../../assets/svgs/Share.svg';
import Save from '../../../../../assets/svgs/Save.svg';
const {width, height} = Dimensions.get('screen');
export default function Home_List({Card}) {
  return (
    <View style={{flex: 1, paddingBottom: 10}}>
      {Card &&
        Card.map((Item, index) => {
          return (
            <View key={index} style={{marginTop: 10, paddingBottom: 10}}>
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
                    source={Item[0]}
                    style={{width: 35, height: 35, borderRadius: 50}}
                  />
                </View>
                <Text style={{color: '#000', fontWeight: 400}}>{Item[1]}</Text>
                <Text>{Item[2]}</Text>
                <View style={{marginLeft: 'auto'}}>
                  <Entypo name="dots-three-vertical" size={14} color="black" />
                </View>
              </View>
              <View style={{marginTop: 5}}>
                <Image
                  resizeMode="contain"
                  source={Item[3]}
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
                <Text style={{color: '#000', fontWeight: 700}}>{Item[4]}</Text>
                <Text style={{color: '#000', fontWeight: 400}}>{Item[5]}</Text>
              </View>
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({});
