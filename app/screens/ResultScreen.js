import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default function ResultScreen({route, navigation}){
    // your play
    const {yourPlay} = route.params;
    // random number for computer play
    const rand = Math.random();
    // computer play
    const computerPlay = (num) => {
        if (num < 0.3) return "Rock";
        else if (num < 0.65 && num >= 0.3) return "Paper";
        else return "Scissor";
    }
    // result of the match
    const match = (you, comp) => {
        if (you == "Rock"){
            switch(comp){
                case "Rock": return "Draw";
                case "Paper": return "You Lose...";
                case "Scissor": return "You Win!";
            }
        } else if (you == "Paper"){
            switch(comp){
                case "Rock": return "You Win!";
                case "Paper": return "Draw";
                case "Scissor": return "You Lose...";
            }
        } else {
            switch(comp){
                case "Rock": return "You Loose...";
                case "Paper": return "You Win!";
                case "Scissor": return "Draw";
            }
        }
    }
    

    return (
        <View style={styles.buttonView}>
            <Text style={styles.text}>{"\nYour play:    " + yourPlay + "\n\nComputer:    " + computerPlay(rand) + "\n\n" + match(yourPlay, computerPlay(rand)) + "\n" }</Text>
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
    text: {
        top: -40,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        backgroundColor: 'yellow',
        borderRadius: 50
    },
});