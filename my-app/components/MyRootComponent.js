// components/MyRootComponent.js
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";

const GET_MEMBERS = gql`
  query GetMembers {
    getAllMembers {
      id
      email
    }
  }
`;

export default function MyRootComponent() {
  const { loading, error, data } = useQuery(GET_MEMBERS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text style={styles.container}>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.getAllMembers}
        renderItem={({ item }) => (
          <Text>{item.email}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
