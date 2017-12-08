import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.center}>
                <TextInput style={styles.textInput}
                    placeholder="Email"
                />
                <TextInput style={styles.textInput}
                    placeholder="Password"
                />
                <Button
                    title="Login"
                    onPress={() => this.props.login()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    'center': {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    'textInput': {
        width: 300
    }
})
