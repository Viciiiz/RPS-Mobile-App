import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default function ResultScreen(){
    return (
        <View>
            <Text></Text>
            {/* play again */}
            <TouchableOpacity>
                <Text>Play Again</Text>
            </TouchableOpacity>
            {/* Home */}
            <TouchableOpacity>
                <Text>Home</Text>
            </TouchableOpacity>
            {/* Exit */}
            <TouchableOpacity>
                <Text>Exit</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({

});