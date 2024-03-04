import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screen1 from './screen/screen1';
import screen2 from './screen/screen2'

const stack = createNativeStackNavigator();

export default function app()
{
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name='1'
          component={screen1}
          options={{headerShown: false}}
        ></stack.Screen>
        <stack.Screen
          name='2'
          component={screen2}
          options={{headerShown: false}}
        ></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  )
}