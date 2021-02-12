import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default function PlayScreen({navigation}){

    return (
        <View style={styles.viewBox}>
            <View  style={styles.viewPlay}>      
                {/* rock */}
                <TouchableOpacity style={styles.rockBox} onPress={()=>navigation.navigate('Result', {yourPlay: 'Rock'})}>
                    <Image source={require('../assets/rock-up.png')} style={styles.image}/>
                    <Text style={styles.text}>Rock</Text>
                </TouchableOpacity>
                {/* paper */}
                <TouchableOpacity style={styles.paperBox} onPress={()=>navigation.navigate('Result', {yourPlay: 'Paper'})}>
                    <Image source={require('../assets/paper-up.png')} style={styles.image}/>
                    <Text style={styles.text}>Paper</Text>
                </TouchableOpacity>
                {/* scissor */}
                <TouchableOpacity style={styles.scissorBox} onPress={()=>navigation.navigate('Result', {yourPlay: 'Scissor'})}>
                    <Image source={require('../assets/scissor-up.png')} style={styles.image}/>
                    <Text style={styles.text}>Scissor</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    paperBox: {
        backgroundColor: '#02F87D',
        alignItems: "center",
        padding: 10, 
        borderRadius: 10
    },
    rockBox: {
        padding:10,
        backgroundColor: '#02F87D',
        alignItems: "center",
        borderRadius: 10,
        top: -10        
    },
    scissorBox: {
        padding: 10,
        backgroundColor: '#02F87D',
        alignItems: "center",
        borderRadius: 10,
        top: 10
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    },
    viewBox: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#0A200C',
    },
    viewPlay: {
        alignItems: "center",
        // top: 10
    },
    image: {
        height: 150,
        width: 150    
    },
});