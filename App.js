import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Login from './screens/login';
import Home from './screens/home';
import About from './screens/about';
import { EventEmitter } from 'EventEmitter';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        }
        this.screens = TabNavigator({
            'Home': {
                screen: Home
            },
            'About': {
                screen: About
            }
        })
    }

    login = () => {
        this.setState({ loggedIn: true });
    }

    render() {
        if(this.state.loggedIn) {
            return <this.screens />
        }
        return <Login login={ this.login } />
    }
}
