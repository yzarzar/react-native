import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text } from "react-native";
import { useFonts } from "@expo-google-fonts/roboto";

const backgroundImg = require("./assets/images/background.png");
const appIcon = require("./assets/images/app_icon.png");
const welcome = require("./assets/images/welcome.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={backgroundImg} style={styles.background} />
      <View style={{ width: "96%", flex: 1 }}>
        <View style={styles.heroSection}>
          <Image source={appIcon} style={styles.appIcon} />
          <Image source={welcome} style={styles.welcome} />
          <Text style={styles.font}>
            Embark on Limitless Adventures with Our Cutting-Edge Mobile App!
          </Text>
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
    width: "100%",
    height: "50%",
    paddingTop: 14,
    alignItems: "center",
    flexDirection: "column",
  },
  appIcon: {
    width: 170,
    height: 140,
    marginTop: 10,
  },
  welcome: {
    marginTop: 10,
    width: 187,
    height: 99,
  },
  font: {
    marginTop: 5,
    textAlign: "center",
    color: "black",
    fontWeight: "900",
    fontSize: 15,
    fontStyle: 'italic',
    fontFamily: "sans-serif",
  },
});
