import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import SingleReel from '../SingleReel';
import {useSelector} from 'react-redux';
export default function ReelsComponent() {
  const {ReelsData} = useSelector(state => state.user);
  const windowWidth = Dimensions.get('window').width;
  const windowheight = Dimensions.get('window').height;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };
  const videoRef = useRef(null);

  const onBuffer = buffer => {
    console.log('buffring', buffer);
  };
  const onError = error => {
    console.log('error', error);
  };
  const [mute, setMute] = useState(false);
  return (
    <View
      style={{
        width: windowWidth,
        height: windowheight,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SwiperFlatList
        vertical={true}
        onChangeIndex={handleChangeIndexValue}
        keyExtractor={(item, index) => index.toString()}
        data={ReelsData}
        renderItem={({item, index}) => (
          <View
            style={{
              width: windowWidth,
              height: windowheight,
              position: 'relative',
            }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setMute(!mute)}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}>
              <Video
                videoRef={videoRef}
                onBuffer={onBuffer}
                onError={onError}
                repeat={true}
                resizeMode="cover"
                paused={currentIndex == index ? false : true}
                source={item.video}
                muted={mute}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                }}
              />
            </TouchableOpacity>
            <Ionic
              name="volume-mute"
              style={{
                fontSize: mute ? 20 : 0,
                color: '#fff',
                position: 'absolute',
                top: windowheight / 2.3,
                left: windowWidth / 2.3,
                backgroundColor: 'rgba(52,52,52,0.5)',
                borderRadius: 100,
                padding: mute ? 15 : 0,
              }}
            />
            <SingleReel item={item} mute={mute} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
