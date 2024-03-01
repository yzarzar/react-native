import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

const backgroundImg = require("./assets/images/background.png");
const appIcon = require("./assets/images/wtf.png");
const welcome = require("./assets/images/welcome.png");
const signup = require("./assets/images/signup.png");
const signupform = require("./assets/images/signupform.png");
const login = require("./assets/images/login.png");

export default function App() {
  const handleClick = () => {};

  return (
    <View style={styles.container}>
      <Image source={backgroundImg} style={styles.background} />
      <View style={{ width: "96%" }}>
        <View style={styles.heroSection}>
          <Image source={appIcon} style={styles.appIcon} />
          <Image source={welcome} style={styles.welcome} />
          <Text style={styles.font}>
            Embark on Limitless Adventures with Our Cutting-Edge Mobile App!
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.formContainer}>
            <Image source={signupform} style={styles.signupformstyle} />
            <View style={styles.inputtext}>
              <TextInput 
              style={styles.input}
              placeholder="Enter your email" />
              <TextInput 
              style={styles.input}
              placeholder="Enter your password" />
            </View>
          </View>
          <TouchableOpacity onPress={handleClick}>
            <Image source={signup} style={styles.signupStyle} />
          </TouchableOpacity>
          <View style={styles.helpstyle1}>
            <Text style={styles.font1}>already have an account? (or)</Text>
            <TouchableOpacity onPress={handleClick}>
              <Text style={styles.font2}> help!</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleClick}>
            <Image source={login} style={styles.signinStyle} />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  heroSection: {
    marginTop: 10,
    width: "100%",
    height: "30.5%",
    alignItems: "center",
    flexDirection: "column",
  },
  appIcon: {
    width: 170,
    height: 110,
    marginTop: 10,
  },
  welcome: {
    width: 294,
    height: 80,
  },
  font: {
    textAlign: "center",
    color: "#853801",
    fontWeight: "900",
    fontSize: 16.5,
    fontStyle: "italic",
    fontFamily: "serif",
    textShadowOffset: { width: 1.1, height: 1.1 },
    textShadowRadius: 2,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
  },
  font1: {
    textAlign: "center",
    color: "#853801",
    fontSize: 10,
    fontStyle: "italic",
    fontFamily: "serif",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    marginTop: 2,
  },
  font2: {
    textAlign: "center",
    color: "blue",
    fontWeight: "500",
    fontSize: 11,
    fontStyle: "italic",
    fontFamily: "serif",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    marginTop: 2,
    textDecorationLine: "underline",
  },
  signupStyle: {
    width: 230,
    height: 48,
    resizeMode: "cover",
    borderRadius: 40,
    marginBottom: 10,
  },
  signupformstyle: {
    width: 270,
    height: 210,
    marginTop: 10,
    position: "relative",
  },
  body: {
    height: "100%",
    alignItems: "center",
  },
  signinStyle: {
    width: 170,
    height: 55,
    resizeMode: "cover",
    borderRadius: 20,
  },
  helpstyle: {
    width: 23,
    height: 23,
    alignSelf: "flex-end",
    marginLeft: 5,
  },
  helpstyle1: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
  },
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  inputtext: {
    color: "black",
    position: "absolute",
    width: 270,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  input: {
    padding: 10,
    height: 50,
    width: 220,
    borderWidth: 3,
    borderColor: "#654559",
    color: "#FF7300",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    margin: 8,
    textAlign: "center",
    fontWeight: "800",
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "serif",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    marginTop: 2,
  },
});
