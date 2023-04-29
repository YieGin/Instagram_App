import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
export default function SingleReel({item}) {
  const windowWidth = Dimensions.get('window').width;
  const [like, setLike] = useState(item.isLike);

  return (
    <>
      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          zIndex: 1,
          bottom: 80,
          padding: 10,
        }}>
        <View>
          <TouchableOpacity style={{width: 150}}>
            <View
              style={{width: 100, flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: '#fff',
                  margin: 10,
                }}>
                <Image
                  source={{uri: item.postProfile}}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text
                numberOfLines={1}
                style={{color: '#fff', fontSize: 16, width: 200}}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
          <Text
            numberOfLines={1}
            style={{
              color: '#fff',
              fontSize: 14,
              marginHorizontal: 10,
              width: '85%',
            }}>
            {item.description}
          </Text>
        </View>
        <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
          <Ionic
            name="ios-musical-note"
            style={{color: '#fff', fontSize: 16}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
            }}>
            Original Audio
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 80,
          right: 0,
          zIndex: 1,
        }}>
        <TouchableOpacity onPress={() => setLike(!like)} style={{padding: 10}}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{color: like ? 'red' : 'white', fontSize: 25}}
          />
          <Text style={{color: '#fff', fontSize: 12}}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Ionic
            name="ios-chatbubble-outline"
            style={{color: '#fff', fontSize: 25}}
          />
          <Text style={{color: '#fff', fontSize: 12}}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Ionic
            name="paper-plane-outline"
            style={{color: 'white', fontSize: 25}}
          />
          <Text style={{color: '#fff', fontSize: 12}}>{item.share}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Feather
            name="more-vertical"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#fff',
            margin: 10,
          }}>
          <Image
            source={{uri: item.postProfile}}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
              resizeMode: 'cover',
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
