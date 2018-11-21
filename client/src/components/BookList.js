import React, { Component } from "react";
import { gql } from "apollo-boost";
// import gql from "graphql-tag";

import { Query } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
  constructor(props) {
    super(props);
    console.log("CONSTRUCTOR PROPS", this.props);
  }
  render() {
    return (
      <Query query={getBooksQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :</p>;
          console.log("DATA", data);
          return (
            <div>
              <ul id="book-list">
                {data.books.map(book => {
                  return <li key={book.id}>{book.name}</li>;
                })}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default BookList;
