// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const books = [
    {
        id: 1,
        title: 'The Awakening 1',
        author: 'Kate Chopin',
        publisedYear: 2021
    },
    {
        id: 2,
        title: 'City of Glass',
        author: 'Paul Auster',
        publisedYear: 2025
    },
];
const authors = [
    {
        id: 1,
        name: 'Kate Chopin',
    },
    {
        id: 2,
        name: 'Paul Auster',
    },
];
export const resolvers = {
    Query: {
        books: () => books,
        authors: () => authors
    },
};
