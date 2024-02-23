import { ApolloClient, InMemoryCache } from '@apollo/client';
const BASE_URL = 'https://spacex-production.up.railway.app/';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

export default client;