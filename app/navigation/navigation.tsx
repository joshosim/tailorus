import React, { useEffect } from 'react'
import Feed from '../Feed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import FeedDetails from '../FeedDetails'
import Settings from './Settings'
import { Ionicons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FeedType from '../FeedType'
import Measurement from '../Measurement'
import Payment from '../Payment'
import PaymentSuccess from '../PaymentSuccess'
import StartPage from '../StartPage'
import OrdersPage from '../OrdersPage'
import ReviewsPage from '../ReviewsPage'
import Auth from '../Auth'

const Tabs = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()

export function HomeStackNavigator() {

    return (
        <HomeStack.Navigator initialRouteName='Auth' screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen
                name="Auth"
                component={Auth}
                options={{
                    presentation: "modal",
                }}
            />
            <HomeStack.Screen
                name="StartPage"
                component={StartPage}
                options={{
                    presentation: "modal",
                }}
            />
            <HomeStack.Screen name='TabsGroup' component={TabsGroup} />
            <HomeStack.Screen
                name="FeedDetails"
                component={FeedDetails}
                options={{
                    presentation: "modal",
                }}
            />
            <HomeStack.Screen
                name="FeedType"
                component={FeedType}
                options={{
                    presentation: "modal",
                }}
            />
            <HomeStack.Screen
                name="Measurement"
                component={Measurement}
                options={{
                    presentation: "modal",
                }}
            />
            <HomeStack.Screen
                name="Payment"
                component={Payment}
                options={{
                    presentation: "modal",
                }}
            />
            <HomeStack.Screen
                name="PaymentSuccess"
                component={PaymentSuccess}
                options={{
                    presentation: "modal",
                }}
            />
            <HomeStack.Screen
                name="Settings"
                component={Settings}
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
                if (route.name === 'Orders') {
                    iconName = focused ? 'notifications' : 'notifications-outline'
                }
                if (route.name === 'Reviews') {
                    iconName = focused ? 'information' : 'information-outline'
                }

                return <Ionicons name={iconName} color={color} size={size} />
            },
            headerShown: false
        })}>
            <Tabs.Screen name='Feed' component={Feed}
            />
            <Tabs.Screen name='Orders' component={OrdersPage}
            />
            <Tabs.Screen name='Reviews' component={ReviewsPage}
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
