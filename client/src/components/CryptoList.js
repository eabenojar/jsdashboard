import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

class CryptoList extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            data {
              name
              symbol
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          console.log("CRYPTO", data);
          return (
            <div>
              <h1>Hello Crypto</h1>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default CryptoList;
