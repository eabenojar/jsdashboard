import React, { Component } from "react";
import ApolloClient from "apollo-boost";
// components
import BookList from "./components/BookList";
import { ApolloProvider } from "react-apollo";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Ninja's Reading List</h1>
        </div>
        <BookList />
      </ApolloProvider>
    );
  }
}
export default App;
