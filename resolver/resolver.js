const { books, authors } = require('./../data/static');

const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.id == args.id),
        authors: () => authors,
        author: (parent, args) => authors.find(auth => auth.id == args.id)
    }
};

module.exports = resolvers;