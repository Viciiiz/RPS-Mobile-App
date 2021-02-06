import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

export default function WelcomeScreen(props) {
    return (
        <View style={styles.buttonView}>
             {/* play button */}
            <TouchableOpacity style={styles.playTouch} >
                <Text style={styles.text}>Play</Text>
            </TouchableOpacity>
             {/* setting button */}
            <TouchableOpacity style={styles.settingTouch}>
                <Text style={styles.text}>Settings</Text>
            </TouchableOpacity>
             {/* exit button */}
            <TouchableOpacity style={styles.exitTouch}>
                <Text style={styles.text}>Exit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonView:{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    exitTouch: {
        alignItems: "center",
        backgroundColor: '#02F87D',
        padding: 10,
        top: 10,
        borderRadius: 10
    },
    playTouch: {
        alignItems: "center",
        backgroundColor: '#02F87D',
        padding: 10,
        top: -10,
        borderRadius: 10
    },
    settingTouch: {
        alignItems: "center",
        backgroundColor: '#02F87D',
        padding: 10,
        borderRadius: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});
