import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default function PlayScreen(){
    return (
        <View style={styles.viewBox}>
            {/* exit */}
            <View style={styles.exitView}>
                <TouchableOpacity style={styles.exitBox}>
                    <Text style={styles.exitText}>{'<'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewPlay}>        
                {/* rock */}
                <TouchableOpacity style={styles.rockBox}>
                    <Image source={require('../assets/rock-up.png')} style={styles.image}/>
                    <Text style={styles.text}>Rock</Text>
                </TouchableOpacity>
                {/* paper */}
                <TouchableOpacity style={styles.paperBox}>
                    <Image source={require('../assets/paper-up.png')} style={styles.image}/>
                    <Text style={styles.text}>Paper</Text>
                </TouchableOpacity>
                {/* scissor */}
                <TouchableOpacity style={styles.scissorBox}>
                    <Image source={require('../assets/scissor-up.png')} style={styles.image}/>
                    <Text style={styles.text}>Scissor</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    exitBox: {
        alignItems: 'center',
        backgroundColor: '#02F87D',
        paddingHorizontal: 20,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 5
    },
    exitText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    exitView: {
        width: 80,
        top: -20
    },
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
        top: 10
    },
    image: {
        height: 160,
        width: 160    
    },
});