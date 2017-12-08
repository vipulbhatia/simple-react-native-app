import React from 'react';
import { View, Text } from 'react-native';

export default class About extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'About'
    }

    render() {
        return (
            <View><Text>About Screen</Text></View>
        )
    }
}
