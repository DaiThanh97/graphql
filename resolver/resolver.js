const { books, authors } = require('./../data/static');

const resolvers = {
    // QUERY
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.id == args.id),
        authors: () => authors,
        author: (parent, args) => authors.find(auth => auth.id == args.id)
    },
    Book: {
        // Whenever instance of type Book is return
        // it will check the specific field in resolver
        // to do some logic.
        author: (parent, args) => {
            // console.log("PARENT: ", parent);
            // parent is the result of this type
            return authors.find(auth => auth.id == parent.authorId);
        }
    },
    Author: {
        books: (parent, args) => {
            return books.filter(book => book.authorId == parent.id);
        }
    },

    // MUTATION
    Mutation: {
        createAuthor: (parent, args) => {
            authors.push(args);
            return args;
        },
        createBook: (parent, args) => {
            books.push(args);
            return args;
        }
    }
};

module.exports = resolvers;