import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Details from './Details';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Welcome' }}
                />
                {/* <Stack.Screen name="Home" component={Home} /> */}
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}