import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "https://api.m3o.com/v1/answer/Question",
    cache: new InMemoryCache(),
});

export default apolloClient;