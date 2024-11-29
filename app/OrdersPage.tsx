import { StyleSheet, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar, TabBarIndicator } from 'react-native-tab-view'
import PendingOrder from '@/components/PendingOrder'
import CompletedOrder from '@/components/CompletedOrder'

const renderScene = SceneMap({
    first: PendingOrder,
    second: CompletedOrder,
})

export default function OrdersPage() {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0)
    const [routes, setRoutes] = React.useState([
        { key: 'first', title: "Pending" },
        { key: 'second', title: "Completed" }
    ])

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => (
                <TabBar {...props} style={{ backgroundColor: '#fff', borderRadius: 10, marginTop: 30, marginHorizontal: 20 }}
                    indicatorStyle={{ backgroundColor: 'black' }}
                    labelStyle={{ color: 'black' }} inactiveColor='#ece7e4' activeColor='black' />
            )}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
})