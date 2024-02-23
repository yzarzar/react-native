// App.js
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import MyRootComponent from "./components/MyRootComponent";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MyRootComponent />
    </ApolloProvider>
  );
}
