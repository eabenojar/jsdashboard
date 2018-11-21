import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { HttpLink } from "apollo-link-http";

// components
import BookList from "./components/BookList";
import CryptoList from "./components/CryptoList";

import { ApolloProvider } from "react-apollo";

// apollo client setup
const http = new HttpLink({
  uri: "https://api.coinmarketcap.com/v2/listings"
});
const client = new ApolloClient({
  http
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Ninja's Reading List</h1>
        </div>
        <CryptoList />
      </ApolloProvider>
    );
  }
}
export default App;
