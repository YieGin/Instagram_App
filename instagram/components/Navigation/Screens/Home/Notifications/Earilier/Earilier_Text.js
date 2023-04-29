import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Earilier_Text({Card}) {
  return (
    <>
      {Card &&
        Card.map((item, index) => (
          <View
            key={index}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={item[0]}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={{fontWeight: 700, color: '#000'}}>{item[1]}</Text>
              <Text style={{fontSize: 13, color: 'rgb(63 63 70)'}}>
                {item[2]}
              </Text>
            </View>
          </View>
        ))}
    </>
  );
}

const styles = StyleSheet.create({});
