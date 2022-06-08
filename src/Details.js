import React from "react"
import { View, Text, Button, ImageBackground } from "react-native"

const Details = ({ route, navigation }) => {
    return (
        <ImageBackground
            source={{ uri: route.params.imgPath }}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: "100%", width: "100%" }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>{route.params.textName}</Text>
        </ImageBackground>
    )
}

export default Details