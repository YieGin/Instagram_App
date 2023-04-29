import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Share from '../../../../../assets/svgs/Share.svg';
import Save from '../../../../../assets/svgs/Save.svg';
import Video from 'react-native-video';
import Mute from '../../../../../assets/svgs/mute.svg';
import UnMute from '../../../../../assets/svgs/unmute.svg';

const {width, height} = Dimensions.get('screen');
export default function Home_Video_List({Card}) {
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  const handleMuteUnmute = () => {
    setMuted(!muted);
  };
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
                  source={Item[3]}
                  style={{width: '100%', height: 480, position: 'absolute'}}
                />
                <Video
                  resizeMode={'cover'}
                  source={Item[4]}
                  style={{width: '100%', height: 480}}
                  paused={paused}
                  muted={muted}
                />
                <TouchableOpacity
                  style={{position: 'absolute', bottom: 20, left: 10}}
                  onPress={handlePlayPause}>
                  <Ionicons
                    name={paused ? 'play' : 'pause'}
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{position: 'absolute', bottom: 20, right: 10}}
                  onPress={handleMuteUnmute}>
                  {muted ? (
                    <Mute size={24} color="red" />
                  ) : (
                    <UnMute size={24} color="red" />
                  )}
                </TouchableOpacity>
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
                <Text style={{color: '#000', fontWeight: 700}}>{Item[5]}</Text>
                <Text style={{color: '#000', fontWeight: 400}}>{Item[6]}</Text>
              </View>
            </View>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({});
