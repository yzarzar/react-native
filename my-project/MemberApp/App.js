import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import MemberScreen from "./components/MemberScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Member") {
              iconName = focused ? "list" : "list";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { position: 'absolute', height: 60},
          tabBarBackground: () => (
            <BlurView tint="light" intensity={400} style={StyleSheet.absoluteFill} />
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Member" component={MemberScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
