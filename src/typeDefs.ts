// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String!
    publisedYear: Int!
    author: Author
  }

  # This "Author" type defines the queryable fields for every book in our data source.
  type Author {
    id: ID!
    name: String!
    bookIds: [ID]!
    books: [Book]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  # case, the "authors" query returns an array of zero or more Authors (defined above).

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addBook(title: String!, publisedYear: Int!, authorId: Int!): Book!
  }
`;