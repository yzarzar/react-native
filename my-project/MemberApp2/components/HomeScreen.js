import * as React from "react";
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={{ paddingBottom: 10, fontSize: 15, fontWeight: "bold" }}>
            Register Form
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            // keyboardType="text"
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            // keyboardType="text"
          ></TextInput>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("The button pressed")}
        >
          <Text style={styles.text}>Add me</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEEFE7",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    width: 300,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 10,
    height: 40,
    width: 200,
    borderWidth: 0.3,
    borderColor: "black",
    color: "#2B5D4B",
    borderRadius: 5,
    margin: 5,
  },
  form: {
    height: 170,
    width: 250,
    backgroundColor: "#E6D8D8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginBottom: 9,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 95,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#008CFA",
  },
  text: {
    fontSize: 13,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
