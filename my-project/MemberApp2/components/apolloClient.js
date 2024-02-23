import React, { useEffect, useState } from "react";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "../App";
import { AsyncStorage } from "react-native";
import { AppLoading } from 'expo';
import { MemberScreen } from "./MemberScreen";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

const apolloClient = () => {
  const [loadingCache, setLoadingCache] = useState(true);

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
  }, []);

  if (loadingCache) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={client}>
      <App />
      <MemberScreen client={client}/>
    </ApolloProvider>
  );
};

export default apolloClient;
