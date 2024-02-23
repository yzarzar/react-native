import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_MEMBERS = gql`
  query {
    getAllMembers {
        id
        email
    }
  }
`;

export default function MyApp() {

    const { loading, error, data } = useQuery(GET_ALL_MEMBERS);
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text style={{paddingTop: 20}}>Error: {error.message}</Text>;

  return (
    <FlatList
      data={data.getAllMembers}
      renderItem={({ item }) => (
        <Text>{item.id}: {item.email}</Text>
      )}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
