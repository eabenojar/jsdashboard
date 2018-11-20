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
  displayBooks() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <Query query={getBooksQuery}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <div>
              <ul id="book-list">Book Stores</ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default BookList;
