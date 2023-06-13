import {useState, useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Rooms from './pages/Rooms';
import Messages from './pages/Messages';

import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

function LogInSignUp() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, initialRouteName: 'Login'}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function RoomsAndMessages() {
  return (
    <Stack.Navigator
      screenOptions={{
        initialRouteName: 'Rooms',
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: {
          borderBottomWidth: 2,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'orange',
        },
      }}>
      <Stack.Screen name="Rooms" component={Rooms} />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
}

function Router() {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      const userId = user?.uid || '';
      setUserId(userId);
    });
    return () => {
      setUserId('');
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {userId ? (
          <Stack.Screen name="RoomsAndMessages" component={RoomsAndMessages} />
        ) : (
          <Stack.Screen name="LogInSignUp" component={LogInSignUp} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
