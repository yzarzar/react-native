import React from "react";
import { FlatList, Text, View, StyleSheet, Image } from "react-native";
import { gql, useQuery } from "@apollo/client";

const SPACE_QUERY = gql`
  query Query {
    company {
      ceo
      cto
      cto_propulsion
      employees
      founder
      founded
      launch_sites
    }
  }
`;

export default function JobList() {
  const { data, loading, error } = useQuery(SPACE_QUERY);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Loading Data From SpaceX...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={[styles.infoText, styles.errorText]}>{error.message}</Text>
      </View>
    );
  }

  const companyData = Object.entries(data.company).map(([key, value]) => ({
    key,
    value,
  }));

  return (
    <FlatList
      style={styles.list}
      data={companyData}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.spaceInfo}>
            <Text>{item.key}</Text>
            <Text>{item.value}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  spaceInfo: {
    flex: 1,
    padding: 10,
  },
  card: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    margin: 4,
    padding: 8,
  },
  infoText: {
    fontSize: 20,
    color: "#333",
    textAlign: "center",
  },
});
