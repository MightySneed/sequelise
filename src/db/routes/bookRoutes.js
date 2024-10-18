const {Router} = require("express")

const bookRouter =  Router();


// import a function to add a book =addBook.js
const addBook = require("../controlers/addBook");
// import a function to list all books =listAllBooks.js
const listBooks = require("../controlers/listAllBooks");
// import a function to update the author name on any specific book = updateAuthor.js
const upAuthor = require("../controlers/updateAuthor");
// import a function to udpate the genre of a book = updateGenre.js
const upGenre = require("../controlers/updateGenre");
// import a function to delete a book = deleteBook.js
const deleteBook = require("../controlers/deleteBook");
// import a function to list the details of an individual book =getBook.js
const getBook = require("../controlers/getBook");
// import a function to delete all books = deleteAllBooks.js
const deleteAll = require("../controlers/deleteAllBooks");


bookRouter.post("/addBook", addBook);
bookRouter.get("/listAllBooks", listBooks);
bookRouter.put("/updateAuthor", upAuthor);
bookRouter.put("/updateGenre", upGenre);
bookRouter.delete("/deleteBook", deleteBook);
bookRouter.delete("/deleteAllBooks", deleteAll);
bookRouter.get("/getBook", getBook);

module.exports = bookRouter;