/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button, Alert } from "react-native";

const Signin = () => {
  const [checkBox, setCheckBox] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#b3ecff',
        alignItems: "center"
      }}>
      <View
        style={{
          backgroundColor: '#fffff',
          alignItems: "center"
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'black'
          }}> SIGN IN TO YOUR ACCOUNT </Text>
        <View
          style={{
            marginTop: 20,
            width: 200,
            backgroundColor: '#dbdbdb'
          }}>
          <TextInput
            placeholder="abc@gmail.com"
          />
        </View>

        <View
          style={{
            marginTop: 20,
            width: 200,
            backgroundColor: '#dbdbdb'
          }}>
          <TextInput
            placeholder="******"
          />
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row'
          }}>
          <CheckBox
            value={checkBox}
            onChange={() => setCheckBox(!checkBox)} />
          <Text
            style={{

              fontSize: 20,
              fontWeight: '50',
              color: 'black'
            }}> Keep me sign in </Text>
        </View>
        <Button
          style={{
            marginTop: 22,
          }}
          title="Press me"
          onPress={() => Alert.alert('Cannot press this one')}

        />
      </View>
    </View>

  )
}
export default Signin;
