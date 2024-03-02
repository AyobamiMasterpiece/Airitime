import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ children, disabled }) {
  return (
    <View
      style={[
        styles.root,
        {
          backgroundColor: disabled ? "grey" : "white",
        },
      ]}
    >
      <Pressable
        android_ripple={{
          color: "black",

          //   foreground: true,
        }}
        style={styles.btn}
        disabled={disabled}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    borderRadius: 20,
    marginTop: "auto",

    backgroundColor: "white",
    overflow: "hidden",
  },
  btn: {
    alignItems: "center",
    padding: 5,
    // flex: 1,
  },
});
