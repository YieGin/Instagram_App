import {StyleSheet, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Bottom_Tabs from '../Bottom-Tabs-Navigator/Bottom_Tabs';
import Lottie from 'lottie-react-native';

const Stack = createStackNavigator();
const {width, height} = Dimensions.get('screen');
export default function Main_Navigation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2350);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Lottie
          style={{width: '80%', height}}
          source={require('../../../assets/Loading/3118-instagram.json')}
          autoPlay
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom_Tabs" component={Bottom_Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
