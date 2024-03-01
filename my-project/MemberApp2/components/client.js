import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://4a36-2400-ac40-60e-4120-291f-2b2c-1017-c85f.ngrok-free.app/graphql" }),
  cache: new InMemoryCache(),
});

export default client;
