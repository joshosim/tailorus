import React from 'react'
import Feed from '../Feed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NavigationContainer } from '@react-navigation/native'
import FeedDetails from '../FeedDetails'
import Settings from './Settings'
import { Ionicons } from '@expo/vector-icons'
import Profile from '../Profile'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tabs = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()

export function HomeStackNavigator() {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name='TabsGroup' component={TabsGroup} />
            <HomeStack.Screen
                name="FeedDetails"
                component={FeedDetails}
                options={{
                    presentation: "modal",
                }}
            />
        </HomeStack.Navigator>
    )
}

function TabsGroup() {
    return (
        <Tabs.Navigator screenOptions={({ route, navigation }) => ({

            tabBarIcon: ({ color, focused, size }) => {
                let iconName: any;
                if (route.name === 'Feed') {
                    iconName = focused ? 'home' : 'home-outline'
                }
                if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline'
                }
                if (route.name === 'Settings') {
                    iconName = focused ? 'settings' : 'settings-outline'
                }
                return <Ionicons name={iconName} color={color} size={size} />
            },
            headerShown: false
        })}>
            <Tabs.Screen name='Feed' component={Feed}
            />
            <Tabs.Screen name='Profile' component={Profile}
            />
            <Tabs.Screen name='Settings' component={Settings}
            />
        </Tabs.Navigator >
    )
}

export default function Navigation() {
    return (
        <NavigationContainer independent={true}>
            <HomeStackNavigator />
        </NavigationContainer>
    )
}
