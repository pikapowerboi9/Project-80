import React, { Component } from 'react';
import { Alert, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export default class DailyPicScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Daily Pic Screen</Text>
            </View>

            <View style={styles.conyainer}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground 
                source={require('../assets/star-background.jpg')} style={styles.backgroundImage}>
                    <Text style={styles.routeText}>Astronomy Picture of the Day</Text>
                    <Text style={styles.titleText}> {this.setState.apod.title} </Text>
                    <TouchableOpacity style={styles.listConatiner}
                    onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't Load Page, err"))}
                    >
                        <View style={styles.iconContainer}>
                            <Image source={require("../assets/player-VideoPlaybackQuality.png")} style={{width:50, height: 50}}></Image>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                </ImageBackground>
            </View>
        )
    }
}

getAPOD = () => {
    axios
        .get("https://api.nasa.gov/planetary/apod?api_key=pYGggtLfU1Ts4c41NE3QWWKtRIpK3Xl0rayPUQbu")
        .then(response => {
            this.setState({ apod: response.data })

        })
        .catch(error => {
            Alert.Alert(error.message)
        })
}