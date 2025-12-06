// static data for books and authors
let books = [
  {
    id: 1,
    title: 'The Awakening',
    publisedYear: 2021,
		authorId: 1
  },
  {
    id: 2,
    title: 'City of Glass',
    publisedYear: 2025,
		authorId: 2
  },
  {
    id: 3,
    title: 'Fall in Love',
    publisedYear: 2024,
		authorId: 2
  },
];

const authors = [
  {
    id: 1,
    name: 'Kate Chopin',
		bookIds: [1]
  },
  {
    id: 2,
    name: 'Paul Auster',
		bookIds: [2,3]
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
// This resolver retrieves authors from the "authors" array above.

export const resolvers = {
	// To make the relation between data
	Book: {
		author: (parent) => {
			// console.log(parent)
			return authors.find(d => d.id === parent.authorId)
		}
	},
	Author: {
		books: (parent) => {
			return books.filter(d => parent.bookIds.includes(d.id))
		}
	},
	// to fetch the data using querry
  Query: {
    books: () => books,
    authors: () => authors
  },
	Mutation: {
		addBook: (parent, args) => {
			console.log(args)
			const newBook = {
				id: books.length + 1,
				title: args.title,
				publisedYear: args.publisedYear,
				authorId: args.authorId
			}
			books.push(newBook)
			return newBook
		}
	}
};
