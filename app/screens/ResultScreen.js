import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ResultScreen({route, navigation}){
    const {yourPlay} = route.params;

    return (
        <View style={styles.buttonView}>
            {/* <Text></Text> */}
            {/* play again */}
            <View >
                <TouchableOpacity style={styles.buttonPlay} onPress={()=>navigation.navigate('Play')}>
                    <Text style={styles.buttonText}>Play Again</Text>
                </TouchableOpacity>
                {/* Home */}
                <TouchableOpacity style={styles.buttonHome} onPress={()=>navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
                {/* Exit */}
                <TouchableOpacity style={styles.buttonExit}>
                    <Text style={styles.buttonText}>Exit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonExit:{
        alignItems: "center",
        backgroundColor: '#02F87D',
        top: 10,
        padding: 10,
        borderRadius: 10,
    },
    buttonHome:{
        alignItems: "center",
        backgroundColor: '#02F87D',
        padding: 10,
        borderRadius: 10,
    },
    buttonPlay:{
        alignItems: "center",
        backgroundColor: '#02F87D',
        top: -10,
        padding: 10,
        borderRadius: 10,
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
});