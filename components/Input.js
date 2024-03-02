import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Input({
  placeholder,
  type,
  max,
  min,
  name,
  value,
  onchange,

  error,
  iserror,
}) {
  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          marginLeft: 5,
          marginBottom: 5,
        }}
      >
        {name}
      </Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={type}
        maxLength={max}
        style={[
          styles.input,
          iserror && {
            borderColor: "red",
            borderWidth: 3,
          },
        ]}
        value={value}
        onChangeText={(e) => {
          if (name == "Phone number") {
            onchange(e);

            return;
          }
          let inputNumber = e.replace(/\D/g, "");

          inputNumber = Number(inputNumber);

          inputNumber = inputNumber.toLocaleString();

          onchange(inputNumber);
        }}
      ></TextInput>
      <Text
        style={{
          marginLeft: 5,
          marginBottom: 10,
          color: "#FF6347",
        }}
      >
        {error}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 9,
    backgroundColor: "white",
    borderRadius: 20,
    // alignSelf: "center",
  },
});
