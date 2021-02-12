import React from 'react';
// import PlayScreen from './PlayScreen';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

export default function WelcomeScreen({navigation}) {

    return (
        <View style={styles.buttonView}>
            {/* <Image style={styles.image} source={require("../assets/RPS.png")}></Image> */}
             {/* play button */}
            <TouchableOpacity style={styles.playTouch} 
                              onPress={()=>navigation.navigate('Play')}>
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
        paddingHorizontal: 10,
        // backgroundImage: "../assets/RPS.png"
    },
    exitTouch: {
        alignItems: "center",
        backgroundColor: '#02F87D',
        padding: 10,
        top: 10,
        borderRadius: 10
    },
    image:{
        flex: 1,
        resizeMode: 'cover'
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
