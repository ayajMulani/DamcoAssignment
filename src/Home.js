import React, { useState } from "react"
import { View, Button, TextInput } from "react-native"
import ImagePicker from 'react-native-image-crop-picker';

const Home = ({ navigation }) => {
  const [textName, setText] = useState("")
  const tackPhoto = () => {

    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      navigation.navigate('Details', { imgPath: image.path, textName: textName, })
    });

  }
  return (
    <View style={{ flex: 1, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{
          color: 'black',
          borderColor: 'black',
          borderWidth: 1,
          height: 40,
          minWidth: 100,
          backgroundColor: "white",
          marginBottom: 20,
          padding: 5
        }}
        onChangeText={text => setText(text)}
        value={textName}
      />

      <Button
        title="Submit"
        disabled={textName.length < 1}
        onPress={tackPhoto}
      />
    </View>
  );
};


export default Home;