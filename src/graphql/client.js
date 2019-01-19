import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { API_BASE_URL } from 'config';
import { loadAuthToken } from 'utils/AsyncStorage';

const cache = new InMemoryCache();

const defaults = {};

const httpLink = createHttpLink({
  uri: API_BASE_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = loadAuthToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const stateLink = withClientState({ cache, defaults });

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, authLink.concat(httpLink)]),
  cache,
});

export default client;
