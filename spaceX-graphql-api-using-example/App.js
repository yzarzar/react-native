import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import client from "./src/client";
import { ApolloProvider } from "@apollo/client";
import SpaceXList from "./src/SpaceXList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ApolloProvider client={client}>
        <SpaceXList/>
      </ApolloProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});
