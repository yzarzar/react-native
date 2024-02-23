import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { gql, useQuery } from "@apollo/client";
import Loading from "./Loading";

const GET_ALL_MEMBERS = gql`
  query GetAllMembers {
    getAllMembers {
      id
      email
      password
    }
  }
`;

export class MemberScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      members: []
    };
  }

  fetchMembers = async () => {
    try {
      const response = await this.props.client.query({
        query: GET_ALL_MEMBERS,
      });
      this.setState({
        loading: false,
        members: response.data.getAllMembers,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  };

  componentDidMount() {
    this.fetchMembers();
  }

  render() {
    const { loading, error, members } = this.state;

    if (loading) return <Loading />;
    if (error) return <Text>Error: {error}</Text>;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card1}>
          {members.map((member) => (
            <View key={member.id} style={styles.card}>
              <Text
                style={{ fontWeight: "bold", fontSize: 14, color: "#4E252B" }}
              >
                {member.email}
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 12, color: "grey" }}>
                {member.password}
              </Text>
            </View>
          ))}
          <View style={styles.icon}>
            <FontAwesome name="trash" size={20} color="red" />
          </View>
          <View style={styles.icon}>
            <FontAwesome name="gear" size={20} color="green" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2DCE8",
    alignItems: "center",
    paddingTop: 15,
  },
  card1: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 320,
    height: 60,
    borderRadius: 5,
    paddingHorizontal: 10,
    shadowColor: "black",
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    width: 40,
  },
  card: {
    width: 245,
    justifyContent: "center",
  },
});
