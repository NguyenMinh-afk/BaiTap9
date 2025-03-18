import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from '../contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';

// Import các màn hình
import SignInScreen from '../screens/SignIn/index';
import SignUpScreen from '../screens/SignUp/index';
import ForgotPasswordScreen from '../screens/ForgotPassword/index';
import HomeScreen from '../screens/Home/index';
import ProfileScreen from '../screens/Profile/index';
import FoodDetailScreen from '../screens/FoodDetail/index';
import EditProfileScreen from '../screens/EditProfile/index';

// Auth Stack
const AuthStack = createStackNavigator();
const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

// Main Tab Navigator
const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <MainTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home-outline'; // Biểu tượng cho Home
        } else if (route.name === 'Profile') {
          iconName = 'person-outline'; // Biểu tượng cho Profile
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007bff', // Màu icon khi tab được chọn
      tabBarInactiveTintColor: '#666', // Màu icon khi tab không được chọn
    })}
  >
    <MainTab.Screen name="Home" component={HomeScreen} />
    <MainTab.Screen name="Profile" component={ProfileScreen} />
  </MainTab.Navigator>
);

// Main Stack Navigator
const MainStack = createStackNavigator();
const MainStackNavigator = () => (
  <MainStack.Navigator initialRouteName="MainTabs" options={{ headerShown: false }}>
    <MainStack.Screen name="MainTabs" component={MainTabNavigator} options={{ headerShown: false }} />
    <MainStack.Screen name="FoodDetail" component={FoodDetailScreen} />
    <MainStack.Screen name="EditProfile" component={EditProfileScreen} />
  </MainStack.Navigator>
);

// Root Router
const RootRouter = () => {
  const { isLoggedIn } = useContext(AuthContext);

  try {
    return (
      <NavigationContainer>
        {isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    );
  } catch (error) {
    console.error('Error in RootRouter:', error);
    return <Text>Error occurred in navigation!</Text>;
  }
};


export default RootRouter;
