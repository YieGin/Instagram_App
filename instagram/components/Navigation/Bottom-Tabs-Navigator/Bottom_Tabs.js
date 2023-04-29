import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Search from '../Screens/Search/Search';
import Profile from '../Screens/Profile/Profile';
import Reels from '../Screens/Reels/Reels';
import Search_open from '../Screens/Search/Search_open';
import Home from '../Screens/Home';
import Notifications from '../Screens/Home/Notifications';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search_open"
        component={Search_open}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ReelsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Reels}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function Bottom_Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ffffff',
          height: 50,
          zIndex: 100,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Octicons name="home" color={color} size={26} />
          ),
          tabBarLabelStyle: {
            fontSize: 0,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack} // replace the Search component with the SearchStack
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" color={color} size={26} />
          ),
          tabBarLabelStyle: {
            fontSize: 0,
          },
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="play-box-multiple"
              color={color}
              size={26}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 0,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../../assets/Images/1.jpg')}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
              }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 0,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Bottom_Tabs;
